import { useState } from 'react';
import styled from 'styled-components';
import { Line } from '../Line/Line';

const HamburgerContainer = styled.button`
	display: block;
	width: 2rem;
`;
/**
 * Horizontal line, used as dividers and anchor points of
 */
export const Hamburger = () => {
	const [collapsed, setCollapsed] = useState(true);
	const HandleButtonClick = () => {
		setCollapsed(!collapsed);
	};
	return (
	<HamburgerContainer>

	</HamburgerContainer>
)};
