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
import { Post } from '../../../components/app/Posts/Post';


const PostContainer = styled.div`
`;
// const genID = new ObjectID();
// console.log('genID');
// console.log(genID.toString());

const LibLabItemScreen = ({ screen }) => {

	// console.log('ObjectID');
	// console.log(ObjectID);
	console.log('screen');
	console.log(screen);
	return (<div></div>);
};

export default LibLabItemScreen;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
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
	const returnFormattedBriefStatements = ({ briefStatementsRaw }) => {
		const briefStatementsFormatted = [];
		if (
			typeof (briefStatementsRaw) === 'object' &&
			briefStatementsRaw.length > 1 &&
			briefStatementsRaw[0]
		) {
			briefStatementsRaw.forEach((briefStatementRaw) => {
				briefStatementsFormatted.push(briefStatementRaw.Statement);
			});
		}
		return briefStatementsFormatted;
	};
	const sectionsFormatted = [];
	sectionDataRaw.forEach((sectionObject) => {
		const sectionFormatted = {
			'_id': sectionObject._id,
			'sectionID': sectionObject.SectionID,
			'sectionTitle': returnHTMLFromMarkdown({
				'content': sectionObject.SectionTitle,
				'options': {
					'removeEndCapTags': true,
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
			sectionFormatted.sectionBriefStatements = returnFormattedBriefStatements({
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
				subsectionFormatted.subsectionTitle = subsectionObject.SubsectionTitle;
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
	if (screenDataRaw.BriefStatements) {
		screenFormatted.briefStatements = returnFormattedBriefStatements({
			'briefStatementsRaw': screenDataRaw.BriefStatements,
		});
	}
	return {
		'props': { 'screen': screenFormatted },
	};
}
