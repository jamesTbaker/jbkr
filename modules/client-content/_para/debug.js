/* eslint-disable no-unused-vars */
import {
	returnDefaultValuesFromDB,
	returnOneScreenFromDB,
	returnAllAuthorsFromDB,
	returnAllSkillsFromDB,
	returnAllProfessionalExperiencesFromDB,
	returnAllEducationCertificationFromDB,
	returnAllVolunteerExperiencesFromDB,
	returnAllPublishedArticlesFromDB,
	returnOneArticleFromDB,
} from '../lib/query.js';
import {
	returnProfileScreenContent,
	returnLibLabScreenContent,
	returnArticleScreenContent,
	returnContactScreenContent,
	returnMetaScreenContent,
	return404ScreenContent,
} from '../lib/control.js';


// const result = await returnDefaultValuesFromDB();
// const result = await returnOneScreenFromDB({ 'screenID': 'Profile' });
// const result = await returnAllAuthorsFromDB();
// const result = await returnAllSkillsFromDB();
// const result = await returnAllProfessionalExperiencesFromDB();
// const result = await returnAllEducationCertificationFromDB();
// const result = await returnAllVolunteerExperiencesFromDB();
// const result = await returnAllPublishedArticlesFromDB();
// const result = await returnOneArticleFromDB({ 'slug': 'the-hub' });

// const result = await returnProfileScreenContent();
const result = await returnLibLabScreenContent();
// const result = await returnArticleScreenContent({ 'slug': 'the-hub' });
// const result = await returnArticleScreenContent({
// 	'slug': 'scrote-ever-so-lovely',
// });

// const result = await returnContactScreenContent();
// const result = await returnMetaScreenContent();
// const result = await return404ScreenContent();


console.log(result);
