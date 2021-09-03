import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import ScheduleTimeSlotHeader from '../ScheduleTimeSlotHeader/ScheduleTimeSlotHeader.Render';
import ScheduleItem from '../ScheduleItem/ScheduleItem.Render';

const ScheduleTimeSlotContainer = styled.div`
	padding-bottom: 5rem;
`;
const ScheduleTimeSlot = ({
	device,
	startTimeFormatted,
	productsThisTime,
	svgsAll,
	venues,
	channels,
	scope,
}) => (
	<ScheduleTimeSlotContainer>
		<ScheduleTimeSlotHeader
			device={device}
			level={4}
			text={startTimeFormatted}
		/>
		{
			productsThisTime &&

				productsThisTime.map((product) => (
					<ScheduleItem
						scope={scope}
						device={device}
						product={product}
						svgsAll={svgsAll}
						venues={venues}
						channels={channels}
						key={uuid()}
					/>
				))
		}
	</ScheduleTimeSlotContainer>
);

export default ScheduleTimeSlot;
