/**
 * Various ancillary functions particular to running operations on AWS Lambda.
 * @module @jbkr/lambda-utilities
 */

import { DateTime } from 'luxon';
import { returnValueIsJSONParsableString } from '@jbkr/utilities';

/**
 * @description Examine the AWS event to determine whether or not the
 * requester has permission to access the
 * requested process. We assume cron jobs are safe. For HTTP requests, we'll
 * check that a particular string was sent (encrypted in transit, of course).
 * This is obviously not great authorization, of course. The best solution would
 * be to protect the entire system at the infrastructure level and not be able
 * to make a request without authorization, but I'm not going to pay a vendor
 * to do that for this personal project. What we've done here is better than
 * *no* protection at all.
 *
 * @param {Object} \{\} - Destructured parameters
 * @param {Object} \{\}.event - The [AWS event]{@link
 * https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html}.
 * @param {String} \{\}.event.source - For cron jobs, AWS may have set this
 * to `aws.events`. If calling a lambda request handler locally (e.g., for
 * debugging), call said handler with custom event object and set this property
 * to `local`.
 * @param {String} \{\}.event.Records[0].eventSource - For cron jobs, AWS may
 * have set this to `aws:s3`.
 * @param {Object | String} \{\}.event.headers - The HTTP headers,
 * one of which may be an Authorization header carrying a Bearer token.
 *
 * @returns {boolean}
 */

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
/**
 * @description Log the incoming object with a visual identifier and a more
 * convenient timestamp. Each object property will be logged separately, both
 * key and value.
 *
 * @param {Object} \{\} - Destructured parameters
 * @param {Object} \{\}.incomingObject - The object to be logged.
 *
 * @example
 * import { log } from '@jbkr/lambda-utilities';
 *
 * log({ 'incomingObject': { 'message': 'This is the message.' } });
 * // ----- September 20, 2021, 3:25 PM EDT -- message -- This is the message.
 */
export const log = ({ incomingObject }) => {
	// construct a datetime string
	const datetimeString = DateTime.now().setZone('America/New_York')
		.toLocaleString(DateTime.DATETIME_FULL);
	// for each object property key
	Object.keys(incomingObject).forEach((key) => {
		// log the key and the property value
		// eslint-disable-next-line no-console
		console.log(
			` ----- ${datetimeString} -- ${key} -- ` +
			JSON.stringify(incomingObject[key]),
		);
	});
};
/**
 * @description Construct, log, and return an AWS Lambda / API Gateway response
 * from some static values and the parameters we receive.
 *
 * @param {Object} \{\} - Destructured parameters
 * @param {Number} \{\}.statusCode - The HTTP status code.
 * @param {Number} \{\}.payload - Whatever data you want to send back. Functions
 * may set this to an error, if one occurs. The requester is responsible for
 * verifying that payload contains what they expect.
 * @param {Number} \{\}.event - The [AWS event]{@link
 * https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-event-object.html}.
 * @param {Number} \{\}.context - The [AWS context]{@link
 * https://docs.aws.amazon.com/whitepapers/latest/serverless-architectures-lambda/the-context-object.html}.
 * @returns {Object}
 */
export const createResponse = ({
	statusCode,
	payload,
	event,
	context,
}) => {
	// construct a response
	const response = {
		statusCode,
		'headers': {
			'Access-Control-Allow-Origin': '*',
		},
		'body': JSON.stringify({
			payload,
			event,
			context,
		}),
	};
	// log the response
	log({
		'incomingObject': { response },
	});
	return response;
};
