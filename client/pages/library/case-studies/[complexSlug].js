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
	// console.log('screen');
	// console.log(screen);
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
		// {
		// 	'$lookup':
		// 	{
		// 		'from': 'components_content_complex_screen_sections',
		// 		'let': { 'sectionID': '$Section.ref' },
		// 		'pipeline': [
		// 			{ '$match': { '$expr': { '$eq': ['$_id', '$$sectionID'] } } },
		// 		],
		// 		'as': 'MatchedSections',
		// 	},
		// },
		// {
		// 	'$lookup':
		// 	{
		// 		'from': 'components_content_complex_screen_sections',
		// 		'localField': 'Section.ref',
		// 		'foreignField': '_id',
		// 		'as': 'Sections',
		// 	},
		// },
		// {
		// 	'$lookup':
		// 	{
		// 		'from': 'components_content_brief_statements',
		// 		'localField': 'Sections.BriefStatement.ref',
		// 		'foreignField': '_id',
		// 		'as': 'SectionBriefStatements',
		// 	},
		// },
		{
			'$project': {
				'_id': 0,
				'Slug': 1,
				'Title': 1,
				'MetaTitle': 1,
				'MetaDescription': 1,
				'SocialDescription': 1,
				'SnippetDescription': 1,
				'Subtitle': 1,
				'Tagline': 1,
				'BriefStatement': 1,
				'Section': 1,
				'MatchedSections': 1,
				// 'Sections': 1,
				// 'SectionBriefStatements': 1,
			},
		},
	]).toArray();
	screenDataRaw = JSON.parse(JSON.stringify(screenDataRaw))[0];
	const screenSectionIDs = [];
	screenDataRaw.Section.forEach((sectionObject) => {
		screenSectionIDs.push(new ObjectID(sectionObject.ref));
	});
	// console.log(screenSectionIDs);
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


	return {
		'props': { 'screen': sectionDataRaw },
	};
}
