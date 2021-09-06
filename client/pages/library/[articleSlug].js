/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../../lib/mongodb';
import { ObjectID } from 'bson';
import {
	returnHTMLFromMarkdown,
	returnSimpleHTMLFromMarkdown,
	returnSocialImageCloudinaryURI,
	returnContentStats,
	returnHeadingsWithMetadata,
	returnTransformedArticleData,
} from '@jbkr/client-helpers';
import styled from 'styled-components';
import { Scaffold } from '../../components/app/Scaffold/Scaffold';
import { Article } from '../../components/app/Articles/Article';

const ArticleScreen = ({ articleContent }) => {
	console.log('articleContent');
	console.log(articleContent);
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
			<Article
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

export default ArticleScreen;

export async function getServerSideProps(context) {
	// set up database connection
	const { db } = await connectToDatabase();
	// get the raw data for this article from the database
	let articleDataRaw = await db.collection('articles').aggregate([
		// match the document whose slug matches the slug in context
		{ '$match': { 'Slug': context.query.articleSlug } },
		// look up the brief statements for this article
		{
			'$lookup':
			{
				'from': 'components_content_article_brief_statements',
				'localField': 'BriefStatements.ref',
				'foreignField': '_id',
				'as': 'BriefStatements',
			},
		},
		// look up the meta image for this article
		{
			'$lookup':
			{
				'from': 'upload_file',
				'localField': 'MetaImage',
				'foreignField': '_id',
				'as': 'MetaImages',
			},
		},
		// look up the head image for this article
		{
			'$lookup':
			{
				'from': 'upload_file',
				'localField': 'HeadImage',
				'foreignField': '_id',
				'as': 'HeadImages',
			},
		},
		// look up the intro video for this article
		{
			'$lookup':
			{
				'from': 'upload_file',
				'localField': 'IntroVideo',
				'foreignField': '_id',
				'as': 'IntroVideos',
			},
		},
		// specify which fields to return
		{
			'$project': {
				// '_id': 0,
				// 'Featured': 1,
				// 'PublicationDate': 1,
				// 'UpdateDate': 1,
				// 'Slug': 1,
				// 'Title': 1,
				// 'Subtitle': 1,
				// 'Tagline': 1,
				// 'MetaTitle': 1,
				// 'MetaDescription': 1,
				// 'SocialDescription': 1,
				// 'MetaImages.alternativeText': 1,
				// 'MetaImages.ext': 1,
				// 'MetaImages.hash': 1,
				// 'HeadImages.alternativeText': 1,
				// 'HeadImages.ext': 1,
				// 'HeadImages.hash': 1,
				// 'MetaImageGravity': 1,
				// 'HeadImageCaption': 1,
				// 'BriefStatements.Statement': 1,
				// 'IntroText': 1,
				// 'IntroVideos.alternativeText': 1,
				// 'IntroVideos.ext': 1,
				// 'IntroVideos.hash': 1,
				'Section': 1,
				'SimpleBody': 1,
			},
		},
	]).toArray();
	// serialize and deserialize returned data, converting BSON to JSON
	articleDataRaw = JSON.parse(JSON.stringify(articleDataRaw))[0];
	// get the IDs of any sections in this article
	const articleSectionIDs = [];
	if (
		articleDataRaw &&
		articleDataRaw.Section &&
		articleDataRaw.Section[0]
	) {
		articleDataRaw.Section.forEach((sectionObject) => {
			articleSectionIDs.push(new ObjectID(sectionObject.ref));
		});
	}
	// get the raw data for this article's sections from the database
	let sectionDataRaw = await db.collection('components_content_article_sections').aggregate([
		// match the documents whose IDs are in the collection of IDs
		{ '$match': { '_id': { '$in': articleSectionIDs } } },
		// look up the brief statements for this section
		{
			'$lookup':
			{
				'from': 'components_content_article_brief_statements',
				'localField': 'BriefStatement.ref',
				'foreignField': '_id',
				'as': 'SectionBriefStatements',
			},
		},
		// look up the subsections for this section
		{
			'$lookup':
			{
				'from': 'components_content_article_subsections',
				'localField': 'Subsection.ref',
				'foreignField': '_id',
				'as': 'Subsections',
			},
		},
		// specify which fields to return
		{
			'$project': {
				'_id': 0,
				'SectionID': 1,
				'SectionTitle': 1,
				'SectionPreface': 1,
				'SectionBriefStatements.Statement': 1,
				'Subsections.SubsectionID': 1,
				'Subsections.SubsectionTitle': 1,
				'Subsections.SubsectionText': 1,
				'Subsections.SubsectionGravity': 1,
				'Subsections.SubsectionMediaSVG': 1,
				'Subsections.SubsectionMediaGravity': 1,
				'Subsections.SubsectionMedia': 1,
				'SectionQuote': 1,
			},
		},
	]).toArray();
	// serialize and deserialize returned data, converting BSON to JSON
	sectionDataRaw = JSON.parse(JSON.stringify(sectionDataRaw));
	// get the IDs of any media items in this article's sections' subsections
	const mediaItemIDs = [];
	sectionDataRaw.forEach((sectionObject) => {
		sectionObject.Subsections.forEach((subsectionObject) => {
			subsectionObject.SubsectionMedia.forEach((mediaItemIDString) => {
				mediaItemIDs.push(new ObjectID(mediaItemIDString));
			});
		});
	});
	// get the raw data for this article's sections's subsection media items
	// from the database
	let mediaDataRaw = await db.collection('upload_file')
		.find(
			// find the documents whose IDs are in the collection of IDs
			{ '_id': { '$in': mediaItemIDs } },
			// specify which fields to return
			{
				'_id': 0,
				'ext': 1,
				'hash': 1,
				'alternativeText': 1,
			},
		).toArray();
	// serialize and deserialize returned data, converting BSON to JSON
	mediaDataRaw = JSON.parse(JSON.stringify(mediaDataRaw));
	// get a transformed version of all of the data we've pulled
	const articleTransformed = returnTransformedArticleData({
		articleDataRaw, sectionDataRaw, mediaDataRaw,
	});
	// send transformed article data to component
	return {
		'props': { 'articleContent': articleTransformed },
	};
}
