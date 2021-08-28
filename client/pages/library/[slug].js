/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { connectToDatabase } from '../../lib/mongodb';
// import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Copy } from '../../components/core/Copy/Copy';
import MarkdownIt from 'markdown-it';
import { renderMarkdown } from '@jbkr/client-helpers';


const StyledLibLabItemScreen = styled.div`
`;

const LibLabItemScreen = ({ post }) => {
	// console.log('post');
	// console.log(post);
	// const router = useRouter();
	return (
		<>
			<Head>
				<title>{`${post.metaTitle}`} | jbkr</title>
				<meta name="description" content={post.metaDescription} />
				<meta property="og:type" content="article" />
				<meta property="og:title"
					content={`${post.title}`} />
				<meta property="og:url"
					content={`https://jbkr.me/library/${post.slug}`} />
				<meta property="og:description"
					content={post.socialDescription} />
				{/*
					@todo improve image selection

					1200×630 or larger, up to 1MB, 1.91:1 aspect ratio
				*/}
				<meta property="og:image" content={post.coverImage.url} />


				<meta name="twitter:title"
					content={`${post.title}`} />
				<meta name="twitter:description"
					content={post.socialDescription} />
				<meta name="twitter:image"
					content={post.coverImage.url} />
				<meta name="twitter:image:alt"
					content={post.coverImage.alternativeText} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<StyledLibLabItemScreen>
				<Link href="/">Profile</Link>
				<Link href="/library">Library</Link>
				<Link href="/contact">Contact</Link>
				<Image src={post.coverImage.url}
					alt={post.coverImage.alternativeText}
					width={post.coverImage.width}
					height={post.coverImage.height}
				/>


				<Copy
					kind="small"
					htmlContent={post.coverImage.caption}
				/>
				<Copy
					kind="h1"
					htmlContent={post.title}
				/>
				<Copy kind="body--standard">{post.publicationDate}</Copy>


				<Copy
					kind="body--standard"
					htmlContent={post.snippetDescription}
				/>


				{
					post.tagline &&

					<Copy kind="body--standard">{post.tagline}</Copy>
				}
				<Copy kind="body-container--standard">{post.body}</Copy>
			</StyledLibLabItemScreen>
		</>
	);
};

export default LibLabItemScreen;

export async function getServerSideProps(context) {
	const markdownItClient = new MarkdownIt();
	const { db } = await connectToDatabase();
	const data = await db.collection('posts').aggregate([
		{ '$match': { 'Slug': context.query.slug } },
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
				'SnippetDescription': 1,
				'SocialDescription': 1,
				'Subtitle': 1,
				'Tagline': 1,
				'CoverImages': 1,
				'PublicationDate': 1,
				'Body': 1,
			},
		},
	]).toArray();
	const postRaw = JSON.parse(JSON.stringify(data))[0];
	const postFormatted = {
		'slug': postRaw.Slug,
		'title': postRaw.Subtitle ?
			renderMarkdown({
				'content': `${postRaw.Title.trim()}: ${postRaw.Subtitle}`,
				'options': {
					'removeEndTags': true,
				},
			}) :
			renderMarkdown({
				'content': postRaw.Title,
				'options': {
					'removeEndTags': true,
				},
			}),
		'publicationDate': new Date(postRaw.PublicationDate)
			.toLocaleDateString('en-US', {
				'year': 'numeric',
				'month': 'long',
				'day': 'numeric',
			}),
		'tagline': postRaw.Tagline ?
			renderMarkdown({
				'content': postRaw.Tagline,
				'options': {
					'removeEndTags': true,
				},
			}) :
			'',
		'metaTitle': postRaw.MetaTitle,
		'metaDescription': postRaw.MetaDescription,


		'snippetDescription':
			markdownItClient.render(postRaw.SnippetDescription),
		'socialDescription': postRaw.SocialDescription,
		'body': postRaw.Body,
		'coverImage': {
			'caption': markdownItClient.render(postRaw.CoverImages[0].caption),
			'url': postRaw.CoverImages[0].url,
			'alternativeText': postRaw.CoverImages[0].alternativeText,
			'width': postRaw.CoverImages[0].width,
			'height': postRaw.CoverImages[0].height,
		},
	};
	return {
		'props': { 'post': postFormatted },
	};
}
