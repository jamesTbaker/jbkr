
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import StylePatterns from '../services/StylePatterns';
import { scroller } from 'react-scroll';


// --- COMPONENT

const handleBackToMenuNavItemClick = (screenType) => {
	if (screenType === 'large') {
		scroller.scrollTo('deep-dive-container', {
			duration: 500,
			offset: 0,
			delay: 0,
			smooth: 'easeInOutQuart',
		});
	} else {
		scroller.scrollTo('deep-dive-container', {
			duration: 500,
			offset: -110,
			delay: 0,
			smooth: 'easeInOutQuart',
		});
	}
};

// STYLED COMPONENTS

const SubsectionBodyEndLinkContainer = styled.p`
	grid-area: link;
	margin: 0;
	border-top: .1rem solid ${StylePatterns.Color('grey-5')};
	padding-top: 3rem;
	${props => props.screenType === 'small' && `
		margin-top: 2rem;
	`}
`;
const SubsectionBodyEndLink = styled.a`
	cursor: pointer;
	border: 0;

	&:hover {
		border: 0;
	}
`;

// CONTENTS

export default (props) => (
	<SubsectionBodyEndLinkContainer
		screenType={props.screenType}
	>
		<SubsectionBodyEndLink
			onClick={() => handleBackToMenuNavItemClick(props.screenType)}
		>
			Back to Deep Dive List&nbsp;
			<Icon
				iconPosition="after"
				iconContent="arrow-up"
				iconSize="1.8"
				color={StylePatterns.Color('grey-12')}
			/>
		</SubsectionBodyEndLink>
	</SubsectionBodyEndLinkContainer>
);
