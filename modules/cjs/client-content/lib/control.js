const {
	ReturnOneScreenFromDB,
	ReturnAllAuthorsFromDB,
	ReturnAllArticlesFromDB,
	ReturnOneArticleFromDB,
} = require('./query');

module.exports = {
	'ReturnLibLabScreenContent': async () => {
		const articlesRaw = await ReturnAllArticlesFromDB();

		return articlesRaw;
	},
	'ReturnArticleScreenContent': async ({ slug }) => {
		const articleRaw = await ReturnOneArticleFromDB({ slug });

		return articleRaw;
	},
};
