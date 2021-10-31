import { Collapsible } from '@jbkr/components';

export default {
	'title': 'Core / Collapsible',
	'component': Collapsible,
	'parameters': {
		'layout': 'padded',
	},
};
const Template = (args) => (
	<Collapsible
		{...args}
	/>
);
export const Playground = Template.bind({});
Playground.args = {
	'button': {
		'size': 'small',
		'surfaceStyle': 'outlined',
		'contextColor': 'onDark',
		'text': 'Contents',
	},
	'children':
		<ul>
			<li>A right toff.</li>
			<li>Unhand me, sir.</li>
			<li>Red telephone box.</li>
		</ul>,
};
