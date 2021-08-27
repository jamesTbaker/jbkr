/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import styled from 'styled-components';
import { connectToDatabase } from '../../lib/mongodb';
import Link from 'next/link';
import { Copy } from '../../components/core/Copy/Copy';

const StyledLibLabListScreen = styled.div`
`;

const LibLabListScreen = ({ posts }) => (
	<>
		<Head>
			<title>LibLab | jbkr</title>
			<meta name="description" content="Items from the vault."></meta>
		</Head>
		<StyledLibLabListScreen>
			<Copy kind="h1">The LibLabList Screen</Copy>
			<Link href="/">Profile</Link>
			<Link href="/library">Library</Link>
			<Link href="/contact">Contact</Link>
			<pre>{JSON.stringify(posts)}</pre>
		</StyledLibLabListScreen>
	</>
);

export default LibLabListScreen;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('posts').find({}).toArray();
	const posts = JSON.parse(JSON.stringify(data));
	console.log(posts);
	return {
		'props': { posts },
	};
}
