import React from 'react';
import styled from 'styled-components';
import Icon from '../../../Core/Icon/Icon';

const ScheduleItemIconContainer = styled.span`
	grid-area: scheduleItemIcon;
	padding-right: 1.25rem;
`;
const ScheduleItemIcon = ({
	content,
	color,
	size,
	svgsAll,
	device,
}) => (
	<ScheduleItemIconContainer>
		<Icon
			color={color}
			size={size}
			content={content}
			svgsAll={svgsAll}
			device={device}
		/>
	</ScheduleItemIconContainer>
);

export default ScheduleItemIcon;
