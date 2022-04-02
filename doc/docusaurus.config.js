const codeThemes = require('@jbkr/syntax-highlighting');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	'title': 'Docs',
	'tagline': 'Because who doesn\'t love documentation?',
	'url': 'https://jamestbaker.github.io/',
	'baseUrl': '/jbkr/',
	'onBrokenLinks': 'error',
	'onBrokenMarkdownLinks': 'error',
	'favicon': 'img/favicon.svg',
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
					'docId': 'Content/Content-Intro',
					'label': 'Content',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'Styles/Styles-Intro',
					'label': 'Styles',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'Client/Client-Intro',
					'label': 'Client',
				},
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'Doc/Doc-Intro',
					'label': 'Doc',
				},

				{
					'type': 'doc',
					'position': 'right',
					'docId': 'Modules/Modules-Intro',
					'label': 'Modules',
				},
				{
					'type': 'doc',
					'position': 'right',
					'docId': 'Lambdas/Lambdas-Intro',
					'label': 'Lambdas',
				},
				{
					'to': 'Components',
					'position': 'right',
					'label': 'Components',
				},

			],
		},
		'footer': {
			'copyright':
				`&copy; 1999 &ndash; ${new Date().getFullYear()},` +
				` James T. Baker. All rights reserved.`,
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
					'editUrl':
						'https://github.com/jamesTbaker/jbkr',
				},
				'theme': {
					'customCss': require.resolve('./jbkr.css'),
				},
			},
		],
	],
};
