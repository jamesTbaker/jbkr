import styled from 'styled-components';
import { deviceWidthQuery, color } from '@jbkr/style-service';
import { AppHeader } from '@jbkr/components';


const BodyEmulation = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		height: 812px;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		text-align: center;
		height: 1024px;
	}
	background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 37,
	'format': 'string',
})
	};
`;

export default {
	'title': 'App / AppHeader',
	'component': AppHeader,
	'parameters': {
		'layout': 'fullscreen',
	},
};
const Template = (args) => (
	<BodyEmulation>
		<AppHeader
			{...args}
		/>
	</BodyEmulation>
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
					'anchorText': 'Lib / Lab',
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
					'anchorIconBefore': 'twitter',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf2',
					'anchorText': 'YouTube',
					'anchorIconBefore': 'youtube',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf3',
					'anchorText': 'LinkedIn',
					'anchorIconBefore': 'linkedin',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf4',
					'anchorText': 'Dribbble',
					'anchorIconBefore': 'dribbble',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf5',
					'anchorText': 'Behance',
					'anchorIconBefore': 'behance',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf6',
					'anchorText': 'CodeSandbox',
					'anchorIconBefore': 'code-sandbox',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf7',
					'anchorText': 'CodePen',
					'anchorIconBefore': 'codepen',
					'url': '/',
					'category': 'secondary',
				}, {
					'key': 'asdf8',
					'anchorText': 'Medium',
					'anchorIconBefore': 'medium',
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
		'announcement': {
			'bodyAnchor':
				'Beef Shankle Chislic Meatloaf, Kielbasa in Swine for Pork: Digital Transformation for Museum of Science, Boston',
			// 'anchorText':
			// 	'The Hub',
			'bodyURL': '/',
			'preface': 'Now in Lib / Lab',
		},
	},
};
