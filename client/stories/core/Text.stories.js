import { Text as TextComponent } from '../../components/core/Text/Text';

// tell Storybook about the component we are documenting
export default {
	'title': 'Core / Text',
	'component': TextComponent,
	'argTypes': {
		'deviceWidth': {
			'control': { 'type': 'select' },
		},
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
	<TextComponent
		{...args}
	/>
);
export const Text = Template.bind({});
Text.args = {
	'deviceWidth': 's',
	'size': 'l',
	'weight': 'regular',
	'slant': 'normal',
	'usage': 'display',
	'color': {
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '21',
	},
	'children': 'The quick brown fox jumped over the lazy dog.',
};
