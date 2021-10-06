/**
 * Client for HTTP requests. Mostly a wrapper around the
 * [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API),
 * plus a convenience method for use with Next.js or other React frontend.
 * @module @jbkr/http-client
 */


/**
 * Get a URL for a content API endpoint from just a couple of
 * tokens.
 *
 * Saves me from having to remember and maintain (semi-)complex URLs.
 * Very simplistic right now, but it's here in anticipation of future growth.
 *
 * @param {Object} \{\} - Destructured parameters
 * @param {String} \{\}.endpointToken - Token indicating what "category" of
 * content is desired.
 * @param {String} \{\}.slug - Token indicating which article is desired.
 * Ignored if `endpointToken` is not set to `liblab`.
 * @returns {String} - The API endpoint from which to request content.
 */
const returnContentEndpoint = ({ endpointToken, slug }) => {
	// set up a simple endpoint
	let endpoint = `https://${process.env.serverlessDomain}` +
		`/prod/content/client/${endpointToken}`;
	// if the endpoint is liblab and a slug was received
	if (
		endpointToken === 'liblab' &&
		slug
	) {
		// augment the endpont with the slug
		endpoint += `/${slug}`;
	}
	// return the endpoint
	return endpoint;
};
/**
 * @description Get JSON from an API.
 *
 * @param {Object} \{\} - Destructured parameters
 * @param {String} \{\}.endpoint - The API endpoint URI string.
 * @param {Object} \{\}.fetchOptions - The options to use with
 * [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch)
 * @returns {Object} The JSON representation of the data sent from the API,
 * or an object with an `error` property.
 */
export const returnJSONFromEndPoint = async ({ endpoint, fetchOptions }) => {
	// attempt...
	try {
		// get a response from the endpoint, using any supplied options
		const responseObject = await fetch(endpoint, fetchOptions);
		// if the response doesn't have a truthy ok property, indicating an
		// HTTP status code in the range of 200-299
		if (!responseObject.ok) {
			// throw an error that includes the status code
			throw new Error(`HTTP error! status: ${responseObject.status}`);
		}
		// get the response's body text parsed as JSON
		const responseBodyParsed = await responseObject.json();
		// return the parsed response body
		return responseBodyParsed;
		// if there was an error
	} catch (error) {
		// return an object that contains the error
		return {
			error,
		};
	}
};
/**
 * @description A convenience function that makes it easy for the Next.js user
 * to send content from an API endpoint to a React component as `props`.
 * @param {Object} \{\} - Destructured parameters
 * @param {String} \{\}.contentToken - Token indicating what "category" of
 * content is desired.
 * @param {String} \{\}.slug - Token indicating which article is desired.
 * Ignored if `contentToken` is not set to `liblab`.
 * @returns {Object} - An object with the content assigned to
 * the `props` property.
 */
export const returnContentAsProps = async ({ contentToken, slug }) => {
	// get the endpoint
	const endpoint = returnContentEndpoint({
		'endpointToken': contentToken,
		slug,
	});

	// construct the fetch options to include the authorization header
	const fetchOptions = {
		'headers': {
			'Authorization': `Bearer ${process.env.simpleAuthKey}`,
		},
	};
	// get the content as JSON
	const jsonResponse =
		await returnJSONFromEndPoint({ endpoint, fetchOptions });
	// if the response doesn't include an error
	if (!jsonResponse.error) {
		// return the response payload as props property
		return { 'props': jsonResponse.payload };
		// if the reponse includes an error
	} else {
		// return the error as props property
		return { 'props': { 'error': JSON.stringify(jsonResponse.error) } };
	}
};
