/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../../../lib/mongodb';
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

const LibLabItemScreen = ({ screen }) => {
	console.log('screen');
	console.log(screen);
	return (<div></div>);
	/* return (
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
			<PostContainer>
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
				>
				</Post>
			</PostContainer>
		</Scaffold>
	); */
};

export default LibLabItemScreen;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('complex_screens').aggregate([
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
				'from': 'components_content_complex_screen_sections',
				'let': { 'sectionID': 'Section.ref' },
				'pipeline': [
					{ '$match': { '$expr': { '$eq': ['$_id', '$$sectionID'] } } },
				],
				'as': 'Sections',
			},
		},
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
				'Sections': 1,
				// 'SectionBriefStatements': 1,
			},
		},
	]).toArray();
	const screenRaw = JSON.parse(JSON.stringify(data))[0];

	return {
		'props': { 'screen': screenRaw },
	};
}
