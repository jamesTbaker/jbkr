import readingtime from 'reading-time';
import GithubSlugger from 'github-slugger';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import { toString } from 'hast-util-to-string';
import { h } from 'hastscript';
import {
	defaultMetaImageURL,
	defaultMetaImageAlternativeText,
	defaultMetaImageType,
	defaultStandardImageURL,
	defaultStandardImageAlternativeText,
	defaultStandardImageType,
	defaultStandardImageWidth,
	defaultStandardImageHeight,
} from './meta-content';

export const returnSocialImageCloudinaryURI = ({
	imagePublicID, imageExtension, gravity,
}) => 'https://res.cloudinary.com/jbkrcdn/image/upload/' +
'c_fill,g_' + gravity + ',w_1200,h_628,q_100/' +
imagePublicID + imageExtension;
export const returnStandardImageCloudinaryURI = ({
	imagePublicID, imageExtension,
}) => 'https://res.cloudinary.com/jbkrcdn/image/upload/' +
imagePublicID + imageExtension;
export const returnSimpleHTMLFromMarkdown = ({ content, options }) => {
	let renderedContent = '';
	// if content is a string
	if (typeof (content) === 'string') {
		// set an initial render using the base client
		renderedContent = unified()
			.use(remarkParse)
			.use(remarkRehype)
			.use(rehypeStringify)
			.processSync(content).value;
		// if we received the option to remove the endcap tags
		if (options && options.removeEndCapTags) {
			// get the indexes of the beginning and ending tags
			const beginningIndex = renderedContent.indexOf('>') + 1;
			const endIndex = renderedContent.lastIndexOf('<');
			// remove the endcap tags from the render
			renderedContent = renderedContent.slice(beginningIndex, endIndex);
		}
	}
	return renderedContent;
};
export const returnSluggifiedHTMLFromMarkdown = ({ content }) => {
	const result = unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, {
			'behavior': 'after',
			'properties': {
				'className': 'header-anchor',
			},
			'content': (node) => [
				h(
					'span.machines-only',
					'Permalink to “',
					toString(node),
					'”'),
				h(
					'span',
					{ 'ariaHidden': true },
					'#',
				),
			],
			'group': (node) => {
				return (h('.header-container.level-' + node.tagName.charAt(1)));
			},
		})
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
		'statement': `${statsRaw.words} words // ` +
			`${estimatedMinutes} minutes to read`,
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
		const separatorPositionAndHeadingLevel = line.indexOf(' ');
		const lineContent = line.slice(separatorPositionAndHeadingLevel + 1);
		headingObjects.push({
			'level': separatorPositionAndHeadingLevel,
			'content': lineContent,
			'slug': GithubSlugger.slug(lineContent),
		});
	});
	return headingObjects;
};
const returnMediaType = ({
	mime,
}) => {
	if (
		mime.startsWith('image') ||
		mime.startsWith('video')
	) {
		return mime.slice(6);
	}
	return 'unknown';
};
const returnExtractedBriefStatements = ({ briefStatementsRaw }) => {
	const briefStatementsExtracted = [];
	if (
		typeof (briefStatementsRaw) === 'object' &&
		briefStatementsRaw[0]
	) {
		briefStatementsRaw.forEach((briefStatementRaw) => {
			briefStatementsExtracted.push({
				'key': briefStatementRaw._id,
				'content': briefStatementRaw.Statement,
			});
		});
	}
	return briefStatementsExtracted;
};
const returnDateAtNoonEasternish = ({ incomingDate }) =>
	new Date(`${incomingDate.slice(0, 10)}T12:00:00+05:00`);
const returnFormattedDateString = ({
	incomingDate,
	formatToken,
}) => {
	if (formatToken === 'standardLongDate') {
		return returnDateAtNoonEasternish({
			incomingDate,
		})
			.toLocaleDateString('en-US', {
				'year': 'numeric',
				'month': 'long',
				'day': 'numeric',
			});
	}
	return '';
};
const returnArticleIntermediateContent = ({
	articleDataRaw, sectionDataRaw, mediaDataRaw,
}) => {
	// set up container for all sections
	const sectionsIntermediate = [];
	// for each section in the raw data
	sectionDataRaw.forEach((sectionObject) => {
		// set up a new, single section container; add the
		// corresponding properties from the raw section data
		const sectionIntermediate = {};
		if (sectionObject.SectionID) {
			sectionIntermediate.sectionID = sectionObject.SectionID;
		}
		if (sectionObject.SectionTitle) {
			sectionIntermediate.sectionTitle =
				`## ${sectionObject.SectionTitle}`;
		}
		if (sectionObject.SectionPreface) {
			sectionIntermediate.sectionPreface = sectionObject.SectionPreface;
		}
		if (sectionObject.SectionBriefStatements) {
			sectionIntermediate.sectionBriefStatements =
				returnExtractedBriefStatements({
					'briefStatementsRaw': sectionObject.SectionBriefStatements,
				});
		}
		if (sectionObject.SectionQuote) {
			sectionIntermediate.sectionQuote = sectionObject.SectionQuote;
		}
		// set up a new container of this section's subsections
		const subsectionsThisSection = [];
		// for each subsection in the raw data for this section
		sectionObject.Subsections.forEach((subsectionObject) => {
			// set up a new, single subsection container; add the
			// corresponding properties from the raw subsection data
			const subsectionIntermediate = {};
			if (subsectionObject.SubsectionID) {
				subsectionIntermediate.subsectionID =
					subsectionObject.SubsectionID;
			}
			if (subsectionObject.SubsectionTitle) {
				subsectionIntermediate.subsectionTitle =
					`### ${subsectionObject.SubsectionTitle}`;
			}
			if (subsectionObject.SubsectionText) {
				subsectionIntermediate.subsectionText =
					subsectionObject.SubsectionText;
			}
			if (subsectionObject.SubsectionGravity) {
				subsectionIntermediate.subsectionGravity =
					subsectionObject.SubsectionGravity;
			}
			if (subsectionObject.SubsectionMediaComponents) {
				subsectionIntermediate.subsectionMediaComponents =
					subsectionObject.SubsectionMediaComponents;
			}
			if (subsectionObject.SubsectionMediaGravity) {
				subsectionIntermediate.subsectionMediaGravity =
					subsectionObject.SubsectionMediaGravity;
			}
			// set up a new container of this subsection's media items
			const mediaThisSubsection = [];
			// for each media item ID in the raw data for this subsection
			subsectionObject.SubsectionMedia.forEach((mediaItemID) => {
				// for each media item
				mediaDataRaw.forEach((mediaItem) => {
					// if this media item's ID matches this media item ID
					if (mediaItem._id === mediaItemID) {
						// add the media item to the container of
						// this subsection's media items
						mediaThisSubsection.push({
							'ext': mediaItem.ext,
							'hash': mediaItem.hash,
							'url': mediaItem.url,
							'type': returnMediaType({
								'mime': mediaItem.mime,
							}),
							'alternativeText': mediaItem.alternativeText,
							'credit': mediaItem.caption,
							'width': mediaItem.width,
							'height': mediaItem.height,
						});
					}
				});
			});
			// if any media was found for this subsection
			if (mediaThisSubsection[0]) {
				// add the media container to the subsection
				subsectionIntermediate.subsectionMedia = mediaThisSubsection;
			}
			// if this subsection container received any properties
			if (Object.keys(subsectionIntermediate)[0]) {
				// add the subsection to the section container
				subsectionsThisSection.push(subsectionIntermediate);
			}
		});
		// if this subsection container received any elements
		if (subsectionsThisSection[0]) {
			// add the subsection container to the section container
			sectionIntermediate.subsections = subsectionsThisSection;
		}
		// if this section container received any elements
		if (Object.keys(sectionIntermediate)[0]) {
			// add the section container to the sections container
			sectionsIntermediate.push(sectionIntermediate);
		}
	});
	// set up container for article properties; add the
	// corresponding properties from the raw section data
	const articleIntermedate = {};
	if (articleDataRaw.Featured) {
		articleIntermedate.featured = articleDataRaw.Featured;
	}
	if (articleDataRaw.PublicationDate) {
		articleIntermedate.publicationDate = returnFormattedDateString({
			'incomingDate': articleDataRaw.PublicationDate,
			'formatToken': 'standardLongDate',
		});
	}
	if (articleDataRaw.UpdateDate) {
		articleIntermedate.updateDate =
			new Date(articleDataRaw.UpdateDate)
				.toLocaleDateString('en-US', {
					'year': 'numeric',
					'month': 'long',
					'day': 'numeric',
				});
	}
	if (articleDataRaw.Slug) {
		articleIntermedate.slug = articleDataRaw.Slug;
	}
	if (articleDataRaw.Title) {
		articleIntermedate.title = articleDataRaw.Subtitle ?
			`${articleDataRaw.Title.trim()}: ${articleDataRaw.Subtitle}` :
			articleDataRaw.Title;
	}
	if (articleDataRaw.Tagline) {
		articleIntermedate.tagline = articleDataRaw.Tagline;
	}
	if (articleDataRaw.MetaTitle) {
		articleIntermedate.metaTitle = articleDataRaw.MetaTitle;
	}
	if (articleDataRaw.MetaDescription) {
		articleIntermedate.metaDescription = articleDataRaw.MetaDescription;
	}
	if (articleDataRaw.SocialDescription) {
		articleIntermedate.socialDescription = articleDataRaw.SocialDescription;
	}
	// use a default meta image or default gravity if not supplied
	let metaImageGravity = 'center';
	if (articleDataRaw.MetaImageGravity) {
		metaImageGravity = articleDataRaw.MetaImageGravity;
	}
	// if no meta image was supplied, or if the
	// supplied image is missing any of the necessary properties
	if (
		!articleDataRaw.MetaImages ||
		!articleDataRaw.MetaImages[0] ||
		!articleDataRaw.MetaImages[0].hash ||
		!articleDataRaw.MetaImages[0].ext ||
		!articleDataRaw.MetaImages[0].mime ||
		!articleDataRaw.MetaImages[0].alternativeText
	) {
		// use a default image
		articleIntermedate.metaImage = {
			'url': defaultMetaImageURL,
			'alternativeText': defaultMetaImageAlternativeText,
			'type': defaultMetaImageType,
		};
		// if all of the image properties are present
	} else {
		// transform the image properties
		articleIntermedate.metaImage = {
			'url': returnSocialImageCloudinaryURI({
				'imagePublicID':
					articleDataRaw.MetaImages[0].hash,
				'imageExtension': articleDataRaw.MetaImages[0].ext,
				'gravity': metaImageGravity,
			}),
			'alternativeText': articleDataRaw.MetaImages[0].alternativeText,
			'type': returnMediaType({
				'mime': articleDataRaw.MetaImages[0].mime,
			}),
		};
	}
	if (
		articleDataRaw.HeadImages &&
		articleDataRaw.HeadImages[0]
	) {
		// if the image is missing any of the necessary properties; even if an
		// image caption was supplied, we won't use it with a default image
		if (
			!articleDataRaw.HeadImages[0].hash ||
			!articleDataRaw.HeadImages[0].ext ||
			!articleDataRaw.HeadImages[0].mime ||
			!articleDataRaw.HeadImages[0].alternativeText ||
			!articleDataRaw.HeadImages[0].width ||
			!articleDataRaw.HeadImages[0].height
		) {
			// use a default image
			articleIntermedate.headImage = {
				'url': defaultStandardImageURL,
				'alternativeText': defaultStandardImageAlternativeText,
				'width': defaultStandardImageWidth,
				'height': defaultStandardImageHeight,
				'type': defaultStandardImageType,
			};
			// if all of the image properties are present
		} else {
			// transform the image properties
			articleIntermedate.headImage = {
				'url': returnStandardImageCloudinaryURI({
					'imagePublicID':
						articleDataRaw.HeadImages[0].hash,
					'imageExtension': articleDataRaw.HeadImages[0].ext,
				}),
				'alternativeText': articleDataRaw.HeadImages[0].alternativeText,
				'width': articleDataRaw.HeadImages[0].width,
				'height': articleDataRaw.HeadImages[0].height,
				'type': returnMediaType({
					'mime': articleDataRaw.HeadImages[0].mime,
				}),
				'credit': articleDataRaw.HeadImages[0].caption,
			};
			// if a caption was also specified
			if (articleDataRaw.HeadImageCaption) {
				// add it as a property of the image
				articleIntermedate.headImage.caption =
					articleDataRaw.HeadImageCaption;
			}
		}
	}
	if (articleDataRaw.BriefStatements) {
		articleIntermedate.briefStatements = returnExtractedBriefStatements({
			'briefStatementsRaw': articleDataRaw.BriefStatements,
		});
	}
	if (articleDataRaw.IntroText) {
		articleIntermedate.introText = articleDataRaw.IntroText;
	}
	if (
		articleDataRaw.IntroVideos &&
		articleDataRaw.IntroVideos[0]
	) {
		if (
			articleDataRaw.IntroVideos[0].url &&
			articleDataRaw.IntroVideos[0].alternativeText
		) {
			articleIntermedate.introVideo = {
				'url': articleDataRaw.IntroVideos[0].url,
				'alternativeText':
					articleDataRaw.IntroVideos[0].alternativeText,
				'type': returnMediaType({
					'mime': articleDataRaw.IntroVideos[0].mime,
				}),
			};
			if (articleDataRaw.IntroVideos[0].caption) {
				articleIntermedate.introVideo.credit =
					articleDataRaw.IntroVideos[0].caption;
			}
		}
	}
	if (sectionsIntermediate && sectionsIntermediate[0]) {
		articleIntermedate.sections = sectionsIntermediate;
	}
	if (articleDataRaw.SimpleBody) {
		articleIntermedate.simpleBody = articleDataRaw.SimpleBody;
	}
	// collect the text from simple body, the various sections and subsections,
	// and brief statements; will be used to determine stats for the content and
	// develop a table of contents
	const textCollection = {
		'approximateMain': `${articleIntermedate.title}
${articleIntermedate.publicationDate}
`,
		'briefStatements': '',
	};
	if (articleIntermedate.simpleBody) {
		textCollection.approximateMain += articleIntermedate.simpleBody + '\n';
	}
	if (
		articleIntermedate &&
		articleIntermedate.briefStatements &&
		articleIntermedate.briefStatements[0]
	) {
		articleIntermedate.briefStatements.forEach((briefStatement) => {
			textCollection.briefStatements += ' ' + briefStatement.content;
		});
	}
	if (
		articleIntermedate &&
		articleIntermedate.sections &&
		articleIntermedate.sections[0]
	) {
		articleIntermedate.sections.forEach((section) => {
			if (section.sectionTitle) {
				textCollection.approximateMain += section.sectionTitle + '\n';
			}
			if (section.sectionIntro) {
				textCollection.approximateMain += section.sectionIntro + '\n';
			}
			if (section.sectionBriefStatements) {
				section.sectionBriefStatements
					.forEach((sectionBriefStatement) => {
						textCollection.briefStatements +=
							' ' + sectionBriefStatement.content;
					});
			}
			section.subsections.forEach((subsection) => {
				if (subsection.subsectionTitle) {
					textCollection.approximateMain +=
						subsection.subsectionTitle + '\n';
				}
				if (subsection.subsectionText) {
					textCollection.approximateMain +=
						subsection.subsectionText + '\n';
				}
			});
		});
	}
	// get stats about the article
	articleIntermedate.stats = returnContentStats({
		'content': `${textCollection.approximateMain}
${textCollection.briefStatements}`,
	});
	// get a table of contents for the article
	articleIntermedate.headingsWithMetadata = returnHeadingsWithMetadata({
		'content': textCollection.approximateMain,
	});
	// return what we developed
	return articleIntermedate;
};
const returnTableOfContentsContent = ({ headings }) => {
	// construct markdown table of contents; it's easiest to do this first
	// because markdown doesn't require us to close one tag, e.g., a
	// nested </ol>, prior to creating another, e.g., a <li>
	// set up container for markdown content
	let markdown = '';
	// for each heading
	headings.forEach((heading) => {
		let listItemPreface = `1. `;
		if (heading.level === 3) {
			listItemPreface = `    ${listItemPreface}`;
		}
		if (heading.level === 4) {
			listItemPreface = `        ${listItemPreface}`;
		}
		if (heading.level === 5) {
			listItemPreface = `            ${listItemPreface}`;
		}
		if (heading.level === 6) {
			listItemPreface = `                ${listItemPreface}`;
		}
		markdown +=
			`${listItemPreface}[${heading.content}](#${heading.slug})\n`;
	});
	const html = returnSimpleHTMLFromMarkdown({ 'content': markdown });
	return html;
};
const returnArticleRenderedContent = ({ content }) => {
	// set up container for the article's rendered content
	const articleRendered = {
		'meta': {},
		'frontMatter': {},
		'mainContent': {},
	};
	// collect the article's metadata
	if (content.featured) {
		articleRendered.meta.featured = content.featured;
	}
	if (content.metaDescription) {
		articleRendered.meta.metaDescription = content.metaDescription;
	}
	if (content.metaImage) {
		articleRendered.meta.metaImage = content.metaImage;
	}
	if (content.metaTitle) {
		articleRendered.meta.metaTitle = content.metaTitle;
	}
	if (content.slug) {
		articleRendered.meta.slug = content.slug;
	}
	if (content.socialDescription) {
		articleRendered.meta.socialDescription = content.socialDescription;
	}
	// collect and render the article's front matter content
	if (content.headImage) {
		articleRendered.frontMatter.headImage = {
			'url': content.headImage.url,
			'alternativeText': content.headImage.alternativeText,
			'width': content.headImage.width,
			'height': content.headImage.height,
			'type': content.headImage.type,
		};
		if (content.headImage.credit) {
			articleRendered.frontMatter.headImage.credit =
				returnSimpleHTMLFromMarkdown({
					'content': content.headImage.credit,
					'options': {
						'removeEndCapTags': true,
					},
				});
		}
		if (content.headImage.caption) {
			articleRendered.frontMatter.headImage.caption =
				returnSimpleHTMLFromMarkdown({
					'content': content.headImage.caption,
					'options': {
						'removeEndCapTags': true,
					},
				});
		}
	}
	if (content.title) {
		articleRendered.frontMatter.title = content.title;
	}
	if (content.tagline) {
		articleRendered.frontMatter.tagline = content.tagline;
	}
	if (content.briefStatements) {
		articleRendered.frontMatter.briefStatements = [];
		content.briefStatements
			.forEach((briefStatement) => {
				articleRendered.frontMatter.briefStatements.push({
					'key': briefStatement.key,
					'content': returnSimpleHTMLFromMarkdown({
						'content': briefStatement.content,
						'options': {
							'removeEndCapTags': true,
						},
					}),
				});
			});
	}
	if (content.introText) {
		articleRendered.frontMatter.introText =
			returnSimpleHTMLFromMarkdown({
				'content': content.introText,
			});
	}
	if (content.introVideo) {
		articleRendered.frontMatter.introVideo = {
			'url': content.introVideo.url,
			'type': content.introVideo.type,
			'alternativeText': content.introVideo.alternativeText,
		};
		if (content.introVideo.credit) {
			articleRendered.frontMatter.introVideo.credit =
				returnSimpleHTMLFromMarkdown({
					'content': content.introVideo.credit,
					'options': {
						'removeEndCapTags': true,
					},
				});
		}
	}
	if (content.headingsWithMetadata) {
		articleRendered.frontMatter.tableOfContents =
			returnTableOfContentsContent({
				'headings': content.headingsWithMetadata,
			});
	}
	if (content.publicationDate) {
		articleRendered.frontMatter.publicationDate = content.publicationDate;
	}
	if (content.updateDate) {
		articleRendered.frontMatter.updateDate = content.updateDate;
	}
	if (content.stats) {
		articleRendered.frontMatter.stats = content.stats.statement;
	}
	// collect and render the article's main content
	if (content.simpleBody) {
		articleRendered.mainContent.simpleBody =
			returnSluggifiedHTMLFromMarkdown({
				'content': content.simpleBody,
			});
	}
	if (content.sections) {
		// set up container for all sections
		const sectionsRendered = [];
		// for each section
		content.sections.forEach((sectionObject) => {
			// set up a new, single section container; add the
			// corresponding properties from the raw section data
			const sectionRendered = {};
			if (sectionObject.sectionID) {
				sectionRendered.sectionID = sectionObject.sectionID;
			}
			if (sectionObject.sectionTitle) {
				sectionRendered.sectionTitle =
					returnSluggifiedHTMLFromMarkdown({
						'content': sectionObject.sectionTitle,
					});
			}
			if (sectionObject.sectionPreface) {
				sectionRendered.sectionPreface =
					returnSimpleHTMLFromMarkdown({
						'content': sectionObject.sectionPreface,
					});
			}
			if (sectionObject.sectionBriefStatements) {
				sectionRendered.sectionBriefStatements = [];
				sectionObject.sectionBriefStatements
					.forEach((briefStatement) => {
						sectionRendered.sectionBriefStatements.push({
							'key': briefStatement.key,
							'content': returnSimpleHTMLFromMarkdown({
								'content': briefStatement.content,
								'options': {
									'removeEndCapTags': true,
								},
							}),
						});
					});
			}
			if (sectionObject.sectionQuote) {
				sectionRendered.sectionQuote = returnSimpleHTMLFromMarkdown({
					'content': sectionObject.sectionQuote,
				});
			}
			// set up a new container of this section's subsections
			const subsectionsThisSection = [];
			// for each subsection in the raw data for this section
			sectionObject.subsections.forEach((subsectionObject) => {
				// set up a new, single subsection container; add the
				// corresponding properties from the raw subsection data
				const subsectionRendered = {};
				if (subsectionObject.subsectionID) {
					subsectionRendered.subsectionID =
						subsectionObject.subsectionID;
				}
				if (subsectionObject.subsectionGravity) {
					subsectionRendered.subsectionGravity =
						subsectionObject.subsectionGravity;
				}
				if (subsectionObject.subsectionTitle) {
					subsectionRendered.subsectionTitle =
						returnSluggifiedHTMLFromMarkdown({
							'content': subsectionObject.subsectionTitle,
						});
				}
				if (subsectionObject.subsectionText) {
					subsectionRendered.subsectionText =
						returnSluggifiedHTMLFromMarkdown({
							'content': subsectionObject.subsectionText,
						});
				}
				if (subsectionObject.subsectionMedia) {
					subsectionRendered.subsectionMedia = [];
					subsectionObject.subsectionMedia.forEach((mediaItem) => {
						subsectionRendered.subsectionMedia.push({
							'ext': mediaItem.ext,
							'hash': mediaItem.hash,
							'url': mediaItem.url,
							'type': mediaItem.type,
							'alternativeText': mediaItem.alternativeText,
							'credit': returnSimpleHTMLFromMarkdown({
								'content': mediaItem.credit,
								'options': {
									'removeEndCapTags': true,
								},
							}),
							'width': mediaItem.width,
							'height': mediaItem.height,
						});
					});
				}
				if (subsectionObject.subsectionMediaComponents) {
					subsectionRendered.subsectionMediaComponents =
						subsectionObject.subsectionMediaComponents;
				}
				if (subsectionObject.subsectionMediaGravity) {
					subsectionRendered.subsectionMediaGravity =
						subsectionObject.subsectionMediaGravity;
				}
				// if this subsection container received any properties
				if (Object.keys(subsectionRendered)[0]) {
					// add the subsection to the section container
					subsectionsThisSection.push(subsectionRendered);
				}
			});
			// if this subsection container received any elements
			if (subsectionsThisSection[0]) {
				// add the subsection container to the section container
				sectionRendered.subsections = subsectionsThisSection;
			}
			// if this section container received any elements
			if (Object.keys(sectionRendered)[0]) {
				// add the section container to the sections container
				sectionsRendered.push(sectionRendered);
			}
		});
		// add the container for all sections to the article's other content
		articleRendered.mainContent.sections = sectionsRendered;
	}

	// return the container of the article's rendered content
	return articleRendered;
};
/**
 * because transforming this data is moderately complex and because some
 * intermediate operations depend on the text being de-normalized but
 * still in markup (not html), we break the transformation process into
 * two stages
 */
export const returnTransformedArticleContent = ({
	articleDataRaw, sectionDataRaw, mediaDataRaw,
}) => {
	// get the first, intermediate version of the article's content
	const articleContentIntermedate = returnArticleIntermediateContent({
		articleDataRaw, sectionDataRaw, mediaDataRaw,
	});
	// get the rendered version of the article's content
	const articleContentRendered = returnArticleRenderedContent({
		'content': articleContentIntermedate,
	});
	// return the rendered version of the article's content
	return articleContentRendered;
};
export const returnTransformedArticlesContent = ({ articlesDataRaw }) => {
	// set up container for all articles
	const articlesTransformed = [];
	// for each article in the raw data
	articlesDataRaw.forEach((articleDataRaw) => {
		// if all required properties are present for this article,
		// set up a new, single section container and add the
		// corresponding properties from the raw section data, transformed
		// as appropriate; then push to the container for all articles
		if (
			articleDataRaw.Slug &&
			articleDataRaw.Title &&
			articleDataRaw.PublicationDate &&
			articleDataRaw.TeaserDescription &&
			articleDataRaw.TeaserImages &&
			articleDataRaw.TeaserImages[0] &&
			articleDataRaw.TeaserImages[0].alternativeText &&
			articleDataRaw.TeaserImages[0].width &&
			articleDataRaw.TeaserImages[0].height &&
			articleDataRaw.TeaserImages[0].ext &&
			articleDataRaw.TeaserImages[0].hash &&
			articleDataRaw.TeaserImages[0].mime
		) {
			const articleTransformed = {
				'key': articleDataRaw._id,
				'slug': articleDataRaw.Slug,
				'title': articleDataRaw.Subtitle ?
					articleDataRaw.Title.trim() + ': ' +
					articleDataRaw.Subtitle :
					articleDataRaw.Title,
				'publicationDate': articleDataRaw.PublicationDate,
				'teaserDescription': returnSimpleHTMLFromMarkdown({
					'content': articleDataRaw.TeaserDescription,
					'options': {
						'removeEndCapTags': true,
					},
				}),
				'teaserImage': {
					'url': returnStandardImageCloudinaryURI({
						'imagePublicID':
							articleDataRaw.TeaserImages[0].hash,
						'imageExtension': articleDataRaw.TeaserImages[0].ext,
					}),
					'alternativeText':
						articleDataRaw.TeaserImages[0].alternativeText,
					'width': articleDataRaw.TeaserImages[0].width,
					'height': articleDataRaw.TeaserImages[0].height,
					'type': returnMediaType({
						'mime': articleDataRaw.TeaserImages[0].mime,
					}),
				},
			};
			if (articleDataRaw.Tagline) {
				articleTransformed.tagline = articleDataRaw.Tagline;
			}
			if (articleDataRaw.Featured) {
				articleTransformed.featured = true;
			}
			articlesTransformed.push(articleTransformed);
		}
	});
	// return all articles, divided between featured and standard (not featured)
	return {
		'featuredArticles': articlesTransformed
			.filter(article => article.featured),
		'standardArticles': articlesTransformed
			.filter(article => !article.featured),
	};
};
export const returnTransformedScreenContent = ({ screenDataRaw }) => {
	// set up container for the screen's rendered content and
	// add properties to it as appropriate
	const screenRendered = {
		'meta': {},
		'main': {},
	};
	if (screenDataRaw.Slug) {
		screenRendered.main.url = screenDataRaw.Slug;
	}
	if (screenDataRaw.Title) {
		screenRendered.main.title = screenDataRaw.Title;
	}
	if (screenDataRaw.MetaTitle) {
		screenRendered.meta.title = screenDataRaw.MetaTitle;
	}
	if (screenDataRaw.MetaDescription) {
		screenRendered.meta.metaDescription = screenDataRaw.MetaDescription;
	}
	if (screenDataRaw.SocialDescription) {
		screenRendered.meta.socialDescription = screenDataRaw.SocialDescription;
	}
	if (screenDataRaw.OpenGraphType) {
		screenRendered.meta.openGraphType = screenDataRaw.OpenGraphType;
	}
	if (
		screenDataRaw.MetaImages &&
		screenDataRaw.MetaImages[0] &&
		screenDataRaw.MetaImages[0].hash &&
		screenDataRaw.MetaImages[0].ext &&
		screenDataRaw.MetaImages[0].mime &&
		screenDataRaw.MetaImages[0].alternativeText &&
		screenDataRaw.MetaImageGravity
	) {
		screenRendered.meta.metaImage = {
			'url': returnSocialImageCloudinaryURI({
				'imagePublicID':
					screenDataRaw.MetaImages[0].hash,
				'imageExtension': screenDataRaw.MetaImages[0].ext,
				'gravity': screenDataRaw.MetaImageGravity,
			}),
			'alternativeText': screenDataRaw.MetaImages[0].alternativeText,
			'type': returnMediaType({
				'mime': screenDataRaw.MetaImages[0].mime,
			}),
		};
	}
	if (screenDataRaw.MetaOther) {
		screenRendered.meta.metaOther = screenDataRaw.MetaOther;
	}
	if (screenDataRaw.hasTableOfContents) {
		screenRendered.meta.hasTableOfContents = true;
	}
	return screenRendered;
};
