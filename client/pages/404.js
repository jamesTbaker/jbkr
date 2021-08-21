/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


import styled from 'styled-components';
import Link from 'next/link';
import { Text } from '../components/core/Text';

const StyledFourOhFourScreen = styled.div`
	color: pink;
`;

const FourOhFourScreen = (props) => (
	<StyledFourOhFourScreen>
		<Text
			deviceWidth='l'
			size='3xl'
			weight='bold'
			slant='italic'
			usage='display'
		>The FourOhFour Screen</Text>
		<Link href="/">Profile</Link>
		<Link href="/library">Library</Link>
		<Link href="/contact">Contact</Link>
	</StyledFourOhFourScreen>
);

export default FourOhFourScreen;
