const returnValueIsJSONParsableString = ({
	incomingValue,
}) => {
	// try...
	try {
		// ...to get a parsed object
		const attemptedObject = JSON.parse(incomingValue);
		// Parsing a boolean or a number will not throw an error,
		// 		so we must check that type is object. However,
		// 		null is also of type object, so we must also
		// 		test for truthiness.
		// if type is object and value is truthy
		if (attemptedObject && typeof attemptedObject === 'object') {
			// indicate that string is parsable
			return true;
			// if either type is not object or value is not truthy
		}
		// indicate that string is not parsable
		return false;


		// if attempt to get an object resulted in an error
	} catch (e) {
		// indicate that string is not parsable
		return false;
	}
};

export const returnRequesterCanAccess = ({ event }) => {
	// if this is a local run
	if (
		event.source &&
		event.source === 'local'
	) {
		// return flag indicating access is allowed
		return true;
		// otherwise, if this is a cron job
	} else if (
		(
			event.source &&
			event.source === 'aws.events'
		) ||
		(event.Records &&
			event.Records[0] &&
			event.Records[0].eventSource &&
			event.Records[0].eventSource === 'aws:s3')
	) {
		// return flag indicating access is allowed
		return true;
		// otherwise,
	} else {
		// set up access token and prefix var
		let accessToken;
		const accessTokenPrefix = 'Bearer ';
		// if event contains a truthy headers property
		if (event.headers) {
			// ensure event.headers is an object
			let eventHeaders = event.headers;
			// if it's not an object
			if (typeof (eventHeaders) !== 'object') {
				// retrieve a flag indicating its parseability
				const eventHeadersIsParseable =
					returnValueIsJSONParsableString({
						'incomingValue': eventHeaders,
					});
				// if it's parseable
				if (eventHeadersIsParseable) {
					// get is as a parsed version of itself
					eventHeaders = JSON.parse(eventHeaders);
					// if it's not parseable
				} else {
					// return flag indicating access is not allowed
					return false;
				}
			}
			// if we're still going, we should definitely have an object;
			// try to get access token plus its prefix out of eventHeaders
			const accessTokenAndPrefix = eventHeaders.Authorization;
			// if the result is a string and it contains accessTokenPrefix
			if (
				accessTokenAndPrefix &&
				typeof (accessTokenAndPrefix) === 'string' &&
				accessTokenAndPrefix.includes(accessTokenPrefix)
			) {
				// extract the access token
				accessToken = accessTokenAndPrefix
					.slice(accessTokenPrefix.length);
			}
			// if we got an access token and it contains the correct value
			if (
				accessToken &&
				accessToken === process.env.simpleAuthKey
			) {
				// return flag indicating access is allowed
				return true;
				// if we didn't get a correct access token
			} else {
				// return flag indicating access is not allowed
				return false;
			}
			// if event does not contain a truthy headers property
		} else {
			// return flag indicating access is not allowed
			return false;
		}
	}
};
