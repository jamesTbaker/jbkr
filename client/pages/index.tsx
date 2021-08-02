import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { connectToDatabase } from '../lib/mongodb';

/* eslint-disable-next-line */
export interface ProfileScreenProps { };

const StyledProfileScreen = styled.div`
	color: pink;
`;

const ProfileScreen = (props: ProfileScreenProps) => (
	<StyledProfileScreen>
		<h2>The Profile Screen</h2>

		<Link href="/library">Library</Link>
	</StyledProfileScreen>
);
export default ProfileScreen;

export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('skills').find({}).toArray();
	const skills = JSON.parse(JSON.stringify(data));
	console.log(skills);
	return {
		props: { skills },
	};
}
