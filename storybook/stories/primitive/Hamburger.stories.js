import { Hamburger } from '@jbkr/components';

export default {
	'title': 'Primitive / Hamburger',
	'component': Hamburger,
};
const Template = (args) => (
	<Hamburger
		{...args}
	/>
);
export const General = Template.bind({});
General.args = {};
