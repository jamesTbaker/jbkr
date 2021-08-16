/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require('prism-react-renderer/themes/okaidia');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

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
			'hideOnScroll': true,
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
					'docId': 'app-client/index',
					'label': 'Client',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'styles/index',
					'label': 'Styles',
				},
				{
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
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'content-flow/index',
					'label': 'Content Flow',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'other-modules/index',
					'label': 'Other Modules',
				},
				{
					'href': 'https://github.com/jamesTbaker/jbkr',
					'label': 'GitHub',
					'position': 'right',
				},
			],
		},
		'footer': {
			/* 'style': 'dark',
			'links': [
				{
					'title': 'Docs',
					'items': [{
						'label': 'Tutorial',
						'to': '/docs/intro',
					}],
				},
				{
					'title': 'Community',
					'items': [{
						'label': 'Stack Overflow',
						'href':
							'https://stackoverflow.com/
							questions/tagged/docusaurus',
					},
					{
						'label': 'Discord',
						'href': 'https://discordapp.com/invite/docusaurus',
					},
					{
						'label': 'Twitter',
						'href': 'https://twitter.com/docusaurus',
					},
					],
				},
				{
					'title': 'More',
					'items': [{
						'label': 'Blog',
						'to': '/blog',
					},
					{
						'label': 'GitHub',
						'href': 'https://github.com/facebook/docusaurus',
					},
					],
				},
			], */
			'copyright': `Copyright &copy; ${new Date().getFullYear()}`,
		},
		'prism': {
			'theme': lightCodeTheme,
			'darkTheme': darkCodeTheme,
		},
		'hideableSidebar': true,
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
					'customCss': require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
	'plugins': [
		[
			'@docusaurus/plugin-sitemap',
			{
				'changefreq': 'weekly',
				'priority': 0.5,
			},
		], [
			'docusaurus-plugin-typedoc',
			{
				'id': 'utilities',
				'entryPoints': ['../modules/utilities/src/index.ts'],
				'exclude': '_para',
				'tsconfig': '../modules/utilities/tsconfig.json',
				'readme': 'none',
				'out': 'other-modules/utilities',
				'watch': true,
				'listInvalidSymbolLinks': true,
				'sidebar': {
					'categoryLabel': 'Utilities',
					'position': 0,
					'fullNames': true,
				},
			},
		], [
			'docusaurus-plugin-typedoc',
			{
				// unique id for this section
				'id': 'style-definition',
				'entryPoints': ['../modules/style-definition/src'],
				'exclude': '_para',
				'tsconfig': '../modules/style-definition/tsconfig.json',
				'readme': 'none',
				'plugin': ['typedoc-plugin-merge-modules'],
				'out': 'styles/style-definition',
				'watch': true,
				'listInvalidSymbolLinks': true,
				'sidebar': {
					'categoryLabel': 'Style Definition',
					'position': 0,
					'fullNames': true,
				},
			},
		],
	],
};
