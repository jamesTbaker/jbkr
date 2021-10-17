import { Line } from '@jbkr/components';

export default {
	'title': 'Primitive / Line',
	'component': Line,
	'parameters': {
		'layout': 'padded',
	},
};
const Template = (args) => (
	<Line
		{...args}
	/>
);
export const General = Template.bind({});
General.args = {};
