---
id: "Content-API"
title: "API"
sidebar_label: "API"
sidebar_position: 1
---

<div class="generate-docs all-sections">

<section class="generate-docs module">

## @jbkr/http-client

<div class="generate-docs module-description">

Client for HTTP requests. Mostly a wrapper around the
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
plus a convenience method for use with Next.js or other React frontend.

</div>
<p class="generate-docs source-location">

Source: [modules/http-client/index.js](undefined/modules/http-client/index.js)

</p>
</section>

<section class="generate-docs function">

### returnJSONFromEndPoint

<div class="generate-docs function-description">

Get JSON from an API.

</div>

<div class="generate-docs function-parameters">

| Param | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.endpoint | `String` | The API endpoint URI string. |
| \{\}.fetchOptions | `Object` | The options to use with [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch) |

</div>

<p class="generate-docs function-return">

Returns: `Object` — The JSON representation of the data sent from the API, or an object with an `error` property.

</p>



<p class="generate-docs source-location">

Source: [modules/http-client/index.js:48](undefined/modules/http-client/index.js#L48)

</p>
</section>

<section class="generate-docs function">

### returnContentAsProps

<div class="generate-docs function-description">

A convenience function that makes it easy for the Next.js user
to send content from an API endpoint to a React component as `props`.

</div>

<div class="generate-docs function-parameters">

| Param | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.contentToken | `String` | Token indicating what "category" of content is desired. |
| \{\}.slug | `String` | Token indicating which article is desired. Ignored if `contentToken` is not set to `liblab`. |

</div>

<p class="generate-docs function-return">

Returns: `Object` — - An object with the content assigned to the `props` property.

</p>



<p class="generate-docs source-location">

Source: [modules/http-client/index.js:82](undefined/modules/http-client/index.js#L82)

</p>
</section>

<section class="generate-docs module">

## @jbkr/lambda-utilities

<div class="generate-docs module-description">

Various ancillary functions particular to running operations on AWS Lambda.

</div>
<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js](undefined/modules/lambda-utilities/index.js)

</p>
</section>

<section class="generate-docs function">

### returnRequesterCanAccess

<div class="generate-docs function-description">

Examine the AWS event to determine whether or not the
requester has permission to access the
requested process. We assume cron jobs are safe. For HTTP requests, we'll
check that a particular string was sent (encrypted in transit, of course).
This is obviously not great authorization, of course. The best solution would
be to protect the entire system at the infrastructure level and not be able
to make a request without authorization, but I'm not going to pay a vendor
to do that for this personal project. What we've done here is better than
*no* protection at all.

</div>

<div class="generate-docs function-parameters">

| Param | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.event | `Object` | The [AWS event]( https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html). |
| \{\}.event.source | `String` | For cron jobs, AWS may have set this to `aws.events`. If calling a lambda request handler locally (e.g., for debugging), call said handler with custom event object and set this property to `local`. |
| \{\}.event.Records[0].eventSource | `String` | For cron jobs, AWS may have set this to `aws:s3`. |
| \{\}.event.headers | `Object` | The HTTP headers, one of which may be an Authorization header carrying a Bearer token. |

</div>

<p class="generate-docs function-return">

Returns: `boolean`

</p>



<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js:35](undefined/modules/lambda-utilities/index.js#L35)

</p>
</section>

<section class="generate-docs function">

### log

<div class="generate-docs function-description">

Log the incoming object with a visual identifier and a more
convenient timestamp. Each object property will be logged separately, both
key and value.

</div>

<div class="generate-docs function-parameters">

| Param | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.incomingObject | `Object` | The object to be logged. |

</div>



<div class="generate-docs function-parameters">

```js

import { log } from '@jbkr/lambda-utilities';

log({ 'incomingObject': { 'message': 'This is the message.' } });
// ----- September 20, 2021, 3:25 PM EDT -- message -- This is the message.
```

</div>

<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js:128](undefined/modules/lambda-utilities/index.js#L128)

</p>
</section>

<section class="generate-docs function">

### createResponse

<div class="generate-docs function-description">

Construct, log, and return an AWS Lambda / API Gateway response
from some static values and the parameters we receive.

</div>

<div class="generate-docs function-parameters">

| Param | Type | Description |
| --- | --- | --- |
| \{\} | `Object` | Destructured parameters |
| \{\}.statusCode | `Number` | The HTTP status code. |
| \{\}.payload | `Number` | Whatever data you want to send back. Functions may set this to an error, if one occurs. The requester is responsible for verifying that payload contains what they expect. |
| \{\}.event | `Object` | The [AWS event]( https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html). |
| \{\}.context | `Number` | The [AWS context]( https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-context-object.html). |

</div>

<p class="generate-docs function-return">

Returns: `Object`

</p>



<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js:157](undefined/modules/lambda-utilities/index.js#L157)

</p>
</section>

</div>
