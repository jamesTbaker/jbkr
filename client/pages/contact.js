/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


import styled from 'styled-components';
import Link from 'next/link';
import { Text } from '../components/core/Text';

const StyledContactScreen = styled.div`
	color: pink;
`;

const ContactScreen = (props) => (
	<StyledContactScreen>
		<Text
			deviceWidth='l'
			size='3xl'
			weight='bold'
			slant='italic'
			usage='display'
		>The Contact Screen</Text>
		<Link href="/">Profile</Link>
		<Link href="/library">Library</Link>
		<Link href="/contact">Contact</Link>
	</StyledContactScreen>
);

export default ContactScreen;
