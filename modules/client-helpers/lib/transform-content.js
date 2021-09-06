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

//  =======================================================
//  =======================================================
//  =======================================================


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

//  =======================================================
//  =======================================================
//  =======================================================

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
const returnExtractedBriefStatements = ({ briefStatementsRaw }) => {
	const briefStatementsExtracted = [];
	if (
		typeof (briefStatementsRaw) === 'object' &&
		briefStatementsRaw.length > 1 &&
		briefStatementsRaw[0]
	) {
		briefStatementsRaw.forEach((briefStatementRaw) => {
			briefStatementsExtracted.push(briefStatementRaw.Statement);
		});
	}
	return briefStatementsExtracted;
};
const returnArticleIntermediateData = ({
	articleDataRaw, sectionDataRaw, mediaDataRaw,
}) => {
	// start putting the data together, but don't transform anything to HTML yet

	const sectionsIntermediate = [];
	sectionDataRaw.forEach((sectionObject) => {
		const sectionIntermediate = {
			'_id': sectionObject._id,
		};
		if (sectionObject.SectionID) {
			sectionIntermediate.sectionID = sectionObject.SectionID;
		}
		if (sectionObject.SectionTitle) {
			sectionIntermediate.sectionTitle =
				`## ${sectionObject.SectionTitle}`;
		}
		if (sectionObject.SectionIntro) {
			sectionIntermediate.sectionIntro = sectionObject.SectionIntro;
		}
		if (sectionObject.SectionQuote) {
			sectionIntermediate.sectionQuote = sectionObject.SectionQuote;
		}
		if (sectionObject.SectionBriefStatements) {
			sectionIntermediate.sectionBriefStatements =
				returnExtractedBriefStatements({
					'briefStatementsRaw': sectionObject.SectionBriefStatements,
				});
		}

		const SubsectionsThisSection = [];
		sectionObject.Subsections.forEach((subsectionObject) => {
			const subsectionIntermediate = {};
			if (subsectionObject.SubsectionID) {
				subsectionIntermediate.subsectionID =
					subsectionObject.SubsectionID;
			}
			if (subsectionObject.SubsectionGravity) {
				subsectionIntermediate.subsectionGravity =
					subsectionObject.SubsectionGravity;
			}
			if (subsectionObject.SubsectionMediaGravity) {
				subsectionIntermediate.subsectionMediaGravity =
					subsectionObject.SubsectionMediaGravity;
			}
			if (subsectionObject.SubsectionTitle) {
				subsectionIntermediate.subsectionTitle =
					`### ${subsectionObject.SubsectionTitle}`;
			}
			if (subsectionObject.SubsectionText) {
				subsectionIntermediate.subsectionText =
					subsectionObject.SubsectionText;
			}
			if (subsectionObject.SubsectionMediaSVGArray) {
				subsectionIntermediate.subsectionMediaSVGArray =
					subsectionObject.SubsectionMediaSVGArray;
			}
			const mediaThisSubsection = [];
			subsectionObject.SubsectionMedia.forEach((mediaReference) => {
				mediaDataRaw.forEach((mediaItem) => {
					if (mediaItem._id === mediaReference) {
						mediaThisSubsection.push(mediaItem);
					}
				});
			});
			if (mediaThisSubsection.length > 0) {
				subsectionIntermediate.subsectionMedia = mediaThisSubsection;
			}
			SubsectionsThisSection.push(subsectionIntermediate);
		});
		sectionIntermediate.subsections = SubsectionsThisSection;
		sectionsIntermediate.push(sectionIntermediate);
	});


	const articleIntermedate = {};
	if (articleDataRaw.Featured) {
		articleIntermedate.featured = articleDataRaw.Featured;
	}
	if (articleDataRaw.Slug) {
		articleIntermedate.slug = articleDataRaw.Slug;
	}
	if (articleDataRaw.Title) {
		articleIntermedate.title = articleDataRaw.Subtitle ?
			`${articleDataRaw.Title.trim()}: ${articleDataRaw.Subtitle}` :
			articleDataRaw.Title;
	}
	if (articleDataRaw.MetaTitle) {
		articleIntermedate.metaTitle = articleDataRaw.MetaTitle;
	}
	if (articleDataRaw.MetaDescription) {
		articleIntermedate.metaDescription = articleDataRaw.MetaDescription;
	}
	if (
		articleDataRaw.MetaImages &&
		articleDataRaw.MetaImages[0]
	) {
		articleIntermedate.metaImage = {
			'url': returnSocialImageCloudinaryURI({
				'imagePublicID':
					articleDataRaw.MetaImages[0].provider_metadata.public_id,
				'imageExtension': articleDataRaw.MetaImages[0].ext,
				'gravity': articleDataRaw.MetaImageGravity,
			}),
			'alternativeText': articleDataRaw.MetaImages[0].alternativeText,
		};
	}
	if (articleDataRaw.SocialDescription) {
		articleIntermedate.socialDescription = articleDataRaw.SocialDescription;
	}
	if (articleDataRaw.PublicationDate) {
		articleIntermedate.publicationDate =
			new Date(articleDataRaw.PublicationDate)
				.toLocaleDateString('en-US', {
					'year': 'numeric',
					'month': 'long',
					'day': 'numeric',
				});
	}
	if (sectionsIntermediate && sectionsIntermediate[0]) {
		articleIntermedate.sections = sectionsIntermediate;
	}
	if (articleDataRaw.Tagline) {
		articleIntermedate.tagline = articleDataRaw.Tagline;
	}
	if (articleDataRaw.Intro) {
		articleIntermedate.intro = articleDataRaw.Intro;
	}
	if (articleDataRaw.BriefStatements) {
		articleIntermedate.briefStatements = returnExtractedBriefStatements({
			'briefStatementsRaw': articleDataRaw.BriefStatements,
		});
	}

	// get stats

	const textAnalysis = {
		'approximateMain': `${articleIntermedate.title}
${articleIntermedate.publicationDate}
`,
		'briefStatements': '',
	};
	if (
		articleIntermedate &&
		articleIntermedate.briefStatements &&
		articleIntermedate.briefStatements[0]
	) {
		articleIntermedate.briefStatements.forEach((briefStatement) => {
			textAnalysis.briefStatements += ' ' + briefStatement;
		});
	}
	if (
		articleIntermedate &&
		articleIntermedate.sections &&
		articleIntermedate.sections[0]
	) {
		articleIntermedate.sections.forEach((section) => {
			if (section.sectionTitle) {
				textAnalysis.approximateMain += section.sectionTitle + '\n';
			}
			if (section.sectionIntro) {
				textAnalysis.approximateMain += section.sectionIntro + '\n';
			}
			if (section.sectionBriefStatements) {
				section.sectionBriefStatements.forEach((sectionBriefStatement) => {
					textAnalysis.briefStatements += ' ' + sectionBriefStatement;
				});
			}
			section.subsections.forEach((subsection) => {
				if (subsection.subsectionTitle) {
					textAnalysis.approximateMain +=
						subsection.subsectionTitle + '\n';
				}
				if (subsection.subsectionText) {
					textAnalysis.approximateMain +=
						subsection.subsectionText + '\n';
				}
			});
		});
	}
	articleIntermedate.stats = returnContentStats({
		'content': `${textAnalysis.approximateMain}
${textAnalysis.briefStatements}`,
	});

	// get table of contents - this must be done prior to rendering html

	articleIntermedate.headingsWithMetadata = returnHeadingsWithMetadata({
		'content': textAnalysis.approximateMain,
	});

	return articleIntermedate;
};

export const returnTransformedArticleData = ({
	articleDataRaw, sectionDataRaw, mediaDataRaw,
}) => {
	const articleIntermedate = returnArticleIntermediateData({
		articleDataRaw, sectionDataRaw, mediaDataRaw,
	});
	return articleIntermedate;
};
