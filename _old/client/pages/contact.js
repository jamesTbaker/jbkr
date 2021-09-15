/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import { Copy } from '../components/core/Copy/Copy';
import { ScreenScaffold }
	from '../components/app/ScreenScaffold/ScreenScaffold';
import {
	defaultMetaImageURL,
	defaultMetaImageAlternativeText,
} from '@jbkr/client-content';


const ScreenContainer = (props) => (
	<ScreenScaffold
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
	</ScreenScaffold>
);

export default ScreenContainer;
