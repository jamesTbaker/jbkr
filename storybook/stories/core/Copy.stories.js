import { Copy } from '@jbkr/components';

export default {
	'title': 'Core / Copy',
	'component': Copy,
	'parameters': {
		'layout': 'padded',
	},
};
const Template = (args) => (
	<Copy
		{...args}
	/>
);
export const General = Template.bind({});
General.args = {
	'kind': 'h1',
	'children': 'The quick brown fox jumped over the lazy dog.',
};
