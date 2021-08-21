/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


import styled from 'styled-components';
import Link from 'next/link';
import { Text } from '../../components/core/Text';
import { useRouter } from 'next/router';

const StyledLibLabItemScreen = styled.div`
	color: pink;
`;

const ContactScreen = (props) => {
	const router = useRouter();
	return (
		<StyledLibLabItemScreen>
			<Text
				deviceWidth='l'
				size='3xl'
				weight='bold'
				slant='italic'
				usage='display'
			>The LibLab Item Screen</Text>
			<Link href="/">Profile</Link>
			<Link href="/library">Library</Link>
			<Link href="/contact">Contact</Link>
			<p>You selected: {router.query.articleID}</p>
		</StyledLibLabItemScreen>
	);
};

export default ContactScreen;
