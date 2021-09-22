const jsdocApi = require('jsdoc-api');
const jsdocParse = require('jsdoc-parse');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');
const { locations, domains, modules, lambdas } = require('./model.config.js');

module.exports = {
	'baseRepositoryPath': 'https://github.com/jamesTbaker/jbkr/blob/main',
	'generate': async (docBasePath) => {
		// for each location in locations
		locations.forEach((location) => {
			// calculate some paths
			const outPath = path.join(docBasePath, '/docs/', location.section);
			const inPath = path.join(docBasePath, location.in);
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
	'generateTwo': async (docBasePath) => {
		Object.keys(domains).forEach((domainKey) => {
			Object.keys(domains[domainKey]).forEach((domainSectionKey, domainSectionKeyIndex) => {
				module.exports.generateOneSetOfDocs({
					'levelOneTitle': domainKey,
					'levelTwoTitle': domainSectionKey,
					'order': domainSectionKeyIndex + 1,
					'contentConfig': domains[domainKey][domainSectionKey],
					docBasePath,
				});
			});
		});


		// // for each location in locations
		// locations.forEach((location) => {
		// 	// calculate some paths
		// 	const outPath = path.join(docBasePath, '/docs/', location.section);
		// 	const inPath = path.join(docBasePath, location.in);
		// 	const pathPattern = path.join(inPath, '/**/*.[jt]s?(x)');
		// 	// get an array of the files to scan
		// 	const filePaths = glob.sync(pathPattern, {
		// 		'ignore': location.ignore,
		// 	});
		// 	// set up a container for the content we'll generate
		// 	let content = '';
		// 	// for each file to scan
		// 	filePaths.forEach((filePath, filePathIndex) => {
		// 		const jsDocDataIntermediate =
		// 			module.exports.returnJSDocDataIntermediate(filePath);

		// 	});
		// if any scanning results were added to the container
		/* if (content && content.length > 0) {
				// add to the container Docusaurus-relevant frontmatter and
				// and HTML container div for a styling hook
				content = `---
id: "${location.id}-2"
title: "${location.title} 2"
sidebar_label: "${location.title} 2"
sidebar_position: ${location.position}
---

<div class="jsdoc-generated-2">
${content}
</div>
`;
				// write the content to the specified location
				fs.writeFileSync(
					`${outPath}/${location.title} 2.md`,
					content,
				);
			} */

		// });
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
		docBasePath,
	}) => {
		const directoryPath =
			path.join(docBasePath, '/docs/', levelOneTitle);
		let filesToParse = [];
		contentConfig.forEach((contentConfigItem) => {
			const entryDirectory =
				path.join(
					docBasePath,
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
		filesToParse.forEach((filePath, filePathIndex) => {
			const jsDocDataIntermediate =
				module.exports.returnJSDocDataIntermediate(filePath);
			jsDocDataIntermediate.forEach((intermediateObject) => {
				const repoNameAndSlashIndex =
					intermediateObject.meta.path.indexOf('jbkr/') + 5;
				const relativeCodePath = `${intermediateObject.meta.path
					.slice(repoNameAndSlashIndex)}/${intermediateObject.meta.filename}`;
				const absoluteCodePath = `${module.exports.baseRepositoryPath}/${relativeCodePath}`;
				contentJSON.push({
					...intermediateObject,
					relativeCodePath,
					absoluteCodePath,
					'relativeCodePathWithLineNumber':
						`${relativeCodePath}:${intermediateObject.meta.lineno}`,
					'absoluteCodePathWithLineNumber':
						`${absoluteCodePath}#L${intermediateObject.meta.lineno}`,
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
		if (
			functionObject.returns &&
			functionObject.returns[0] &&
			functionObject.returns[0].type &&
			functionObject.returns[0].type.names &&
			functionObject.returns[0].type.names[0]
		) {
			returnStatement = `
<p class="generate-docs function-return">

Returns: \`${functionObject.returns[0].type.names[0]}\`
— ${functionObject.returns[0].description}

</p>`;
		}

		return (`
<section class="generate-docs function">

### ${functionObject.name}

<div class="generate-docs function-description">

${returnStatement}

${functionObject.description}

</div>


<p class="generate-docs source-location">

Source: [${functionObject.relativeCodePathWithLineNumber}](${functionObject.absoluteCodePathWithLineNumber})

</p>
</section>
`);
	},
};
