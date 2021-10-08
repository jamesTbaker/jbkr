import { Icon } from '@jbkr/components';

export default {
	'title': 'Primitive / Icon',
	'component': Icon,
};
const Template = (args) => (
	<Icon
		{...args}
	/>
);
export const General = Template.bind({});
General.args = {};
