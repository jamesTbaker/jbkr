/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import styled from 'styled-components';
import { connectToDatabase } from '../../lib/mongodb';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { Copy } from '../../components/core/Copy/Copy';

const StyledLibLabItemScreen = styled.div`
`;

const LibLabItemScreen = ({ post }) => {
	console.log('post');
	console.log(post);
	// const router = useRouter();
	return (
		<>
			<Head>
				<title>LibLab | jbkr</title>
				<meta name="description" content="Items from the vault."></meta>
				<meta property="og:type" content="article" />
			</Head>
			<StyledLibLabItemScreen>
				<Copy kind="h1">The LibLab Item Screen</Copy>
				<Link href="/">Profile</Link>
				<Link href="/library">Library</Link>
				<Link href="/contact">Contact</Link>
				<pre>{JSON.stringify(post)}</pre>
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
				'as': 'CoverExpanded',
			},
		},
		{
			'$project': {
				'_id': 0,
				'Title': 1,
				'Snippet': 1,
				'Subtitle': 1,
				'CoverExpanded': 1,
				'PublicationDate': 1,
				'Body': 1,
			},
		},
	]).toArray();
	const post = JSON.parse(JSON.stringify(data))[0];
	return {
		'props': { post },
	};
}
