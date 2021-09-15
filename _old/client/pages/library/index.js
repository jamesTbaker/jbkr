/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../../lib/mongodb';
import {
	returnTransformedScreenContent,
	returnTransformedArticlesContent,
} from '@jbkr/client-content';
import { ScreenScaffold } from
	'../../components/app/ScreenScaffold/ScreenScaffold';
import { ArticleSummaries } from
	'../../components/app/Articles/ArticleSummaries';

const ScreenContainer = ({
	screen,
	articles,
}) => {
	return (
		<ScreenScaffold
			meta={screen.meta}
		>
			<ArticleSummaries
				{...articles}
			/>
		</ScreenScaffold>
	);
};
export default ScreenContainer;
export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	let articlesDataRaw = await db.collection('articles').aggregate([
		// look up the teaser image for this article
		{
			'$lookup':
			{
				'from': 'upload_file',
				'localField': 'TeaserImage',
				'foreignField': '_id',
				'as': 'TeaserImages',
			},
		},
		// specify which field to sort on and in which direction
		{ '$sort': { 'PublicationDate': -1 } },
		// specify which fields to return
		{
			'$project': {
				'Featured': 1,
				'PublicationDate': 1,
				'Slug': 1,
				'Title': 1,
				'Subtitle': 1,
				'TeaserDescription': 1,
				'Tagline': 1,
				'TeaserImages.alternativeText': 1,
				'TeaserImages.width': 1,
				'TeaserImages.height': 1,
				'TeaserImages.ext': 1,
				'TeaserImages.hash': 1,
				'TeaserImages.mime': 1,
			},
		},
	]).toArray();
	// serialize and deserialize returned data, converting BSON to JSON
	articlesDataRaw = JSON.parse(JSON.stringify(articlesDataRaw));
	// get the high level data for this screen
	let screenDataRaw = await db.collection('screens').aggregate([
		// match the documents whose IDs are in the collection of IDs
		{ '$match': { 'Slug': context.req.url } },
		// look up the meta image for this screen
		{
			'$lookup':
			{
				'from': 'upload_file',
				'localField': 'MetaImage',
				'foreignField': '_id',
				'as': 'MetaImages',
			},
		},
		// specify which fields to return
		{
			'$project': {
				'_id': 0,
				'Slug': 1,
				'OpenGraphType': 1,
				'Title': 1,
				'MetaTitle': 1,
				'MetaOther': 1,
				'MetaDescription': 1,
				'SocialDescription': 1,
				'MetaImages.alternativeText': 1,
				'MetaImages.ext': 1,
				'MetaImages.hash': 1,
				'MetaImages.mime': 1,
				'MetaImageGravity': 1,
			},
		},
	]).toArray();
	// get transformed versions of all of the data we've pulled
	const articlesTransformedContent = returnTransformedArticlesContent({
		articlesDataRaw,
	});
	const screensTransformedContent = returnTransformedScreenContent({
		'screenDataRaw': screenDataRaw[0],
	});
	// send transformed article data to component
	return {
		'props': {
			'screen': screensTransformedContent,
			'articles': articlesTransformedContent,
		},
	};
}
