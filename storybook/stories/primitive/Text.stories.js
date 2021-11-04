import {
	TypeSizeKeys, TypeWeightKeys, TypeSlantKeys, TypeUsageKeys,
} from '@jbkr/models-react';
import { Text } from '@jbkr/components';

// tell Storybook about the component we are documenting
export default {
	'title': 'Primitive / Text',
	'component': Text,
	'argTypes': {
		'size': {
			'options': TypeSizeKeys,
			'control': { 'type': 'select' },
		},
		'weight': {
			'options': TypeWeightKeys,
			'control': { 'type': 'select' },
		},
		'slant': {
			'options': TypeSlantKeys,
			'control': { 'type': 'select' },
		},
		'usage': {
			'options': TypeUsageKeys,
			'control': { 'type': 'select' },
		},
		'color': {
			'control': false,
		},
		'gradient': {
			'control': false,
		},
	},
	'parameters': {
		'layout': 'padded',
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
		'level': 11,
	},
	'children': 'The quick brown fox jumped over the lazy dog.',
};
