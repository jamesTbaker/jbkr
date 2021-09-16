/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
import readingtime from 'reading-time';
import GithubSlugger from 'github-slugger';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import { toString } from 'hast-util-to-string';
import { h } from 'hastscript';

const returnDefaultValuesObject = ({ defaultsRaw }) => {
	// set up container
	const defaultValues = {};
	// for each object in the defaultsRaw array
	defaultsRaw.forEach((defaultObject) => {
		// key it into the container
		defaultValues[defaultObject.Key] = defaultObject.Value;
	});
	// return the main container
	return defaultValues;
};
const returnMediaType = ({
	mime,
}) => {
	// if this is an image or a video
	if (
		mime.startsWith('image') ||
		mime.startsWith('video')
	) {
		// return the second portion of the mime string
		return mime.slice(6);
	}
	// otherwise, return unknown
	return 'unknown';
};
const returnSocialImageCloudinaryURI = ({
	imagePublicID, imageExtension, gravity,
}) => 'https://res.cloudinary.com/jbkrcdn/image/upload/' +
'c_fill,g_' + gravity + ',w_1200,h_628,q_100/' +
imagePublicID + imageExtension;
const returnStandardImageCloudinaryURI = ({
	imagePublicID, imageExtension,
}) => 'https://res.cloudinary.com/jbkrcdn/image/upload/' +
imagePublicID + imageExtension;
const returnSimpleHTMLFromMarkdown = ({ content, options }) => {
	// set up container for value to return
	let renderedContent = '';
	// if content is a string
	if (typeof (content) === 'string') {
		// get an initial render using a simple plugin stack
		renderedContent = unified()
			.use(remarkParse)
			.use(remarkRehype)
			.use(rehypeExternalLinks)
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
const returnSluggifiedHTMLFromMarkdown = ({ content }) => {
	// set up container for value to return
	let renderedContent = '';
	// if content is a string
	if (typeof (content) === 'string') {
		// get a render using a plugin stack that includes slugging
		// and linking to slugs
		renderedContent = unified()
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
					return (
						h('.header-container.level-' + node.tagName.charAt(1))
					);
				},
			})
			.use(rehypeStringify)
			.processSync(content).value;
	}
	return renderedContent;
};
const returnContentStats = ({ content }) => {
	// get the raw stats from the plugin
	const statsRaw = readingtime(content);
	// get estimated (rounded) minutes
	const estimatedMinutes = Math.round(statsRaw.minutes);
	// return an object speficying word count, estimated minutes,
	// and a natural language statement of both
	return {
		'words': statsRaw.words,
		'minutes': estimatedMinutes,
		'statement': `${statsRaw.words} words // ` +
			`${estimatedMinutes} minutes to read`,
	};
};
const returnHeadingsWithMetadata = ({ content }) => {
	// define regex for identifying headings
	const headingRegex = /^###*\s/;
	// get an array of the content lines that are headings
	const headingLines = content.split('\n')
		.filter((line) => {
			return line.match(headingRegex);
		});
	// set up a container for the heading objects to be generated
	// from the heading lines
	const headingObjects = [];
	// for each heading line
	headingLines.forEach((line) => {
		// get the position of the first space in this heading line,
		// which also corresponds to the semantic level of this header
		const separatorPositionAndHeadingLevel = line.indexOf(' ');
		// get the semantic content of this header
		const lineContent = line.slice(separatorPositionAndHeadingLevel + 1);
		// add to container an object specifying the header's
		// semantic level, semantic content, and slug
		headingObjects.push({
			'level': separatorPositionAndHeadingLevel,
			'content': lineContent,
			'slug': GithubSlugger.slug(lineContent),
		});
	});
	// return the container of heading objects
	return headingObjects;
};
const returnExtractedBriefStatements = ({ briefStatementsRaw }) => {
	// set up container for the statements we'll generate
	const briefStatementsExtracted = [];
	// if briefStatementsRaw is a non-empty array
	if (
		typeof (briefStatementsRaw) === 'object' &&
		briefStatementsRaw[0]
	) {
		// for each brief statement we received
		briefStatementsRaw.forEach((briefStatementRaw) => {
			// add to the container of statements an object specifying this
			// statement's key and semantic content
			briefStatementsExtracted.push({
				'key': briefStatementRaw._id,
				'content': briefStatementRaw.Statement,
			});
		});
	}
	// return the container of statements
	return briefStatementsExtracted;
};
const returnDateAtNoonEasternish = ({ incomingDate }) =>
	new Date(`${incomingDate.slice(0, 10)}T12:00:00+05:00`);
const returnFormattedDateString = ({
	incomingDate,
	formatToken,
}) => {
	// set up container for the date string
	let dateString = '';
	// if format is to be standard, long
	if (formatToken === 'standardLongDate') {
		// get a datetime around noon in Boston on the relevant date
		// and then convert it to a formatted string
		dateString = returnDateAtNoonEasternish({
			incomingDate,
		})
			.toLocaleDateString('en-US', {
				'year': 'numeric',
				'month': 'long',
				'day': 'numeric',
			});
	}
	// if format is to be full month and year
	if (formatToken === 'fullMonthfullYear') {
		// get a datetime around noon in Boston on the relevant date
		// and then convert it to a formatted string
		dateString = returnDateAtNoonEasternish({
			incomingDate,
		})
			.toLocaleDateString('en-US', {
				'year': 'numeric',
				'month': 'long',
			});
	}
	// return the container
	return dateString;
};
const returnTableOfContentsContent = ({ headings }) => {
	// construct markdown table of contents; it's easiest to do before
	// transforming to html because markdown doesn't require us to close one
	// tag, e.g., a nested </ol>, prior to creating another, e.g., a <li>
	// set up container for markdown content
	let markdownHeadingsList = '';
	// for each heading
	headings.forEach((heading) => {
		// set a default list item preface for this heading, and indent it more
		// for lower level headings
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
		// add to the container of markdown content a slug-linked heading as
		// a list item
		markdownHeadingsList +=
			`${listItemPreface}[${heading.content}](#${heading.slug})\n`;
	});
	// get an html version of the markdown headings list
	const htmlHeadingsList = returnSimpleHTMLFromMarkdown({
		'content': markdownHeadingsList,
	});
	// return the html version of the headings list
	return htmlHeadingsList;
};
const returnTransformedScreenContent = ({ defaults, screenID, screenRaw }) => {
	// set up container for the screen's rendered content and
	// add properties to it as appropriate
	const screenRendered = {
		'meta': {},
		'header': {},
		'main': {},
		'footer': {},
	};
	// set up container of all header links, primary and secondary
	const allHeaderLinksTransformed = [];
	// for each header link
	screenRaw.header.Links.forEach((linkRaw) => {
		// set up a transformed version of this link with common properties
		const linkTransformed = {
			'key': linkRaw._id,
			'anchorText': linkRaw.AnchorText,
			'url': linkRaw.URL,
			'category': linkRaw.Category,
		};
		// if this link should open in a new tab
		if (linkRaw.NewTab) {
			linkTransformed.newTab = true;
		}
		// if this link is for this screen
		if (linkRaw.ScreenIDs.includes(screenID)) {
			linkTransformed.forThisScreen = true;
		}
		// add this link to the container of all header links
		allHeaderLinksTransformed.push(linkTransformed);
	});
	// add to the main container groups of primary and secondary header links
	screenRendered.header.links = {
		'primary': allHeaderLinksTransformed.filter(
			linkTransformed => linkTransformed.category === 'primary',
		),
		'secondary': allHeaderLinksTransformed.filter(
			linkTransformed => linkTransformed.category === 'secondary',
		),
	};
	// continue extracting supplied properties
	if (screenRaw.main.MetaTitle) {
		screenRendered.meta.metaTitle = screenRaw.main.MetaTitle;
	}
	if (screenRaw.main.MetaDescription) {
		screenRendered.meta.metaDescription = screenRaw.main.MetaDescription;
	}
	if (screenRaw.main.SocialDescription) {
		screenRendered.meta.socialDescription =
			screenRaw.main.SocialDescription;
	}
	if (screenRaw.main.OpenGraphType) {
		screenRendered.meta.openGraphType = screenRaw.main.OpenGraphType;
	}
	screenRendered.meta.metaImage = returnMetaImage({
		defaults,
		'metaImage': screenRaw.main.MetaImages[0],
		'metaImageGravity': screenRaw.main.MetaImageGravity,
	});
	if (screenRaw.main.MetaOther) {
		screenRendered.meta.metaOther = screenRaw.main.MetaOther;
	}
	if (screenRaw.main.Slug) {
		screenRendered.meta.slug = screenRaw.main.Slug;
	}
	if (screenRaw.main.Title) {
		screenRendered.main.title = screenRaw.main.Title;
	}
	if (screenRaw.main.ContentItems && screenRaw.main.ContentItems[0]) {
		screenRendered.main.contentItems = {};
		screenRaw.main.ContentItems.forEach((contentItemRaw) => {
			screenRendered.main.contentItems[
				contentItemRaw.Key.charAt(0).toLowerCase() +
				contentItemRaw.Key.slice(1)
			] =
				contentItemRaw.Value;
		});
	}
	if (screenRaw.footer && screenRaw.footer.Copy) {
		// replace a token in the footer copy
		// define the needle token to be searched for and replaced, and the one
		// that will replace the first one
		const searchNeedle = '[currentYear]';
		const replacementNeedle = new Date().getFullYear();
		// add the modified copy to the main container
		screenRendered.footer.copy = screenRaw.footer.Copy
			.replace(searchNeedle, replacementNeedle);
	}
	return screenRendered;
};
const returnBasicScreenObject = ({ defaults, screenID, screenRaw }) => {
	// set up container for all of this screen's properties
	const allScreenProperties = {
		'meta': {},
		'header': {},
		'main': {},
		'footer': {},
	};
	// get transformed version of the base screen data
	const screenTransformed = returnTransformedScreenContent({
		defaults, screenID, screenRaw,
	});
	// if screenTransformed contains a meta property
	if (screenTransformed && screenTransformed.meta) {
		// add it to the main container
		allScreenProperties.meta = screenTransformed.meta;
	}
	// if screenTransformed contains a header property
	if (screenTransformed && screenTransformed.header) {
		// add it to the main container
		allScreenProperties.header = screenTransformed.header;
	}
	// if screenTransformed contains a footer property
	if (screenTransformed && screenTransformed.footer) {
		// add it to the main container
		allScreenProperties.footer = screenTransformed.footer;
	}
	// if screenTransformed contains a main property
	if (screenTransformed && screenTransformed.main) {
		// add it to the main container
		allScreenProperties.main = screenTransformed.main;
	}
	/* // if screenTransformed contains a main property
	if (
		screenTransformed &&
		screenTransformed.main &&
		screenTransformed.main.title
	) {
		// add it to the main container
		allScreenProperties.main.title = screenTransformed.main.title;
	}
	// if screenTransformed contains a main property with content items
	if (
		screenTransformed &&
		screenTransformed.main &&
		screenTransformed.main.contentItems
	) {
		// add it to the main container
		allScreenProperties.main.contentItems = screenTransformed.main.title;
	} */
	// return the main container
	return allScreenProperties;
};
const returnArticleIntermediate = ({
	defaults, articleMainRaw, articleSectionsRaw, articleMediaRaw,
}) => {
	// set up container for all sections
	const sectionsIntermediate = [];
	// for each section in the raw data
	articleSectionsRaw.forEach((sectionObject) => {
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
				articleMediaRaw.forEach((mediaItem) => {
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
	if (articleMainRaw.Featured) {
		articleIntermedate.featured = articleMainRaw.Featured;
	}
	if (articleMainRaw.PublicationDate) {
		articleIntermedate.publicationDate = returnFormattedDateString({
			'incomingDate': articleMainRaw.PublicationDate,
			'formatToken': 'standardLongDate',
		});
	}
	if (articleMainRaw.UpdateDate) {
		articleIntermedate.updateDate =
			new Date(articleMainRaw.UpdateDate)
				.toLocaleDateString('en-US', {
					'year': 'numeric',
					'month': 'long',
					'day': 'numeric',
				});
	}
	if (articleMainRaw.Slug) {
		articleIntermedate.slug = articleMainRaw.Slug;
	}
	if (articleMainRaw.Title) {
		articleIntermedate.title = articleMainRaw.Subtitle ?
			`${articleMainRaw.Title.trim()}: ${articleMainRaw.Subtitle}` :
			articleMainRaw.Title;
	}
	if (articleMainRaw.Tagline) {
		articleIntermedate.tagline = articleMainRaw.Tagline;
	}
	if (articleMainRaw.MetaTitle) {
		articleIntermedate.metaTitle = articleMainRaw.MetaTitle;
	}
	if (articleMainRaw.MetaDescription) {
		articleIntermedate.metaDescription = articleMainRaw.MetaDescription;
	}
	if (articleMainRaw.SocialDescription) {
		articleIntermedate.socialDescription = articleMainRaw.SocialDescription;
	}
	articleIntermedate.metaImage = returnMetaImage({
		defaults,
		'metaImage': articleMainRaw.MetaImages[0],
		'metaImageGravity': articleMainRaw.MetaImageGravity,
	});
	if (
		articleMainRaw.HeadImages &&
		articleMainRaw.HeadImages[0]
	) {
		// if the image is missing any of the necessary properties; even if an
		// image caption was supplied, we won't use it with a default image
		if (
			!articleMainRaw.HeadImages[0].hash ||
			!articleMainRaw.HeadImages[0].ext ||
			!articleMainRaw.HeadImages[0].mime ||
			!articleMainRaw.HeadImages[0].alternativeText ||
			!articleMainRaw.HeadImages[0].width ||
			!articleMainRaw.HeadImages[0].height
		) {
			// use a default image
			articleIntermedate.headImage = {
				'url': defaults.standardImageURL,
				'alternativeText': defaults.standardImageAlternativeText,
				'width': defaults.standardImageWidth,
				'height': defaults.standardImageHeight,
				'type': defaults.standardImageType,
			};
			// if all of the image properties are present
		} else {
			// transform the image properties
			articleIntermedate.headImage = {
				'url': returnStandardImageCloudinaryURI({
					'imagePublicID':
						articleMainRaw.HeadImages[0].hash,
					'imageExtension': articleMainRaw.HeadImages[0].ext,
				}),
				'alternativeText': articleMainRaw.HeadImages[0].alternativeText,
				'width': articleMainRaw.HeadImages[0].width,
				'height': articleMainRaw.HeadImages[0].height,
				'type': returnMediaType({
					'mime': articleMainRaw.HeadImages[0].mime,
				}),
				'credit': articleMainRaw.HeadImages[0].caption,
			};
			// if a caption was also specified
			if (articleMainRaw.HeadImageCaption) {
				// add it as a property of the image
				articleIntermedate.headImage.caption =
					articleMainRaw.HeadImageCaption;
			}
		}
	}
	if (articleMainRaw.BriefStatements) {
		articleIntermedate.briefStatements = returnExtractedBriefStatements({
			'briefStatementsRaw': articleMainRaw.BriefStatements,
		});
	}
	if (articleMainRaw.IntroText) {
		articleIntermedate.introText = articleMainRaw.IntroText;
	}
	if (
		articleMainRaw.IntroVideos &&
		articleMainRaw.IntroVideos[0]
	) {
		if (
			articleMainRaw.IntroVideos[0].url &&
			articleMainRaw.IntroVideos[0].alternativeText
		) {
			articleIntermedate.introVideo = {
				'url': articleMainRaw.IntroVideos[0].url,
				'alternativeText':
					articleMainRaw.IntroVideos[0].alternativeText,
				'type': returnMediaType({
					'mime': articleMainRaw.IntroVideos[0].mime,
				}),
			};
			if (articleMainRaw.IntroVideos[0].caption) {
				articleIntermedate.introVideo.credit =
					articleMainRaw.IntroVideos[0].caption;
			}
		}
	}
	if (sectionsIntermediate && sectionsIntermediate[0]) {
		articleIntermedate.sections = sectionsIntermediate;
	}
	if (articleMainRaw.SimpleBody) {
		articleIntermedate.simpleBody = articleMainRaw.SimpleBody;
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
const returnArticleRendered = ({ content }) => {
	// set up container for the article's rendered content
	const articleRendered = {
		'meta': {},
		'frontMatter': {},
		'mainContent': {},
	};
	// collect the article's metadata
	if (content.featured) {
		articleRendered.frontMatter.featured = content.featured;
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
					'options': {
						'removeEndCapTags': true,
					},
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
const returnMetaImage = ({ defaults, metaImage, metaImageGravity }) => {
	// set up a container for the meta image properties we'll generate
	const metaImageToReturn = {};
	// set a default meta image gravity to use
	let metaImageGravityToUse = metaImageGravity ? metaImageGravity : 'center';
	// if no meta image was supplied, or if we're missing
	// any of the necessary properties
	if (
		!metaImage ||
		!metaImage.hash ||
		!metaImage.ext ||
		!metaImage.mime ||
		!metaImage.alternativeText
	) {
		// use the default meta image properties
		metaImageToReturn.url = defaults.metaImageURL;
		metaImageToReturn.alternativeText = defaults.metaImageAlternativeText;
		metaImageToReturn.type = defaults.metaImageType;
		// if all of the necessary properties are present
	} else {
		// get a transformed version of the selected meta image properties
		metaImageToReturn.url = returnSocialImageCloudinaryURI({
			'imagePublicID':
				metaImage.hash,
			'imageExtension': metaImage.ext,
			'gravity': metaImageGravityToUse,
		});
		metaImageToReturn.alternativeText = metaImage.alternativeText;
		metaImageToReturn.type = returnMediaType({
			'mime': metaImage.mime,
		});
	}
	// return the main container
	return metaImageToReturn;
};
export const returnTransformedProfileScreenContent = ({
	screenID,
	defaultsRaw,
	screenRaw,
	skillsRaw,
	professionalExperiencesRaw,
	educationCertificationRaw,
	volunteerExperiencesRaw,
}) => {
	// get a transformed version of defaults
	const defaults = returnDefaultValuesObject({ defaultsRaw });
	// set up container for all of this screen's properties
	const allScreenProperties = returnBasicScreenObject(
		{ defaults, screenID, screenRaw },
	);
	// set up skills structure inside main container
	allScreenProperties.main.skills = {
		'technical': {
			'featured': [],
			'standard': [],
		},
		'business': {
			'featured': [],
			'standard': [],
		},
		'design': {
			'featured': [],
			'standard': [],
		},
	};
	// for each raw skill
	skillsRaw.forEach((skillRaw) => {
		// define the category and prominence keys used to access the
		// arrays inside the main container
		const categoryKey = skillRaw.Category.toLowerCase();
		const prominenceKey = skillRaw.Featured ? 'featured' : 'standard';
		// add a transformed version of this skill to the appropriate array
		allScreenProperties.main.skills[categoryKey][prominenceKey].push({
			'key': skillRaw._id,
			'name': skillRaw.SkillName,
			'percentageExpertise': skillRaw.PercentageExpertise,
		});
	});
	// set up professional experiences container inside the main container
	allScreenProperties.main.professionalExperiences = [];
	// for each professional experience
	professionalExperiencesRaw.forEach((professionalExperience) => {
		// add a transformed version of this experience to the appropriate array
		allScreenProperties.main.professionalExperiences.push({
			'key': professionalExperience._id,
			'title': professionalExperience.Title,
			'description': returnSimpleHTMLFromMarkdown({
				'content': professionalExperience.Description,
				'options': {
					'removeEndCapTags': true,
				},
			}),
			'startDate': returnFormattedDateString({
				'incomingDate': professionalExperience.StartDate,
				'formatToken': 'fullMonthfullYear',
			}),
			'endDate': returnFormattedDateString({
				'incomingDate': professionalExperience.EndDate,
				'formatToken': 'fullMonthfullYear',
			}),
		});
	});
	// set up education and certification container inside the main container
	allScreenProperties.main.educationCertification = [];
	// for each education / certification item
	educationCertificationRaw.forEach((educationCertification) => {
		// add a transformed version of this item to the appropriate array
		allScreenProperties.main.educationCertification.push({
			'key': educationCertification._id,
			'header': educationCertification.Header,
			'tagline': educationCertification.Tagline,
			'details': returnSimpleHTMLFromMarkdown({
				'content': educationCertification.Details,
				'options': {
					'removeEndCapTags': true,
				},
			}),
			'startYear': educationCertification.StartYear,
			'endYear': educationCertification.EndYear,
		});
	});
	// set up volunteer experiences container inside the main container
	allScreenProperties.main.volunteerExperiences = [];
	// for each volunteer experience
	volunteerExperiencesRaw.forEach((volunteerExperience) => {
		// add a transformed version of this experience to the appropriate array
		allScreenProperties.main.volunteerExperiences.push({
			'key': volunteerExperience._id,
			'title': volunteerExperience.Title,
			'description': volunteerExperience.Description,
			'forWhom': volunteerExperience.ForWhom,
			'startYear': volunteerExperience.StartYear,
			'endYear': volunteerExperience.EndYear,
		});
	});
	// return the main container
	return allScreenProperties;
};
export const returnTransformedLibLabScreenContent = ({
	screenID, defaultsRaw, screenRaw, articlesRaw,
}) => {
	// get a transformed version of defaults
	const defaults = returnDefaultValuesObject({ defaultsRaw });
	// set up container for all of this screen's properties
	const allScreenProperties = returnBasicScreenObject(
		{ defaults, screenID, screenRaw },
	);
	// add articles property to main container
	allScreenProperties.main.articles = {
		'featured': {},
		'standard': {},
	};
	// set up an intermediate container for all articles, featured and standard
	const articlesTransformed = [];
	// for each article in the raw data
	articlesRaw.forEach((articleRaw) => {
		// if all required properties are present for this article,
		// set up a new, single section container and add the
		// corresponding properties from the raw section data, transformed
		// as appropriate; then push to the container for all articles
		if (
			articleRaw._id &&
			articleRaw.Slug &&
			articleRaw.Title &&
			articleRaw.PublicationDate &&
			articleRaw.TeaserDescription &&
			articleRaw.TeaserImages &&
			articleRaw.TeaserImages[0] &&
			articleRaw.TeaserImages[0].alternativeText &&
			articleRaw.TeaserImages[0].width &&
			articleRaw.TeaserImages[0].height &&
			articleRaw.TeaserImages[0].ext &&
			articleRaw.TeaserImages[0].hash &&
			articleRaw.TeaserImages[0].mime
		) {
			const articleTransformed = {
				'key': articleRaw._id,
				'slug': articleRaw.Slug,
				'title': articleRaw.Subtitle ?
					articleRaw.Title.trim() + ': ' +
					articleRaw.Subtitle :
					articleRaw.Title,
				'publicationDate': articleRaw.PublicationDate,
				'teaserDescription': returnSimpleHTMLFromMarkdown({
					'content': articleRaw.TeaserDescription,
					'options': {
						'removeEndCapTags': true,
					},
				}),
				'teaserImage': {
					'url': returnStandardImageCloudinaryURI({
						'imagePublicID':
							articleRaw.TeaserImages[0].hash,
						'imageExtension': articleRaw.TeaserImages[0].ext,
					}),
					'alternativeText':
						articleRaw.TeaserImages[0].alternativeText,
					'width': articleRaw.TeaserImages[0].width,
					'height': articleRaw.TeaserImages[0].height,
					'type': returnMediaType({
						'mime': articleRaw.TeaserImages[0].mime,
					}),
				},
			};
			if (articleRaw.Tagline) {
				articleTransformed.tagline = articleRaw.Tagline;
			}
			if (articleRaw.Featured) {
				articleTransformed.featured = true;
			}
			articlesTransformed.push(articleTransformed);
		}
	});
	// add the featured, transformed articles to the main container
	allScreenProperties.main.articles.featured =
		articlesTransformed.filter(article => article.featured);
	// add the standard, transformed articles to the main container
	allScreenProperties.main.articles.standard =
		articlesTransformed.filter(article => !article.featured);
	// return the main container
	return allScreenProperties;
};
export const returnTransformedArticleScreenContent = ({
	screenID,
	defaultsRaw,
	screenRaw,
	articleMainRaw,
	articleSectionsRaw,
	articleMediaRaw,
}) => {
	// get a transformed version of defaults
	const defaults = returnDefaultValuesObject({ defaultsRaw });
	// set up container for all of this screen's properties
	const allScreenProperties = returnBasicScreenObject(
		{ defaults, screenID, screenRaw },
	);
	// get the first, intermediate version of the article's content
	const articleIntermedate = returnArticleIntermediate({
		defaults, articleMainRaw, articleSectionsRaw, articleMediaRaw,
	});
	// get the rendered version of the article's content
	const articleRendered = returnArticleRendered({
		'content': articleIntermedate,
	});
	// integrate the rendered article into allScreenProperties
	allScreenProperties.main.title = articleRendered.frontMatter.title;
	delete articleRendered.frontMatter.title;
	allScreenProperties.meta = {
		...allScreenProperties.meta,
		...articleRendered.meta,
	};
	delete articleRendered.meta;
	allScreenProperties.main.article = articleRendered;
	// return the main container
	return allScreenProperties;
};
export const returnTransformedSimpleScreenContent = ({
	screenID,
	defaultsRaw,
	screenRaw,
}) => {
	// get a transformed version of defaults
	const defaults = returnDefaultValuesObject({ defaultsRaw });
	// set up container for all of this screen's properties
	const allScreenProperties = returnBasicScreenObject(
		{ defaults, screenID, screenRaw },
	);
	// if there are content items, replace them with transformed versions
	// of themselves
	// set up temporary container of content items
	const contentItemsTransformed = {};
	Object.keys(allScreenProperties.main.contentItems)
		.forEach((contentItemKey) => {
			contentItemsTransformed[contentItemKey] =
				returnSimpleHTMLFromMarkdown({
					'content':
						allScreenProperties.main.contentItems[contentItemKey],
					'options': {
						'removeEndCapTags': true,
					},
				});
		});
	allScreenProperties.main.contentItems = contentItemsTransformed;
	// return the main container
	return allScreenProperties;
};
