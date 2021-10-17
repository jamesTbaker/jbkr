import styled from 'styled-components';
import { color } from '@jbkr/style-service';
import { AppHeader } from '@jbkr/components';


const ScreenEmulation = styled.div`
	${({ $color }) => `background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 37,
	'format': 'string',
})};`
	}
`;
export default {
	'title': 'App / AppHeader',
	'component': AppHeader,
	'parameters': {
		'layout': 'fullscreen',
	},
};
const Template = (args) => (
	<ScreenEmulation>
		<AppHeader
			{...args}
		/>
	</ScreenEmulation>
);
export const General = Template.bind({});
General.args = {
	'content': {
		'links': {
			'primary': [
				{
					'key': '6140be5a78cc2e3969ebbc5c',
					'anchorText': 'Profile',
					'url': '/',
					'category': 'primary',
					'forThisScreen': true,
				}, {
					'key': '6140bebd78cc2e3969ebbc5e',
					'anchorText': 'Library',
					'url': '/library',
					'category': 'primary',
				}, {
					'key': '6140bebd78cc2e3969ebbc5f',
					'anchorText': 'Contact',
					'url': '/contact',
					'category': 'primary',
				},
			],
			'secondary': [
				{
					'key': 'asdf1',
					'anchorText': 'Twitter',
					'anchorIcon': 'twitter',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf2',
					'anchorText': 'YouTube',
					'anchorIcon': 'youtube',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf3',
					'anchorText': 'LinkedIn',
					'anchorIcon': 'linkedin',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf4',
					'anchorText': 'Dribbble',
					'anchorIcon': 'dribbble',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf5',
					'anchorText': 'Behance',
					'anchorIcon': 'behance',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf6',
					'anchorText': 'CodeSandbox',
					'anchorIcon': 'code-sandbox',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf7',
					'anchorText': 'CodePen',
					'anchorIcon': 'codepen',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf8',
					'anchorText': 'Medium',
					'anchorIcon': 'medium',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': '6140bebd78cc2e3969ebbc60',
					'anchorText': 'Meta',
					'url': '/meta',
					'category': 'primary',
				},
			],
		},
		'liblabItem': {
			'anchorText':
				'Beef Shankle Chislic Meatloaf, Kielbasa in Swine for Pork: Digital Transformation for Museum of Science, Boston',
			// 'anchorText':
			// 	'The Hub',
			'url': '/',
		},
	},
};
