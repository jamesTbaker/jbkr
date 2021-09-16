/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';

const FooterContainer = styled.footer`
	height: 5rem;
	background-color: hsla(0,0%,0%,.8);
`;

export const Footer = ({ content }) => (
	<FooterContainer role="contentinfo"
		dangerouslySetInnerHTML={{ '__html': content }}
	/>
);
