import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import ScheduleDayHeader from '../ScheduleDayHeader/ScheduleDayHeader.Render';
import ScheduleDaySubheader from '../ScheduleDaySubheader/ScheduleDaySubheader.Render';
import ScheduleDayBanner from '../ScheduleDayBanner/ScheduleDayBanner';
import ScheduleDayStandardItems from '../ScheduleDayStandardItems/ScheduleDayStandardItems.Render';
import ScheduleDayOngoingItems from '../ScheduleDayOngoingItems/ScheduleDayOngoingItems';

const ScheduleDayContainer = styled.div`
	${(props) => props.device.screen.width.match(/^(l|xl)$/) && `
		grid-area: ${props.gridArea};
		margin-right: 2.5rem;
		&:last-child {
			margin-right: 0;
		}
	`}
`;
const ScheduleDayHeaderContainer = styled.div`
	margin: 2.5rem 0;
`;
const ScheduleDay = ({
	scope,
	device,
	dates,
	hours,
	products,
	svgsAll,
	venues,
	channels,
	sections,
	notices,
}) => (
	<ScheduleDayContainer
		device={device}
		gridArea={moment(dates.dateString).format('dddd')}
	>
		<div>
			{
				(sections.headers || sections.subHeaders) && (
					<ScheduleDayHeaderContainer>
						{
							sections.headers && (
								<ScheduleDayHeader
									device={device}
									level={3}
									text={moment(dates.dateString).format('dddd')}
								/>
							)
						}
						{
							sections.subHeaders && (
								<ScheduleDaySubheader
									device={device}
									text={moment(dates.dateString).format('MMMM D')}
								/>
							)
						}
					</ScheduleDayHeaderContainer>
				)
			}
			{
				sections.banner && hours.exception && (
					<ScheduleDayBanner
						hours={hours}
						svgsAll={svgsAll}
						device={device}
					/>
				)
			}
			{
				sections.ongoingItems && (
					<ScheduleDayOngoingItems
						hours={hours}
						products={products}
						svgsAll={svgsAll}
						venues={venues}
						device={device}
					/>
				)
			}
			{
				sections.standardItems && (
					<ScheduleDayStandardItems
						scope={scope}
						dates={dates}
						hours={hours}
						products={products}
						svgsAll={svgsAll}
						venues={venues}
						channels={channels}
						notices={notices}
						device={device}
					/>
				)
			}
		</div>
	</ScheduleDayContainer>
);

export default ScheduleDay;
