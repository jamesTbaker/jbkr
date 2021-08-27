/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */


import styled from 'styled-components';
import Link from 'next/link';
import { Copy } from '../components/core/Copy/Copy';

const StyledContactScreen = styled.div`
	color: pink;
	background-color: #336;
`;

const ContactScreen = (props) => (
	<StyledContactScreen>
		<Copy kind="h1">The Contact Screen</Copy>
		<Link href="/">Profile</Link>
		<Link href="/library">Library</Link>
		<Link href="/contact">Contact</Link>
	</StyledContactScreen>
);

export default ContactScreen;