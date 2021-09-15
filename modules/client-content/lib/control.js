/* eslint-disable no-unused-vars */
import {
	returnDefaultValuesFromDB,
	returnOneScreenFromDB,
	returnAllSkillsFromDB,
	returnAllProfessionalExperiencesFromDB,
	returnAllEducationCertificationFromDB,
	returnAllVolunteerExperiencesFromDB,
	returnAllPublishedArticlesFromDB,
	returnOneArticleFromDB,
} from './query.js';
import {
	returnTransformedProfileScreenContent,
	returnTransformedLibLabScreenContent,
	returnTransformedArticleScreenContent,
	returnTransformedSimpleScreenContent,
} from './transform.js';

export const returnProfileScreenContent = async () => {
	// define screen ID
	const screenID = 'Profile';
	// get the raw data
	const defaultsRaw =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ screenID });
	const skillsRaw =
		await returnAllSkillsFromDB();
	const professionalExperiencesRaw =
		await returnAllProfessionalExperiencesFromDB();
	const educationCertificationRaw =
		await returnAllEducationCertificationFromDB();
	const volunteerExperiencesRaw =
		await returnAllVolunteerExperiencesFromDB();
	// get a transformed version of the data
	const profileScreenContent = returnTransformedProfileScreenContent({
		screenID,
		defaultsRaw,
		screenRaw,
		skillsRaw,
		professionalExperiencesRaw,
		educationCertificationRaw,
		volunteerExperiencesRaw,
	});
	// return the transformed data
	return profileScreenContent;
};
export const returnLibLabScreenContent = async () => {
	// define screen ID
	const screenID = 'LibLab';
	// get the raw data
	const defaultsRaw =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ screenID });
	const articlesRaw = await returnAllPublishedArticlesFromDB();
	// get a transformed version of the data
	const libLabScreenContent = returnTransformedLibLabScreenContent({
		screenID, defaultsRaw, screenRaw, articlesRaw,
	});
	// return the transformed data
	return libLabScreenContent;
};
export const returnArticleScreenContent = async ({ slug }) => {
	// define screen ID
	const screenID = 'Article';
	// get the raw data
	const defaultsRaw =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ screenID });
	const articlePartsRaw = await returnOneArticleFromDB({ slug });
	// get a transformed version of the data
	const articleScreenContent =
		returnTransformedArticleScreenContent({
			screenID,
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
	// define screen ID
	const screenID = 'Contact';
	// get the raw data
	const defaultsRaw =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ screenID });
	// get a transformed version of the data
	const simpleScreenContent =
		returnTransformedSimpleScreenContent({
			screenID,
			defaultsRaw,
			screenRaw,
		});
	// return the transformed data
	return simpleScreenContent;
};
export const returnMetaScreenContent = async () => {
	// define screen ID
	const screenID = 'Meta';
	// get the raw data
	const defaultsRaw =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ screenID });
	// get a transformed version of the data
	const simpleScreenContent =
		returnTransformedSimpleScreenContent({
			screenID,
			defaultsRaw,
			screenRaw,
		});
	// return the transformed data
	return simpleScreenContent;
};
export const return404ScreenContent = async () => {
	// define screen ID
	const screenID = '404';
	// get the raw data
	const defaultsRaw =
		await returnDefaultValuesFromDB();
	const screenRaw =
		await returnOneScreenFromDB({ screenID });
	// get a transformed version of the data
	const simpleScreenContent =
		returnTransformedSimpleScreenContent({
			screenID,
			defaultsRaw,
			screenRaw,
		});
	// return the transformed data
	return simpleScreenContent;
};
