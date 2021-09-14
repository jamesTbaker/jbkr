import {
	returnProfileScreenContent,
	returnLibLabScreenContent,
	returnArticleScreenContent,
	returnContactScreenContent,
	returnMetaScreenContent,
	return404ScreenContent,
} from '@jbkr/client-content';
import { returnRequesterCanAccess } from '@jbkr/lambda-access';
import { createResponse } from '@jbkr/lambda-response';

export const handleGetProfileScreenContentRequest = async (event, context) => {
	// if the requester should be allowed access
	if (returnRequesterCanAccess({ event })) {
		// attempt to do what was requested
		try {
			// assign result to constant
			const result = await returnProfileScreenContent();
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
export const handleGetLibLabScreenContentRequest = async (event, context) => {
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
export const handleGetArticleScreenContentRequest = async (event, context) => {
	// if the requester should be allowed access
	if (returnRequesterCanAccess({ event })) {
		// attempt to do what was requested
		try {
			// assign result to constant
			const result = await returnArticleScreenContent({
				'slug': event.pathParameters.slug,
			});
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
export const handleGetContactScreenContentRequest = async (event, context) => {
	// if the requester should be allowed access
	if (returnRequesterCanAccess({ event })) {
		// attempt to do what was requested
		try {
			// assign result to constant
			const result = await returnContactScreenContent();
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
export const handleGetMetaScreenContentRequest = async (event, context) => {
	// if the requester should be allowed access
	if (returnRequesterCanAccess({ event })) {
		// attempt to do what was requested
		try {
			// assign result to constant
			const result = await returnMetaScreenContent();
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
export const handleGet404ScreenContentRequest = async (event, context) => {
	// if the requester should be allowed access
	if (returnRequesterCanAccess({ event })) {
		// attempt to do what was requested
		try {
			// assign result to constant
			const result = await return404ScreenContent();
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
