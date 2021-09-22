---
id: "http-client-2"
title: "HTTP Client 2"
sidebar_label: "HTTP Client 2"
sidebar_position: 4
---

<div class="jsdoc-generated-2">
<a name="module_@jbkr/http-client"></a>

## @jbkr/http-client
Client for HTTP requests. Mostly a wrapper around the
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
plus a convenience method for use with Next.js or other React frontend.


* [@jbkr/http-client](#module_@jbkr/http-client)
    * _static_
        * [.returnJSONFromEndPoint](#module_@jbkr/http-client.returnJSONFromEndPoint) ⇒ <code>Object</code>
        * [.returnContentAsProps](#module_@jbkr/http-client.returnContentAsProps) ⇒ <code>Object</code>
    * _inner_
        * [~returnContentEndpoint(\{\})](#module_@jbkr/http-client..returnContentEndpoint) ⇒ <code>String</code>

<a name="module_@jbkr/http-client.returnJSONFromEndPoint"></a>

### @jbkr/http-client.returnJSONFromEndPoint ⇒ <code>Object</code>
Get JSON from an API.

**Kind**: static constant of [<code>@jbkr/http-client</code>](#module_@jbkr/http-client)  
**Returns**: <code>Object</code> - - The JSON representation of the data sent from the API,
or an object with an `error` property.  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.endpoint | <code>String</code> | The API endpoint URI string. |
| \{\}.fetchOptions | <code>Object</code> | The options to use with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch) |

<a name="module_@jbkr/http-client.returnContentAsProps"></a>

### @jbkr/http-client.returnContentAsProps ⇒ <code>Object</code>
A convenience function that makes it easy for the Next.js user
to send content from an API endpoint to a React component as `props`.

**Kind**: static constant of [<code>@jbkr/http-client</code>](#module_@jbkr/http-client)  
**Returns**: <code>Object</code> - - An object with the content assigned to
the `props` property.  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.contentToken | <code>String</code> | Token indicating what "category" of content is desired. |
| \{\}.slug | <code>String</code> | Token indicating which article is desired. Ignored if `contentToken` is not set to `liblab`. |

<a name="module_@jbkr/http-client..returnContentEndpoint"></a>

### @jbkr/http-client~returnContentEndpoint(\{\}) ⇒ <code>String</code>
Get a URL for a content API endpoint from just a couple of
tokens.

Saves me from having to remember and maintain (semi-)complex URLs.
Very simplistic right now, but it's here in anticipation of future growth.

**Kind**: inner method of [<code>@jbkr/http-client</code>](#module_@jbkr/http-client)  
**Returns**: <code>String</code> - - The API endpoint from which to request content.  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.endpointToken | <code>String</code> | Token indicating what "category" of content is desired. |
| \{\}.slug | <code>String</code> | Token indicating which article is desired. Ignored if `endpointToken` is not set to `liblab`. |


</div>
