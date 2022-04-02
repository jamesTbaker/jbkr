import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from 'styled-components';
import { deviceWidthQuery } from '@jbkr/style-service';

const HeaderTagline = styled.p`
	margin-bottom: 0;
	padding: 0 0 2rem;
	${deviceWidthQuery.only({ 'width': 'l' })} {
		font-size: 1.375rem;
		font-weight: 342;
		font-style: normal;
		line-height: 2rem;
		letter-spacing: -.01033203125rem;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		font-size: 1.4375rem;
		font-weight: 342;
		font-style: normal;
		line-height: 2.5rem;
		letter-spacing: -.009453125rem;
	}
	${deviceWidthQuery.only({ 'width': 's' })} {
		font-size: 1.25rem;
		font-weight: 342;
		font-style: normal;
		line-height: 2rem;
		letter-spacing: -.0078125rem;
	}
`;
const BodyContentContainer = styled.div`
	padding: 0 2rem 2rem;
`;
export default () => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
		>
			<main id="index-main-content">
				<header>
					<h1>
						Docs
					</h1>
					<HeaderTagline>
						Welcome to the doc party. Because who doesn't love&nbsp;
						<a
							href="https://en.wikipedia.org/wiki/Software_documentation"
							target="_blank">documentation
						</a>?
					</HeaderTagline>
				</header>

				<BodyContentContainer>
					<h2>About</h2>
					<p>
						<a href="https://jbkr.me">jbkr</a> is the core
						of James Baker's professional online presence.
					</p>
					<h2>Tech Stack Overview</h2>
					<ul>
						<li>
							<b>Figma</b>: Colors are defined in Figma
							and fetched from its API.
						</li>
						<li>
							<b>ES6 + TypeScript</b>: Styles and other modules.
						</li>
						<li>
							<b>Strapi</b>: Content.
						</li>
						<li>
							<b>Next</b>: Client.
						</li>
						<li>
							<b>MongoDB Atlas</b>: Strapi is configured to save its
							data to MongoDB in the cloud, and the Next client
							retrieves its content from Mongo.
						</li>
						{/* <li>

						</li>
						<li>

						</li>
						<li>

						</li> */}
					</ul>
				</BodyContentContainer>
			</main>
		</Layout>
	);
};
