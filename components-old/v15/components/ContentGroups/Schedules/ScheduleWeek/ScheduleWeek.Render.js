import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import ScheduleHeader from '../ScheduleHeader/ScheduleHeader.Render';
import ScheduleDay from '../ScheduleDay/ScheduleDay.Render';

const ScheduleWeekDaysContainer = styled.div`
	${(props) => props.device.screen.width.match(/^(l|xl)$/) && `
		display: grid;
		grid-template-areas: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday";
		grid-template-columns: repeat(7, minmax(0, 1fr));
		grid-auto-flow: column;
	`}
`;
const ScheduleWeekContainer = styled.div`
	padding: 5rem 2.5rem 0;
	${(props) => props.device.screen.width.match(/^(l|xl)$/) && `
		padding: 7.5rem 4.375rem;
	`}
`;
const weekHasProducts = (scheduleDays) => {
	let hasProducts = false;
	scheduleDays.forEach((scheduleDay) => {
		if (scheduleDay.products) {
			hasProducts = true;
		}
	});
	return hasProducts;
};
const ScheduleWeek = ({
	scope,
	channels,
	svgsAll,
	device,
	startDate,
	endDate,
	scheduleDays,
	daySections,
	dayNotices,
}) => (
	<div>
		{
			weekHasProducts(scheduleDays) && (
				<ScheduleWeekContainer
					device={device}
				>
					<ScheduleHeader
						scope={scope}
						dates={{
							startDate,
							endDate,
						}}
						device={device}
					/>
					<ScheduleWeekDaysContainer
						device={device}
					>
						{
							scheduleDays.map((scheduleDay) => {
								if (scheduleDay) {
									return (
										<ScheduleDay
											scope={scope}
											channels={channels}
											svgsAll={svgsAll}
											device={device}
											dates={{
												dateString: scheduleDay.dateString,
											}}
											products={{
												standardProducts: scheduleDay.products,
											}}
											sections={daySections}
											notices={dayNotices}
											key={uuid()}
										/>
									);
								}
								return null;
							})
						}
					</ScheduleWeekDaysContainer>
				</ScheduleWeekContainer>
			)
		}
	</div>
);

export default ScheduleWeek;
