---
id: "Content-Database"
title: "Database"
sidebar_label: "Database"
sidebar_position: 1
---


<div class="generate-docs all-sections">

<section class="generate-docs module">
<div class="generate-docs module-name">

## @jbkr/db-client

</div>

<div class="generate-docs module-description">
Client for databases in the jbkr cluster in MongoDB Atlas.
</div>

<p class="generate-docs module-source-location">

Source: [modules/db-client/index.js](https://github.com/jamesTbaker/jbkr/blob/main/modules/db-client/index.js)

</p>

<section class="generate-docs module-members">
<div class="generate-docs module-members-group-title">

## API

</div>

<div class="generate-docs function"><div class="generate-docs function-title">
<span class="function-title-preface">Public : Function : </span>

### returnDatabaseConnection

</div>
<div class="generate-docs function-description">

Return a MongoDB Client connected to the specified database in
the MongoDB Atlas jbkr cluster.

</div>

#### Type Definitions

##### `MongoDBClient`
A Node.js MongoDB client, from the official
[MongoDB NodeJS Driver module](https://www.npmjs.com/package/mongodb).

<div class="generate-docs function-parameters">

| Name | Type | Description |
| --- | --- | --- |
| db | `function` | [Represents a MongoDB database]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Db.html) |
| collection | `function` | [Embodies a MongoDB collection allowing for insert/update/remove/find and other command operation on that MongoDB collection]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Collection.html) |

</div>

#### Parameters

<div class="generate-docs function-parameters">

| Name | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.dbName | `Object` | Name of database to which to connect. |

</div>

#### Return

<p class="generate-docs function-return">

Returns: `MongoDBClient` — A MongoDB Client connected to the specified database in the MongoDB Atlas jbkr cluster.

</p>

#### Example(s)

<div class="generate-docs function-parameters">

```js
import { returnDatabaseConnection } from '@jbkr/db-client';

const dbConnection = await returnDatabaseConnection({
	'dbName': process.env.mongoDbDbName,
});
const data = await dbConnection.collection('collectionName').findOne({});
```

</div>

<p class="generate-docs function-source-location">

Source: [modules/db-client/index.js:53](https://github.com/jamesTbaker/jbkr/blob/main/modules/db-client/index.js#L53)

</p>

</div><div class="generate-docs module-members-group-title">

## Inner Elements

</div>

<div class="generate-docs function"><div class="generate-docs function-title">
<span class="function-title-preface">Private : Function : </span>

### returnMongoConnection

</div>
<div class="generate-docs function-description">

Return a MongoDB Client connected to
the MongoDB Atlas jbkr cluster.

</div>

#### Type Definitions

##### `MongoDBClient`
A Node.js MongoDB client, from the official
[MongoDB NodeJS Driver module](https://www.npmjs.com/package/mongodb).

<div class="generate-docs function-parameters">

| Name | Type | Description |
| --- | --- | --- |
| db | `function` | [Represents a MongoDB database]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Db.html) |
| collection | `function` | [Embodies a MongoDB collection allowing for insert/update/remove/find and other command operation on that MongoDB collection]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Collection.html) |

</div>

#### Return

<p class="generate-docs function-return">

Returns: `MongoDBClient` — A MongoDB Client connected to the MongoDB Atlas jbkr cluster.

</p>

<p class="generate-docs function-source-location">

Source: [modules/db-client/index.js:28](https://github.com/jamesTbaker/jbkr/blob/main/modules/db-client/index.js#L28)

</p>

</div></section></section>

</div>