import React from 'react';
import { Text } from './Text';


// tell Storybook about the component we are documenting
export default {
	'component': Text,
	'title': 'Core/Text',
};

// define a function for each test state; a story is a function that returns
// a rendered element in a given state

const Template = args => (
	<Text {...args} >
		The quick brown fox jumped over the lazy dog.
	</Text>
);

export const SampleText = Template.bind({});
SampleText.args = {
	'deviceWidth': 's',
	'size': 'l',
	'weight': 'regular',
	'slant': 'normal',
	'usage': 'display',
};
