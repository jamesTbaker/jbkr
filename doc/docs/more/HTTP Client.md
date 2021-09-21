---
id: "http-client"
title: "HTTP Client"
sidebar_label: "HTTP Client"
sidebar_position: 4
---

<div class="jsdoc-generated">
<a name="module_@jbkr/db-client"></a>

## @jbkr/db-client
Client for HTTP requests. Mostly a wrapper around the
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
plus a convenience method for use with Next.js or other React frontend.


* [@jbkr/db-client](#module_@jbkr/db-client)
    * _static_
        * [.returnJSONFromEndPoint](#module_@jbkr/db-client.returnJSONFromEndPoint) ⇒ <code>Object</code>
        * [.returnContentAsProps](#module_@jbkr/db-client.returnContentAsProps) ⇒ <code>Object</code>
    * _inner_
        * [~returnContentEndpoint(\{\})](#module_@jbkr/db-client..returnContentEndpoint) ⇒ <code>String</code>

<a name="module_@jbkr/db-client.returnJSONFromEndPoint"></a>

### @jbkr/db-client.returnJSONFromEndPoint ⇒ <code>Object</code>
A generic function to request data from an API endpoint and
return the JSON representation of that data.

**Kind**: static constant of [<code>@jbkr/db-client</code>](#module_@jbkr/db-client)  
**Returns**: <code>Object</code> - - The JSON representation of the data sent from the API,
or an object with an `error` property.  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.endpoint | <code>String</code> | The API endpoint URI string. |
| \{\}.fetchOptions | <code>Object</code> | The options to use with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch) |

<a name="module_@jbkr/db-client.returnContentAsProps"></a>

### @jbkr/db-client.returnContentAsProps ⇒ <code>Object</code>
A convenience function that makes it easy for the Next.js user
to send content from an API endpoint to a React component as `props`.

**Kind**: static constant of [<code>@jbkr/db-client</code>](#module_@jbkr/db-client)  
**Returns**: <code>Object</code> - - An object with the content assigned to
the `props` property.  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.contentToken | <code>String</code> | Token indicating what "category" of content is desired. |
| \{\}.slug | <code>String</code> | Token indicating which article is desired. Ignored if `contentToken` is not set to `liblab`. |

<a name="module_@jbkr/db-client..returnContentEndpoint"></a>

### @jbkr/db-client~returnContentEndpoint(\{\}) ⇒ <code>String</code>
Construct and return a URI for an API endpoint from which
to get content. Very simplistic right now, but it's here in anticipation
of future growth.

**Kind**: inner method of [<code>@jbkr/db-client</code>](#module_@jbkr/db-client)  
**Returns**: <code>String</code> - - The API endpoint from which to request content.  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.endpointToken | <code>String</code> | Token indicating what "category" of content is desired. |
| \{\}.slug | <code>String</code> | Token indicating which article is desired. Ignored if `endpointToken` is not set to `liblab`. |


</div>
