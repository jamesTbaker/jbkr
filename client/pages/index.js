/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import { connectToDatabase } from '../lib/mongodb';
import styled from 'styled-components';
import Link from 'next/link';
import { Copy } from '../components/core/Copy/Copy';


const StyledProfileScreen = styled.div`
	color: pink;
	background-color: #336;
`;
const ProfileScreen = ({ skills }) => (
	<StyledProfileScreen>
		<Copy kind="h1">The Profile Screen</Copy>
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
