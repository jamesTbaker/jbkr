import { Copy, CopyLink, IconNames } from '@jbkr/components';

export default {
	'title': 'Core / CopyLink',
	'component': CopyLink,
	// Storybook can't read the PropType correctly, so we have to specify
	// it here. See: https://github.com/storybookjs/storybook/issues/14092.
	// 'argTypes': {
	// 	'iconAfter': {
	// 		'control': { 'type': 'select' },
	// 		'options': IconNames,
	// 	},
	// },
	'parameters': {
		'layout': 'padded',
	},
};
const Template = (args) => (
	<Copy
		kind="body--standard"
	>
		<CopyLink
			{...args}
		/>
	</Copy>
);
export const SimpleInternal = Template.bind({});
SimpleInternal.args = {
	'url': '/?path=/story/core-copylink--simple-internal',
	'children': 'Trafalgar Square a Flutter Rather Scrumpy You \'avin a Laugh',
};
export const SimpleExternal = Template.bind({});
SimpleExternal.args = {
	'url': 'https://theintercept.com',
	'children': 'Trafalgar Square a Flutter Rather Scrumpy You \'avin a Laugh',
};
export const ComplexInternal = Template.bind({});
ComplexInternal.args = {
	'url': '/?path=/story/core-copylink--complex-internal',
	'htmlContent': 'Trafalgar Square a <span>Flutter</span> ' +
		'Rather Scrumpy You \'avin a Laugh',
};
export const ComplexExternal = Template.bind({});
ComplexExternal.args = {
	'url': 'https://theintercept.com',
	'htmlContent': 'Trafalgar Square a <span>Flutter</span> ' +
		'Rather Scrumpy You \'avin a Laugh',
};
