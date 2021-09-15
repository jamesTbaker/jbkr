import React from 'react';
import styled from 'styled-components';

const HeaderElement = styled.div``;

const Header = ({
	level,
	text,
}) => (
	<HeaderElement as={`h${level}`}>
		{text}
	</HeaderElement>
);

export default Header;
