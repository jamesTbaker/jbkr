import {
	returnOneScreenFromDB,
	returnAllAuthorsFromDB,
	returnAllArticlesFromDB,
	returnOneArticleFromDB,
} from './query.js';

export const returnLibLabScreenContent = async () => {
	const articlesRaw = await returnAllArticlesFromDB();

	return articlesRaw;
};
export const returnArticleScreenContent = async ({ slug }) => {
	const articleRaw = await returnOneArticleFromDB({ slug });

	return articleRaw;
};
