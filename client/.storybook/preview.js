import React from 'react';
import { Normalize } from 'styled-normalize';
import { darkTheme, lightTheme } from '@jbkr/storybook-themes';
import { createGlobalStyle } from 'styled-components';
import { style } from '@jbkr/style-service';

const GlobalStyle = createGlobalStyle`
	body {
		${style.type.family()};
	}
`;


// Global decorator to apply the styles to all stories
export const decorators = [
	Story => (
		<>
			<Normalize />
			<GlobalStyle />
			<Story />
		</>
	),
];
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	// turn on dark / light mode toggle in SB ui (module: storybook-dark-mode)
	darkMode: {
		dark: {
			...darkTheme,
			barTextColor: style.color.string(
				{
					'color': style.color.props().Brand.Peony['03']
				},
			),
			barSelectedColor: style.color.string(
				{
					'color': style.color.props().Brand.Peony['05']
				},
			),
		},
		light: {
			...lightTheme,
			barTextColor: style.color.string(
				{
					'color': style.color.props().Brand.Peony['06']
				},
			),
			barSelectedColor: style.color.string(
				{
					'color': style.color.props().Brand.Peony['07']
				},
			),
		}
	},
	// set docs to use dark theme
	docs: {
		theme: darkTheme,
	},
}
