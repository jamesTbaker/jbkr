import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ProfileVolunteerExperience } from './ProfileVolunteerExperience';

export const ProfileVolunteerExperiences = ({
	volunteerExperiences,
}) => (
	<>
		<Copy kind="h2">Volunteer Experiences</Copy>
		{
			volunteerExperiences.map((volunteerExperience) =>
				<ProfileVolunteerExperience
					key={volunteerExperience.key}
					volunteerExperience={volunteerExperience}
				/>
			)
		}
	</>
);
