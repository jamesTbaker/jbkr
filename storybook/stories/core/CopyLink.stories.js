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
};
const Template = (args) => (
	<Copy
		kind="body--standard"
	>
		{args.prependContent}
		<CopyLink
			{...args}
		/>
		{args.appendContent}
	</Copy>
);
export const General = Template.bind({});
General.args = {
	'url': '/?path=/story/core-copylink--general',
	'children': 'Link with descenders: qypg',
};
