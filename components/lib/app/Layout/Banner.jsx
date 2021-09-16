/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Link from 'next/link';
import styled from 'styled-components';

const BannerContainer = styled.header`
	height: 5rem;
	background-color: hsla(0,0%,0%,.8);
`;
const LinkContainer = styled.span`
	a {
		${props => props.forThisScreen && `
			color: yellow;
		`}
		${props => !props.forThisScreen && `
			color: pink;
		`}
	}
`;
export const Banner = ({ content }) => (
	<BannerContainer
		role="banner"
	>
		<nav aria-label="Primary Navigation" role="navigation">
			{
				content.links.primary.map((link) =>
					<LinkContainer
						key={link.key}
						forThisScreen={link.forThisScreen}
					>
						<Link
							href={link.url}
						>
							{link.anchorText}
						</Link>
					</LinkContainer>
				)
			}
		</nav>
	</BannerContainer>
);
