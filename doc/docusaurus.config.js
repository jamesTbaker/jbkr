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
				{
					'type': 'doc',
					'position': 'left',
					'docId': 'more/Intro',
					'label': 'More',
				},
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
