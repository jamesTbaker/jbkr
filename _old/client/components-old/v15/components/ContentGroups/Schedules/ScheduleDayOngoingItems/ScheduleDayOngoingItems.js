import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
// import PropTypes from 'prop-types';
import ScheduleItemTicketing from '../ScheduleItemTicketing/ScheduleItemTicketing';
import Icon from '../../../Core/Icon/Icon';
import Style from '../../../../services/styles';

const OngoingItemsContainer = styled.div`
	${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
		padding: 4rem 3rem 2rem;
	`}
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:	"top top"
								"midLeft midRight"
								"bottomLeft bottomRight";
		padding: 7rem 7rem 5rem 7rem;
	`}
`;
const OngoingItemsHeader = styled.h3`
	grid-area: top;
	display: flex;
	font-size: ${({ device }) => (`${Style.FontSize('s', device.screen.width)}rem`)};
	font-weight: ${Style.FontWeight('bold')};
	${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
		margin-bottom: 2rem;
	`}
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		margin-bottom: 2rem;
	`}
	&:after {
		content: '';
		flex-grow: 1;
		margin-left: 1.25rem;
		border-bottom: solid .25rem ${Style.Color({ token: 'grey-8' })};
		${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
			margin-bottom: 1rem;
		`}
		${(props) => props.device.screen.width === 'm' && `
			margin-bottom: 1rem;
		`}
		${(props) => props.device.screen.width.match(/^(l|xl)$/) && `
			margin-bottom: 1rem;
		`}
	}
`;
const OngoingItemContainer = styled.div`
	${(props) => props.device.screen.width.match(/^(s|xs)$/) && props.gridArea && `
		padding: 0 0 2rem 0;
	`}
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && props.gridArea && `
		grid-area: ${props.gridArea};
		&:nth-child(even) {
			padding: 0 1rem 2rem 0;
		}
		&:nth-child(odd) {
			padding: 0 0 2rem 1rem;
		}
	`}
	display: flex;
`;
const OngoingItemsTitle = styled.h4`
	margin: 0;
	${({ device }) => `font-size: ${Style.FontSize('m', device.screen.width)}rem;`}
`;
const OngoingItemsIconContainer = styled.span`
`;
const OngoingItemsTextContainer = styled.span`
	padding-left: 1rem;
`;
const OngoingItemsPrimaryNote = styled.p`
	font-weight: ${Style.FontWeight('semi-bold')};
	margin: 0;
`;
const OngoingItemsSecondaryNote = styled.p`
	margin: 0;
`;
const ReturnVenueFromShortName = (shortName, venues) => {
	let returnValue = {
		'color-token': null,
		'icon-content': null,
	};
	venues.forEach((venue) => {
		if (venue['short-name'] === shortName) {
			returnValue = venue;
		}
	});
	return returnValue;
};
const ScheduleDayOngoingItems = ({
	hours,
	products,
	svgsAll,
	venues,
	device,
}) => (
	<OngoingItemsContainer
		device={device}
	>
		<OngoingItemsHeader
			device={device}
		>
				ONGOING
		</OngoingItemsHeader>
		<OngoingItemContainer
			gridArea="midLeft"
			device={device}
		>
			<OngoingItemsIconContainer>
				<Icon
					color={ReturnVenueFromShortName('Exhibits', venues)['color-token']}
					size="m"
					content={ReturnVenueFromShortName('Exhibits', venues)['icon-content']}
					svgsAll={svgsAll}
					device={device}
				/>
			</OngoingItemsIconContainer>
			<OngoingItemsTextContainer>
				<OngoingItemsTitle
					device={device}
				>
					<a href="/visit/admission">Exhibit Halls</a>
				</OngoingItemsTitle>
				{
					hours.open && (
						<>
							<OngoingItemsPrimaryNote
								device={device}
							>
								{hours.openingTimeFormatted}
								&nbsp;&ndash;&nbsp;
								{hours.closingTimeFormatted}
							</OngoingItemsPrimaryNote>
							<OngoingItemsSecondaryNote
								device={device}
							>
									Timed entry every 15 minutes
							</OngoingItemsSecondaryNote>
						</>
					)
				}
				{
					!hours.open && (
						<OngoingItemsPrimaryNote
							device={device}
						>
								Closed all day
						</OngoingItemsPrimaryNote>
					)
				}
			</OngoingItemsTextContainer>
		</OngoingItemContainer>
		<OngoingItemContainer
			gridArea="midRight"
			device={device}
		>
			<OngoingItemsIconContainer>
				<Icon
					color="bold-purple"
					size="m"
					content="icon-mos-at-home"
					svgsAll={svgsAll}
					device={device}
				/>
			</OngoingItemsIconContainer>
			<OngoingItemsTextContainer>
				<OngoingItemsTitle
					device={device}
				>
					<a href="/mos-at-home-schedule">MOSatHome</a>
				</OngoingItemsTitle>
				<OngoingItemsPrimaryNote
					device={device}
				>
						Check our schedule of online events
				</OngoingItemsPrimaryNote>
			</OngoingItemsTextContainer>
		</OngoingItemContainer>
		{
			products && products.summarizedVenues &&
				products.summarizedVenues['Special Exhibits'] &&
				products.summarizedVenues['Special Exhibits'].products &&
				products.summarizedVenues['Special Exhibits'].products.earliestProduct &&
				products.summarizedVenues['Special Exhibits'].products.latestProduct &&
				products.summarizedVenues['Special Exhibits'].products.earliestProduct.startTime &&
				products.summarizedVenues['Special Exhibits'].products.latestProduct.startTime && (
				<OngoingItemContainer
					gridArea="bottomLeft"
					device={device}
				>
					<OngoingItemsIconContainer>
						<Icon
							color={ReturnVenueFromShortName('Exhibits', venues)['color-token']}
							size="m"
							content={ReturnVenueFromShortName('Exhibits', venues)['icon-content']}
							svgsAll={svgsAll}
							device={device}
						/>
					</OngoingItemsIconContainer>
					<OngoingItemsTextContainer>
						<OngoingItemsTitle
							device={device}
						>
							<a href="/exhibits/the-science-behind-pixar">The Science Behind Pixar</a>
						</OngoingItemsTitle>
						<OngoingItemsPrimaryNote
							device={device}
						>
							{moment(`${moment().format('YYYY-MM-DD')}T${products.summarizedVenues['Special Exhibits'].products.earliestProduct.startTime}:00`).format('h:mm a')}
							&nbsp;&ndash;&nbsp;
							{moment(`${moment().format('YYYY-MM-DD')}T${products.summarizedVenues['Special Exhibits'].products.latestProduct.startTime}:00`).format('h:mm a')}
						</OngoingItemsPrimaryNote>
						<OngoingItemsSecondaryNote
							device={device}
						>
								Timed entry every 10 minutes
						</OngoingItemsSecondaryNote>
						<ScheduleItemTicketing
							device={device}
							text="Special Exhibits"
							svgsAll={svgsAll}
							requiresTicket
						/>
					</OngoingItemsTextContainer>
				</OngoingItemContainer>
			)
		}
	</OngoingItemsContainer>
);
export default ScheduleDayOngoingItems;
