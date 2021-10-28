import { ProfileSkillRating } from '@jbkr/components';

export default {
	'title': 'App / ProfileSkillRating',
	'component': ProfileSkillRating,
	'parameters': {
		'layout': 'padded',
	},
};
const Template = (args) => (
	<ProfileSkillRating
		{...args}
	/>
);
export const Playground = Template.bind({});
Playground.args = {
	'size': 'large',
	'percentageExpertise': '50',
};
