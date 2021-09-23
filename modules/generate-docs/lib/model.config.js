module.exports = {
	'domains': {
		'Content': {
			// 'Model': [],
			// 'Management': [],

			// 'Database': [],
			'API': [
				{
					'type': 'module',
					'directory': 'http-client',
					'parentDirectory': '../modules',
					'ignore': [
						'**/node_modules/**',
					],
				}, {
					'type': 'module',
					'directory': 'lambda-utilities',
					'parentDirectory': '../modules',
					'ignore': [
						'**/node_modules/**',
					],
					// }, {
					// 	'type': 'module',
					// 	'language': 'js',
					// 	'directory': 'storybook-themes',
					// 	'parentDirectory': '../modules',
					// 	'ignore': [
					// 		'**/node_modules/**',
					// 	],
				},
			],
			// 'Distribution': [],
		},
		/* 'Styles': {
			'Source': [],
			'Definition': [],
			'Service': [],
		},
		'Client': {
			'App': [],
			'Components': [],
		},
		'Doc': {
			'Generation': [],
			'Styles': [],
		}, */
	},
	'modules': {},
	'lambdas': {},
	'baseDocsPath': './base-docs',
	'baseRepositoryPath': 'https://github.com/jamesTbaker/jbkr/blob/main',
};
