import { create } from '@storybook/theming';
import { style } from '@jbkr/style-service';

export const darkTheme = create({
	// use SB's dark theme as a baseline
	'base': 'dark',

	// colorPrimary: '#',
	// colorSecondary: '#',

	// UI
	'appBg': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['37'],
		},
	),
	'appContentBg': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['35'],
		},
	),
	'appBorderColor': 'hsla(225, 61%, 23%, 1)',
	'appBorderRadius': 3,

	// Typography
	'fontBase': '"Inter", sans-serif',
	'fontCode': '"SF Mono", monospace',

	// Text colors
	'textColor': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['07'],
		},
	),
	'textInverseColor': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['33'],
		},
	),

	// Toolbar default and active colors
	'barTextColor': style.color.string(
		{
			'color': style.color.props().Brand.Peony['03'],
		},
	),
	'barSelectedColor': style.color.string(
		{
			'color': style.color.props().Brand.Peony['05'],
		},
	),
	'barBg': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['33'],
		},
	),

	// Form colors
	'inputBg': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['33'],
		},
	),
	// inputBorder: '#',
	// inputTextColor: '#',
	'inputBorderRadius': 3,

	'brandTitle': 'jbkr / Storybook',
	'brandUrl': '#',
});
