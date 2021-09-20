const fs = require('fs');
const path = require('path');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');
const { locations } = require('./config.js');

module.exports = {
	'generate': async (docBasePath) => {
		locations.forEach((location) => {
			const outPath = path.join(docBasePath, '/docs/', location.section);
			const inPath = path.join(docBasePath, location.in);
			const pathPattern = path.join(inPath, '/**/*.[jt]s?(x)');
			const filePaths = glob.sync(pathPattern, {
				'ignore': location.ignore,
			});
			let content = '';
			filePaths.forEach((filePath) => {
				content += jsdoc2md.renderSync({
					'files': filePath,
				});
			});
			if (content && content.length > 0) {
				content = `---
id: "${location.id}"
title: "${location.title}"
sidebar_label: "${location.title}"
sidebar_position: ${location.position}
---

${content}`;
				fs.writeFileSync(
					`${outPath}/${location.title}.md`,
					content,
				);
			}

		});
	},
};
