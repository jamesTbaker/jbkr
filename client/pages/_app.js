/* eslint-disable react/prop-types */
/* eslint-disable indent */
import Head from 'next/head';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import {
	gridBase, color, fontFilesImport, fontPrimaryName, fontFallbacksNames,
} from '@jbkr/style-service';
import { prismCSS } from '@jbkr/syntax-highlighting';


const GlobalStyle = createGlobalStyle`

	${normalize}

	${fontFilesImport}

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
		position: relative;
		font-family: ${fontFallbacksNames};
		font-size: 2rem;
		text-align: left;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		color: ${color({
	'kind': 'Neutral',
	'tone': 'Base',
	'level': 1,
	'format': 'string',
})};
		background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 37,
	'format': 'string',
})};
	}
	@supports (font-variation-settings: normal) {
		body {
			font-family: ${fontPrimaryName}, ${fontFallbacksNames};
		}
	}
`;

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* meta content */}
				<meta name="author" content="James T. Baker" />
				<meta property="og:site_name" content="jbkr" />
				<meta name="twitter:card" content="summary_large_image" />
				{/* viewport */}
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				{/* font */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect"
					href="https://fonts.gstatic.com" crossOrigin="true" />
				<link rel="stylesheet"
					href={
						'https://fonts.googleapis.com/css2?' +
						'family=Roboto+Mono&display=swap'
					}
				/>
				{/* favicon */}
				<link rel="shortcut icon"
					href="/favicon.ico" type="image/x-icon" />
				<link rel="icon"
					href="/favicon/brand.svg" type="image/svg+xml" />
				<link rel="mask-icon"
					href="/favicon/brand.svg" color="#ff0055" />
				<link rel="apple-touch-icon" href="/favicon/180px.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<meta name="theme-color" content="#2e354c" />

				{/* default - should be replaced per page */}
				<meta name="description"
					content="I speak suit, geek, and creative.
					20+ years' experience in business, technology, and design."
				/>
				<style>{prismCSS}</style>
				<script
					async
					src="https://platform.twitter.com/widgets.js"
					charSet="utf-8"
				/>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
