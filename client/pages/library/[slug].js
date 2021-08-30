/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { connectToDatabase } from '../../lib/mongodb';
// import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Copy } from '../../components/core/Copy/Copy';
import { TableOfContents }
	from '../../components/app/TableOfContents/TableOfContents';
import { transformToHTML, transformWithAnchorsTOC } from '@jbkr/client-helpers';
import readingTime from 'reading-time';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const StyledLibLabItemScreen = styled.div`
`;

const LibLabItemScreen = ({ post }) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
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
				<Copy kind="body--standard">
					{`${post.body.stats.words} words |
					${post.body.stats.minutes} minutes to read`}
				</Copy>
				{
					post.tagline &&

					<Copy
						kind="body--standard"
						htmlContent={post.tagline}
					/>
				}
				<Copy
					kind="body-container--standard"
					htmlContent={post.snippetDescription}
				/>
				{
					post.body.nav &&

					<TableOfContents
						contents={post.body.nav}
					/>
				}
				<Copy
					kind="body-container--standard"
					htmlContent={post.body.content}
				/>
			</StyledLibLabItemScreen>
		</>
	);
};

export default LibLabItemScreen;

export async function getServerSideProps(context) {
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
	postRaw.bodyStats = readingTime(postRaw.Body);
	const postFormatted = {
		'slug': postRaw.Slug,
		'coverImage': {
			'caption': transformToHTML({
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
			transformToHTML({
				'content': `${postRaw.Title.trim()}: ${postRaw.Subtitle}`,
				'options': {
					'removeEndCapTags': true,
				},
			}) :
			transformToHTML({
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
		'tagline': postRaw.Tagline ?
			transformToHTML({
				'content': postRaw.Tagline,
				'options': {
					'removeEndCapTags': true,
				},
			}) :
			'',
		'metaTitle': postRaw.MetaTitle,
		'metaDescription': postRaw.MetaDescription,
		'socialDescription': postRaw.SocialDescription,
		'snippetDescription': transformToHTML({
			'content': postRaw.SnippetDescription,
		}),
		'body': {
			'stats': {
				'minutes': Math.round(postRaw.bodyStats.minutes),
				'words': postRaw.bodyStats.words,
			},
			'nav': transformToHTML({
				'content': postRaw.Body,
				'options': {
					'navOnly': true,
				},
			}),
			'content': transformToHTML({
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
