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
	'returnJSDocDataRaw': (files) => {
		const jsDocDataRaw = jsdocApi.explainSync({ files, 'cache': false });
		/* fs.writeFileSync(
			`contentRaw.json`,
			JSON.stringify(jsDocDataRaw),
		); */
		return jsDocDataRaw;
	},
	'returnJSDocDataIntermediate': (files) => {
		const jsDocDataIntermediate = jsdocParse(
			module.exports.returnJSDocDataRaw(files),
		);
		/* fs.writeFileSync(
			`contentIntermediate.json`,
			JSON.stringify(jsDocDataIntermediate),
		); */
		return jsDocDataIntermediate;
	},
	'generatePage': async ({
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
		const modules = contentJSON.filter((item) => item.kind === 'module');
		modules.forEach((moduleObject) => {
			moduleObject.members = {
				'types': contentJSON.filter((item) =>
					item.kind === 'typedef' &&
					item.memberof === moduleObject.id,
				),
				'private': contentJSON.filter((item) =>
					item.kind !== 'typedef' &&
					item.scope === 'inner' &&
					item.memberof === moduleObject.id,
				),
				'public': contentJSON.filter((item) =>
					item.kind !== 'typedef' &&
					item.scope === 'static' &&
					item.memberof === moduleObject.id,
				),
			};
		});
		modules.forEach((moduleObject) => {
			contentMarkdown += module.exports.returnModuleContentMarkdown({
				moduleObject,
			});
		});
		contentMarkdown = `---\nid: "${levelOneTitle}-${levelTwoTitle}"\n` +
			`title: "${levelTwoTitle}"\nsidebar_label: "${levelTwoTitle}"\n` +
			`sidebar_position: ${order}\n---\n\n\n` +
			`<div class="generate-docs all-sections">\n\n` +
			`${contentMarkdown}\n\n</div>`;
		// write the content to the specified location
		fs.writeFileSync(
			`${directoryPath}/${levelTwoTitle}.md`,
			contentMarkdown,
		);
	},
	'returnModuleContentMarkdown': ({ moduleObject }) => {
		let moduleMarkdown = `<section class="generate-docs module">\n` +
			`<div class="generate-docs module-name">\n\n` +
			`## ${moduleObject.name}\n\n</div>\n\n` +
			`<div class="generate-docs module-description">\n` +
			`${moduleObject.description}\n` +
			`</div>\n\n` +
			`<p class="generate-docs module-source-location">\n\n` +
			`Source: [${moduleObject.relativeCodePath}](` +
			`${moduleObject.absoluteCodePath})\n\n</p>\n\n`;
		moduleMarkdown += module.exports.returnModuleMembersContentMarkdown({
			'members': moduleObject.members,
		});

		moduleMarkdown += `</section>`;
		return moduleMarkdown;
	},
	'returnModuleMembersContentMarkdown': ({ members }) => {
		let membersMarkdown =
			`<section class="generate-docs module-members">\n`;
		if (members.public && members.public[0]) {
			membersMarkdown += `<div class="generate-docs ` +
				`module-members-group-title">\n\n` +
				`## API\n\n</div>\n\n`;
			members.public.forEach((publicMember) => {
				// this is here in anticipation of future use of other types
				let memberKind = 'function';
				if (memberKind === 'function') {
					membersMarkdown += module.exports
						.returnModuleMemberFunctionContentMarkdown({
							'types': members.types,
							'member': publicMember,
							'memberAccess': 'public',
						});
				}
			});
		}
		if (members.private && members.private[0]) {
			membersMarkdown += `<div class="generate-docs ` +
				`module-members-group-title">\n\n` +
				`## Inner Elements\n\n</div>\n\n`;
			members.private.forEach((privateMember) => {
				// this is here in anticipation of future use of other types
				let memberKind = 'function';
				if (memberKind === 'function') {
					membersMarkdown += module.exports
						.returnModuleMemberFunctionContentMarkdown({
							'types': members.types,
							'member': privateMember,
							'memberAccess': 'private',
						});
				}
			});
		}
		membersMarkdown += `</section>`;
		return membersMarkdown;
	},
	'returnModuleMemberFunctionContentMarkdown': ({
		types, member, memberAccess,
	}) => {
		let functionMarkdown = `<div class="generate-docs function">` +
			`<div class="generate-docs function-title">\n` +
			`<span class="function-title-preface">` +
			`${memberAccess.charAt(0).toUpperCase() + memberAccess.slice(1)}` +
			` : Function : </span>\n\n` +
			`### ${member.name}\n\n</div>\n` +
			`<div class="generate-docs function-description">\n\n` +
			`${member.description}\n\n</div>\n\n`;
		// if either params or returns has something with a defined type
		const elementNames = [];
		member.params.forEach((paramObject) => {
			elementNames.push(paramObject.type.names[0]);
		});
		member.returns.forEach((returnObject) => {
			elementNames.push(returnObject.type.names[0]);
		});
		const typesThisFunction = types.filter((typeObject) =>
			elementNames.includes(typeObject.name));
		if (typesThisFunction && typesThisFunction[0]) {
			functionMarkdown += `#### Type Definitions\n\n`;
			functionMarkdown += module.exports.returnTypesContentMarkdown({
				'types': typesThisFunction,
			});
		}
		if (
			member.params &&
			member.params[0] &&
			member.params[0].type &&
			member.params[0].type.names &&
			member.params[0].type.names[0]
		) {
			functionMarkdown += `#### Parameters\n\n`;
			functionMarkdown += module.exports
				.returnElementsTableContentMarkdown({
					'elements': member.params,
				});
			functionMarkdown += `\n\n`;
		}
		if (
			member.returns &&
			member.returns[0] &&
			member.returns[0].type &&
			member.returns[0].type.names &&
			member.returns[0].type.names[0]
		) {
			functionMarkdown += `#### Return\n\n`;
			functionMarkdown += module.exports
				.returnFunctionReturnContentMarkdown({
					'returnObject': member.returns[0],
				});
			functionMarkdown += `\n\n`;
		}
		if (
			member.examples &&
			member.examples[0]
		) {
			functionMarkdown += `#### Example(s)\n\n`;
			member.examples.forEach((exampleObject) => {
				functionMarkdown += module.exports
					.returnCodeExampleContentMarkdown({ exampleObject });
			});
			functionMarkdown += `\n\n`;
		}
		functionMarkdown +=
			`<p class="generate-docs function-source-location">\n\n` +
			`Source: [${member.relativeCodePathWithLineNumber}](` +
			`${member.absoluteCodePathWithLineNumber})\n\n</p>\n\n` +
			`</div>`;
		return functionMarkdown;
	},
	'returnTypesContentMarkdown': ({ types }) => {
		let typesMarkdown = '';
		types.forEach((typeObject) => {
			typesMarkdown += `##### \`${typeObject.name}\`\n` +
				`${typeObject.description}\n\n`;
			typesMarkdown += module.exports
				.returnElementsTableContentMarkdown({
					'elements': typeObject.properties,
				});
			typesMarkdown += `\n\n`;
		});
		return typesMarkdown;
	},
	'returnElementsTableContentMarkdown': ({ elements }) => {
		let tableMarkdown =
			`<div class="generate-docs function-parameters">\n\n` +
			`| Name | Type | Description |\n` +
			`| --- | --- | --- |\n`;
		elements.forEach((elementObject) => {
			tableMarkdown += `| ${elementObject.name} | ` +
				`\`${elementObject.type.names[0]}\` | ` +
				`${elementObject.description
					.replace(new RegExp('\n', 'g'), ' ')} |\n`;
		});
		tableMarkdown += `\n</div>`;
		return tableMarkdown;
	},
	'returnFunctionReturnContentMarkdown': ({ returnObject }) => {
		let returnStatement = `<p class="generate-docs function-return">\n\n` +
			`Returns: \`${returnObject.type.names[0]}\` `;
		if (returnObject.description) {
			returnStatement +=
				`— ${returnObject.description
					.replace(new RegExp('\n', 'g'), ' ')}\n\n</p>`;
		} else {
			returnStatement += `\n\n</p>`;
		}
		return returnStatement;
	},
	'returnCodeExampleContentMarkdown': ({ exampleObject }) => {
		const languageIDBeginningIndex = exampleObject.indexOf(' ') + 1;
		const languageIDEndingIndex = exampleObject.indexOf('\n');
		const languageID = exampleObject.slice(
			languageIDBeginningIndex,
			languageIDEndingIndex,
		);
		const exampleContent = exampleObject.slice(languageIDEndingIndex + 1);
		return (
			'<div class="generate-docs function-parameters">\n\n' +
			'```' + languageID + '\n' +
			exampleContent +
			'\n```\n\n' +
			'</div>'
		);
	},
	'generateAuto': async (baseDocSystemPath) => {
		Object.keys(domains).forEach((domainKey) => {
			Object.keys(domains[domainKey])
				.forEach((domainSectionKey, domainSectionKeyIndex) => {
					module.exports.generatePage({
						'levelOneTitle': domainKey,
						'levelTwoTitle': domainSectionKey,
						'order': domainSectionKeyIndex + 1,
						'contentConfig':
							domains[domainKey][domainSectionKey],
						baseDocSystemPath,
					});
				});
		});
	},
	'generateAll': async (baseDocSystemPath) => {
		const removal = await module.exports.removeOldDocs(baseDocSystemPath);
		if (!removal.error) {
			const copy = await module.exports.copyBaseDocs(baseDocSystemPath);
			if (!copy.error) {
				module.exports.generateAuto(baseDocSystemPath);
			}
		}
	},
};
