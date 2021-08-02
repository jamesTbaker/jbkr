import styled from 'styled-components';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface LibLabItemScreenProps {};

const StyledLibLabItemScreen = styled.div`
	color: pink;
`;

const LibLabItemScreen = (props: LibLabItemScreenProps) => {
	const router = useRouter();
	return (
		<StyledLibLabItemScreen>
			<h2>The LibLab Item Screen</h2>
			<p>You selected: {router.query.articleID}</p>
		</StyledLibLabItemScreen>
	)};

export default LibLabItemScreen;
