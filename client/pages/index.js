/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../lib/mongodb';
import { Copy } from '../components/core/Copy/Copy';
import { ScreenScaffold }
	from '../components/app/ScreenScaffold/ScreenScaffold';
import {
	defaultMetaImageURL,
	defaultMetaImageAlternativeText,
} from '@jbkr/client-content';
import {
	returnTransformedScreenContent,
} from '@jbkr/client-content';


const ScreenContainer = ({
	screen,
	skills,
}) => (
	<ScreenScaffold
		meta={screen.meta}
	>
		<Copy kind="h1">{screen.main.title}</Copy>
	</ScreenScaffold>
);
export default ScreenContainer;
export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('skills').find({}).toArray();
	const skills = JSON.parse(JSON.stringify(data));


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
	// serialize and deserialize returned data, converting BSON to JSON
	screenDataRaw = JSON.parse(JSON.stringify(screenDataRaw));
	// get transformed versions of all of the data we've pulled
	const screensTransformedContent = returnTransformedScreenContent({
		'screenDataRaw': screenDataRaw[0],
	});
	return {
		'props': {
			'screen': screensTransformedContent,
			skills,
		},
	};
}
