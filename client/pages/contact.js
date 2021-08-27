/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import { Copy } from '../components/core/Copy/Copy';

const StyledContactScreen = styled.div`
`;

const ContactScreen = (props) => (
	<>
		<Head>
			<title>Contact | jbkr</title>
			<meta name="description" content="Get in touch now!"></meta>
		</Head>
		<StyledContactScreen>
			<Copy kind="h1">The Contact Screen</Copy>
			<Link href="/">Profile</Link>
			<Link href="/library">Library</Link>
			<Link href="/contact">Contact</Link>
		</StyledContactScreen>
	</>
);

export default ContactScreen;
