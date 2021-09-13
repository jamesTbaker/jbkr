import {
	returnLibLabScreenContent,
	// returnArticleScreenContent,
} from '@jbkr/client-content';
import { returnRequesterCanAccess } from '@jbkr/lambda-access';
import { createResponse } from '@jbkr/lambda-response';


export const HandleGetLibLabContentRequest = async (event, context) => {
	// if the requester should be allowed access
	if (returnRequesterCanAccess({ event })) {
		// attempt to do what was requested
		try {
			// assign result to constant
			const result = await returnLibLabScreenContent();
			// respond with the result
			return createResponse({
				'statusCode': 200,
				'payload': result,
				event,
				context,
			});
			// if an error occurred
		} catch (error) {
			// respond with corresponding information
			return createResponse({
				'statusCode': 500,
				'payload': error,
				event,
				context,
			});
		}
		// if the requester should not be allowed access
	} else {
		// respond with corresponding information
		return createResponse({
			'statusCode': 401,
			'payload': process.env.notAllowedMessage,
			event,
			context,
		});
	}
};
