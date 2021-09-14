/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
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
const returnTransformedScreenContent = ({ screenRaw }) => {
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
		screenRendered.meta.title = screenRaw.main.MetaTitle;
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
	if (
		screenRaw.main.MetaImages &&
		screenRaw.main.MetaImages[0] &&
		screenRaw.main.MetaImages[0].hash &&
		screenRaw.main.MetaImages[0].ext &&
		screenRaw.main.MetaImages[0].mime &&
		screenRaw.main.MetaImages[0].alternativeText &&
		screenRaw.main.MetaImageGravity
	) {
		screenRendered.meta.metaImage = {
			'url': returnSocialImageCloudinaryURI({
				'imagePublicID':
					screenRaw.main.MetaImages[0].hash,
				'imageExtension': screenRaw.main.MetaImages[0].ext,
				'gravity': screenRaw.main.MetaImageGravity,
			}),
			'alternativeText': screenRaw.main.MetaImages[0].alternativeText,
			'type': returnMediaType({
				'mime': screenRaw.main.MetaImages[0].mime,
			}),
		};
	}
	if (screenRaw.main.MetaOther) {
		screenRendered.meta.metaOther = screenRaw.main.MetaOther;
	}
	if (screenRaw.hasTableOfContents) {
		screenRendered.meta.hasTableOfContents = true;
	}
	if (screenRaw.main.Slug) {
		screenRendered.main.url = screenRaw.main.Slug;
	}
	if (screenRaw.main.Title) {
		screenRendered.main.title = screenRaw.main.Title;
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
export const returnTransformedLibLabScreenContent = ({
	defaults, screenRaw, articlesRaw,
}) => {
	// set up container for all of this screen's properties
	const allScreenProperties = {
		'meta': {},
		'header': {},
		'main': {
			'articles': {
				'featured': {},
				'standard': {},
			},
		},
		'footer': {},
	};
	// get transformed version of the base screen data
	const screenTransformed = returnTransformedScreenContent({
		'screenRaw': screenRaw,
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
		// if the main property contains a url property
		if (screenTransformed.main.url) {
			// add it to the main container
			allScreenProperties.main.url = screenTransformed.main.url;
		}
		// if the main property contains a title property
		if (screenTransformed.main.title) {
			// add it to the main container
			allScreenProperties.main.title = screenTransformed.main.title;
		}
	}
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
