const { DatabaseConnection } = require('@jbkr/db-client');

module.exports = {
	'ReturnAuthorsFromDB': async () => {
		// attempt to get the data
		try {
			// get a database connection
			const db = await DatabaseConnection({
				'dbName': process.env.mongoDbDbName,
			});
			// assign query result to constant
			const result =
				await db.collection('authors').find({}).toArray();
			// return result
			return result;
			// if an error occurred
		} catch (error) {
			// return it
			return error;
		}
	},
};
