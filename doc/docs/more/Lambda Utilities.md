---
id: "lambda-utilities"
title: "Lambda Utilities"
sidebar_label: "Lambda Utilities"
sidebar_position: 1
---

<div class="jsdoc-generated">
<a name="module_@jbkr/lambda-utilities"></a>

## @jbkr/lambda-utilities
Various ancillary functions particular to running operations on AWS Lambda.


* [@jbkr/lambda-utilities](#module_@jbkr/lambda-utilities)
    * [.returnRequesterCanAccess](#module_@jbkr/lambda-utilities.returnRequesterCanAccess) ⇒ <code>boolean</code>
    * [.log](#module_@jbkr/lambda-utilities.log)
    * [.createResponse](#module_@jbkr/lambda-utilities.createResponse) ⇒ <code>Object</code>

<a name="module_@jbkr/lambda-utilities.returnRequesterCanAccess"></a>

### @jbkr/lambda-utilities.returnRequesterCanAccess ⇒ <code>boolean</code>
Examine the AWS event to determine whether or not the
requester has permission to access the
requested process. We assume cron jobs are safe. For HTTP requests, we'll
check that a particular string was sent (encrypted in transit, of course).
This is obviously not great authorization, of course. The best solution would
be to protect the entire system at the infrastructure level and not be able
to make a request without authorization, but I'm not going to pay a vendor
to do that for this personal project. What we've done here is better than
*no* protection at all.

**Kind**: static constant of [<code>@jbkr/lambda-utilities</code>](#module_@jbkr/lambda-utilities)  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.event | <code>Object</code> | The [AWS event](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html). |
| \{\}.event.source | <code>String</code> | For cron jobs, AWS may have set this to `aws.events`. If calling a lambda request handler locally (e.g., for debugging), call said handler with custom event object and set this property to `local`. |
| \{\}.event.Records[0].eventSource | <code>String</code> | For cron jobs, AWS may have set this to `aws:s3`. |
| \{\}.event.headers | <code>Object</code> \| <code>String</code> | The HTTP headers, one of which may be an Authorization header carrying a Bearer token. |

<a name="module_@jbkr/lambda-utilities.log"></a>

### @jbkr/lambda-utilities.log
Log the incoming object with a visual identifier and a more
convenient timestamp. Each object property will be logged separately, both
key and value.

**Kind**: static constant of [<code>@jbkr/lambda-utilities</code>](#module_@jbkr/lambda-utilities)  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.incomingObject | <code>Object</code> | The object to be logged. |

**Example**  
```js
import { log } from '@jbkr/lambda-utilities';

log({ 'incomingObject': { 'message': 'This is the message.' } });
// ----- September 20, 2021, 3:25 PM EDT -- message -- This is the message.
```
<a name="module_@jbkr/lambda-utilities.createResponse"></a>

### @jbkr/lambda-utilities.createResponse ⇒ <code>Object</code>
Construct, log, and return an AWS Lambda / API Gateway response
from some static values and the parameters we receive.

**Kind**: static constant of [<code>@jbkr/lambda-utilities</code>](#module_@jbkr/lambda-utilities)  

| Param | Type | Description |
| --- | --- | --- |
| \{\} | <code>Object</code> | Destructured parameters |
| \{\}.statusCode | <code>Number</code> | The HTTP status code. |
| \{\}.payload | <code>Number</code> | Whatever data you want to send back. Functions may set this to an error, if one occurs. The requester is responsible for verifying that payload contains what they expect. |
| \{\}.event | <code>Number</code> | The [AWS event](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html). |
| \{\}.context | <code>Number</code> | The [AWS context](https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-context-object.html). |


</div>
