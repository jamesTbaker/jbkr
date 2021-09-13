import { MongoClient } from 'mongodb';

const returnMongoConnection = async () => {
	const url = `mongodb+srv://${process.env.mongoDbUser}:` +
		`${process.env.mongoDbPass}@${process.env.mongoDbHost}?` +
		`retryWrites=true&w=majority`;
	const mongoClient = new MongoClient(url);
	await mongoClient.connect();
	return mongoClient;
};
export const databaseConnection = async ({ dbName }) => {
	const mongoConnection = await returnMongoConnection();
	return mongoConnection.db(dbName);
};
/*
module.exports = {
	'MongoConnection': async () => {
		const url = `mongodb+srv://${process.env.mongoDbUser}:` +
			`${process.env.mongoDbPass}@${process.env.mongoDbHost}?` +
			`retryWrites=true&w=majority`;
		const mongoClient = new MongoClient(url);
		await mongoClient.connect();
		return mongoClient;
	},
	'DatabaseConnection': async ({ dbName }) => {
		const mongoConnection = await module.exports.MongoConnection();
		return mongoConnection.db(dbName);
	},
};
 */
