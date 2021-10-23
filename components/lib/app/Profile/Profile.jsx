import styled from 'styled-components';
import { ProfileHeader } from './ProfileHeader';
import { ProfileSkills } from './ProfileSkills';
import { ProfileProfessionalExperiences } from './ProfileProfessionalExperiences';
import { ProfileEducationCertifications } from './ProfileEducationCertifications';
import { ProfileVolunteerExperiences } from './ProfileVolunteerExperiences';
import { Button } from '../../core/Button/Button';
import { CopyLink } from '../../core/CopyLink/CopyLink';


export const Profile = ({
	title,
	skills,
	professionalExperiences,
	educationCertification,
	volunteerExperiences
}) => (
	<>
		<ProfileHeader
			title={title}
		/>
		<ProfileSkills
			skills={skills}
		/>
		<ProfileProfessionalExperiences
			professionalExperiences={professionalExperiences}
		/>
		<ProfileEducationCertifications
			educationCertification={educationCertification}
		/>
		<ProfileVolunteerExperiences
			volunteerExperiences={volunteerExperiences}
		/>
	</>
);
