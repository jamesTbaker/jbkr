import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import siteConfigImport from '../../docusaurus.config.js';
import styled from 'styled-components';
import { style } from 'style-service';
import { up } from 'styled-breakpoints';


const Header = styled.header`
	background: url('/jbkr/img/party.jpg');
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-color:
		${style.color.accent.onLight.secondary({ 'hue': 'Iris' })};
	padding: 18rem 0 6rem;
`;
const HeaderContentContainer = styled.div`
	display: inline-block;
	padding: 2rem 4rem 2rem 6rem;
	border-radius: 0 3px 3px 0;
	background-color:
		${style.color.accent.onLight.secondary({ 'hue': 'Iris' })};
`;
const HeaderTitle = styled.h1`
	padding-bottom: .5rem;
	font-size: 5.675rem;
	line-height: 5rem;
	font-weight: 600;
	color: white;
`;
const HeaderTitlePreface = styled.div`
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 400;
	color: ${style.color.neutral.seafoam({ 'level': '01' })};
`;
const HeaderEmphasisLine = styled.div`
	height: .25rem;
	border-radius: 1px;
	background-color:
		${style.color.accent.onMedium.primary({ 'hue': 'Seafoam' })};
`;
const HeaderTagline = styled.p`
	font-size: 1rem;
	line-height: 1.5rem;
	padding-top: .75rem;
	font-weight: 400;
	color: ${style.color.neutral.seafoam({ 'level': '01' })};

	a {
		color: white;
	}
`;
const Main = styled.main`
	padding: 2rem;
	margin: 0;


	font-size: 1rem;
	line-height: 1.65rem;
	font-weight: 400;
	margin-bottom: 1.5rem;
	overflow-wrap: break-word;
	text-rendering: optimizeLegibility;

	h2 {
		font-size: 2rem;
		line-height: 2.5rem;
		font-weight: 700;
		margin: 2.5rem 0 1.5rem;
	}
`;
const PhotoCredit = styled.p`
	margin-top: 3rem;
	font-size: .6875rem;
	line-height: 1rem;
	font-weight: 400;
`;
export default () => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
		>
			<Header>
				<HeaderContentContainer>
					<HeaderTitle>
						<HeaderTitlePreface>
							Welcome to the
						</HeaderTitlePreface>
						Doc Party
					</HeaderTitle>
					<HeaderEmphasisLine />
					<HeaderTagline>
						Because who doesn't love&nbsp;
						<a href={`
							https://en.wikipedia.org/wiki/Software_documentation
						`}
							target="_blank">documentation</a>?
					</HeaderTagline>
				</HeaderContentContainer>
			</Header>

			<Main>
				<h2>About</h2>
				<p>
					<a href="https://jbkr.me">jbkr</a> is the core
					of James Baker's professional online presence.
				</p>
				<h2>Tech Stack Overview</h2>
				<ul>
					<li>
						<b>Figma</b>: Colors are defined in Figma and fetched
						from its API.
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
				<PhotoCredit>
					Top photo by&nbsp;
					<a href="https://unsplash.com/@adam_whitlock"
						target="_blank">Adam Whitlock</a>, on&nbsp;
					<a href="https://unsplash.com/@adam_whitlock"
						target="_blank">Unsplash</a>.
				</PhotoCredit>
			</Main>
		</Layout>
	);
};
