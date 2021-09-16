
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import Collapsible from '../components/Collapsible';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import StylePatterns from '../services/StylePatterns';
import { scroller } from 'react-scroll';
import BackToDeepDiveLink from '../components/BackToDeepDiveLink';

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
		scroller.scrollTo('deeper-dive-container', {
			duration: 500,
			offset: -110,
			delay: 0,
			smooth: 'easeInOutQuart',
		});
	}
};

// STYLED COMPONENTS

const SubsectionBodyContainer = styled.div`
	grid-area: mainAndQuote;
	${props => props.screenType !== 'large' && `
		display: grid;
		grid-template-rows: auto auto auto;
		grid-template-areas: 	"content"
								"quote"
								"link";
	`}
	${props => props.screenType == 'large' && props.quote.largeScreenPosition == 'left' && `
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: 20% 80%;
		grid-template-areas:	"quote content"
								"link link";
	`}
	${props => props.screenType == 'large' && props.quote.largeScreenPosition == 'right' && `
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: 80% 20%;
		grid-template-areas:	"content quote"
								"link link";
	`}
`;
const SubsectionHeader = styled.h3`
	${StylePatterns.BlockHidden()}
`;
const SubsectionBodyQuoteContainer = styled.div`
	grid-area: quote;
	${props => props.screenType === 'medium' && `
		margin-top: 5rem;
	`}
`;
const SubsectionBodyQuoteContentContainer = styled.p`
	${StylePatterns.VerticalAlignMiddle()}
	font-style: italic;
	border-top: .2rem solid ${StylePatterns.Color('blue-4')};
	margin: 0;
	
	${props => props.screenType === 'small' && `
		margin-top: 2rem;
		padding: 2rem 0;
		width: 50%;
		font-size: ${StylePatterns.FontSize('s', 'small')};
		color: ${StylePatterns.Color('blue-8')};
	`}
	${props => props.screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('l', 'medium')};
		padding: 5rem 0 5rem 0;
		color: ${StylePatterns.Color('yellow-2')};
	`}
	${props => props.screenType === 'large' && `
		width: calc(100% - 3rem);
		padding: 2rem;
		font-size: ${StylePatterns.FontSize('l', 'large')};
		border-bottom: .2rem solid ${StylePatterns.Color('blue-4')};
		color: ${StylePatterns.Color('yellow-2')};
	`}
	${props => props.screenType == 'large' && props.quote.largeScreenPosition == 'right' && `
		margin-left: auto;
	`}
`;
const SubsectionBodyContentContainer = styled.div`
	grid-area: content;
`;
/* const SubsectionBodyEndLinkContainer = styled.p`
	grid-area: link;
	margin: 0;

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
 */
// CONTENTS

export default (props) => (
	<SubsectionBodyContainer
		screenType={props.screenType}
		quote={props.quote}
	>
		<SubsectionHeader>All About {props.sectionTitle}</SubsectionHeader>
		<SubsectionBodyContentContainer
			screenType={props.screenType}
		>
			{
				props.screenType === 'small' && 

				<Collapsible
					expandText={`Learn more about ${props.sectionTitle}`}
					collapseText={`Show less about ${props.sectionTitle}`}
					buttonPosition="after"
				>
					{props.children}
				</Collapsible>
			}
			{
				props.screenType !== 'small' &&

				props.children
			}
		</SubsectionBodyContentContainer>
		<SubsectionBodyQuoteContainer
			screenType={props.screenType}
		>
			<SubsectionBodyQuoteContentContainer
				screenType={props.screenType}
				quote={props.quote}
			>
				{props.quote.content}
			</SubsectionBodyQuoteContentContainer>
		</SubsectionBodyQuoteContainer>
		<BackToDeepDiveLink />
	</SubsectionBodyContainer>
);
