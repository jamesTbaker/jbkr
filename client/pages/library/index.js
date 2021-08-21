/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


import styled from 'styled-components';
import { connectToDatabase } from '../../lib/mongodb';
import Link from 'next/link';
import { Text } from '../../components/core/Text';

const StyledLibLabListScreen = styled.div`
	color: pink;
`;

const LibLabListScreen = ({ posts }) => (
	<StyledLibLabListScreen>
		<Text
			deviceWidth='l'
			size='3xl'
			weight='bold'
			slant='italic'
			usage='display'
		>The LibLabList Screen</Text>
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
