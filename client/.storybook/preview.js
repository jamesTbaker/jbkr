import React from 'react';
import { darkTheme, lightTheme } from './jbkr/sb-ui-themes/index';
import { Normalize } from 'styled-normalize';
import { GlobalStyle } from '../components-core/storybook/global';

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
		dark: { ...darkTheme },
		light: { ...lightTheme }
	},
	// set docs to use dark theme
	docs: {
		theme: darkTheme,
	},
}
