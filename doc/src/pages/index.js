import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from 'styled-components';
import { deviceWidthQuery, color } from '@jbkr/style-service';


const Header = styled.header`
	background: url('/jbkr/img/party.jpg');
	background-size: cover;
	background-position: center bottom;
	background-repeat: no-repeat;
	background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 35,
	'format': 'string',
})};
	padding: 18rem 0 6rem;
`;

const HeaderContentContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		padding: 2rem;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: inline-block;
		padding: 2rem 4rem 2rem 6rem;
		border-radius: 0 3px 3px 0;
	}
	background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 35,
	'alpha': .93,
	'format': 'string',
})};
`;
const HeaderTitle = styled.h1`
	color: white;
	${deviceWidthQuery.only({ 'width': 's' })} {
		font-size: 3.0625rem;
		line-height: 3.5rem;
		font-weight: 600;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		font-size: 4.1875rem;
		line-height: 4.5rem;
		font-weight: 600;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		font-size: 5.675rem;
		line-height: 5rem;
		font-weight: 600;
		padding-bottom: .5rem;
	}
`;
const HeaderTitlePreface = styled.div`
	font-size: 1rem;
	line-height: 1.5rem;
	font-weight: 400;
	color: ${color({
	'kind': 'Neutral',
	'tone': 'Spruce',
	'level': 1,
	'format': 'string',
})};
`;
const HeaderEmphasisLine = styled.div`
	height: .25rem;
	border-radius: 1px;
	background-color:${color({
	'kind': 'Accent',
	'tone': 'Spruce',
	'level': 2,
	'format': 'string',
})};
`;
const HeaderTagline = styled.p`
	font-size: 1rem;
	line-height: 1.5rem;
	padding-top: .75rem;
	font-weight: 400;
	color: ${color({
	'kind': 'Neutral',
	'tone': 'Seafoam',
	'level': 1,
	'format': 'string',
})};
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
