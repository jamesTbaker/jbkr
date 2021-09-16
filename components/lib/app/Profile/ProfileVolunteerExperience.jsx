import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';

export const ProfileVolunteerExperience = ({
	volunteerExperience,
}) => (
	<>
		<Copy kind="h3">{volunteerExperience.title}</Copy>
		<div>{volunteerExperience.forWhom}</div>

		{
			volunteerExperience.endYear &&
			volunteerExperience.startYear &&
			volunteerExperience.endYear !== volunteerExperience.startYear &&
			<div
				dangerouslySetInnerHTML={{ '__html': `${volunteerExperience.startYear}&mdash;${volunteerExperience.endYear}` }}
			/>
		}
		{
			volunteerExperience.endYear &&
			volunteerExperience.startYear &&
			volunteerExperience.endYear === volunteerExperience.startYear &&
			<div
				dangerouslySetInnerHTML={{ '__html': `${volunteerExperience.endYear}` }}
			/>
		}
		<div
			dangerouslySetInnerHTML={{ '__html': `${volunteerExperience.description}` }}
		/>
		<hr />
	</>
);
