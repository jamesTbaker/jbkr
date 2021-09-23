/**
 * Client for databases in the jbkr cluster in MongoDB Atlas.
 * @module @jbkr/db-client
 */
/**
 * A Node.js MongoDB client, from the official
 * [MongoDB NodeJS Driver module](https://www.npmjs.com/package/mongodb).
 * @typedef {Object} MongoDBClient
 * @property {Function} collection - [Embodies a MongoDB collection
 * allowing for insert/update/remove/find and other command operation
 * on that MongoDB collection](
 * https://mongodb.github.io/node-mongodb-native/4.1/classes/Collection.html)
 */


import { MongoClient } from 'mongodb';

/**
 * Return a MongoDB Client connected to
 * the MongoDB Atlas jbkr cluster.
 *
 * @returns {Object} A MongoDB Client connected to
 * the MongoDB Atlas jbkr cluster.
 *
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
 * Return a MongoDB Client connected to the specified database in
 * the MongoDB Atlas jbkr cluster.
 *
 * @param {Object} \{\} - Destructured parameters
 * @param {Object} \{\}.dbName - Name of database to which to connect.
 * @returns {MongoDBClient} A MongoDB
 * Client connected to the specified database in the MongoDB Atlas jbkr cluster.
 *
 * @example @lang js
 * import { returnDatabaseConnection } from '@jbkr/db-client';
 *
 * const dbConnection = await returnDatabaseConnection({
 * 	'dbName': process.env.mongoDbDbName,
 * });
 * const data = await dbConnection.collection('collectionName').findOne({});
 */
export const returnDatabaseConnection = async ({ dbName }) => {
	const mongoConnection = await returnMongoConnection();
	return mongoConnection.db(dbName);
};
