import { Icon } from '@jbkr/components';

export default {
	'title': 'Primitive / Icon',
	'component': Icon,
	'parameters': {
		'layout': 'padded',
	},
};
const Template = (args) => (
	<Icon
		{...args}
	/>
);
export const General = Template.bind({});
General.args = {
	'size': '5xl',
};
export const Rotated = Template.bind({});
Rotated.args = {
	'size': '5xl',
	'transform': 'rotate(45deg)',
};
