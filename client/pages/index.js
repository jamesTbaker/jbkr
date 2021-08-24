/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import { connectToDatabase } from '../lib/mongodb';
import styled from 'styled-components';
import Link from 'next/link';
import { Text } from '../components/core/Text/Text';


const StyledProfileScreen = styled.div`
	color: pink;
`;
const ProfileScreen = ({ skills }) => (
	<StyledProfileScreen>
		<Text
			deviceWidth='l'
			size='3xl'
			weight='bold'
			slant='italic'
			usage='display'
			color={{
				'kind': 'Accent',
				'tone': 'Iris',
				'level': '01',
			}}
		>The Profile Screen</Text>
		<Link href="/">Profile</Link>
		<Link href="/library">Library</Link>
		<Link href="/contact">Contact</Link>
		<pre>{JSON.stringify(skills)}</pre>
	</StyledProfileScreen >
);
export default ProfileScreen;
export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('skills').find({}).toArray();
	const skills = JSON.parse(JSON.stringify(data));
	// console.log(skills);
	return {
		'props': { skills },
	};
}
