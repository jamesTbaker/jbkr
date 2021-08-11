import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import siteConfigImport from '../../docusaurus.config.js';
import styled from 'styled-components';
// import style from 'style';


const homeContent = {
	'title': siteConfigImport.title,
	'tagline': '',
};

const HeaderContainer = styled.header`
	background: url('/jbkr/img/party.jpg');
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-color: #f00;
	padding: 16rem 0 8rem;
`;
const HeaderContentContainer = styled.div`
	display: inline-block;
	padding: 2rem 2rem 2rem 10rem;
	border-radius: 0 3px 3px 0;
	background-color: hsla(225, 25%, 26%, .95);
`;
const HeaderTitle = styled.h1`
	font-size 5.625rem;
	line-height: 6rem;
	font-weight: 700;
	color: white;
`;
const HeaderTagline = styled.p`
	font-size 2rem;
	line-height: 3rem;
	font-weight: 400;
	color: hsla(175, 100%, 50%);
`;
const HeaderTaglineLink = styled.a`
	color: white;
`;
const HomepageHeader = () => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<HeaderContainer>
			<HeaderContentContainer>
				<HeaderTitle>{siteConfig.title}</HeaderTitle>
				<HeaderTagline>
					Because who doesn't love&nbsp;
					<HeaderTaglineLink
						href=
						"https://en.wikipedia.org/wiki/Software_documentation"
						target="_blank">documentation</HeaderTaglineLink>?
				</HeaderTagline>
			</HeaderContentContainer>
		</HeaderContainer>
	);
};

export default () => {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
};
