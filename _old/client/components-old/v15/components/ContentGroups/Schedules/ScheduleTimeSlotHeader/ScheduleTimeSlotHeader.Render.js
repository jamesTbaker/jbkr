import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

const ScheduleTimeSlotHeaderContainer = styled.div`
	display: flex;
	font-size: ${(props) => (`${Style.FontSize('2', props.device.screen.width)}rem`)};
	font-weight: ${Style.FontWeight('bold')};
	margin-bottom: 0;
	&:after {
		content: '';
		flex-grow: 1;
		max-width: 60rem;
		margin-left: 1.25rem;
		border-bottom: solid .25rem ${Style.Color({ token: 'grey-8' })};
		${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
			margin-bottom: 1rem;
		`}
		${(props) => props.device.screen.width === 'm' && `
			margin-bottom: 1rem;
		`}
		${(props) => props.device.screen.width.match(/^(l|xl)$/) && `
			margin-bottom: 1rem;
		`}
	}
`;
const ScheduleTimeSlotHeaderTextContainer = styled.span`
	grid-area: header;
	padding-right: 0.625rem;
	background-color: white;
	z-index: 1;
`;
const ScheduleTimeSlotHeader = ({
	device,
	level,
	text,
}) => (
	<ScheduleTimeSlotHeaderContainer
		as={`h${level}`}
		device={device}
	>
		<ScheduleTimeSlotHeaderTextContainer>
			{text}
		</ScheduleTimeSlotHeaderTextContainer>
	</ScheduleTimeSlotHeaderContainer>
);

export default ScheduleTimeSlotHeader;
