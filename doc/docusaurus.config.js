/* eslint-disable @typescript-eslint/no-var-requires */
const codeThemes = require('@jbkr/syntax-highlighting');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	'title': 'Docs',
	'tagline': 'Because who doesn\'t love documentation?',
	'url': 'https://jamestbaker.github.io/',
	'baseUrl': '/jbkr/',
	'onBrokenLinks': 'throw',
	'onBrokenMarkdownLinks': 'warn',
	'favicon': 'img/favicon.ico',
	'organizationName': 'jamesTbaker',
	'projectName': 'jbkr',
	'trailingSlash': false,
	'themeConfig': {
		'navbar': {
			'title': 'Docs',
			'logo': {
				'alt': 'jbkr logo',
				'src': '/img/brand/logotype--color-on-light.svg',
				'srcDark': '/img/brand/logotype--color-on-dark.svg',
			},
			'items': [
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'client/index',
					'label': 'Client',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'content/index',
					'label': 'Content',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'components/index',
					'label': 'Components',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'styles/index',
					'label': 'Styles',
				},
				/* {
					'type': 'doc',
					'position': 'left',
					'docId': 'components-core/index',
					'label': 'Components (Core)',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'components-client/index',
					'label': 'Components (Client)',
				}, */
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'more/index',
					'label': 'More',
				},
				/* {
					'href': 'https://github.com/jamesTbaker/jbkr',
					'label': 'GitHub',
					'position': 'right',
				}, */
			],
		},
		'footer': {
			'copyright':
				`Copyright &copy; 1999&mdash;${new Date().getFullYear()}`,
		},
		'prism': {
			'theme': codeThemes.prismReactRendererTheme,
			'darkTheme': codeThemes.prismReactRendererTheme,
		},
		'colorMode': {
			'defaultMode': 'dark',
			'respectPrefersColorScheme': true,
		},
		'image': 'img/jbkr.png',
	},
	'presets': [
		[
			'@docusaurus/preset-classic',
			{
				'docs': {
					'sidebarPath': require.resolve('./sidebars.js'),
					// Please change this to your repo.
					'editUrl':
						'https://github.com/jamesTbaker/jbkr',
				},
				/* 'blog': {
					'showReadingTime': true,
					// Please change this to your repo.
					'editUrl':
						'https://github.com/
						facebook/docusaurus/edit/master/website/blog/',
				}, */
				'theme': {
					'customCss': require.resolve('./jbkr.css'),
				},
			},
		],
	],
	/* 'plugins': [
		// utilities
		[
			'docusaurus-plugin-typedoc',
			{
				'id': 'utilities',
				'entryPoints': ['../modules/utilities/src/index.ts'],
				'exclude': '_para',
				'tsconfig': '../modules/utilities/tsconfig.json',
				'readme': 'none',
				'plugin': ['typedoc-plugin-merge-modules'],
				'out': 'other-modules/utilities',
				'watch': true,
				'listInvalidSymbolLinks': true,
				'sidebar': {
					'sidebarFile': null,
					'categoryLabel': 'Utilities',
					'position': 1,
					'fullNames': true,
				},
			},
		],
		// style-definition
		[
			'docusaurus-plugin-typedoc',
			{
				'id': 'style-definition',
				'entryPoints': ['../modules/style-definition/src'],
				'exclude': '_para',
				'tsconfig': '../modules/style-definition/tsconfig.json',
				'readme': 'none',
				// 'plugin': ['typedoc-plugin-merge-modules'],
				'out': 'styles/style-definition',
				'watch': true,
				'listInvalidSymbolLinks': true,
				'sidebar': {
					'sidebarFile': null,
					'categoryLabel': 'Style Definition',
					'position': 1,
					'fullNames': true,
				},
			},
		],
	], */
	'plugins': [
		// style-definition
		[
			'@jbkr/docusaurus-plugin-doc',
			{
				// 'id': 'style-definition',
				'in': '../modules/style-definition/src',
				'out': 'styles/style-definition',
				'config': '../jsdoc.config.jsonc',
				'ignore': [
					'**/store/**',
					'**/_para/**',
					'**/node_modules/**',
				],
				// 'watch': true,
			},
		],
	],
};
