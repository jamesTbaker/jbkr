import { create } from '@storybook/theming';
import { style } from '@jbkr/style-service';

export const darkTheme = create({
	// use SB's dark theme as a baseline
	'base': 'dark',

	// colorPrimary: '#',
	// colorSecondary: '#',

	// UI
	'appBg': style.color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '37',
		'format': 'string',
	}),
	'appContentBg': style.color({
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
	'textColor': style.color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '07',
		'format': 'string',
	}),
	'textInverseColor': style.color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '33',
		'format': 'string',
	}),

	// Toolbar default and active colors
	'barTextColor': style.color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': '03',
		'format': 'string',
	}),
	'barSelectedColor': style.color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': '05',
		'format': 'string',
	}),
	'barBg': style.color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '33',
		'format': 'string',
	}),

	// Form colors
	'inputBg': style.color({
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
