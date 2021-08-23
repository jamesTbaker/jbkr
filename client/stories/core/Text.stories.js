import React from 'react';
import { Text as TextComponent } from '../../components/core/Text/Text';
import { style } from '@jbkr/style-service';

// tell Storybook about the component we are documenting
export default {
	'title': 'Core/Text',
	'component': TextComponent,
	/* 'argTypes': {
		'deviceWidth': {
			'options': style.device().widths.tokens,
			'control': { 'type': 'select' },
		},
		'size': {
			'options': style.type.foundation().size.tokens,
			'control': { 'type': 'select' },
		},
		'weight': {
			'options': style.type.foundation().weight.tokens,
			'control': { 'type': 'select' },
		},
		'slant': {
			'options': style.type.foundation().slant.tokens,
			'control': { 'type': 'select' },
		},
		'usage': {
			'options': style.type.foundation().lineHeight.tokens,
			'control': { 'type': 'select' },
		},
		'colorMode': {
			'options': ['dark', 'light'],
			'control': { 'type': 'select' },
		},
	}, */
};

// define a function for each test state; a story is a function that returns
// a rendered element in a given state
const Template = args => (
	<TextComponent {...args} >
		The quick brown fox jumped over the lazy dog.
	</TextComponent>
);
export const Text = Template.bind({});
Text.args = {
	'deviceWidth': 's',
	'size': 'l',
	'weight': 'regular',
	'slant': 'normal',
	'usage': 'display',
	'color': 'hsla(0, 0%, 100%, 1)',
	'colorMode': 'dark',
};
