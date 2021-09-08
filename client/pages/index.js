/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import { connectToDatabase } from '../lib/mongodb';
import { Copy } from '../components/core/Copy/Copy';
import { ScreenScaffold }
	from '../components/app/ScreenScaffold/ScreenScaffold';
import {
	defaultMetaImageURL,
	defaultMetaImageAlternativeText,
} from '@jbkr/client-content';


const ScreenContainer = ({ skills }) => (
	<ScreenScaffold
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
	</ScreenScaffold>
);
export default ScreenContainer;
export async function getServerSideProps(context) {
	const { db } = await connectToDatabase();
	const data = await db.collection('skills').find({}).toArray();
	const skills = JSON.parse(JSON.stringify(data));
	return {
		'props': { skills },
	};
}
