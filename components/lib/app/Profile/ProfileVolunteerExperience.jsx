import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';


const ProfileVolunteerExperienceContainer = styled.div`
	border-top: .125rem solid ${color({
		'kind': 'Accent',
		'tone': 'Finch',
		'level': 1,
		'format': 'string',
	})};
	padding: 2.875rem 0 4rem;
	${deviceWidthQuery.not({ 'width': 's' })} {
		${
			({ gridArea }) => `grid-area: ${gridArea};`
		}

	}
`;
export const ProfileVolunteerExperience = ({
	volunteerExperience,
	gridArea,
}) => (
	<ProfileVolunteerExperienceContainer
		gridArea={gridArea}
	>
		<Copy
			kind="profile--experience--volunteer-title"
		>
			{volunteerExperience.title}
		</Copy>
		<Copy
			kind="profile--experience--volunteer-for-whom"
		>
			{volunteerExperience.forWhom}
		</Copy>
		{
			volunteerExperience.endYear &&
			volunteerExperience.startYear &&
			volunteerExperience.endYear !== volunteerExperience.startYear &&
			<Copy
				kind="profile--experience--volunteer-dates"
				htmlContent={`${volunteerExperience.startYear} &mdash; ${volunteerExperience.endYear}`}
			/>
		}
		{
			volunteerExperience.endYear &&
			volunteerExperience.startYear &&
			volunteerExperience.endYear === volunteerExperience.startYear &&
			<Copy
				kind="profile--experience--volunteer-dates"
				htmlContent={`${volunteerExperience.endYear}`}
			/>
		}
		{
			volunteerExperience.description &&
			<Copy
				kind="profile--experience--volunteer-description"
				htmlContent={volunteerExperience.description}
			/>
		}
	</ProfileVolunteerExperienceContainer>
);
