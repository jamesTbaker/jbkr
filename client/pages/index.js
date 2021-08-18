import styled from 'styled-components';
import Link from 'next/link';
// import Head from 'next/head';
import { connectToDatabase } from '../lib/mongodb';
// import { Text } from 'components-core';
import { Text } from '../components-core/Text/Text';

const StyledProfileScreen = styled.div`
	color: pink;
`;

const ProfileScreen = (props) => (
	<StyledProfileScreen>
		{/* <Text
			deviceWidth='l'
			size='3xl'
			weight='bold'
			slant='italic'
			usage='display'
		>The Profile Screen</Text> */}
		<Text>The Profile Screen</Text>
		<Link href="/library">Library</Link>
	</StyledProfileScreen>
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
