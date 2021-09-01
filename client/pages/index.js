/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../lib/mongodb';
import { Copy } from '../components/core/Copy/Copy';
import { Scaffold } from '../components/app/Scaffold/Scaffold';
import {
	defaultMetaImageURL,
	defaultMetaImageAlternativeText,
} from '@jbkr/client-helpers';


const ProfileScreen = ({ skills }) => (
	<Scaffold
		meta={{
			'type': 'profile',
			'url': `/`,
			'title': 'Profile',
			'descriptions': {
				'main': 'I speak suit, geek, and creative. 20+ years\' ' +
					'experience in business, technology, and design.',
				'social': 'I speak suit, geek, and creative. 20+ years\' ' +
					'experience in business, technology, and design.',
			},
			'image': {
				'url': defaultMetaImageURL,
				'alternativeText': defaultMetaImageAlternativeText,
			},
		}}
	>
		<Copy kind="h1">The Profile Screen</Copy>
	</Scaffold>
);
export default ProfileScreen;
export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('skills').find({}).toArray();
	const skills = JSON.parse(JSON.stringify(data));
	return {
		'props': { skills },
	};
}
