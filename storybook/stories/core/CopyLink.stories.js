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
const InlineTemplate = (args) => (
	<Copy
		kind="body--standard"
	>
		Through the dales Union Jack Bob's your uncle tip-top what a mug, snotty-nosed brat <CopyLink {...args} /> a diamond geezer conkers flabbergasted I'd reet fancy a skive Sonic Screwdriver
	</Copy>
);
export const InlineSimpleInternal = InlineTemplate.bind({});
InlineSimpleInternal.args = {
	'url': '/?path=/story/core-copylink--inline-simple-internal',
	'children': 'Trafalgar Square a Flutter Rather Scrumpy You \'avin a Laugh',
	'inline': true,
};
export const InlineSimpleExternal = InlineTemplate.bind({});
InlineSimpleExternal.args = {
	'url': 'https://theintercept.com',
	'children': 'Trafalgar Square a Flutter Rather Scrumpy You \'avin a Laugh',
	'inline': true,
};
export const InlineComplexInternal = InlineTemplate.bind({});
InlineComplexInternal.args = {
	'url': '/?path=/story/core-copylink--inline-complex-internal',
	'htmlContent': 'Trafalgar Square a <span>Flutter</span> ' +
		'Rather Scrumpy You \'avin a Laugh',
	'inline': true,
};
export const InlineComplexExternal = InlineTemplate.bind({});
InlineComplexExternal.args = {
	'url': 'https://theintercept.com',
	'htmlContent': 'Trafalgar Square a <span>Flutter</span> ' +
		'Rather Scrumpy You \'avin a Laugh',
	'inline': true,
};
const BlockTemplate = (args) => (
	<Copy
		kind="body--standard"
	>
		<CopyLink
			{...args}
		/>
	</Copy>
);
export const BlockComplexInternal = BlockTemplate.bind({});
BlockComplexInternal.args = {
	'url': '/?path=/story/core-copylink--block-complex-internal',
	'htmlContent': 'Trafalgar Square a <span>Flutter</span> ' +
		'Rather Scrumpy You \'avin a Laugh',
	'inline': false,
};
