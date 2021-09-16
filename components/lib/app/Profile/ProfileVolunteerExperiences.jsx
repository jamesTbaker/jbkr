import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ProfileProfessionalExperience } from './ProfileProfessionalExperience';

export const ProfileVolunteerExperiences = ({
	professionalExperiences,
}) => (
	<>
		<Copy kind="h2">Professional Experiences</Copy>
		{
			professionalExperiences.map((professionalExperience) =>
				<ProfileProfessionalExperience
					key={professionalExperience.key}
					professionalExperience={professionalExperience}
				/>
			)
		}
	</>
);
