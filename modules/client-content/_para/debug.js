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
// const result = await returnOneScreenFromDB({ 'slug': '/' });
// const result = await returnAllAuthorsFromDB();
// const result = await returnAllSkillsFromDB();
// const result = await returnAllProfessionalExperiencesFromDB();
// const result = await returnAllEducationCertificationFromDB();
// const result = await returnAllVolunteerExperiencesFromDB();
// const result = await returnAllArticlesFromDB();
const result = await returnOneArticleFromDB({ 'slug': 'the-hub' });


console.log(result);
