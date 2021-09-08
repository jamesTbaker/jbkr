/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import { Banner } from '../Regions/Banner';
import { Footer } from '../Regions/Footer';
import styled from 'styled-components';

const SkipLinksContainer = styled.div`
	height: 5rem;
	background-color: hsla(275,100%,15%,1);
`;

export const ScreenScaffold = ({
	'meta': {
		type,
		url,
		title,
		descriptions,
		image,
		hasTableOfContents,
	},
	children,
}) => {
	return(
		<>
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
			<SkipLinksContainer>
				{
					hasTableOfContents &&
					<ul>
						<li>
							<a href="#table-of-contents">
								Skip to table of contents
							</a>
						</li>
						<li>
							<a href="#main-content">
								Skip to main content
							</a>
						</li>
					</ul>
				}
				{
					!hasTableOfContents &&
					<a href="#main-content">Skip to main content</a>
				}
			</SkipLinksContainer>
			<Banner />
			{children}
			<Footer />
		</>
	);
};
