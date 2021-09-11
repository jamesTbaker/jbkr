const { ReturnAuthorsFromDB } = require('@jbkr/content');
const { ReturnRequesterCanAccess } = require('@jbkr/lambda-access');
const { CreateResponse } = require('@jbkr/lambda-response');

module.exports = {
	'HandleGetAuthorsRequest': async (event, context) => {
		// if the requester should be allowed access
		if (ReturnRequesterCanAccess({ event })) {
			// attempt to do what was requested
			try {
				// assign result to constant
				const result = await ReturnAuthorsFromDB();
				// respond with the result
				return CreateResponse({
					'statusCode': 200,
					'payload': result,
					event,
					context,
				});
				// if an error occurred
			} catch (error) {
				// respond with corresponding information
				return CreateResponse({
					'statusCode': 500,
					'payload': error,
					event,
					context,
				});
			}
			// if the requester should not be allowed access
		} else {
			// respond with corresponding information
			return CreateResponse({
				'statusCode': 401,
				'payload': process.env.notAllowedMessage,
				event,
				context,
			});
		}
	},
};
