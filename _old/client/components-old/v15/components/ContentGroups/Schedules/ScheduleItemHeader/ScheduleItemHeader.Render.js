import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

const ScheduleItemHeaderContainer = styled.div`
	grid-area: scheduleItemHeader;
	margin: 0;
	color: ${Style.Color({ token: 'grey-18' })};
	${({ scope, device }) => (scope === 'week' && `font-size: ${Style.FontSize('s', device.screen.width)}rem`)};
	${({ scope, device }) => (scope === 'day' && `font-size: ${Style.FontSize('m', device.screen.width)}rem`)};
	font-weight: ${Style.FontWeight('semi-bold')};
	line-height: ${(props) => `${props.lineheight}px`};
`;

const ScheduleItemHeader = ({
	device,
	iconSize,
	text,
	level,
	listingURL,
	registrationURL,
	scope,
}) => (
	<ScheduleItemHeaderContainer
		as={`h${level}`}
		device={device}
		scope={scope}
		lineheight={iconSize}
	>
		{
			registrationURL && 

			<a href={registrationURL} target="_blank" rel="noreferrer">{text}</a>
		}
		{
			listingURL && !registrationURL && 

			<a href={`${listingURL}`}>{text}</a>
		}
		{
			!listingURL && !registrationURL && 

			text
		}
	</ScheduleItemHeaderContainer>
);

export default ScheduleItemHeader;
