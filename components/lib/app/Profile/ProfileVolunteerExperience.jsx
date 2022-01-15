import styled from 'styled-components';
import PropTypes from 'prop-types';
import { VolunteerExperience } from '@jbkr/models-react';
import { deviceWidthQuery, color, hiddenInline } from '@jbkr/style-service';
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
const VolunteerExperienceList = styled.ul`
	margin: 0;
	padding: 0;
`;
const VolunteerExperienceListItem = styled.li`
	list-style: none;
`;
const VolunteerExperienceListItemLabel = styled.span`
	${hiddenInline}
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
		<VolunteerExperienceList>
			<VolunteerExperienceListItem>
				<VolunteerExperienceListItemLabel>
					For Whom:&nbsp;
				</VolunteerExperienceListItemLabel>
				<Copy
					kind="profile--experience--volunteer-for-whom"
				>
					{volunteerExperience.forWhom}
				</Copy>
			</VolunteerExperienceListItem>
			{
				volunteerExperience.endYear &&
				volunteerExperience.startYear &&
				volunteerExperience.endYear !== volunteerExperience.startYear &&
				<VolunteerExperienceListItem>
					<VolunteerExperienceListItemLabel>
						Dates:&nbsp;
					</VolunteerExperienceListItemLabel>
					<Copy
						kind="profile--experience--volunteer-dates"
						htmlContent={`${volunteerExperience.startYear} &mdash; ${volunteerExperience.endYear}`}
					/>
				</VolunteerExperienceListItem>
			}
			{
				volunteerExperience.endYear &&
				volunteerExperience.startYear &&
				volunteerExperience.endYear === volunteerExperience.startYear &&

				<VolunteerExperienceListItem>
					<VolunteerExperienceListItemLabel>
						Date:&nbsp;
					</VolunteerExperienceListItemLabel>
					<Copy
						kind="profile--experience--volunteer-dates"
						htmlContent={`${volunteerExperience.endYear}`}
					/>
				</VolunteerExperienceListItem>
			}
			{
				volunteerExperience.description &&
				<VolunteerExperienceListItem>
					<VolunteerExperienceListItemLabel>
						Objective:&nbsp;
					</VolunteerExperienceListItemLabel>
					<Copy
						kind="profile--experience--volunteer-description"
						htmlContent={volunteerExperience.description}
					/>
				</VolunteerExperienceListItem>
			}
		</VolunteerExperienceList>
	</ProfileVolunteerExperienceContainer>
);

ProfileVolunteerExperience.propTypes = {
	'gridArea': PropTypes.string,
	'volunteerExperience': VolunteerExperience,
}
