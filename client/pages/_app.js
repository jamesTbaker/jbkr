import Head from 'next/head';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { color, typeFamily } from '@jbkr/style-service';

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
	'level': 0,
	'format': 'string',
})};
		background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 35,
	'format': 'string',
})};
	}
`;

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta name="author" content="James T. Baker" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect"
					href="https://fonts.gstatic.com" crossOrigin />
				<link rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
				/>


				<link rel="apple-touch-icon" sizes="180x180"
					href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32"
					href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="194x194"
					href="/favicon/favicon-194x194.png" />
				<link rel="icon" type="image/png" sizes="192x192"
					href="/favicon/android-chrome-192x192.png" />
				<link rel="icon" type="image/png" sizes="16x16"
					href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=1"
					color="#FF0055" />
				<meta name="msapplication-TileColor" content="#60709F" />
				<meta name="theme-color" content="#60709F" />


			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
