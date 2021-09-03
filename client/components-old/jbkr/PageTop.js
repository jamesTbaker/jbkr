
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const TopContainer = styled.div`
	display: grid;
	background-color: ${StylePatterns.Color('blue-3')};

	${props => props.screenType !== 'small' && `
		grid-template-columns: 1fr 1fr;
		grid-template-areas:	"topLeft topRight"
								"midLeft midRight"
								"bottomLeft bottomRight";
	`}
	${props => props.screenType === 'large' && `
		background-size: 100% auto, 100% auto, cover;
		background-position: left top, left top, 50% center;
		background-image: linear-gradient(to right, transparent, transparent 30%,  ${StylePatterns.Color('blue-1-70-percent')} 60%, ${StylePatterns.Color('blue-1')}), linear-gradient(to bottom, ${StylePatterns.Color('blue-1')}, transparent 14rem, transparent 28rem, ${StylePatterns.Color('blue-1-80-percent')} 33rem, ${StylePatterns.Color('blue-1')}), url('/${props.backgroundImage}--large.jpg'), url('/${props.backgroundImage}--low.jpg');
	`}
	${props => props.screenType === 'medium' && `
		background-size: 100% auto, 100% auto, cover;
		background-position: left top, left top, 50% center;
		background-image: linear-gradient(to right, transparent, transparent 30%,  ${StylePatterns.Color('blue-1-70-percent')} 60%, ${StylePatterns.Color('blue-1')}), 
		
		linear-gradient(to bottom, ${StylePatterns.Color('blue-1')}, transparent 10rem, transparent 21rem, ${StylePatterns.Color('blue-1-80-percent')} 26rem, ${StylePatterns.Color('blue-1')}), url('/${props.backgroundImage}--medium.jpg'), url('/${props.backgroundImage}--low.jpg');
	`}
	${props => props.screenType === 'small' && `
		grid-template-columns: 1fr;
		grid-template-areas:	"top"
								"midTop"
								"midBottom"
								"bottom";

		background-size: 100% auto, cover;
		background-position: left center, 50% bottom;
		background-image: linear-gradient(to bottom, ${StylePatterns.Color('blue-1')}, transparent 13rem, transparent 20rem, ${StylePatterns.Color('blue-1-50-percent')} 24rem, ${StylePatterns.Color('blue-1-80-percent')} 32rem, ${StylePatterns.Color('blue-1')}),  url('/${props.backgroundImage}--small.jpg'), url('/${props.backgroundImage}--low.jpg');
	`}
`;
const TopContentOneContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: topRight;
		padding: 0 2rem 0 1rem;

		div.sb-root--top-content {
			${StylePatterns.VerticalAlignMiddle()};
		}
		color: ${StylePatterns.Color('grey-15')};
	`}
	${({ screenType }) => screenType === 'small' && `
		grid-area: top;
		display: flex;
		height: 10rem;
		padding: 0 2rem;
		font-size: ${StylePatterns.FontSize('m', 'small')};

		div.sb-root--top-content {
			align-self: flex-end;
		}
	`}
	${({ screenType }) => screenType === 'medium' && `
		height: 10rem;
		font-size: ${StylePatterns.FontSize('m', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		height: 14rem;
		font-size: ${StylePatterns.FontSize('m', 'large')};
	`}

	p {
		margin-bottom: .5rem;
	}
	a {
		border: 0;
	}
`;
const TopContentTwoContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: midRight;
		padding: 0 2rem 0 1rem;

		div.sb-root--top-content {
			${StylePatterns.VerticalAlignMiddle()};
		}
	`}
	${({ screenType }) => screenType === 'small' && `
		grid-area: midTop;
		display: flex;
		height: 19rem;
		padding: 0 2rem 1rem;

		div.sb-root--top-content {
			align-self: flex-end;
		}
	`}
	${({ screenType }) => screenType === 'medium' && `
		height: 16rem;
	`}
	${({ screenType }) => screenType === 'large' && `
		height: 19rem;
	`}
`;
const TopContentThreeContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: bottomRight;
		border-top: .2rem solid  ${StylePatterns.Color('yellow-1')};
		padding: 2rem 0 2rem 1rem;
		margin-right: 5rem;
		color: ${StylePatterns.Color('grey-13')}
	`}

	${({ screenType }) => screenType === 'small' && `
		grid-area: midBottom;
		margin: 0 2rem;
		padding-top: 1rem;
		border-top: .2rem solid  ${StylePatterns.Color('yellow-1')};
		font-size: ${StylePatterns.FontSize('xxl', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('xxl', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('xxl', 'large')};
	`}
`;
const TopContentFourContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: bottomLeft;
		border-top: .2rem solid  ${StylePatterns.Color('yellow-1')};
		padding: 2rem 2rem 2rem 0;
		margin-left: 5rem;
		color: ${StylePatterns.Color('grey-16')}
	`}
	${({ screenType }) => screenType === 'small' && `
		grid-area: bottom;
		padding: 0 2rem;
	`}
`;

export default (props) => (
	<TopContainer
		screenType={props.screenType}
		backgroundImage={props.backgroundImage}
	>
		<TopContentOneContainer
			screenType={props.screenType}
		>
			{props.topContentOne}
		</TopContentOneContainer>
		<TopContentTwoContainer
			screenType={props.screenType}
		>
			{props.topContentTwo}
		</TopContentTwoContainer>
		<TopContentThreeContainer
			screenType={props.screenType}
		>
			{props.topContentThree}
		</TopContentThreeContainer>
		<TopContentFourContainer
			screenType={props.screenType}
		>
			{props.topContentFour}
		</TopContentFourContainer>
	</TopContainer>
);
