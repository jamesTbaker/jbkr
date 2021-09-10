/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../../lib/mongodb';
import { ObjectID } from 'bson';
import {
	returnTransformedScreenContent,
	returnTransformedArticleContent,
} from '@jbkr/client-content';
import styled from 'styled-components';
import { ScreenScaffold } from '../../components/app/ScreenScaffold/ScreenScaffold';
import { ArticleDetail } from '../../components/app/Articles/ArticleDetail';

const ScreenContainer = ({ 'content': {
	meta,
	frontMatter,
	mainContent,
} }) => {
	return (
		<ScreenScaffold
			meta={{
				'type': 'article',
				'url': `/library/${meta.slug}`,
				'title': meta.metaTitle,
				'descriptions': {
					'main': meta.metaDescription,
					'social': meta.socialDescription,
				},
				'image': {
					'url': meta.metaImage.url,
					'alternativeText': meta.metaImage.alternativeText,
				},
				'hasTableOfContents': frontMatter.tableOfContents ? true : false,
			}}
		>
			<ArticleDetail
				frontMatter={frontMatter}
				mainContent={mainContent}
			/>
		</ScreenScaffold >
	);
};

export default ScreenContainer;

export async function getServerSideProps(context) {
	// set up database connection
	const { db } = await connectToDatabase();
	// get the raw data for this article from the database
	let articleDataRaw = await db.collection('articles').aggregate([
		// match the document whose slug matches the slug in context
		{ '$match': { 'Slug': '/library/*' } },
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
				'_id': 0,
				'Featured': 1,
				'PublicationDate': 1,
				'UpdateDate': 1,
				'Slug': 1,
				'Title': 1,
				'Subtitle': 1,
				'Tagline': 1,
				'MetaTitle': 1,
				'MetaDescription': 1,
				'SocialDescription': 1,
				'MetaImages.alternativeText': 1,
				'MetaImages.ext': 1,
				'MetaImages.hash': 1,
				'MetaImages.mime': 1,
				'HeadImages.alternativeText': 1,
				'HeadImages.width': 1,
				'HeadImages.height': 1,
				'HeadImages.ext': 1,
				'HeadImages.hash': 1,
				'HeadImages.mime': 1,
				'HeadImages.caption': 1,
				'MetaImageGravity': 1,
				'HeadImageCaption': 1,
				'BriefStatements._id': 1,
				'BriefStatements.Statement': 1,
				'IntroText': 1,
				'IntroVideos.url': 1,
				'IntroVideos.mime': 1,
				'IntroVideos.alternativeText': 1,
				'IntroVideos.caption': 1,
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
				'SectionBriefStatements._id': 1,
				'SectionBriefStatements.Statement': 1,
				'Subsections.SubsectionID': 1,
				'Subsections.SubsectionTitle': 1,
				'Subsections.SubsectionText': 1,
				'Subsections.SubsectionGravity': 1,
				'Subsections.SubsectionMediaComponents': 1,
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
				'url': 1,
				'mime': 1,
				'alternativeText': 1,
				'caption': 1,
				'width': 1,
				'height': 1,
			},
		).toArray();
	// serialize and deserialize returned data, converting BSON to JSON
	mediaDataRaw = JSON.parse(JSON.stringify(mediaDataRaw));
	// get the high level data for this screen
	let screenDataRaw = await db.collection('screens').aggregate([
		// match the documents whose IDs are in the collection of IDs
		{ '$match': { 'Slug': context.req.url } },
		// specify which fields to return
		{
			'$project': {
				'_id': 0,
				'OpenGraphType': 1,
			},
		},
	]).toArray();
	// serialize and deserialize returned data, converting BSON to JSON
	screenDataRaw = JSON.parse(JSON.stringify(screenDataRaw));
	// get a transformed version of the article data
	const articleTransformedContent = returnTransformedArticleContent({
		articleDataRaw, sectionDataRaw, mediaDataRaw,
	});
	// if this article has a table of contents
	if (articleTransformedContent.frontMatter.tableOfContents) {
		// add a corresponding flag to the screen data
		screenDataRaw.hasTableOfContents = true;
	}
	// get a transformed version of the screen data
	const screensTransformedContent = returnTransformedScreenContent({
		'screenDataRaw': screenDataRaw[0],
	});
	// send transformed article data to component
	return {
		'props': {
			'screen': screensTransformedContent,
			'article': articleTransformedContent,
		},
	};
}
