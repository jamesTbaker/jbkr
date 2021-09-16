import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';

export const ProfileSkill = ({
	skill,
	visualize
}) => (
	<>
		{
			visualize &&

			<Copy
				kind="h5"
				htmlContent={`${skill.percentageExpertise}% &mdash; ${skill.name}`}
			/>
		}
		{
			!visualize &&

			<Copy kind="body--standard">{skill.name}</Copy>
		}
	</>
);
