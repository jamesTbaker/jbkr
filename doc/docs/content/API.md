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

Source: [modules/http-client/index.js](https://github.com/jamesTbaker/jbkr/blob/main/modules/http-client/index.js)

</p>
</section>

<section class="generate-docs function">

### returnJSONFromEndPoint

<div class="generate-docs function-description">


<p class="generate-docs function-return">

Returns: `Object`
— The JSON representation of the data sent from the API,
or an object with an `error` property.

</p>

Get JSON from an API.

</div>


<p class="generate-docs source-location">

Source: [modules/http-client/index.js:48](https://github.com/jamesTbaker/jbkr/blob/main/modules/http-client/index.js#L48)

</p>
</section>

<section class="generate-docs function">

### returnContentAsProps

<div class="generate-docs function-description">


<p class="generate-docs function-return">

Returns: `Object`
— - An object with the content assigned to
the `props` property.

</p>

A convenience function that makes it easy for the Next.js user
to send content from an API endpoint to a React component as `props`.

</div>


<p class="generate-docs source-location">

Source: [modules/http-client/index.js:82](https://github.com/jamesTbaker/jbkr/blob/main/modules/http-client/index.js#L82)

</p>
</section>

<section class="generate-docs module">

## @jbkr/lambda-utilities

<div class="generate-docs module-description">

Various ancillary functions particular to running operations on AWS Lambda.

</div>
<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js](https://github.com/jamesTbaker/jbkr/blob/main/modules/lambda-utilities/index.js)

</p>
</section>

<section class="generate-docs function">

### returnRequesterCanAccess

<div class="generate-docs function-description">


<p class="generate-docs function-return">

Returns: `boolean`
— undefined

</p>

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


<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js:35](https://github.com/jamesTbaker/jbkr/blob/main/modules/lambda-utilities/index.js#L35)

</p>
</section>

<section class="generate-docs function">

### log

<div class="generate-docs function-description">



Log the incoming object with a visual identifier and a more
convenient timestamp. Each object property will be logged separately, both
key and value.

</div>


<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js:128](https://github.com/jamesTbaker/jbkr/blob/main/modules/lambda-utilities/index.js#L128)

</p>
</section>

<section class="generate-docs function">

### createResponse

<div class="generate-docs function-description">


<p class="generate-docs function-return">

Returns: `Object`
— undefined

</p>

Construct, log, and return an AWS Lambda / API Gateway response
from some static values and the parameters we receive.

</div>


<p class="generate-docs source-location">

Source: [modules/lambda-utilities/index.js:157](https://github.com/jamesTbaker/jbkr/blob/main/modules/lambda-utilities/index.js#L157)

</p>
</section>

</div>
