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
	</ScreenScaffold>

);

export default ScreenContainer;