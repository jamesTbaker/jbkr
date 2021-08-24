import { Copy as CopyComponent } from '../../components/core/Copy/Copy';

export default {
	'title': 'Core / Copy',
	'component': CopyComponent,
};
const Template = (args) => (
	<CopyComponent
		{...args}
	/>
);
export const h1 = Template.bind({});
h1.args = {
	'kind': '1',
	// 'color': {
	// 	'kind': 'Neutral',
	// 	'tone': 'Finch',
	// 	'level': '21',
	// },
	'children': 'The quick brown fox jumped over the lazy dog.',
};
