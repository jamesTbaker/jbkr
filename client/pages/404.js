/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import { Copy } from '../components/core/Copy/Copy';

const StyledFourOhFourScreen = styled.div`
`;

const FourOhFourScreen = (props) => (
	<>
		<Head>
			<title>On no! | jbkr</title>
		</Head>
		<StyledFourOhFourScreen>
			<Copy kind="h1">The FourOhFour Screen</Copy>
			<Link href="/">Profile</Link>
			<Link href="/library">Library</Link>
			<Link href="/contact">Contact</Link>
		</StyledFourOhFourScreen>
	</>
);

export default FourOhFourScreen;
