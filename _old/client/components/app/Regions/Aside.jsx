/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';

const AsideContainer = styled.aside`
	background-color: hsla(0,0%,0%,.4);
`;

export const Aside = ({ children }) => (
	<AsideContainer>
		{children}
	</AsideContainer>
);
