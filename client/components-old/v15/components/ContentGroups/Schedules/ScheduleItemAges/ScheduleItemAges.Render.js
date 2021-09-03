import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

const ScheduleItemAgesContainer = styled.p`
	grid-area: scheduleItemAge;
	font-size: ${(props) => (`${Style.FontSize('xs', props.device.screen.width)}rem`)};
	font-weight: ${Style.FontWeight('bold')};
	color: ${Style.Color({ token: 'bold-purple' })};
`;

const ScheduleItemAges = ({
	device,
	text,
}) => (
	<ScheduleItemAgesContainer
		device={device}
	>
		{text}
	</ScheduleItemAgesContainer>
);

export default ScheduleItemAges;
