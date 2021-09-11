const { Log } = require('@jbkr/lambda-log');

module.exports = {
	'CreateResponse': ({
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
		Log({
			'incomingObject': { response },
		});
		return response;
	},
};
