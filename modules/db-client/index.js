/**
 * Client for databases in the jbkr cluster in MongoDB Atlas.
 * @module @jbkr/db-client
 */

import { MongoClient } from 'mongodb';

/**
 * @description Return a MongoDB Client connected to
 * the MongoDB Atlas jbkr cluster.
 * @returns {Object} - A MongoDB Client connected to
 * the MongoDB Atlas jbkr cluster.
 */
const returnMongoConnection = async () => {
	const url = `mongodb+srv://${process.env.mongoDbUser}:` +
		`${process.env.mongoDbPass}@${process.env.mongoDbHost}?` +
		`retryWrites=true&w=majority`;
	const mongoClient = new MongoClient(url);
	await mongoClient.connect();
	return mongoClient;
};
/**
 * @description Return a MongoDB Client connected to the specified database in
 * the MongoDB Atlas jbkr cluster.
 * @param {Object} \{\} - Destructured parameters
 * @param {Object} \{\}.dbName - Name of database to which to connect.
 * @returns {Object} - A MongoDB Client connected to the specified database in
 * the MongoDB Atlas jbkr cluster.
 */
export const returnDatabaseConnection = async ({ dbName }) => {
	const mongoConnection = await returnMongoConnection();
	return mongoConnection.db(dbName);
};
