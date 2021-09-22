module.exports = {
	'locations': [
		// {
		// 	'section': 'more',
		// 	'title': 'Lambda Utilities',
		// 	'id': 'lambda-utilities',
		// 	'position': 1,
		// 	'in': '../modules/lambda-utilities',
		// 	'ignore': [
		// 		'**/node_modules/**',
		// 	],
		// },
		// {
		// 	'section': 'more',
		// 	'title': 'Database Client',
		// 	'id': 'db-client',
		// 	'position': 2,
		// 	'in': '../modules/db-client',
		// 	'ignore': [
		// 		'**/node_modules/**',
		// 	],
		// },
		// {
		// 	'section': 'more',
		// 	'title': 'Generate Docs',
		// 	'id': 'generate-docs',
		// 	'position': 3,
		// 	'in': '../modules/generate-docs',
		// 	'ignore': [
		// 		'**/node_modules/**',
		// 	],
		// },
		{
			'section': 'more',
			'title': 'HTTP Client',
			'id': 'http-client',
			'position': 4,
			'in': '../modules/http-client',
			'ignore': [
				'**/node_modules/**',
			],
		},
		// {
		// 	'section': 'more',
		// 	'title': 'Storybook Themes',
		// 	'id': 'storybook-themes',
		// 	'position': 5,
		// 	'in': '../modules/storybook-themes',
		// 	'ignore': [
		// 		'**/node_modules/**',
		// 	],
		// },
		// {
		// 	'section': 'more',
		// 	'title': 'Syntax Highlighting',
		// 	'id': 'syntax-highlighting',
		// 	'position': 6,
		// 	'in': '../modules/syntax-highlighting',
		// 	'ignore': [
		// 		'**/node_modules/**',
		// 	],
		// },
	],
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
};
