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
		<CopyLink
			url="/"
		>
			This is a link
		</CopyLink>
		<br />
		<Button
			text="This is a Button"
			url="/"
			// clickHandler={() => {
			// 	console.log('Help! I\'ve been clicked!');
			// }}
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
