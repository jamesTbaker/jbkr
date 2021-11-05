import { string, number, shape } from 'prop-types';


export const SkillBaseProps = {
	'name': string.isRequired,
	'percentageExpertise': number,
};
export const ProfessionalExperienceBaseProps = {
	'title': string.isRequired,
	'employer': string.isRequired,
	'description': string.isRequired,
	'startDate': string.isRequired,
	'endDate': string,
};
export const EducationCertificationBaseProps = {
	'header': string.isRequired,
	'tagline': string.isRequired,
	'details': string.isRequired,
	'startYear': number,
	'endYear': number.isRequired,
	'type': string.isRequired,
};
export const VolunteerExperienceBaseProps = {
	'title': string.isRequired,
	'forWhom': string.isRequired,
	'description': string.isRequired,
	'startYear': number.isRequired,
	'endYear': number,
};

export const Skill = shape(SkillBaseProps);
export const ProfessionalExperience = shape(ProfessionalExperienceBaseProps);
export const EducationCertification = shape(EducationCertificationBaseProps);
export const VolunteerExperience = shape(VolunteerExperienceBaseProps);

export const SkillWithReactKey = shape({
	'key': string.isRequired,
	...SkillBaseProps,
});
export const ProfessionalExperienceWithReactKey = shape({
	'key': string.isRequired,
	...ProfessionalExperienceBaseProps,
});
export const EducationCertificationWithReactKey = shape({
	'key': string.isRequired,
	...EducationCertificationBaseProps,
});
export const VolunteerExperienceWithReactKey = shape({
	'key': string.isRequired,
	...VolunteerExperienceBaseProps,
});
