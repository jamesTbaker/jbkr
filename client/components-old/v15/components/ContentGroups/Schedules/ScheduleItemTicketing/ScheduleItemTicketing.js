import React from 'react';
import styled from 'styled-components';
import ScheduleItemIcon from '../ScheduleItemIcon/ScheduleItemIcon.Render';
import Style from '../../../../services/styles';

const ScheduleItemTicketingContainer = styled.div`
  grid-area: scheduleItemTicketing;
  font-size: ${(props) => `${Style.FontSize('xs', props.device.screen.width)}rem`};
`;

const ScheduleItemTicketing = ({
	device,
	requiresTicket,
	svgsAll,
}) => (
	<ScheduleItemTicketingContainer device={device}>
		{requiresTicket === true && (
			<>
				<ScheduleItemIcon
					content="icon-ticket"
					color="bold-aqua"
					size="xs"
					svgsAll={svgsAll}
					device={device}
				/>
				<span>Requires additional ticket</span>
			</>
		)}
	</ScheduleItemTicketingContainer>
);

export default ScheduleItemTicketing;
