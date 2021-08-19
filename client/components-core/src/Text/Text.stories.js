import React from 'react';
import { Text } from './Text';


// tell Storybook about the component we are documenting
export default {
	'component': Text,
	'title': 'Text',
};

// define a function for each test state; a story is a function that returns
// a rendered element in a given state

const Template = args => <Text {...args} >jbkr</Text>;

export const SmallDisplay5xlRegular = Template.bind({});
SmallDisplay5xlRegular.args = {
	'deviceWidth': 's',
	'size': '5xl',
	'weight': 'regular',
	'slant': 'normal',
	'usage': 'display',
};
