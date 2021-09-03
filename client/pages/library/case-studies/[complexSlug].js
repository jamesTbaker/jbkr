/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../../../lib/mongodb';
import { ObjectID } from 'bson';
import {
	returnHTMLFromMarkdown,
	returnSocialImageCloudinaryURI,
} from '@jbkr/client-helpers';
import styled from 'styled-components';
import readingTime from 'reading-time';
import { Scaffold } from '../../../components/app/Scaffold/Scaffold';
import { ComplexContent } from '../../../components/app/ComplexContents/ComplexContent';

const ComplexScreen = ({ screen }) => {
	// console.log('screen');
	// console.log(screen);
	return (
		<Scaffold
			meta={{
				// 	'type': 'article',
				// 	'url': `/library/${screen.slug}`,
				// 	'title': screen.metaTitle,
				// 	'descriptions': {
				// 		'main': screen.metaDescription,
				// 		'social': screen.socialDescription,
				// 	},
				// 	'image': {
				// 		'url': screen.metaImage.url,
				// 		'alternativeText': screen.metaImage.alternativeText,
				// 	},
			}}
		>
			<ComplexContent
			// image={{
			// 	'url': post.coverImage.url,
			// 	'alt': post.coverImage.alternativeText,
			// 	'width': post.coverImage.width,
			// 	'height': post.coverImage.height,
			// 	'credit': post.coverImage.credit,
			// 	'caption': post.coverImage.caption,
			// }}


			// frontMatter={{
			// 	'title': screen.title,
			// 	'publicationDate': screen.publicationDate,
			// 	'tagline': screen.tagline,
			// 	'intro': screen.intro,
			// 	// 'tableOfContents': post.body.nav,
			// 	'stats': screen.stats,
			// 	'briefStatements': screen.briefStatements,
			// }}
			// sections={screen.sections}
			/>
		</Scaffold >
	);
};

export default ComplexScreen;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();

	// get all of the raw, normalized data

	let screenDataRaw = await db.collection('complex_screens').aggregate([
		{ '$match': { 'Slug': context.query.complexSlug } },
		{
			'$lookup':
			{
				'from': 'components_content_brief_statements',
				'localField': 'BriefStatement.ref',
				'foreignField': '_id',
				'as': 'BriefStatements',
			},
		},
		{
			'$lookup':
			{
				'from': 'upload_file',
				'localField': 'MetaImage',
				'foreignField': '_id',
				'as': 'MetaImages',
			},
		},
		{
			'$project': {
				'_id': 0,
				'Featured': 1,
				'Slug': 1,
				'Title': 1,
				'Subtitle': 1,
				'MetaTitle': 1,
				'MetaDescription': 1,
				'MetaImages': 1,
				'SocialDescription': 1,
				'PublicationDate': 1,
				'Tagline': 1,
				'Intro': 1,
				'BriefStatements.Statement': 1,
				'Section': 1,
			},
		},
	]).toArray();
	screenDataRaw = JSON.parse(JSON.stringify(screenDataRaw))[0];
	const screenSectionIDs = [];
	screenDataRaw.Section.forEach((sectionObject) => {
		screenSectionIDs.push(new ObjectID(sectionObject.ref));
	});
	let sectionDataRaw = await db.collection('components_content_complex_screen_sections').aggregate([
		{ '$match': { '_id': { '$in': screenSectionIDs } } },
		{
			'$lookup':
			{
				'from': 'components_content_brief_statements',
				'localField': 'BriefStatement.ref',
				'foreignField': '_id',
				'as': 'SectionBriefStatements',
			},
		},
		{
			'$lookup':
			{
				'from': 'components_content_complex_screen_subsections',
				'localField': 'ComplexScreenSubsection.ref',
				'foreignField': '_id',
				'as': 'Subsections',
			},
		},
		{
			'$project': {
				'SectionID': 1,
				'SectionTitle': 1,
				'SectionIntro': 1,
				'SectionBriefStatements.Statement': 1,
				'Subsections': 1,
				'SectionQuote': 1,
			},
		},
	]).toArray();
	sectionDataRaw = JSON.parse(JSON.stringify(sectionDataRaw));
	const mediaItemIDs = [];
	sectionDataRaw.forEach((sectionObject) => {
		sectionObject.Subsections.forEach((subsectionObject) => {
			subsectionObject.SubsectionMedia.forEach((mediaItemIDString) => {
				mediaItemIDs.push(new ObjectID(mediaItemIDString));
			});
		});
	});
	let mediaDataRaw = await db.collection('upload_file')
		.find({ '_id': { '$in': mediaItemIDs } }).toArray();
	mediaDataRaw = JSON.parse(JSON.stringify(mediaDataRaw));

	// define a utility function

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
			sectionIntermediate.sectionTitle = `## ${sectionObject.SectionTitle}`;
		}
		if (sectionObject.SectionIntro) {
			sectionIntermediate.sectionIntro = sectionObject.SectionIntro;
		}
		if (sectionObject.SectionQuote) {
			sectionIntermediate.sectionQuote = sectionObject.SectionQuote;
		}
		if (sectionObject.SectionBriefStatements) {
			sectionIntermediate.sectionBriefStatements = returnExtractedBriefStatements({
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


	const screenIntermediate = {};
	if (screenDataRaw.Featured) {
		screenIntermediate.featured = screenDataRaw.Featured;
	}
	if (screenDataRaw.Slug) {
		screenIntermediate.slug = screenDataRaw.Slug;
	}
	if (screenDataRaw.Title) {
		screenIntermediate.title = screenDataRaw.Subtitle ?
			`${screenDataRaw.Title.trim()}: ${screenDataRaw.Subtitle}` :
			screenDataRaw.Title;
	}
	if (screenDataRaw.MetaTitle) {
		screenIntermediate.metaTitle = screenDataRaw.MetaTitle;
	}
	if (screenDataRaw.MetaDescription) {
		screenIntermediate.metaDescription = screenDataRaw.MetaDescription;
	}
	if (
		screenDataRaw.MetaImages &&
		screenDataRaw.MetaImages[0]
	) {
		screenIntermediate.metaImage = {
			'url': returnSocialImageCloudinaryURI({
				'imagePublicID':
					screenDataRaw.MetaImages[0].provider_metadata.public_id,
				'imageExtension': screenDataRaw.MetaImages[0].ext,
				// 'gravity': screenDataRaw.MetaImageGravity,
				'gravity': 'center',
			}),
			'alternativeText': screenDataRaw.MetaImages[0].alternativeText,
		};
	}
	if (screenDataRaw.SocialDescription) {
		screenIntermediate.socialDescription = screenDataRaw.SocialDescription;
	}
	if (screenDataRaw.PublicationDate) {
		screenIntermediate.publicationDate = new Date(screenDataRaw.PublicationDate)
			.toLocaleDateString('en-US', {
				'year': 'numeric',
				'month': 'long',
				'day': 'numeric',
			});
	}
	if (sectionsIntermediate && sectionsIntermediate[0]) {
		screenIntermediate.sections = sectionsIntermediate;
	}
	if (screenDataRaw.Tagline) {
		screenIntermediate.tagline = screenDataRaw.Tagline;
	}
	if (screenDataRaw.Intro) {
		screenIntermediate.intro = screenDataRaw.Intro;
	}
	if (screenDataRaw.BriefStatements) {
		screenIntermediate.briefStatements = returnExtractedBriefStatements({
			'briefStatementsRaw': screenDataRaw.BriefStatements,
		});
	}

	// get stats

	const textAnalysis = {
		'approximateMain': `${screenIntermediate.title}
${screenIntermediate.publicationDate}
`,
		'briefStatements': '',
	};
	screenIntermediate.briefStatements.forEach((briefStatement) => {
		textAnalysis.briefStatements += ' ' + briefStatement;
	});
	screenIntermediate.sections.forEach((section) => {
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
				textAnalysis.approximateMain += subsection.subsectionTitle + '\n';
			}
			if (subsection.subsectionText) {
				textAnalysis.approximateMain += subsection.subsectionText + '\n';
			}
		});
	});
	textAnalysis.stats = readingTime(`${textAnalysis.approximateMain}
${textAnalysis.briefStatements}`);
	screenIntermediate.stats = {
		'minutes': Math.round(textAnalysis.stats.minutes),
		'words': textAnalysis.stats.words,
	};

	// get table of contents - this must be done prior to rendering html

	screenIntermediate.nav = returnHTMLFromMarkdown({
		'content': textAnalysis.approximateMain,
		'options': {
			'navOnly': true,
		},
	});


	//  =======================================================
	//  =======================================================
	//  =======================================================


	const sectionsFormatted = [];
	sectionDataRaw.forEach((sectionObject) => {
		const sectionFormatted = {
			'_id': sectionObject._id,
			'sectionID': sectionObject.SectionID,
			'sectionTitle': returnHTMLFromMarkdown({
				'content': `## ${sectionObject.SectionTitle}`,
				'options': {
					'withAnchors': true,
				},
			}),
			'sectionIntro': returnHTMLFromMarkdown({
				'content': sectionObject.SectionIntro,
			}),
			'sectionQuote': returnHTMLFromMarkdown({
				'content': sectionObject.SectionQuote,
				'options': {
					'removeEndCapTags': true,
				},
			}),
		};
		if (sectionObject.SectionBriefStatements) {
			sectionFormatted.sectionBriefStatements = returnExtractedBriefStatements({
				'briefStatementsRaw': sectionObject.SectionBriefStatements,
			});
		}

		const SubsectionsThisSection = [];
		sectionObject.Subsections.forEach((subsectionObject) => {
			const subsectionFormatted = {
				'subsectionID': subsectionObject.SubsectionID,
				'subsectionGravity': subsectionObject.SubsectionGravity,
				'subsectionMediaGravity':
					subsectionObject.SubsectionMediaGravity,
			};
			if (subsectionObject.SubsectionTitle) {
				subsectionFormatted.subsectionTitle = returnHTMLFromMarkdown({
					'content': `### ${subsectionObject.SubsectionTitle}`,
					'options': {
						'withAnchors': true,
					},
				});
			}
			if (subsectionObject.SubsectionText) {
				subsectionFormatted.subsectionText = subsectionObject.SubsectionText;
			}
			if (subsectionObject.SubsectionMediaSVGArray) {
				subsectionFormatted.subsectionMediaSVGArray = subsectionObject.SubsectionMediaSVGArray;
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
				subsectionFormatted.subsectionMedia = mediaThisSubsection;
			}
			SubsectionsThisSection.push(subsectionFormatted);
		});
		sectionFormatted.subsections = SubsectionsThisSection;
		sectionsFormatted.push(sectionFormatted);
	});
	const screenFormatted = {
		'featured': screenDataRaw.Featured,
		'slug': screenDataRaw.Slug,
		'title': screenDataRaw.Subtitle ?
			returnHTMLFromMarkdown({
				'content': `${screenDataRaw.Title.trim()}: ${screenDataRaw.Subtitle}`,
				'options': {
					'removeEndCapTags': true,
				},
			}) :
			returnHTMLFromMarkdown({
				'content': screenDataRaw.Title,
				'options': {
					'removeEndCapTags': true,
				},
			}),
		'metaTitle': screenDataRaw.MetaTitle,
		'metaDescription': screenDataRaw.MetaDescription,
		'metaImage': {
			'url': returnSocialImageCloudinaryURI({
				'imagePublicID':
					screenDataRaw.MetaImages[0].provider_metadata.public_id,
				'imageExtension': screenDataRaw.MetaImages[0].ext,
				'gravity': screenDataRaw.MetaImageGravity,
			}),
			'alternativeText': screenDataRaw.MetaImages[0].alternativeText,
		},
		'socialDescription': screenDataRaw.SocialDescription,
		'publicationDate': new Date(screenDataRaw.PublicationDate)
			.toLocaleDateString('en-US', {
				'year': 'numeric',
				'month': 'long',
				'day': 'numeric',
			}),
		'sections': sectionsFormatted,
	};
	if (screenDataRaw.Tagline) {
		screenFormatted.tagline = returnHTMLFromMarkdown({
			'content': screenDataRaw.Tagline,
			'options': {
				'removeEndCapTags': true,
			},
		});
	}
	if (screenDataRaw.Intro) {
		screenFormatted.intro = returnHTMLFromMarkdown({
			'content': screenDataRaw.Intro,
		});
	}
	if (screenDataRaw.BriefStatements) {
		screenFormatted.briefStatements = returnExtractedBriefStatements({
			'briefStatementsRaw': screenDataRaw.BriefStatements,
		});
	}


	return {
		'props': { 'screen': screenIntermediate },
	};
}
