
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');
const { locations } = require('./config.js');

module.exports = {
	/**
	 * See comments in '../index.js'.
	 */
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
			filePaths.forEach((filePath) => {
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
};
