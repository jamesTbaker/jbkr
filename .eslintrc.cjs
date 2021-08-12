// /* eslint-disable tsdoc/syntax */
module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
		// jest: true,
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
		// 'ecmaFeatures': {
		// 	'jsx': true,
		// },
	},
	'settings': {
		'import/extensions': [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
		],
		// react: {
		// 	version: 'latest',
		// },
	},
	'plugins': [
		// 'react',
		'@typescript-eslint',
		'promise',
		// 'import',
		// 'eslint-plugin-tsdoc',
	],
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:promise/recommended',
		// 'plugin:import/recommended',
		// 'plugin:import/typescript',
		// 'next',
		// 'next/core-web-vitals',
	],
	'rules': {
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1,
			},
		],
		'no-tabs': 'off',
		'max-len': [
			'error',
			{
				'code': 80,
				'comments': 80,
			},
		],
		'no-trailing-spaces': 'off',
		'implicit-arrow-linebreak': 'off',
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'always-multiline',
		}],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 2 }],
		'no-unreachable': 'error',
		'semi': ['error', 'always'],
		'no-unexpected-multiline': 'error',
		'quotes': [
			'error',
			'single',
			{
				'avoidEscape': true,
				'allowTemplateLiterals': true,
			},
		],
		'quote-props': ['error', 'always'],
		// 'import/prefer-default-export': 'off',
		// 'import/newline-after-import': ['error', { 'count': 2 }],
		// 'import/extensions': ['error', 'always', { 'ignorePackages': true }],
		'promise/always-return': 'off',
		'promise/no-nesting': 'off',
		// 'tsdoc/syntax': 'warn',

	},
};
