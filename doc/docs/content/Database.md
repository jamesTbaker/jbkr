---
id: "Content-Database"
title: "Database"
sidebar_label: "Database"
sidebar_position: 1
---

<div class="generate-docs all-sections">

<section class="generate-docs module">

## @jbkr/db-client

<div class="generate-docs module-description">

Client for databases in the jbkr cluster in MongoDB Atlas.

</div>
<p class="generate-docs source-location">

Source: [modules/db-client/index.js](https://github.com/jamesTbaker/jbkr/blob/main/modules/db-client/index.js)

</p>
</section>

<section class="generate-docs function">

### returnDatabaseConnection

<div class="generate-docs function-description">

Return a MongoDB Client connected to the specified database in
the MongoDB Atlas jbkr cluster.

</div>

<div class="generate-docs function-parameters">

| Param | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.dbName | `Object` | Name of database to which to connect. |

</div>

<p class="generate-docs function-return">

Returns: `MongoDBClient` — A MongoDB Client connected to the specified database in the MongoDB Atlas jbkr cluster.

</p>

<div class="generate-docs function-parameters">

```js

import { returnDatabaseConnection } from '@jbkr/db-client';

const dbConnection = await returnDatabaseConnection({
	'dbName': process.env.mongoDbDbName,
});
const data = await dbConnection.collection('collectionName').findOne({});
```

</div>

<p class="generate-docs source-location">

Source: [modules/db-client/index.js:51](https://github.com/jamesTbaker/jbkr/blob/main/modules/db-client/index.js#L51)

</p>
</section>

</div>
