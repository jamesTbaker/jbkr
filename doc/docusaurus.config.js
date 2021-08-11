/* eslint-disable @typescript-eslint/no-var-requires */
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	'title': 'The Docs',
	'tagline': 'Because docs',
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
			'title': 'The Docs',
			'logo': {
				'alt': 'jbkr logo',
				'src': '/img/brand/logotype--color-on-light.svg',
				'srcDark': '/img/brand/logotype--color-on-dark.svg',
			},
			'items': [
				{
					'type': 'doc',
					'docId': 'intro',
					'position': 'left',
					'label': 'Tutorial',
				},
				/* {
					'to': '/blog',
					'label': 'Blog',
					'position': 'left',
				}, */
				{
					'href': 'https://github.com/jamesTbaker/jbkr',
					'label': 'GitHub',
					'position': 'right',
				},
			],
		},
		'footer': {
			'style': 'dark',
			/* 'links': [
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
							'https://stackoverflow.com/questions/tagged/docusaurus',
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
						'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				'blog': {
					'showReadingTime': true,
					// Please change this to your repo.
					'editUrl':
						'https://github.com/facebook/docusaurus/edit/master/website/blog/',
				},
				'theme': {
					'customCss': require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
