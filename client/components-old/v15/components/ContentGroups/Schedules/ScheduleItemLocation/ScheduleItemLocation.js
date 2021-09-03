import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

const ScheduleItemLocationContainer = styled.div`
	grid-area: scheduleItemLocation;
	font-size: ${(props) => `${Style.FontSize('s', props.device.screen.width)}rem`};
`;
const ScheduleItemLocationText = styled.p`
	margin: 0
`;

const ScheduleItemLocation = ({
	device,
	text,
}) => (
	<ScheduleItemLocationContainer device={device}>
		<ScheduleItemLocationText>{text}</ScheduleItemLocationText>
	</ScheduleItemLocationContainer>
);

export default ScheduleItemLocation;
