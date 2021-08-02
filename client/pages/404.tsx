import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContactScreenProps {};

const StyledContactScreen = styled.div`
	color: pink;
`;

const FourOhFourScreen = (props: ContactScreenProps) => (
	<StyledContactScreen>
		<h2>The FourOhFour Screen</h2>
	</StyledContactScreen>
);

export default FourOhFourScreen;
