import { create } from '@storybook/theming';
import { color } from '@jbkr/style-service';

/**
 * @description Send theme options to a function that returns an object of
 * theme variables used by the Storybook UI.
 * @param {Object} \{\} - An object with many properties.
 * See the [Storybook theming
 * documentation](https://storybook.js.org/docs/react/configure/theming) and
 * [the source code](
 * https://github.com/storybookjs/storybook/blob/next/lib/theming/src/create.ts
 * ) for more info.
 * @returns {Object}
 */
export const lightTheme = create({
	// use SB's light theme as a baseline
	'base': 'light',

	// colorPrimary: '#',
	// colorSecondary: '#',

	// UI
	'appBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 1,
		'format': 'string',
	}),
	'appContentBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 35,
		'format': 'string',
	}),
	'appBorderColor': 'hsla(225, 70%, 70%, 1)',
	'appBorderRadius': 3,

	// Typography
	'fontBase': '"Inter", sans-serif',
	'fontCode': '"Roboto Mono", monospace',

	// Text colors
	'textColor': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 21,
		'format': 'string',
	}),
	'textInverseColor': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 33,
		'format': 'string',
	}),

	// Toolbar default and active colors
	'barTextColor': color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': 6,
		'format': 'string',
	}),
	'barSelectedColor': color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': 7,
		'format': 'string',
	}),
	'barBg': color({
		'kind': 'Neutral',
		'tone': 'Base',
		'level': 1,
		'format': 'string',
	}),

	// Form colors
	'inputBg': color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 33,
		'format': 'string',
	}),
	// inputBorder: '#',
	// inputTextColor: '#',
	'inputBorderRadius': 3,

	'brandTitle': 'jbkr / Storybook',
	'brandUrl': '#',
});
