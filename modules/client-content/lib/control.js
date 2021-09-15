/* eslint-disable no-unused-vars */
import {
	returnDefaultValuesFromDB,
	returnOneScreenFromDB,
	returnAllSkillsFromDB,
	returnAllProfessionalExperiencesFromDB,
	returnAllEducationCertificationFromDB,
	returnAllVolunteerExperiencesFromDB,
	returnAllArticlesFromDB,
	returnOneArticleFromDB,
} from './query.js';
import {
	returnTransformedLibLabScreenContent,
	returnTransformedArticleScreenContent,
} from './transform.js';

export const returnProfileScreenContent = async () => {
	// get the raw data
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'screenID': 'Profile' });
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
	// get the raw data
	const screenRaw =
		await returnOneScreenFromDB({ 'screenID': 'LibLab' });
	const articlesRaw = await returnAllArticlesFromDB();
	// get a transformed version of the data
	const libLabScreenContent = returnTransformedLibLabScreenContent({
		screenRaw, articlesRaw,
	});
	// return the transformed data
	return libLabScreenContent;
};
export const returnArticleScreenContent = async ({ slug }) => {
	// get the raw data
	const defaultsRaw =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'screenID': 'Article' });
	const articlePartsRaw = await returnOneArticleFromDB({ slug });
	// get a transformed version of the data
	const articleScreenContent =
		returnTransformedArticleScreenContent({
			defaultsRaw,
			screenRaw,
			'articleMainRaw': articlePartsRaw.articleMainRaw,
			'articleSectionsRaw': articlePartsRaw.articleSectionsRaw,
			'articleMediaRaw': articlePartsRaw.articleMediaRaw,
		});
	// return the transformed data
	return articleScreenContent;
};
export const returnContactScreenContent = async () => {
	// get the raw data
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'screenID': 'Contact' });

	return screenRaw;
};
export const returnMetaScreenContent = async () => {
	// get the raw data
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'screenID': 'Meta' });

	return screenRaw;
};
export const return404ScreenContent = async () => {
	// get the raw data
	const defaults =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ 'screenID': '404' });

	return screenRaw;
};
