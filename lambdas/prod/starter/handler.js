
module.exports.hello = async (event) => {
	return {
		'statusCode': 200,
		'body': JSON.stringify(
			{
				'message': 'Host3: ' + process.env.mongoDbHost,
				'input': event,
			},
			null,
			2,
		),
	};
};
