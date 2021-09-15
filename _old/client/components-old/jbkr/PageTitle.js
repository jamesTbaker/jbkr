
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const TitleContainer = styled.h1`
	padding: ${props => props.screenType === 'small' ? 
		'7rem 1rem' : '7rem 5rem' };
	margin: 0;
	font-weight: ${props => props.screenType === 'small' ? StylePatterns.FontWeight('light') : StylePatterns.FontWeight('light')};
	color: ${StylePatterns.Color('blue-11')};
	background-size: 100% auto, cover;
	background-position: left top, 50% center;
	background-image: linear-gradient(to right, ${StylePatterns.Color('blue-1')}, ${StylePatterns.Color('blue-1-20-percent')}), url('${props => props.backgroundImage}');
	`;

export default (props) => (
	<TitleContainer
		backgroundImage={props.backgroundImage}
		screenType={props.screenType}
	>
		{props.text}
	</TitleContainer>
);
