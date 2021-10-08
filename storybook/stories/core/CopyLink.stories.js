import { CopyLink } from '@jbkr/components';

export default {
	'title': 'Core / CopyLink',
	'component': CopyLink,
};
const Template = (args) => (
	<CopyLink
		{...args}
	/>
);
export const Internal = Template.bind({});
Internal.args = {
	'url': '/',
	'children': 'This in an internal link.',
	'internal': true,
};
export const External = Template.bind({});
External.args = {
	'url': 'https://www.theintercept.com',
	'children': 'This in an external link.',
	'internal': false,
};
