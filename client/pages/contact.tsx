import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContactScreenProps {};

const StyledContactScreen = styled.div`
	color: pink;
`;

const ContactScreen = (props: ContactScreenProps) => (
	<StyledContactScreen>
		<h2>The Contact Screen</h2>
	</StyledContactScreen>
);

export default ContactScreen;
