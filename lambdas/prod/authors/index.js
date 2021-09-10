const Response = require('response');

module.exports = {

	'HandleAuthorsContentRequest': (event, context) =>
		// return a new promise
		new Promise((resolve, reject) => {
			/* // get a promise to check access
			Access.ReturnRequesterCanAccess(
				event,
				Health.ReturnHealthWhitelistedDomains,
			)
				// if the promise is resolved with a result
				.then((accessResult) => {
					// get a promise to return health status
					Health.ReturnHealth()
						// if the promise is resolved with a result
						.then((healthResult) => { */
			// send indicative response
			Response.HandleResponse({
				'statusCode': 200,
				'responder': resolve,
				'content': {
					'payload': 'preciousPrincess',
					event,
					context,
				},
			});
			/* 			})
						// if the promise is rejected with an error
						.catch((healthError) => {
							// send indicative response
							Response.HandleResponse({
								'statusCode': 500,
								'responder': resolve,
								'content': {
									'error': healthError,
									event,
									context,
								},
							});
						});
				})
				// if the promise is rejected with an error
				.catch((accessError) => {
					// send indicative response
					Response.HandleResponse({
						'statusCode': 401,
						'responder': resolve,
						'content': {
							'error': accessError,
							event,
							context,
						},
					});
				}); */
		}),
};
