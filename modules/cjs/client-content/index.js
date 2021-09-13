const dbQueries = require('./lib/db-queries');

module.exports = {
	'ReturnAuthorsFromDB': dbQueries.ReturnAuthorsFromDB,
	'ReturnArticlesFromDB': dbQueries.ReturnArticlesFromDB,
	'ReturnArticleFromDB': dbQueries.ReturnArticleFromDB,
};
