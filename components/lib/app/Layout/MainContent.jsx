/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';

const MainContentContainer = styled.main`
`;

export const MainContent = ({ children }) => (
	<MainContentContainer id="main-content" role="main">
		{children}
	</MainContentContainer>
);
