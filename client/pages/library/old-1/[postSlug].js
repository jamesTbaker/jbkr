/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../../../lib/mongodb';
import {
	returnHTMLFromMarkdown,
	returnSocialImageCloudinaryURI,
} from '@jbkr/client-helpers';
import readingTime from 'reading-time';
import { Scaffold } from '../../../components/app/Scaffold/Scaffold';
import { Post } from '../../../components/app/Posts/Post';

const LibLabItemScreen = ({ post }) => {
	return (
		<Scaffold
			meta={{
				'type': 'article',
				'url': `/library/${post.slug}`,
				'title': post.metaTitle,
				'descriptions': {
					'main': post.metaDescription,
					'social': post.socialDescription,
				},
				'image': {
					'url': post.metaImage.url,
					'alternativeText': post.metaImage.alternativeText,
				},
			}}
		>
			<Post
				image={{
					'url': post.coverImage.url,
					'alt': post.coverImage.alternativeText,
					'width': post.coverImage.width,
					'height': post.coverImage.height,
					'credit': post.coverImage.credit,
					'caption': post.coverImage.caption,
				}}
				frontMatter={{
					'title': post.title,
					'publicationDate': post.publicationDate,
					'tagline': post.tagline,
					'tableOfContents': post.body.nav,
					'stats': post.body.stats,
				}}
				body={post.body.content}
			/>
		</Scaffold>
	);
};

export default LibLabItemScreen;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('posts').aggregate([
		{ '$match': { 'Slug': context.query.postSlug } },
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
				'_id': 0,
				'Slug': 1,
				'Title': 1,
				'MetaTitle': 1,
				'MetaDescription': 1,
				'SocialDescription': 1,
				'Subtitle': 1,
				'Tagline': 1,
				'CoverImages': 1,
				'CoverImageCaption': 1,
				'MetaImageGravity': 1,
				'PublicationDate': 1,
				'Body': 1,
			},
		},
	]).toArray();
	const postRaw = JSON.parse(JSON.stringify(data))[0];
	postRaw.bodyStats = readingTime(postRaw.Body);
	const postFormatted = {
		'slug': postRaw.Slug,
		'metaImage': {
			'url': returnSocialImageCloudinaryURI({
				'imagePublicID':
					postRaw.CoverImages[0].provider_metadata.public_id,
				'imageExtension': postRaw.CoverImages[0].ext,
				'gravity': postRaw.MetaImageGravity,
			}),
			'alternativeText': postRaw.CoverImages[0].alternativeText,
		},
		'coverImage': {
			'caption': returnHTMLFromMarkdown({
				'content': postRaw.CoverImageCaption,
				'options': {
					'removeEndCapTags': true,
				},
			}),
			'credit': returnHTMLFromMarkdown({
				'content': postRaw.CoverImages[0].caption,
				'options': {
					'removeEndCapTags': true,
				},
			}),
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
		'metaTitle': postRaw.MetaTitle,
		'metaDescription': postRaw.MetaDescription,
		'socialDescription': postRaw.SocialDescription,
		'body': {
			'stats': {
				'minutes': Math.round(postRaw.bodyStats.minutes),
				'words': postRaw.bodyStats.words,
			},
			'nav': returnHTMLFromMarkdown({
				'content': postRaw.Body,
				'options': {
					'navOnly': true,
				},
			}),
			'content': returnHTMLFromMarkdown({
				'content': postRaw.Body,
				'options': {
					'withAnchors': true,
				},
			}),
		},
	};
	return {
		'props': { 'post': postFormatted },
	};
}
