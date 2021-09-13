const {
	ReturnLibLabScreenContent,
	ReturnArticleScreenContent,
} = require('@jbkr/client-content');
const { ReturnRequesterCanAccess } = require('@jbkr/lambda-access');
const { CreateResponse } = require('@jbkr/lambda-response');

module.exports = {
	'HandleGetLibLabContentRequest': async (event, context) => {
		// if the requester should be allowed access
		if (ReturnRequesterCanAccess({ event })) {
			// attempt to do what was requested
			try {
				// assign result to constant
				const result = await ReturnLibLabScreenContent();
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
	'HandleGetArticleContentRequest': async (event, context) => {
		// if the requester should be allowed access
		if (ReturnRequesterCanAccess({ event })) {
			// attempt to do what was requested
			try {
				// assign result to constant
				const result = await ReturnArticleScreenContent({
					'slug': event.pathParameters.slug,
				});
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
