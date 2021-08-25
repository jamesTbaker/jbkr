/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */


import styled from 'styled-components';
import Link from 'next/link';
import { Copy } from '../components/core/Copy/Copy';

const StyledFourOhFourScreen = styled.div`
	color: pink;
	background-color: #336;
`;

const FourOhFourScreen = (props) => (
	<StyledFourOhFourScreen>
		<Copy kind="h1">The FourOhFour Screen</Copy>
		<Link href="/">Profile</Link>
		<Link href="/library">Library</Link>
		<Link href="/contact">Contact</Link>
	</StyledFourOhFourScreen>
);

export default FourOhFourScreen;
