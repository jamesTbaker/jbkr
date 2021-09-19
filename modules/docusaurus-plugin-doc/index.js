const fs = require('fs');
const path = require('path');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');

module.exports = function pluginDocusaurus(context, options) {
	const outPath = path.join(context.siteDir, '/docs/', options.out);
	const inPath = path.join(context.siteDir, options.in);
	const pathPattern = path.join(inPath, '/**/*.[jt]s?(x)');
	const filePaths = glob.sync(pathPattern, {
		'ignore': options.ignore,
	});
	filePaths.forEach((filePath, filePathIndex) => {
		console.log('filePathIndex', filePathIndex);
		console.log('filePath', filePath);
		if (filePathIndex > 2) {
			const markdown = jsdoc2md.renderSync({
				'files': filePath,
				'configure': path.join(context.siteDir, options.config),
				'heading-depth': 2,
			});
			console.log('markdown', markdown);
		}
	});
	return {
		'name': 'docusaurus-plugin-doc',
	};
};
