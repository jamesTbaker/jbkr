export const returnJSONFromEndPoint = async ({ endpoint, options }) => {
	// attempt...
	try {
		// get a response from the endpoint, using any supplied options
		const responseObject = await fetch(endpoint, options);
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
export const returnContentAsProps = async ({ contentToken, slug }) => {
	// get the endpoint
	const endpoint = returnContentEndpoint({
		'endpointToken': contentToken,
		slug,
	});
	// construct the fetch options to include the authorization header
	const options = {
		'headers': {
			'Authorization': `Bearer ${process.env.simpleAuthKey}`,
		},
	};
	// get the content as JSON
	const jsonResponse = await returnJSONFromEndPoint({ endpoint, options });
	// if the response doesn't include an error
	if (!jsonResponse.error) {
		// return the response payload as props property
		return { 'props': jsonResponse.payload };
		// if the reponse includes an error
	} else {
		// return the error as props property
		return { 'props': { 'error': jsonResponse.error } };
	}
};
/*

		// set up fetch options container
		const fetchOptions = {};
		// if we receieved options that indicate we're using the content API
		if (options && options.jbkrContentAPI) {
			// add the authorization header to the fetch options
			fetchOptions.headers = {
				'Authorization': `Bearer ${process.env.simpleAuthKey}`,
			};
		}


*/
