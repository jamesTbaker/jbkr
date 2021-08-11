import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '../components/HomepageFeatures';
import siteConfigImport from '../../docusaurus.config.js';
import styled from 'styled-components';
// import style from 'style';


const homeContent = {
	'titlePreface': 'Welcome to the ',
	'titleMain': 'Doc Party',
	'tagline': '',
	'taglineURL': 'https://en.wikipedia.org/wiki/Software_documentation',
	'what': {
		'header': 'About',
		'body': 'jbkr is the core of James Baker\'s \
			professional online presence.',
	},
	'stack': {
		'header': 'Tech Stack Overview',
		'body': [
			'Figma: Colors are defined in Figma and fetched from its API.',
			'ES6 + TypeScript: Styles and other modules.',
			'Strapi: Content.',
			'Next: Client.',
			// '',
			// '',
			// '',
			// '',
		],
	},
};

const HeaderContainer = styled.header`
	background: url('/jbkr/img/party.jpg');
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-color: #f00;
	padding: 18rem 0 6rem;
`;
const HeaderContentContainer = styled.div`
	display: inline-block;
	padding: 2rem 4rem 2rem 6rem;
	border-radius: 0 3px 3px 0;
	background-color: hsla(275, 100%, 50%, .85);
`;
const HeaderTitle = styled.h1`
	font-size: 5.675rem;
	line-height: 6rem;
	font-weight: 600;
	color: white;
`;
const HeaderTitlePreface = styled.div`
	font-size 1rem;
	line-height: 1.5rem;
	font-weight: 400;
	color: hsla(190, 100%, 85%);
`;
const HeaderEmphasisLine = styled.div`
	height: .25rem;
	border-radius: 1px;
	background-color: hsla(325, 100%, 50%, 1);
`;
const HeaderTagline = styled.p`
	font-size 1rem;
	line-height: 1.5rem;
	padding-top: 1rem;
	font-weight: 400;
	color: hsla(190, 100%, 85%);
`;
const HeaderTaglineLink = styled.a`
	color: white;
`;
const HomepageHeader = () => (
	<HeaderContainer>
		<HeaderContentContainer>
			<HeaderTitle>
				<HeaderTitlePreface>
					{homeContent.titlePreface}
				</HeaderTitlePreface>
				{homeContent.titleMain}
			</HeaderTitle>
			<HeaderEmphasisLine />
			<HeaderTagline>
				Because who doesn't love&nbsp;
				<HeaderTaglineLink
					href={homeContent.taglineURL}
					target="_blank">documentation</HeaderTaglineLink>?
			</HeaderTagline>
		</HeaderContentContainer>
	</HeaderContainer>
);

export default () => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
		>
			<HomepageHeader />
			<main>
				<h2>{homeContent.stack.header}</h2>
			</main>
		</Layout>
	);
};
// <HomepageFeatures />
