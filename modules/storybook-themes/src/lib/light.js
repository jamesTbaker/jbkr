import { create } from '@storybook/theming';
import { style } from '@jbkr/style-service';


export const lightTheme = create({
	// use SB's light theme as a baseline
	'base': 'light',

	// colorPrimary: '#',
	// colorSecondary: '#',

	// UI
	'appBg': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['01'],
		},
	),
	'appContentBg': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['35'],
		},
	),
	'appBorderColor': 'hsla(225, 70%, 70%, 1)',
	'appBorderRadius': 3,

	// Typography
	'fontBase': '"Inter", sans-serif',
	'fontCode': '"SF Mono", monospace',

	// Text colors
	'textColor': style.color.string(
		{
			'color': style.color.props().Neutral.Finch['21'],
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
			'color': style.color.props().Brand.Peony['06'],
		},
	),
	'barSelectedColor': style.color.string(
		{
			'color': style.color.props().Brand.Peony['07'],
		},
	),
	'barBg': style.color.string(
		{
			'color': style.color.props().Neutral.Base.White,
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
