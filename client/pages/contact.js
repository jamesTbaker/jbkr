/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import { Copy } from '../components/core/Copy/Copy';
import { Scaffold } from '../components/app/Scaffold/Scaffold';
import {
	defaultMetaImageURL,
	defaultMetaImageAlternativeText,
} from '@jbkr/client-helpers';


const ContactScreen = (props) => (
	<Scaffold
		meta={{
			'type': 'website',
			'title': 'Contact',
			'descriptions': {
				'main': 'Get in touch now!',
				'social': 'Get in touch now!',
			},
			'image': {
				'url': defaultMetaImageURL,
				'alternativeText': defaultMetaImageAlternativeText,
			},
		}}
	>
		<Copy kind="h1">The Contact Screen</Copy>
	</Scaffold>
);

export default ContactScreen;
