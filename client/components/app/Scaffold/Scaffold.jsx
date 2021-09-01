/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const AppContainer = styled.div`
`;
const Header = styled.header`
	height: 5rem;
`;
const ScreenContentContainer = styled.div`
`;

export const Scaffold = ({
	'meta': {
		type,
		url,
		title,
		descriptions,
		image,
	},
	children,
}) => {
	return(
		<AppContainer>
			<Head>
				{
					title &&
					<title>{`${title}`} | jbkr</title>
				}
				{
					descriptions && descriptions.main &&
					<meta name="description" content={descriptions.main} />
				}
				{
					type &&
					<meta property="og:type" content={type} />
				}
				{
					title &&
					<meta property="og:title"
						content={`${title}`} />
				}
				{
					url &&
					<meta property="og:url"
						content={`https://jbkr.me${url}`} />
				}
				{
					descriptions && descriptions.social &&
					<meta property="og:description"
						content={descriptions.social} />
				}
				{
					image && image.url &&
					<meta property="og:image" content={image.url} />
				}
				{
					url &&
					<meta property="twitter:url"
						content={`https://jbkr.me${url}`} />
				}
				{
					title &&
					<meta name="twitter:title"
						content={`${title}`} />
				}
				{
					descriptions && descriptions.social &&
					<meta name="twitter:description"
						content={descriptions.social} />
				}
				{
					image && image.url &&
					<meta name="twitter:image"
						content={image.url} />
				}
				{
					image && image.alternativeText &&
					<meta name="twitter:image:alt"
						content={image.alternativeText} />
				}
			</Head>
			<Header>
				<Link href="/">Profile</Link>
				<Link href="/library">Library</Link>
				<Link href="/contact">Contact</Link>
			</Header>
			<ScreenContentContainer>
				{children}
			</ScreenContentContainer>
		</AppContainer>
	);
};
