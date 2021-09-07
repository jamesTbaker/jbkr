/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import { Copy } from '../components/core/Copy/Copy';
import { Scaffold } from '../components/app/Scaffold/Scaffold';
import {
	defaultMetaImageURL,
	defaultMetaImageAlternativeText,
} from '@jbkr/client-content';

const FourOhFourScreen = (props) => (
	<Scaffold
		meta={{
			'type': 'website',
			'title': 'On no!',
			'descriptions': {
				'main': 'We couldn\'t find what you were looking for.',
				'social': 'We couldn\'t find what you were looking for.',
			},
			'image': {
				'url': defaultMetaImageURL,
				'alternativeText': defaultMetaImageAlternativeText,
			},
		}}
	>
		<Copy kind="h1">The FourOhFour Screen</Copy>
	</Scaffold>

);

export default FourOhFourScreen;
