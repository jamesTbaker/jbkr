/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */


import styled from 'styled-components';
import { connectToDatabase } from '../../lib/mongodb';
import Link from 'next/link';
import { Copy } from '../components/core/Copy/Copy';

const StyledLibLabListScreen = styled.div`
	color: pink;
	background-color: #336;
`;

const LibLabListScreen = ({ posts }) => (
	<StyledLibLabListScreen>
		<Copy kind="h1">The LibLabList Screen</Copy>
		<Link href="/">Profile</Link>
		<Link href="/library">Library</Link>
		<Link href="/contact">Contact</Link>
	</StyledLibLabListScreen>
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
