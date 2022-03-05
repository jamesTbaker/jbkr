import readingtime from 'reading-time';
import GithubSlugger from 'github-slugger';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
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
const returnImageURI = ({
	imagePublicID, imageExtension, typeToken,
}) => {
	const uriBase = 'https://res.cloudinary.com/jbkrcdn/image/upload/';
	if (typeToken) {
		return uriBase + typeToken + '_' + imagePublicID + imageExtension;
	} else {
		return uriBase + imagePublicID + imageExtension;
	}
};
const returnSimpleHTMLFromMarkdown = ({ content, options }) => {
	// set up container for value to return
	let renderedContent = '';
	// if content is a string
	if (typeof (content) === 'string') {
		// get an initial render using a simple plugin stack
		renderedContent = unified()
			.use(remarkParse)
			.use(remarkRehype, { 'allowDangerousHtml': true })
			.use(rehypeRaw)
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
			.use(remarkRehype, { 'allowDangerousHtml': true })
			.use(rehypeRaw)
			.use(rehypeExternalLinks)
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
const returnTreeFromList = ({ list }) => {
	var map = {}, node, roots = [], i;
	for (i = 0; i < list.length; i += 1) {
		// initialize the map
		map[list[i].ID] = i;
		// initialize the children
		list[i].children = [];
	}
	for (i = 0; i < list.length; i += 1) {
		node = list[i];
		if (node.parentID !== null) {
			// if you have dangling branches,
			// check that map[node.parentId] exists
			list[map[node.parentID]].children.push(node);
		} else {
			roots.push(node);
		}
	}
	return roots;
};
const returnHeadingsWithMetadata = ({ content }) => {
	// define regex for identifying headings
	const headingRegex = /^###*\s/;
	// get an array of the content lines that are headings
	const headingsStageOne = content.split('\n')
		.filter((line) => {
			return line.match(headingRegex);
		});

	// set up a container for an intermediate set of heading objects
	// to be generated from the heading lines
	const headingsStageTwo = [];
	// set up a reference to
	// for each heading line
	headingsStageOne.forEach((line) => {
		// get the position of the first space in this heading line,
		// which also corresponds to the semantic level of this header
		const separatorPositionAndHeadingLevel = line.indexOf(' ');
		// get the semantic content of this header
		const lineContent = line.slice(separatorPositionAndHeadingLevel + 1);
		// add to container an object specifying the header's
		// semantic level, semantic content, and slug / id
		headingsStageTwo.push({
			'level': separatorPositionAndHeadingLevel - 1,
			'content': lineContent,
			'ID': GithubSlugger.slug(lineContent.trim()),
		});
	});

	headingsStageTwo.reverse();
	const headingsStageThree = [];
	headingsStageTwo.forEach((headingStageTwo, headingStageTwoIndex) => {
		let parentID = null;
		const remainingHeadings = headingsStageTwo.filter(
			(remainingHeading, remainingHeadingIndex) =>
				remainingHeadingIndex > headingStageTwoIndex,
		);
		remainingHeadings
			.forEach((remainingHeading) => {
				if (
					parentID === null &&
					remainingHeading.level < headingStageTwo.level
				) {
					parentID = remainingHeading.ID;
				}
			});
		headingsStageThree.push({
			'ID': headingStageTwo.ID,
			'content': headingStageTwo.content,
			parentID,
		});
	});
	headingsStageThree.reverse();
	const headingsStageFour =
		returnTreeFromList({ 'list': headingsStageThree });

	// return the tree
	return headingsStageFour;
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
/* const returnTableOfContentsContent = ({ headings }) => {
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
}; */
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
	// sort header links
	screenRaw.headerMain.Links.sort((a, b) => a.OrderInSet - b.OrderInSet);
	// for each header link
	screenRaw.headerMain.Links.forEach((linkRaw) => {
		// if this link is not disabled
		if (!linkRaw.Disabled) {
			// set up a transformed version of this link with common properties
			const linkTransformed = {
				'key': linkRaw._id,
				'anchorText': linkRaw.AnchorText,
				'anchorIconBefore':
					linkRaw.AnchorIconBefore ?
						linkRaw.AnchorIconBefore.replace(/_/g, '-') : null,
				'url': linkRaw.URL,
				'category': linkRaw.Category,
			};
			// if this link should open in a new tab
			if (linkRaw.NewTab) {
				linkTransformed.newTab = true;
			}
			// if this link is for this screen
			if (linkRaw.ScreenIDs && linkRaw.ScreenIDs.includes(screenID)) {
				linkTransformed.forThisScreen = true;
			}
			// add this link to the container of all header links
			allHeaderLinksTransformed.push(linkTransformed);
		}
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
	// if an announcement was specified
	if (
		screenRaw.headerMain.AnnouncementBodyAnchor &&
		screenRaw.headerMain.AnnouncementBodySlug
	) {
		// add it to header
		screenRendered.header.announcement = {
			'preface': screenRaw.headerMain.AnnouncementPreface,
			'bodyAnchor': returnSimpleHTMLFromMarkdown({
				'content': screenRaw.headerMain.AnnouncementBodyAnchor,
				'options': {
					'removeEndCapTags': true,
				},
			}),
			'bodyURL': screenRaw.headerMain.AnnouncementBodySlug,
		};
		// if no announcement was specified
	} else {
		// construct full article title
		const articleFullTitle = screenRaw.headerArticle.Subtitle ?
			screenRaw.headerArticle.Title + ': ' +
			screenRaw.headerArticle.Subtitle :
			screenRaw.headerArticle.Title;
		// add article to header
		screenRendered.header.announcement = {
			'preface': screenRaw.headerMain.AnnouncementPreface,
			'bodyAnchor': returnSimpleHTMLFromMarkdown({
				'content': articleFullTitle,
				'options': {
					'removeEndCapTags': true,
				},
			}),
			'bodyURL': '/library/' + screenRaw.headerArticle.Slug,
		};
	}
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
	if (
		screenRaw.main.TextContentItems &&
		screenRaw.main.TextContentItems[0]
	) {
		screenRendered.main.textContentItems = {};
		screenRaw.main.TextContentItems.forEach((contentItemRaw) => {
			screenRendered.main.textContentItems[
				contentItemRaw.Key.charAt(0).toLowerCase() +
				contentItemRaw.Key.slice(1)
			] =
				contentItemRaw.Value;
		});
	}
	if (
		screenRaw.main.DataContentItems &&
		screenRaw.main.DataContentItems[0]
	) {
		screenRendered.main.dataContentItems = {};
		screenRaw.main.DataContentItems.forEach((contentItemRaw) => {
			screenRendered.main.dataContentItems[
				contentItemRaw.Key.charAt(0).toLowerCase() +
				contentItemRaw.Key.slice(1)
			] =
				contentItemRaw.Value;
		});
	}
	if (
		screenRaw.main.MediaContentItemIDs &&
		screenRaw.main.MediaContentItemIDs[0] &&
		screenRaw.mainMedia &&
		screenRaw.mainMedia[0]
	) {
		screenRendered.main.mediaContentItems = {};
		screenRaw.main.MediaContentItemIDs.forEach((contentItemIDRaw) => {
			screenRaw.mainMedia.forEach((contentItemRaw) => {
				if (contentItemRaw._id === contentItemIDRaw.Value) {
					if (contentItemRaw.mime.startsWith('image')) {
						screenRendered.main
							.mediaContentItems[contentItemIDRaw.Key] =
						{
							'url': returnImageURI({
								'imagePublicID':
									contentItemRaw.hash,
								'imageExtension': contentItemRaw.ext,
							}),
							'alternativeText':
								contentItemRaw.alternativeText,
							'width': contentItemRaw.width,
							'height': contentItemRaw.height,
							'type': returnMediaType({
								'mime': contentItemRaw.mime,
							}),
							'credit': contentItemRaw.caption,
						};
					}
					if (contentItemRaw.mime.startsWith('video')) {
						screenRendered.main
							.mediaContentItems[contentItemIDRaw.Key] =
						{
							'url': contentItemRaw.url,
							'alternativeText':
								contentItemRaw.alternativeText,
							'type': returnMediaType({
								'mime': contentItemRaw.mime,
							}),
						};
					}
				}
			});
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
		const sectionIntermediate = {
			'dataID': sectionObject._id,
		};
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
	if (
		articleMainRaw.Images &&
		articleMainRaw.Images[0]
	) {
		articleIntermedate.metaImage = returnMetaImage({
			defaults,
			'image': articleMainRaw.Images[0],
		});
	}
	if (
		articleMainRaw.Images &&
		articleMainRaw.Images[0]
	) {
		// if the image has all of the necessary properties
		if (
			articleMainRaw.Images &&
			articleMainRaw.Images[0] &&
			articleMainRaw.Images[0].hash &&
			articleMainRaw.Images[0].ext &&
			articleMainRaw.Images[0].mime &&
			articleMainRaw.Images[0].alternativeText &&
			articleMainRaw.Images[0].width &&
			articleMainRaw.Images[0].height
		) {
			// transform the image properties
			articleIntermedate.headImage = {
				'url': returnImageURI({
					'imagePublicID':
						articleMainRaw.Images[0].hash,
					'imageExtension': articleMainRaw.Images[0].ext,
					'typeToken': 'header',
				}),
				'alternativeText':
					articleMainRaw.Images[0].alternativeText,
				'width': articleMainRaw.Images[0].width,
				'height': articleMainRaw.Images[0].height,
				'type': returnMediaType({
					'mime': articleMainRaw.Images[0].mime,
				}),
				'credit': articleMainRaw.Images[0].caption,
			};
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
		articleMainRaw.IntroVideos[0] &&
		articleMainRaw.IntroVideos[0].url &&
		articleMainRaw.IntroVideos[0].alternativeText &&
		articleMainRaw.IntroVideoPosters &&
		articleMainRaw.IntroVideoPosters[0] &&
		articleMainRaw.IntroVideoPosters[0].hash &&
		articleMainRaw.IntroVideoPosters[0].ext &&
		articleMainRaw.IntroVideoPosters[0].mime &&
		articleMainRaw.IntroVideoPosters[0].alternativeText &&
		articleMainRaw.IntroVideoPosters[0].width &&
		articleMainRaw.IntroVideoPosters[0].height
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
		// transform the image properties
		articleIntermedate.introVideoPoster = {
			'url': returnImageURI({
				'imagePublicID':
					articleMainRaw.IntroVideoPosters[0].hash,
				'imageExtension': articleMainRaw.IntroVideoPosters[0].ext,
			}),
			'alternativeText':
				articleMainRaw.IntroVideoPosters[0].alternativeText,
			'width': articleMainRaw.IntroVideoPosters[0].width,
			'height': articleMainRaw.IntroVideoPosters[0].height,
			'type': returnMediaType({
				'mime': articleMainRaw.IntroVideoPosters[0].mime,
			}),
			'credit': articleMainRaw.IntroVideoPosters[0].caption,
		};
	}
	if (sectionsIntermediate && sectionsIntermediate[0]) {
		articleIntermedate.sections = [];
		articleMainRaw.Section.forEach((rawSection) => {
			sectionsIntermediate.forEach((intermediateSection) => {
				if (rawSection.ref === intermediateSection.dataID) {
					articleIntermedate.sections.push(intermediateSection);
				}
			});
		});
	}
	if (articleMainRaw.UnifiedBody && articleMainRaw.UnifiedBody[0]) {
		articleIntermedate.unifiedBody = [];
		articleMainRaw.UnifiedBody.forEach((unifiedBodyPart) => {
			const thisPartID = unifiedBodyPart.ref;
			if (
				unifiedBodyPart.kind === 'ComponentContentAubText'
			) {
				articleMainRaw.UnifiedBodyTexts.forEach((unifiedBodyText) => {
					if (unifiedBodyText._id === thisPartID) {
						articleIntermedate.unifiedBody.push({
							'type': 'text',
							'key': unifiedBodyText._id,
							'text': unifiedBodyText.Text,
						});
					}
				});
			}
			if (
				unifiedBodyPart.kind ===
				'ComponentContentAubCodeEmbed'
			) {
				articleMainRaw.UnifiedBodyCodeEmbeds
					.forEach((unifiedBodyCodeEmbed) => {
						if (unifiedBodyCodeEmbed._id === thisPartID) {
							articleIntermedate.unifiedBody.push({
								'type': 'codeEmbed',
								'key': unifiedBodyCodeEmbed._id,
								'accessibilityTitle':
									unifiedBodyCodeEmbed.AccessibilityTitle,
								'url': unifiedBodyCodeEmbed.URL,
								'file': unifiedBodyCodeEmbed.File,
								'caption': unifiedBodyCodeEmbed.Caption,
							});
						}
					});
			}
			if (
				unifiedBodyPart.kind ===
				'ComponentContentAubMedia'
			) {
				articleMainRaw.UnifiedBodyMediaItems
					.forEach((unifiedBodyMediaItemSet) => {
						if (unifiedBodyMediaItemSet._id === thisPartID) {
							const mediaItemIDsThisPart = [];
							unifiedBodyMediaItemSet.Files.
								forEach((mediaItemID) => {
									mediaItemIDsThisPart.push(mediaItemID);
								});
							const mediaItemsThisPart = [];
							const mediaItemCreditsThisPart = [];
							mediaItemIDsThisPart.forEach((mediaItemID) => {
								articleMediaRaw.forEach((mediaItem) => {
									if (mediaItem._id === mediaItemID) {
										mediaItemCreditsThisPart.push(
											mediaItem.caption,
										);
										mediaItemsThisPart.push({
											'key': mediaItem._id,
											'ext': mediaItem.ext,
											'hash': mediaItem.hash,
											'url': mediaItem.url,
											'type': returnMediaType({
												'mime': mediaItem.mime,
											}),
											'alternativeText':
												mediaItem.alternativeText,
											'credit': mediaItem.caption,
											'width': mediaItem.width,
											'height': mediaItem.height,
										});
									}
								});
							});
							articleIntermedate.unifiedBody.push({
								'type': 'media',
								'key': unifiedBodyMediaItemSet._id,
								'media': mediaItemsThisPart,
								'caption': unifiedBodyMediaItemSet.Caption,
								'credits': mediaItemCreditsThisPart,
							});

						}
					});
			}
		});
	}
	articleIntermedate.internalTags = [];
	articleMainRaw.InternalTags.forEach((internalTagObject) => {
		articleIntermedate.internalTags.push(internalTagObject.HashtagText);
	});
	articleIntermedate.twitterTags = [];
	articleMainRaw.TwitterHashtags.forEach((twitterTagObject) => {
		articleIntermedate.twitterTags.push(twitterTagObject.HashtagText);
	});


	// collect the text from simple body, the various sections and subsections,
	// and brief statements; will be used to determine stats for the content and
	// develop a table of contents
	const textCollection = {
		'approximateMain': `${articleIntermedate.title}
${articleIntermedate.publicationDate}
`,
		'briefStatements': '',
	};


	if (articleIntermedate.unifiedBody && articleIntermedate.unifiedBody[0]) {
		articleIntermedate.unifiedBody.forEach((unifiedBodyPart) => {
			if (unifiedBodyPart.type === 'text') {
				textCollection.approximateMain +=
					unifiedBodyPart.text + '\n';
			}
		});
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
	if (content.introVideoPoster) {
		articleRendered.frontMatter.introVideoPoster =
			content.introVideoPoster;
	}
	if (content.headingsWithMetadata) {
		articleRendered.frontMatter.tableOfContents =
			content.headingsWithMetadata;
	}
	if (content.publicationDate) {
		articleRendered.frontMatter.publicationDate = content.publicationDate;
	}
	if (content.updateDate) {
		articleRendered.frontMatter.updateDate = content.updateDate;
	}
	if (content.stats) {
		articleRendered.frontMatter.stats = {
			'words': content.stats.words,
			'minutes': content.stats.minutes,
		};
	}
	if (content.unifiedBody) {
		articleRendered.mainContent.unifiedBody = [];
		content.unifiedBody.forEach((unifiedBodyPart) => {
			if (unifiedBodyPart.type === 'text') {
				articleRendered.mainContent.unifiedBody.push({
					'type': unifiedBodyPart.type,
					'key': unifiedBodyPart.key,
					'text': returnSluggifiedHTMLFromMarkdown({
						'content': unifiedBodyPart.text,
					}),
				});
			}
			if (unifiedBodyPart.type === 'codeEmbed') {
				articleRendered.mainContent.unifiedBody.push({
					'type': unifiedBodyPart.type,
					'key': unifiedBodyPart.key,
					'accessibilityTitle': unifiedBodyPart.accessibilityTitle,
					'url': unifiedBodyPart.url,
					'file': unifiedBodyPart.file,
					'caption': returnSimpleHTMLFromMarkdown({
						'content': unifiedBodyPart.caption,
						'options': {
							'removeEndCapTags': true,
						},
					}),
				});
			}
			if (unifiedBodyPart.type === 'media') {
				const renderedCaptions = [];
				unifiedBodyPart.credits.forEach((credit) => {
					renderedCaptions.push(returnSimpleHTMLFromMarkdown({
						'content': credit,
						'options': {
							'removeEndCapTags': true,
						},
					}));
				});
				articleRendered.mainContent.unifiedBody.push({
					'type': unifiedBodyPart.type,
					'key': unifiedBodyPart.key,
					'media': unifiedBodyPart.media,
					'caption': returnSimpleHTMLFromMarkdown({
						'content': unifiedBodyPart.caption,
						'options': {
							'removeEndCapTags': true,
						},
					}),
					'credits': renderedCaptions,
				});
			}
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
	if (content.internalTags) {
		articleRendered.frontMatter.internalTags = content.internalTags;
	}
	if (content.twitterTags) {
		articleRendered.frontMatter.twitterTags = content.twitterTags;
	}
	// return the container of the article's rendered content
	return articleRendered;
};
const returnMetaImage = ({ defaults, image }) => {
	// set up a container for the meta image properties we'll generate
	const metaImageToReturn = {};
	// if no meta image was supplied, or if we're missing
	// any of the necessary properties
	if (
		!image ||
		!image.hash ||
		!image.ext ||
		!image.mime ||
		!image.alternativeText
	) {
		// use the default meta image properties
		metaImageToReturn.url = defaults.metaImageURL;
		metaImageToReturn.alternativeText = defaults.metaImageAlternativeText;
		metaImageToReturn.type = defaults.metaImageType;
		// if all of the necessary properties are present
	} else {
		// get a transformed version of the selected meta image properties
		metaImageToReturn.url = returnImageURI({
			'imagePublicID':
				image.hash,
			'imageExtension': image.ext,
			'typeToken': 'socialBase',
		});
		metaImageToReturn.alternativeText = image.alternativeText;
		metaImageToReturn.type = returnMediaType({
			'mime': image.mime,
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
			'employer': professionalExperience.Employer,
			'description': returnSimpleHTMLFromMarkdown({
				'content': professionalExperience.Description,
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
	allScreenProperties.main.educationCertifications = [];
	// for each education / certification item
	educationCertificationRaw.forEach((educationCertification) => {
		// add a transformed version of this item to the appropriate array
		allScreenProperties.main.educationCertifications.push({
			'key': educationCertification._id,
			'type': educationCertification.Type,
			'header': educationCertification.Header,
			'tagline': educationCertification.Tagline,
			'details': returnSimpleHTMLFromMarkdown({
				'content': educationCertification.Details,
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
		'primary': {},
		'secondary': {},
		'tertiary': {},
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
			articleRaw.Images &&
			articleRaw.Images[0] &&
			articleRaw.Images[0].alternativeText &&
			articleRaw.Images[0].width &&
			articleRaw.Images[0].height &&
			articleRaw.Images[0].ext &&
			articleRaw.Images[0].hash &&
			articleRaw.Images[0].mime
		) {
			const articleTransformed = {
				'key': articleRaw._id,
				'slug': articleRaw.Slug,
				'title': articleRaw.Subtitle ?
					articleRaw.Title.trim() + ': ' +
					articleRaw.Subtitle :
					articleRaw.Title,
				'publicationDate': returnFormattedDateString({
					'incomingDate': articleRaw.PublicationDate,
					'formatToken': 'standardLongDate',
				}),
				'teaserDescription': returnSimpleHTMLFromMarkdown({
					'content': articleRaw.TeaserDescription,
				}),
				'teaserImages': {
					'small': {
						'url': returnImageURI({
							'imagePublicID':
								articleRaw.Images[0].hash,
							'imageExtension': articleRaw.Images[0].ext,
							'typeToken': 'teaserStandardSmall',
						}),
						'alternativeText':
							articleRaw.Images[0].alternativeText,
						'width': articleRaw.Images[0].width,
						'height': articleRaw.Images[0].height,
						'type': returnMediaType({
							'mime': articleRaw.Images[0].mime,
						}),
						'credit': articleRaw.Images[0].caption,
					},
					'large': {
						'url': returnImageURI({
							'imagePublicID':
								articleRaw.Images[0].hash,
							'imageExtension': articleRaw.Images[0].ext,
							'typeToken': 'teaserStandardLarge',
						}),
						'alternativeText':
							articleRaw.Images[0].alternativeText,
						'width': articleRaw.Images[0].width,
						'height': articleRaw.Images[0].height,
						'type': returnMediaType({
							'mime': articleRaw.Images[0].mime,
						}),
						'credit': articleRaw.Images[0].caption,
					},
				},
			};
			if (articleRaw.Tagline) {
				articleTransformed.tagline = returnSimpleHTMLFromMarkdown({
					'content': articleRaw.Tagline,
					'options': {
						'removeEndCapTags': true,
					},
				});
			}
			if (articleRaw.Featured) {
				articleTransformed.featured = true;
			}
			if (articleRaw.UpdateDate) {
				articleTransformed.updateDate = returnFormattedDateString({
					'incomingDate': articleRaw.PublicationDate,
					'formatToken': 'standardLongDate',
				});
			}
			if (
				articleRaw.FeaturedTeaserVideos &&
				articleRaw.FeaturedTeaserVideos[0]
			) {
				articleTransformed.featuredTeaserVideo = {
					'url': articleRaw.FeaturedTeaserVideos[0].url,
					'alternativeText':
						articleRaw.FeaturedTeaserVideos[0].alternativeText,
					'type': returnMediaType({
						'mime': articleRaw.FeaturedTeaserVideos[0].mime,
					}),
				};
			}
			if (
				articleRaw.FeaturedTeaserVideos &&
				articleRaw.FeaturedTeaserVideos[0] &&
				articleRaw.FeaturedTeaserVideos[0].caption
			) {
				articleTransformed.featuredTeaserVideo.credit =
					articleRaw.FeaturedTeaserVideos[0].caption;
			}
			articlesTransformed.push(articleTransformed);
		}
	});
	// add the featured, transformed articles to the main container
	allScreenProperties.main.articles.featured =
		articlesTransformed.filter(article => article.featured);
	// add the standard, transformed articles to the main container
	const nonFeaturedArticlesTransformed =
		articlesTransformed.filter(article => !article.featured);
	allScreenProperties.main.articles.primary =
		nonFeaturedArticlesTransformed.filter((article, articleIndex) =>
			!article.featured && [0, 1].includes(articleIndex),
		);
	allScreenProperties.main.articles.secondary =
		nonFeaturedArticlesTransformed.filter((article, articleIndex) =>
			!article.featured && [2, 3, 4].includes(articleIndex),
		);
	allScreenProperties.main.articles.tertiary =
		nonFeaturedArticlesTransformed.filter((article, articleIndex) =>
			!article.featured && articleIndex > 4,
		);
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
	// if there are text content items, replace them with transformed versions
	// of themselves
	const textContentItemsTransformed = {};
	Object.keys(allScreenProperties.main.textContentItems)
		.forEach((contentItemKey) => {
			textContentItemsTransformed[contentItemKey] =
				returnSimpleHTMLFromMarkdown({
					'content': allScreenProperties.main
						.textContentItems[contentItemKey],
					'options': {
						'removeEndCapTags': true,
					},
				});
		});
	// return the main container
	return allScreenProperties;
};
export const returnTransformedMetaScreenContent = ({
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
	// if there are text content items, replace them with transformed versions
	// of themselves
	const textContentItemsTransformed = {};
	Object.keys(allScreenProperties.main.textContentItems)
		.forEach((contentItemKey) => {
			textContentItemsTransformed[contentItemKey] =
				returnSluggifiedHTMLFromMarkdown({
					'content': allScreenProperties.main
						.textContentItems[contentItemKey],
					'options': {
						'removeEndCapTags': true,
					},
				});
		});
	allScreenProperties.main.textContentItems =
		textContentItemsTransformed;
	// return the main container
	return allScreenProperties;
};
