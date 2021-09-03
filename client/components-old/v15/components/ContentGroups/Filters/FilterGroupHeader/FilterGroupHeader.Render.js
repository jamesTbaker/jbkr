import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

const HeaderElement = styled.div`
	font-size: ${(props) => (`${Style.FontSize('m', props.device.screen.width)}rem`)};
	line-height: 3.75rem;
	margin: 0;
	padding: 2.5rem 5rem 2.5rem 2.5rem;
	color: ${Style.Color({ token: 'white' })};
	background-color: ${Style.Color({ token: 'bold-pink' })};
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		grid-area: filterGroupHeader;
		text-transform: uppercase;
		text-align: right;
	`}
`;

/* 

	font-weight: ${props => props.device.screen.width.match(/^(s|xs)$/)? Style.FontWeight('light') : Style.FontWeight('light')};

	background-color: ${(props) => (Style.Color('ux-l-1', props.darkMode))};

	line-height: ${props => `${props.lineheight.toString()}px`};

*/

const FilterControlGroupHeader = ({
	device,
	header,
}) => (
	<HeaderElement
		as={`h${header.level}`}
		device={device}
	>
		{header.text}
	</HeaderElement>
);

export default FilterControlGroupHeader;
