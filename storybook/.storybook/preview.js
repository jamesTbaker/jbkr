import React from 'react';
import { Normalize } from 'styled-normalize';
import { darkTheme, lightTheme } from '@jbkr/storybook-themes';
import { createGlobalStyle } from 'styled-components';
import {
	gridBase, color, fontFilesImport, fontPrimaryName, fontFallbacksNames,
	zIndexNumber,
} from '@jbkr/style-service';

const GlobalStyle = createGlobalStyle`

	/* For some reason, importing Inter only works in preview-head.html. */

	* {
		box-sizing: border-box;
	}
	html {
		font-size: ${gridBase()}px;
		scroll-behavior: smooth;
		/* prevent font zooming on mobile */
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	body {
		font-family: ${fontFallbacksNames};
		font-size: 2rem;
		text-align: left;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		height: 100%;
		width: 100%;
	}
	@supports (font-variation-settings: normal) {
		body {
			font-family: ${fontPrimaryName}, ${fontFallbacksNames};
		}
	}
	body.sb-show-main.sb-main-padded {
		padding: 4rem;
	}
`;
const LightModeStyle = createGlobalStyle`
	body {
		background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 2,
	'format': 'string',
})};
	}
`;
const DarkModeStyle = createGlobalStyle`
	body {
		background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 39,
	'format': 'string',
})};
		color: ${color({
	'kind': 'Neutral',
	'tone': 'Base',
	'level': 1,
	'format': 'string',
})};
	}
`;
// Global decorator to apply the styles to all stories
export const decorators = [
	(Story, context) => {
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
			date: /Date$/,
		},
	},
	// set docs to use dark theme
	docs: {
		theme: darkTheme,
	},
	viewport: {
		// defaultViewport: 'medium',
		viewports: {
			small: {
				name: 'Small',
				styles: {
					width: '375px',
					height: '812px',
				},
			},
			medium: {
				name: 'Medium',
				styles: {
					width: '1024px',
					height: '768px',
				},
			},
			large: {
				name: 'Large',
				styles: {
					width: '1440px',
					height: '900px',
				},
			},
		},
	},
	backgrounds: {
		values: [
			{
				name: 'dark',
				value: color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 39,
					'format': 'string',
				}),
			},
			{
				name: 'light',
				value: color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 2,
					'format': 'string',
				}),
			},
		],
		grid: {
			cellSize: 8,
			opacity: 0.5,
			cellAmount: 4,
			offsetX: 32,
			offsetY: 32,
		},
	},
	layout: 'padded',
}
