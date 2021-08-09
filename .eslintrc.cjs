module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'promise',
		'import',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:promise/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'no-tabs': 'off',
		'max-len': [
			'error',
			{
				code: 72,
				comments: 72,
			},
		],
		'implicit-arrow-linebreak': 'off',
		'import/prefer-default-export': 'off',
		'promise/always-return': 'off',
		'promise/no-nesting': 'off',
		'comma-dangle': ['error', {
			'arrays': 'always-multiline',
			'objects': 'always-multiline',
			'imports': 'always-multiline',
			'exports': 'always-multiline',
			'functions': 'always-multiline',
		}],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': ['error', { 'max': 2 }],
		'import/newline-after-import': ['error', { 'count': 2 }],
	},
};
