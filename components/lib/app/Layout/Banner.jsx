/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Link from 'next/link';
import styled from 'styled-components';

const BannerContainer = styled.header`
	height: 5rem;
	background-color: hsla(0,0%,0%,.8);
`;

export const Banner = ({ children }) => (
	<BannerContainer
		role="banner"
	>
		<nav aria-label="Primary Navigation" role="navigation">
			<Link href="/">Profile</Link>
			<Link href="/library">Library</Link>
			<Link href="/contact">Contact</Link>
		</nav>
	</BannerContainer>
);
