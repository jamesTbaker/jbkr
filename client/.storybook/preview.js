import React from 'react';
import { Normalize } from 'styled-normalize';
import { darkTheme, lightTheme } from '@jbkr/storybook-themes';
import { createGlobalStyle } from 'styled-components';
import { style } from '@jbkr/style-service';

const GlobalStyle = createGlobalStyle`
	body {
		${style.type.family()};
		height: 100%;
		width: 100%;
	}
`;
const LightModeStyle = createGlobalStyle`
	body {
		background-color: ${style.color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': '02',
	'format': 'string',
})};
	}
`;
const DarkModeStyle = createGlobalStyle`
	body {
		background-color: ${style.color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': '39',
	'format': 'string',
})};
	}
`;
// Global decorator to apply the styles to all stories
export const decorators = [
	(Story, context) => {
		console.log('context');
		console.log(context);
		let ColorModeStyle = context.args.colorMode === 'light' ?
			LightModeStyle : DarkModeStyle;
		return (
			<>
				<Normalize />
				<GlobalStyle />
				<ColorModeStyle />
				<Story />
			</>
		)
	},
];
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		expanded: true,
		matchers: {
			// color: /(background|color)$/i,
			date: /Date$/,
		},
		/* presetColors: [
			{ color: 'hsla(300, 100%, 64%, .5)', title: null },
			'rgba(0, 159, 183, 1)',
			'#fe4a49',
		] */
	},
	// set docs to use dark theme
	docs: {
		theme: darkTheme,
	},
}
