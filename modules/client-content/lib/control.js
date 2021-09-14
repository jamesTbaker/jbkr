import {
	returnDefaultValuesFromDB,
	returnOneScreenFromDB,
	returnAllAuthorsFromDB,
	returnAllSkillsFromDB,
	returnAllProfessionalExperiencesFromDB,
	returnAllEducationCertificationFromDB,
	returnAllVolunteerExperiencesFromDB,
	returnAllArticlesFromDB,
	returnOneArticleFromDB,
} from './query.js';

export const returnProfileScreenContent = async () => {
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'slug': '/' });
	const skillsRaw =
		await returnAllSkillsFromDB();
	const professionalExperiencesRaw =
		await returnAllProfessionalExperiencesFromDB();
	const educationCertificationRaw =
		await returnAllEducationCertificationFromDB();
	const volunteerExperiences =
		await returnAllVolunteerExperiencesFromDB();

	return skillsRaw;
};
export const returnLibLabScreenContent = async () => {
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'slug': '/library' });
	const articlesRaw = await returnAllArticlesFromDB();

	return articlesRaw;
};
export const returnArticleScreenContent = async ({ slug }) => {
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'slug': '/library/*' });
	const articleRaw = await returnOneArticleFromDB({ slug });

	return articleRaw;
};
export const returnContactScreenContent = async () => {
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'slug': '/contact' });

	return screenRaw;
};
export const returnMetaScreenContent = async () => {
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'slug': '/meta' });

	return screenRaw;
};
export const return404ScreenContent = async () => {
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'slug': '/404' });

	return screenRaw;
};
