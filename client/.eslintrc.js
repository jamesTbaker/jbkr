module.exports = {
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
	},
	'ignorePatterns': [
		'/lib/**',
	],
	'settings': {
		'react': {
			'version': 'detect',
		},
	},
	'plugins': [
		/*
			per documentation, extending presets related to these plugins
			loads the plugins, so there's no need to redeclare them here
			unless using individual rules they provide

			'react',
			'react-hooks',
		*/

		'jsx-a11y',
		'styled-components-a11y',
	],
	'extends': [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		// 'next/core-web-vitals',
		'plugin:jsx-a11y/strict',
		'plugin:styled-components-a11y/strict',
	],
};
