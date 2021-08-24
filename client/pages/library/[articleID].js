/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import styled from 'styled-components';
import Link from 'next/link';
import { Text } from '../../components/core/Text/Text';
import { useRouter } from 'next/router';

const StyledLibLabItemScreen = styled.div`
	color: pink;
`;

const LibLabItemScreen = (props) => {
	const router = useRouter();
	return (
		<StyledLibLabItemScreen>
			<Text
				deviceWidth='l'
				size='3xl'
				weight='bold'
				slant='italic'
				usage='display'
				color={{
					'kind': 'Accent',
					'tone': 'Iris',
					'level': '01',
				}}
			>The LibLab Item Screen</Text>
			<Link href="/">Profile</Link>
			<Link href="/library">Library</Link>
			<Link href="/contact">Contact</Link>
			<p>You selected: {router.query.articleID}</p>
		</StyledLibLabItemScreen>
	);
};

export default LibLabItemScreen;
