import { create } from '@storybook/theming';
import { color } from '@jbkr/style-service';


export const lightTheme = create({
	// use SB's light theme as a baseline
	'base': 'light',

	// colorPrimary: '#',
	// colorSecondary: '#',

	// UI
	'appBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '01',
		'format': 'string',
	}),
	'appContentBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '35',
		'format': 'string',
	}),
	'appBorderColor': 'hsla(225, 70%, 70%, 1)',
	'appBorderRadius': 3,

	// Typography
	'fontBase': '"Inter", sans-serif',
	'fontCode': '"SF Mono", monospace',

	// Text colors
	'textColor': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '21',
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
		'level': '06',
		'format': 'string',
	}),
	'barSelectedColor': color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': '07',
		'format': 'string',
	}),
	'barBg': color({
		'kind': 'Neutral',
		'tone': 'Base',
		'level': '01',
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
