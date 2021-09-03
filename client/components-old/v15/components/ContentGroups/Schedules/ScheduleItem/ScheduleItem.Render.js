import React from 'react';
import he from 'he';
import styled from 'styled-components';
import ScheduleItemHeader from '../ScheduleItemHeader/ScheduleItemHeader.Render';
import ScheduleItemAges from '../ScheduleItemAges/ScheduleItemAges.Render';
import ScheduleItemLocation from '../ScheduleItemLocation/ScheduleItemLocation';
import ScheduleItemTicketing from '../ScheduleItemTicketing/ScheduleItemTicketing';
import ScheduleItemIcon from '../ScheduleItemIcon/ScheduleItemIcon.Render';

const ScheduleItemContainer = styled.div`
	display: grid;
	align-items: start;
	grid-template-columns:	4.375rem 1fr;
	grid-template-areas:	"scheduleItemIcon		scheduleItemHeader"
							"placeholder			scheduleItemTime"
							"placeholder			scheduleItemLocation"
							"placeholder			scheduleItemTicketing"
							"placeholder			scheduleItemNote"
							"placeholder			scheduleItemAge";
	padding: 2rem 0 0 0;
`;
const ScheduleItem = ({
	device,
	product,
	svgsAll,
	venues,
	channels,
	scope,
}) => {
	let venueOrChannel;
	if (product.channels) {
		venueOrChannel = product.channels[0];
	} else if (product.venue) {
		venueOrChannel = product.venue;
	}

	return (
		<ScheduleItemContainer
			device={device}
		>
			{
				venueOrChannel &&
				venueOrChannel['icon-content'] &&
				venueOrChannel['color-token'] && (
					<ScheduleItemIcon
						content={venueOrChannel['icon-content']}
						color={venueOrChannel['color-token']}
						size="m"
						svgsAll={svgsAll}
						device={device}
					/>
				)
			}
			<ScheduleItemHeader
				scope={scope}
				device={device}
				iconSize="s"
				text={product.title}
				level={5}
				listingURL={product.listingURL}
				registrationURL={product.registrationURL}
			/>
			{
				product.ageRanges && product.ageRanges.ageRangeFormatted && (
					<ScheduleItemAges
						device={device}
						text={he.decode(product.ageRanges.ageRangeFormatted)}
					/>
				)
			}
			{
				product.venue && product.location && (
					<ScheduleItemLocation
						device={device}
						text={product.location}
						svgsAll={svgsAll}
					/>
				)
			}
			<ScheduleItemTicketing
				device={device}
				text={product.location}
				svgsAll={svgsAll}
				requiresTicket={product.requiresTicket}
			/>
		</ScheduleItemContainer>
	);
};

export default ScheduleItem;
