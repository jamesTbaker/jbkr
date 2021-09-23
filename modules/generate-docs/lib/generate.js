/* eslint-disable no-control-regex */
const jsdocApi = require('jsdoc-api');
const jsdocParse = require('jsdoc-parse');
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');
const {
	locations, domains, modules, lambdas, baseDocsPath, baseRepositoryPath,
} = require('./model.config.js');

module.exports = {

	'generate': async (baseDocSystemPath) => {
		// for each location in locations
		locations.forEach((location) => {
			// calculate some paths
			const outPath = path.join(baseDocSystemPath, '/docs/', location.section);
			const inPath = path.join(baseDocSystemPath, location.in);
			const pathPattern = path.join(inPath, '/**/*.[jt]s?(x)');
			// get an array of the files to scan
			const filePaths = glob.sync(pathPattern, {
				'ignore': location.ignore,
			});
			// set up a container for the content we'll generate
			let content = '';
			// for each file to scan
			filePaths.forEach((filePath, filePathIndex) => {
				// if (filePathIndex === 0) {
				// jsdoc2md.getTemplateData({
				// 	'files': filePath,
				// }).then(console.log);
				// }
				// if (location.id === 'http-client') {
				// 	console.log(filePath);
				// 	console.log(jsdoc2md.renderSync({
				// 		'files': filePath,
				// 	}));
				// }
				// add the scanning results to the container
				content += jsdoc2md.renderSync({
					'files': filePath,
				});
			});
			// if any scanning results were added to the container
			if (content && content.length > 0) {
				// add to the container Docusaurus-relevant frontmatter and
				// and HTML container div for a styling hook
				content = `---
id: "${location.id}"
title: "${location.title}"
sidebar_label: "${location.title}"
sidebar_position: ${location.position}
---

<div class="jsdoc-generated">
${content}
</div>
`;
				// write the content to the specified location
				fs.writeFileSync(
					`${outPath}/${location.title}.md`,
					content,
				);
			}

		});
	},
	'generateTwo': async (baseDocSystemPath) => {
		const removal = await module.exports.removeOldDocs(baseDocSystemPath);
		if (!removal.error) {
			const copy = await module.exports.copyBaseDocs(baseDocSystemPath);
			if (!copy.error) {
				Object.keys(domains).forEach((domainKey) => {
					Object.keys(domains[domainKey])
						.forEach((domainSectionKey, domainSectionKeyIndex) => {
							module.exports.generateOneSetOfDocs({
								'levelOneTitle': domainKey,
								'levelTwoTitle': domainSectionKey,
								'order': domainSectionKeyIndex + 1,
								'contentConfig':
									domains[domainKey][domainSectionKey],
								baseDocSystemPath,
							});
						});
				});

			}


		}
	},
	'removeOldDocs': async (baseDocSystemPath) => {
		try {
			await fs.remove(path.join(baseDocSystemPath, '/docs'));
			return { 'error': false };
		} catch (error) {
			return { error };
		}
	},
	'copyBaseDocs': async (baseDocSystemPath) => {
		try {
			await fs.copy(baseDocsPath, path.join(baseDocSystemPath, '/docs'));
			return { 'error': false };
		} catch (error) {
			return { error };
		}
	},
	'returnJSDocDataRaw': (files) =>
		jsdocApi.explainSync({ files, 'cache': false }),
	'returnJSDocDataIntermediate': (files) => {
		const jsDocData = module.exports.returnJSDocDataRaw(files);
		return jsdocParse(jsDocData);
	},
	'generateOneSetOfDocs': async ({
		levelOneTitle,
		levelTwoTitle,
		order,
		contentConfig,
		baseDocSystemPath,
	}) => {
		const directoryPath =
			path.join(baseDocSystemPath, '/docs/', levelOneTitle);
		let filesToParse = [];
		contentConfig.forEach((contentConfigItem) => {
			const entryDirectory =
				path.join(
					baseDocSystemPath,
					contentConfigItem.parentDirectory,
					contentConfigItem.directory,
				);
			const filePathPattern =
				path.join(entryDirectory, '/**/*.[jt]s?(x)');
			const filePaths = glob.sync(filePathPattern, {
				'ignore': contentConfigItem.ignore,
			});
			filesToParse = [...filesToParse, ...filePaths];
		});
		console.log(filesToParse);
		// set up a container for the content we'll generate
		let contentMarkdown = '';
		const contentJSON = [];
		// for each file to scan
		filesToParse.forEach((filePath) => {
			const jsDocDataIntermediate =
				module.exports.returnJSDocDataIntermediate(filePath);
			jsDocDataIntermediate.forEach((intermediateObject) => {
				const repoNameAndSlashIndex =
					intermediateObject.meta.path.indexOf('jbkr/') + 5;
				const relativeCodePath =
					`${intermediateObject.meta.path
						.slice(repoNameAndSlashIndex)
					}/${intermediateObject.meta.filename}`;
				const absoluteCodePath =
					`${baseRepositoryPath}/${relativeCodePath}`;
				contentJSON.push({
					...intermediateObject,
					relativeCodePath,
					absoluteCodePath,
					'relativeCodePathWithLineNumber':
						`${relativeCodePath}:${intermediateObject.meta.lineno}`,
					'absoluteCodePathWithLineNumber':
						`${absoluteCodePath}#L${intermediateObject
							.meta.lineno}`,
				});
			});
		});
		/* fs.writeFileSync(
			`contentJSON.json`,
			JSON.stringify(contentJSON),
		); */
		// start building the markdown
		contentJSON.forEach((contentObject) => {
			if (contentObject.kind === 'module') {
				contentMarkdown += module.exports.
					returnMarkdownForModuleObject({
						'moduleObject': {
							...contentObject,

						},
					});
			}
			if (
				contentObject.kind === 'constant' &&
				(
					contentObject.params ||
					contentObject.returns
				)
			) {
				contentMarkdown += module.exports.
					returnMarkdownForFunctionObject({
						'functionObject': {
							...contentObject,

						},
					});
			}
		});
		contentMarkdown = `---
id: "${levelOneTitle}-${levelTwoTitle}"
title: "${levelTwoTitle}"
sidebar_label: "${levelTwoTitle}"
sidebar_position: ${order}
---

<div class="generate-docs all-sections">
${contentMarkdown}
</div>
`;
		// write the content to the specified location
		fs.writeFileSync(
			`${directoryPath}/${levelTwoTitle}.md`,
			contentMarkdown,
		);
	},
	'returnMarkdownForModuleObject': ({ moduleObject }) => (`
<section class="generate-docs module">

## ${moduleObject.name}

<div class="generate-docs module-description">

${moduleObject.description}

</div>
<p class="generate-docs source-location">

Source: [${moduleObject.relativeCodePath}](${moduleObject.absoluteCodePath})

</p>
</section>
`),
	'returnMarkdownForFunctionObject': ({ functionObject }) => {
		let returnStatement = '';
		let paramsTable = '';
		let examples = '';
		if (
			functionObject.returns &&
			functionObject.returns[0] &&
			functionObject.returns[0].type &&
			functionObject.returns[0].type.names &&
			functionObject.returns[0].type.names[0]
		) {
			returnStatement = `<p class="generate-docs function-return">\n\n` +
				`Returns: \`${functionObject.returns[0].type.names[0]}\` `;
			if (functionObject.returns[0].description) {
				returnStatement +=
					`— ${functionObject.returns[0].description
						.replace(new RegExp('\n', 'g'), ' ')}\n\n</p>`;
			} else {
				returnStatement += `\n\n</p>`;
			}
		}
		if (
			functionObject.params &&
			functionObject.params[0] &&
			functionObject.params[0].type &&
			functionObject.params[0].type.names &&
			functionObject.params[0].type.names[0]
		) {
			paramsTable +=
				`<div class="generate-docs function-parameters">\n\n` +
				`| Param | Type | Description |\n` +
				`| --- | --- | --- |\n`;
			functionObject.params.forEach((paramObject) => {
				paramsTable += `| ${paramObject.name} | ` +
					`\`${paramObject.type.names[0]}\` | ` +
					`${paramObject.description
						.replace(new RegExp('\n', 'g'), ' ')} |\n`;
			});
			paramsTable += `\n</div>`;
		}
		if (functionObject.examples && functionObject.examples[0]) {
			functionObject.examples.forEach((example) => {
				const languageIDBeginningIndex = example.indexOf(' ') + 1;
				const languageIDEndingIndex = example.indexOf('\n');
				const languageID = example.slice(
					languageIDBeginningIndex,
					languageIDEndingIndex,
				);
				const exampleContent = example.slice(languageIDEndingIndex);
				examples +=
					'<div class="generate-docs function-parameters">\n\n' +
					'```' + languageID + '\n' +
					exampleContent +
					'\n```\n\n' +
					'</div>';
			});
		}

		return (`
<section class="generate-docs function">

### ${functionObject.name}

<div class="generate-docs function-description">

${functionObject.description}

</div>

${paramsTable}

${returnStatement}

${examples}

<p class="generate-docs source-location">

Source: [${functionObject.relativeCodePathWithLineNumber}](${functionObject
				.absoluteCodePathWithLineNumber})

</p>
</section>
`);
	},
};
