/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../../lib/mongodb';
import {
	returnHTMLFromMarkdown,
	returnSocialImageCloudinaryURI,
} from '@jbkr/client-content';
import { ScreenScaffold } from
	'../../components/app/ScreenScaffold/ScreenScaffold';
import { PostSummaries } from '../../components/app/Posts/PostSummaries';

const ScreenContainer = ({ metaImage, postSummaries }) => (
	<ScreenScaffold
		meta={{
			'type': 'website',
			'url': `/library`,
			'title': 'LibLab',
			'descriptions': {
				'main': 'Items from the vault.',
				'social': 'Items from the vault.',
			},
			'image': {
				'url': metaImage.url,
				'alternativeText': metaImage.alternativeText,
			},
		}}
	>
		<PostSummaries
			postSummaries={postSummaries}
		/>
	</ScreenScaffold>
);

export default ScreenContainer;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('posts').aggregate([
		{
			'$lookup':
			{
				'from': 'upload_file',
				'localField': 'Cover',
				'foreignField': '_id',
				'as': 'CoverImages',
			},
		},
		{
			'$project': {
				'Slug': 1,
				'Title': 1,
				'SnippetDescription': 1,
				'Subtitle': 1,
				'Tagline': 1,
				'CoverImages': 1,
				'MetaImageGravity': 1,
				'PublicationDate': 1,
			},
		},
	]).toArray();
	const postsRaw = JSON.parse(JSON.stringify(data));
	const metaImage = {
		'url': returnSocialImageCloudinaryURI({
			'imagePublicID':
				postsRaw[0].CoverImages[0].provider_metadata.public_id,
			'imageExtension': postsRaw[0].CoverImages[0].ext,
			'gravity': postsRaw[0].MetaImageGravity,
		}),
	};

	const postsFormatted = [];
	postsRaw.forEach((postRaw) => {
		const postFormatted = {
			'ID': postRaw._id,
			'slug': postRaw.Slug,
			'coverImage': {
				'url': postRaw.CoverImages[0].url,
				'alternativeText': postRaw.CoverImages[0].alternativeText,
				'width': postRaw.CoverImages[0].width,
				'height': postRaw.CoverImages[0].height,
			},
			'title': postRaw.Subtitle ?
				returnHTMLFromMarkdown({
					'content': `${postRaw.Title.trim()}: ${postRaw.Subtitle}`,
					'options': {
						'removeEndCapTags': true,
					},
				}) :
				returnHTMLFromMarkdown({
					'content': postRaw.Title,
					'options': {
						'removeEndCapTags': true,
					},
				}),
			'publicationDate': new Date(postRaw.PublicationDate)
				.toLocaleDateString('en-US', {
					'year': 'numeric',
					'month': 'long',
					'day': 'numeric',
				}),
			'tagline': returnHTMLFromMarkdown({
				'content': postRaw.Tagline,
				'options': {
					'removeEndCapTags': true,
				},
			}),
			'snippetDescription': returnHTMLFromMarkdown({
				'content': postRaw.SnippetDescription,
			}),
		};
		postsFormatted.push(postFormatted);
	});
	return {
		'props': { metaImage, 'postSummaries': postsFormatted },
	};
}
