import { log } from '@jbkr/lambda-log';

export const createResponse = ({
	statusCode,
	payload,
	event,
	context,
}) => {
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
	log({
		'incomingObject': { response },
	});
	return response;
};
