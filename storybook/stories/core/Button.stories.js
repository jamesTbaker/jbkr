import { Button, IconNames } from '@jbkr/components';

export default {
	'title': 'Core / Button',
	'component': Button,
	// Storybook can't read externally-defined PropTypes correctly,
	// so we have to specify them here. See:
	// https://github.com/storybookjs/storybook/issues/14092.
	'argTypes': {
		'iconBefore': {
			'control': { 'type': 'select' },
			'options': IconNames,
		},
		'iconAfter': {
			'control': { 'type': 'select' },
			'options': IconNames,
		},
	},
};
const Template = (args) => (
	<Button
		{...args}
	/>
);
export const AsButton = Template.bind({});
AsButton.args = {
	'text': 'Button Label Text',
	'clickHandler': () => {
		console.log('Help! I\'ve been clicked!');
	},
	'size': 'standard',
	'surfaceStyle': 'filled',
	'contextColor': 'onDark',
	'iconBefore': 'arrow-left',
	'iconAfter': 'chevron-right',
};
export const AsInternalLink = Template.bind({});
AsInternalLink.args = {
	'text': 'Internal Link Anchor Text',
	'url': '/?path=/story/core-button--as-internal-link',
	'size': 'standard',
	'surfaceStyle': 'outlined',
	'contextColor': 'onDark',
	'iconBefore': 'snowflake',
};
export const AsExternalLink = Template.bind({});
AsExternalLink.args = {
	'text': 'External Link Anchor Text',
	'url': 'https://theintercept.com',
	'size': 'standard',
	'surfaceStyle': 'transparent',
	'contextColor': 'onDark',
	'iconBefore': 'snowflake',
};
export const AsIconOnly = Template.bind({});
AsIconOnly.args = {
	'text': 'Button Label Text',
	'clickHandler': () => {
		console.log('Help! I\'ve been clicked!');
	},
	'size': 'standard',
	'surfaceStyle': 'transparent',
	'contextColor': 'onDark',
	'iconBefore': 'dribbble',
	'textHidden': true,
};
