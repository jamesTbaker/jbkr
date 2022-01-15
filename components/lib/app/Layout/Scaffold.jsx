/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import { Banner } from '../Layout/Banner';
import { Footer } from '../Layout/Footer';
import styled from 'styled-components';

const SkipLinksContainer = styled.div`
	height: 5rem;
	background-color: hsla(275,100%,15%,1);
`;

export const Scaffold = ({
	'meta': {
		metaDescription,
		metaImage,
		metaOther,
		metaTitle,
		openGraphType,
		slug,
		socialDescription,
	},
	header,
	footer,
	hasTableOfContents,
	children,
}) => {
	return(
		<>
			<Head>
				{
					slug &&
					<meta property="og:url"
						content={`https://jbkr.me${slug}`} />
				}
				{
					slug &&
					<meta property="twitter:url"
						content={`https://jbkr.me${slug}`} />
				}
				{
					metaTitle &&
					<title>{`${metaTitle}`} | jbkr</title>
				}
				{
					metaTitle &&
					<meta property="og:metaTitle"
						content={`${metaTitle}`} />
				}
				{
					metaTitle &&
					<meta name="twitter:metaTitle"
						content={`${metaTitle}`} />
				}
				{
					metaDescription &&
					<meta name="description" content={metaDescription} />
				}
				{
					socialDescription &&
					<meta property="og:description"
						content={socialDescription} />
				}
				{
					socialDescription &&
					<meta name="twitter:description"
						content={socialDescription} />
				}
				{
					openGraphType &&
					<meta property="og:type" content={openGraphType} />
				}
				{
					metaImage && metaImage.url &&
					<meta property="og:image" content={metaImage.url} />
				}
				{
					metaImage && metaImage.url &&
					<meta name="twitter:image" content={metaImage.url} />
				}
				{
					metaImage && metaImage.alternativeText &&
					<meta name="twitter:image:alt"
						content={metaImage.alternativeText} />
				}
				{
					metaOther && metaOther[0] &&
					metaOther.map((otherObject, otherObjectIndex) =>
						// key is in `otherObject`
						// eslint-disable-next-line react/jsx-key
						<meta
							{...otherObject}
						/>,
					)
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
			<Banner
				content={header}
			/>
			{children}
			<Footer
				content={footer.copy}
			/>
		</>
	);
};
