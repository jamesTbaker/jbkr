import { create } from '@storybook/theming';
import { style } from 'style-service';

export const lightTheme = create({
	// use SB's light theme as a baseline
	base: 'light',

	// colorPrimary: 'deepskyblue',
	// colorSecondary: 'hotpink',

	// UI
	appBg: style.color.string(
		{
			'color': style.color.props().Neutral.Finch['05']
		},
	),
	// appContentBg: 'silver',
	// appBorderColor: 'grey',
	// appBorderRadius: 4,

	// Typography
	fontBase: '"Inter", sans-serif',
	// fontCode: 'monospace',

	// Text colors
	// textColor: 'black',
	// textInverseColor: 'rgba(255,255,255,0.9)',

	// Toolbar default and active colors
	// barTextColor: 'silver',
	// barSelectedColor: 'black',
	// barBg: 'hotpink',

	// Form colors
	// inputBg: 'white',
	// inputBorder: 'silver',
	// inputTextColor: 'black',
	// inputBorderRadius: 4,

	// brandTitle: 'My custom storybook',
	// brandUrl: 'https://example.com',
	// brandImage: 'https://place-hold.it/350x150',
});
