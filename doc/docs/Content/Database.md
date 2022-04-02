---
id: "Content-Database"
title: "Database"
sidebar_label: "Database"
sidebar_position: 1
---


<div class="generate-docs all-sections">

<section class="generate-docs module">
<div class="generate-docs module-name"><span class="identifier"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="container" d="M0 0h24v24H0z"/><path  id="content" d="M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.983 3.983 0 0 1 15 2zm-4 8H5v9h6v-9zm8 0h-6v9h6v-9zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018L9 4zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2z"/></svg></span>

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

<details><summary>

#### Type Definitions

</summary><div>

##### `MongoDBClient`
A Node.js MongoDB client, from the official
[MongoDB NodeJS Driver module](https://www.npmjs.com/package/mongodb).

<div class="generate-docs function-parameters">

| Name | Type | Description |
| --- | --- | --- |
| db | `function` | [Represents a MongoDB database]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Db.html) |
| collection | `function` | [Embodies a MongoDB collection allowing for insert/update/remove/find and other command operation on that MongoDB collection]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Collection.html) |

</div>

</div></details>

<details><summary>

#### Parameters

</summary><div>

<div class="generate-docs function-parameters">

| Name | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.dbName | `Object` | Name of database to which to connect. |

</div></div></details>

<details><summary>

#### Return

</summary><div>

<p class="generate-docs function-return">

Returns: `MongoDBClient` — A MongoDB Client connected to the specified database in the MongoDB Atlas jbkr cluster.

</p></div></details>

<details><summary>

#### Examples

</summary><div>

<div class="generate-docs function-parameters">

```js
import { returnDatabaseConnection } from '@jbkr/db-client';

const dbConnection = await returnDatabaseConnection({
	'dbName': process.env.mongoDbDbName,
});
const data = await dbConnection.collection('collectionName').findOne({});
```

</div></div></details>

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

<details><summary>

#### Type Definitions

</summary><div>

##### `MongoDBClient`
A Node.js MongoDB client, from the official
[MongoDB NodeJS Driver module](https://www.npmjs.com/package/mongodb).

<div class="generate-docs function-parameters">

| Name | Type | Description |
| --- | --- | --- |
| db | `function` | [Represents a MongoDB database]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Db.html) |
| collection | `function` | [Embodies a MongoDB collection allowing for insert/update/remove/find and other command operation on that MongoDB collection]( https://mongodb.github.io/node-mongodb-native/4.1/classes/Collection.html) |

</div>

</div></details>

<details><summary>

#### Return

</summary><div>

<p class="generate-docs function-return">

Returns: `MongoDBClient` — A MongoDB Client connected to the MongoDB Atlas jbkr cluster.

</p></div></details>

<p class="generate-docs function-source-location">

Source: [modules/db-client/index.js:28](https://github.com/jamesTbaker/jbkr/blob/main/modules/db-client/index.js#L28)

</p>

</div></section></section>

</div>