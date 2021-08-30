import { useEffect } from 'react';
import Head from 'next/head';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { color, typeFamily } from '@jbkr/style-service';
import Prism from 'prismjs';
import { prismCSS } from '@jbkr/syntax-highlighting';


const GlobalStyle = createGlobalStyle`

	${normalize}

	* {
		box-sizing: border-box;
	}
	html {
		font-size: 8px;
	}
	body {
		${typeFamily()}
		font-size: 2rem;
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
	scroll-behavior: smooth;
	}
`;

export default function App({ Component, pageProps }) {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<>
			<Head>
				{/* meta content */}
				<meta name="author" content="James T. Baker" />
				<meta property="og:site_name" content="jbkr" />
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
						'family=Inter&display=swap'
					}
				/>
				<link rel="stylesheet"
					href={
						'https://fonts.googleapis.com/css2?' +
						'family=Roboto+Mono&display=swap'
					}
				/>
				{/* favicon */}
				<link rel="icon"
					href="/favicon/brands.svg" type="image/svg+xml" />
				<link rel="icon" type="image/png" sizes="16x16"
					href="/favicon/16px.png" />
				<link rel="icon" type="image/png" sizes="32x32"
					href="/favicon/32px.png" />
				<link rel="apple-touch-icon" sizes="180x180"
					href="/favicon/180px.png" />
				<link rel="icon" type="image/png" sizes="192x192"
					href="/favicon/192px.png" />
				<link rel="icon" type="image/png" sizes="194x194"
					href="/favicon/194px.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<meta name="theme-color" content="#60709f" />

				{/* default - should be replaced per page */}
				<meta name="description"
					content="I speak suit, geek, and creative.
					20+ years' experience in business, technology, and design."
				/>
				<style>{prismCSS}</style>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
