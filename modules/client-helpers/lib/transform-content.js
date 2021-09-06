import React from 'react';
import readingtime from 'reading-time';
import GithubSlugger from 'github-slugger';
import { unified } from 'unified';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkSlug from 'remark-slug';
import rehypeReact from 'rehype-react';
import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItToC from 'markdown-it-toc-done-right';
const markdownItBaseClient = new MarkdownIt();
const markdownItClientAnchors = new MarkdownIt()
	.use(MarkdownItAnchor, {
		'permalink': MarkdownItAnchor.permalink.headerLink(),
	});
const markdownItClientAnchorsToC = new MarkdownIt()
	.use(MarkdownItAnchor, {
		'permalink': MarkdownItAnchor.permalink.headerLink(),
	})
	.use(MarkdownItToC, {
		// 'placeholder': '-----TOC-----',
	});

export const returnHTMLFromMarkdown = ({ content, options }) => {
	let renderedContent = '';
	// if content is a string
	if (typeof (content) === 'string') {
		// if we didn't receive any options or at least not
		// any options that affect which client we use
		if (
			!options ||
			(
				!options.withAnchors &&
				!options.navOnly
			)
		) {
			// set an initial render using the base client
			renderedContent = markdownItBaseClient.render(content);
		}
		// if we received the withAnchors option
		if (options && options.withAnchors) {
			// set an initial render using the client with anchors
			renderedContent = markdownItClientAnchors.render(content);
		}
		// if we received the navOnly option
		if (options && options.navOnly) {
			// console.log('CONTENT');
			// console.log(content);
			// set an initial render using the client with anchors and toc
			renderedContent =
				markdownItClientAnchorsToC.render(`[toc]${content}`);
			// if a nav was created
			if (renderedContent.startsWith('<nav')) {
				// get the indexes of the beginning and ending tags
				const beginningIndex =
					'<nav class="table-of-contents">'.split('').length;
				const endIndex = renderedContent.indexOf('</nav>');
				// extract the nav from the render
				renderedContent =
					renderedContent.slice(beginningIndex, endIndex);
			} else {
				renderedContent = null;
			}
		}
		// if we received the option to remove the endcap tags
		if (options && options.removeEndCapTags) {
			// get the indexes of the beginning and ending tags
			const beginningIndex = renderedContent.indexOf('>') + 1;
			const endIndex = renderedContent.lastIndexOf('<');
			// remove the endcap tags from the render
			renderedContent = renderedContent.slice(beginningIndex, endIndex);
		}

	}
	// return the rendered content
	return renderedContent;
};
export const returnSocialImageCloudinaryURI = ({
	imagePublicID, imageExtension, gravity,
}) => 'https://res.cloudinary.com/jbkrcdn/image/upload/' +
'c_fill,g_' + gravity + ',w_1200,h_628,q_100/' +
imagePublicID + imageExtension;

export const returnSimpleHTMLFromMarkdown = ({ content }) => {
	const result = unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeStringify)
		.processSync(content).value;
	return result;
};

export const returnContentStats = ({ content }) => {
	const statsRaw = readingtime(content);
	const estimatedMinutes = Math.round(statsRaw.minutes);
	return {
		'words': statsRaw.words,
		'minutes': estimatedMinutes,
		'statement': `${statsRaw.words} words //
		${estimatedMinutes} minutes to read`,
	};
};
export const returnHeadingsWithMetadata = ({ content }) => {
	// define regex for identifying headings
	const headingRegex = /^###*\s/;
	// get an array of the content lines that are headings
	const headingLines = content.split('\n')
		.filter((line) => {
			return line.match(headingRegex);
		});
	// get an array of heading objects
	const headingObjects = [];
	headingLines.forEach((line) => {
		const lineContent = line.replace(headingRegex, '');
		headingObjects.push({
			'level': line.slice(0, 3) === '###' ? 3 : 2,
			'content': lineContent,
			'slug': GithubSlugger.slug(lineContent),
		});
	});
	return headingObjects;
};
