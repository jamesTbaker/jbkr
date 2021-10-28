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
export const General = Template.bind({});
General.args = {};
