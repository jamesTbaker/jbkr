import { create } from '@storybook/theming';
import { color } from '@jbkr/style-service';

export const darkTheme = create({
	// use SB's dark theme as a baseline
	'base': 'dark',

	// colorPrimary: '#',
	// colorSecondary: '#',

	// UI
	'appBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '37',
		'format': 'string',
	}),
	'appContentBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '39',
		'format': 'string',
	}),
	'appBorderColor': 'hsla(225, 61%, 23%, 1)',
	'appBorderRadius': 3,

	// Typography
	'fontBase': '"Inter", sans-serif',
	'fontCode': '"SF Mono", monospace',

	// Text colors
	'textColor': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '07',
		'format': 'string',
	}),
	'textInverseColor': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '33',
		'format': 'string',
	}),

	// Toolbar default and active colors
	'barTextColor': color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': '03',
		'format': 'string',
	}),
	'barSelectedColor': color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': '05',
		'format': 'string',
	}),
	'barBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '33',
		'format': 'string',
	}),

	// Form colors
	'inputBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '33',
		'format': 'string',
	}),
	// inputBorder: '#',
	// inputTextColor: '#',
	'inputBorderRadius': 3,

	'brandTitle': 'jbkr / Storybook',
	'brandUrl': '#',
});
