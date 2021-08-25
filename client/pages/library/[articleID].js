/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Copy } from '../components/core/Copy/Copy';

const StyledLibLabItemScreen = styled.div`
	color: pink;
	background-color: #336;
`;

const LibLabItemScreen = (props) => {
	const router = useRouter();
	return (
		<StyledLibLabItemScreen>
			<Copy kind="h1">The LibLab Item Screen</Copy>
			<Link href="/">Profile</Link>
			<Link href="/library">Library</Link>
			<Link href="/contact">Contact</Link>
			<p>You selected: {router.query.articleID}</p>
		</StyledLibLabItemScreen>
	);
};

export default LibLabItemScreen;
