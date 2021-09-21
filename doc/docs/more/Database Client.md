---
id: "db-client"
title: "Database Client"
sidebar_label: "Database Client"
sidebar_position: 2
---

<div class="jsdoc-generated">
<a name="module_@jbkr/db-client"></a>

## @jbkr/db-client
Client for databases in the jbkr cluster in MongoDB Atlas.


* [@jbkr/db-client](#module_@jbkr/db-client)
    * _static_
        * [.returnDatabaseConnection](#module_@jbkr/db-client.returnDatabaseConnection) ⇒ <code>Object</code>
    * _inner_
        * [~returnMongoConnection()](#module_@jbkr/db-client..returnMongoConnection) ⇒ <code>Object</code>

<a name="module_@jbkr/db-client.returnDatabaseConnection"></a>

### @jbkr/db-client.returnDatabaseConnection ⇒ <code>Object</code>
Return a MongoDB Client connected to the specified database in
the MongoDB Atlas jbkr cluster.

**Kind**: static constant of [<code>@jbkr/db-client</code>](#module_@jbkr/db-client)  
**Returns**: <code>Object</code> - - A MongoDB Client connected to the specified database in
the MongoDB Atlas jbkr cluster.  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.dbName | <code>Object</code> | Name of database to which to connect. |

<a name="module_@jbkr/db-client..returnMongoConnection"></a>

### @jbkr/db-client~returnMongoConnection() ⇒ <code>Object</code>
Return a MongoDB Client connected to
the MongoDB Atlas jbkr cluster.

**Kind**: inner method of [<code>@jbkr/db-client</code>](#module_@jbkr/db-client)  
**Returns**: <code>Object</code> - - A MongoDB Client connected to
the MongoDB Atlas jbkr cluster.  

</div>
