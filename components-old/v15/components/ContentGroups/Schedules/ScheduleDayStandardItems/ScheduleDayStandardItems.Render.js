import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import Style from '../../../../services/styles';
import ScheduleTimeSlot from '../ScheduleTimeSlot/ScheduleTimeSlot.Render';

const NoticeContainer = styled.div`
	padding: 2rem;
	font-size: ${({ device }) => (`${Style.FontSize('s', device.screen.width)}rem`)};
	background-color: ${Style.Color({ token: 'grey-2' })};
`;
const ScheduleDayStandardItemsContainer = styled.div`
	${({ scope, device }) => scope === 'day' && device.screen.width.match(/^(s|xs)$/) && `
		margin: 0 3rem;
	`}
	${({ scope, device }) => scope === 'day' && !device.screen.width.match(/^(s|xs)$/) && `
		padding: 0 7rem 7rem;
	`}
`;

const ScheduleDayStandardItems = ({
	dates,
	products,
	hours,
	svgsAll,
	venues,
	channels,
	notices,
	device,
	scope,
}) => (
	<ScheduleDayStandardItemsContainer
		scope={scope}
		device={device}
	>
		{
			// if notices; date is today; open but no online or onsite products remaining
			(
				notices &&
					dates.dateUsedIsToday &&
					hours.open && (
					!products ||
						typeof (products.standardProducts) === 'undefined' ||
						Object.keys(products.standardProducts).length === 0 ||
						typeof (products.type) === 'undefined' ||
						(
							products.type !== 'online' &&
							products.type !== 'onsite'
						)
				)
			) && (
				<NoticeContainer
					device={device}
				>
						We have nothing more scheduled today, but you can&nbsp;
					<a href="/mos-at-home">
							explore our online resources at MOSatHome
					</a>
					&nbsp;any time.
				</NoticeContainer>
			)
		}
		{
			// if notices; date is not today; open but no online or onsite products
			(
				notices &&
					!dates.dateUsedIsToday &&
					hours.open && (
					!products ||
						typeof (products.standardProducts) === 'undefined' ||
						Object.keys(products.standardProducts).length === 0 ||
						typeof (products.type) === 'undefined' ||
						(
							products.type !== 'online' &&
							products.type !== 'onsite'
						)
				)
			) && (
				<NoticeContainer
					device={device}
				>
						Currently, nothing is scheduled for this day. Check back! In the meantime,&nbsp;
					<a href="/mos-at-home">
							explore our online resources at MOSatHome
					</a>
					.
				</NoticeContainer>
			)
		}
		{
			// if notices; closed and no online or onsite products
			(
				notices &&
					!hours.open && (
					!products ||
						typeof (products.standardProducts) === 'undefined' ||
						Object.keys(products.standardProducts).length === 0 ||
						typeof (products.type) === 'undefined' ||
						(
							products.type !== 'online' &&
							products.type !== 'onsite'
						)
				)
			) && (
				<NoticeContainer
					device={device}
				>
						The Museum of Science is closed today, but you can&nbsp;
					<a href="/mos-at-home">
							explore our online resources at MOSatHome
					</a>
					&nbsp;any time.
				</NoticeContainer>
			)
		}
		{
			// if notices; open or closed, online products but no onsite products
			notices &&
				products &&
				typeof (products.standardProducts) !== 'undefined' &&
				products.type &&
				products.type === 'online' &&
				(
					<NoticeContainer
						device={device}
					>
						These online offerings are available only through&nbsp;
						<a href="/mos-at-home">
							MOSatHome
						</a>
					.
					</NoticeContainer>
				)
		}
		{
			// if there are standard products
			products &&
				typeof (products.standardProducts) !== 'undefined' && (
				Object.keys(products.standardProducts).map((scheduleTimeKey) => (
					<ScheduleTimeSlot
						scope={scope}
						device={device}
						svgsAll={svgsAll}
						venues={venues}
						channels={channels}
						startTimeFormatted={
							products.standardProducts[scheduleTimeKey].startTimeFormatted
						}
						productsThisTime={products.standardProducts[scheduleTimeKey].productsThisTime}
						key={uuid()}
					/>
				))
			)
		}
	</ScheduleDayStandardItemsContainer>
);

export default ScheduleDayStandardItems;
