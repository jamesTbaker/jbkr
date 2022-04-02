import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styled from 'styled-components';
import { deviceWidthQuery } from '@jbkr/style-service';

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
					<p>
						Welcome to the doc party. Because who doesn't love&nbsp;
						<a
							href="https://en.wikipedia.org/wiki/Software_documentation"
							target="_blank">documentation
						</a>?
					</p>
				</header>

				<div id="body-container">
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
				</div>
			</main>
		</Layout>
	);
};
