import { Text } from '@jbkr/components';

// tell Storybook about the component we are documenting
export default {
	'title': 'Primitive / Text',
	'component': Text,
	'argTypes': {
		'size': {
			'control': { 'type': 'select' },
		},
		'weight': {
			'control': { 'type': 'select' },
		},
		'slant': {
			'control': { 'type': 'select' },
		},
		'usage': {
			'control': { 'type': 'select' },
		},
		'color': {
			'control': false,
		},
	},
};

// define a function for each test state; a story is a function that returns
// a rendered element in a given state
const Template = (args) => (
	<Text
		{...args}
	/>
);
export const General = Template.bind({});
General.args = {
	'size': 'l',
	'weight': 'regular',
	'slant': 'normal',
	'usage': 'display',
	'spaced': false,
	'color': {
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 21,
	},
	'children': 'The quick brown fox jumped over the lazy dog.',
};
