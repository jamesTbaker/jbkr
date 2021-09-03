import React, { useState } from 'react';
import moment from 'moment';
import he from 'he';
import styled from 'styled-components';
import Style from '../../../../services/styles';
import Collapsible from '../../../Core/Collapsible/Collapsible';
import DatePicker from '../../../Core/DatePicker/DatePicker';
import Icon from '../../../Core/Icon/Icon';

const returnDateRangeText = (startDate, endDate) => {
	if (!endDate) {
		return moment(startDate).format('MMMM D, YYYY');
	}
	const startDateMoment = moment(startDate);
	let dateRangeString = startDateMoment.format('MMMM D');
	const endDateMoment = moment(endDate);
	const yearsAreSame = startDateMoment.format('YYYY') ===
		endDateMoment.format('YYYY');
	const monthsAreSame = startDateMoment.format('M') ===
		endDateMoment.format('M');
	if (!yearsAreSame) {
		dateRangeString += `, ${startDateMoment.format('YYYY')}`;
	}
	dateRangeString += ' &ndash; ';
	if (!monthsAreSame) {
		dateRangeString += endDateMoment.format('MMMM D, YYYY');
	}
	if (monthsAreSame) {
		dateRangeString += endDateMoment.format('D, YYYY');
	}
	return dateRangeString;
};
const returnScheduleHeaderText = (device, dates) => (
	<>
			Schedule for
		<ScheduleDateTextContainer
			device={device}
		>
			{
				dates.dateUsedIsToday &&
					(
						'Today, '
					)
			}
			{`${he.decode(returnDateRangeText(dates.startDate, dates.endDate))}`}
		</ScheduleDateTextContainer>
	</>
);

const ScheduleHeaderContainer = styled.div`

	${({ device, scope }) => scope === 'day' && device.screen.width.match(/^(s|xs)$/) && `
		display: grid;
		grid-template-areas:	"datePickerControl"
								"text";
	`}
	${({ device, scope }) => scope === 'day' && device.screen.width.match(/^(xs)$/) && `
		padding: 2rem 0;
	`}
	${({ device, scope }) => scope === 'day' && device.screen.width.match(/^(s)$/) && `
		padding: 2rem;
	`}
	${({ device, scope }) => scope === 'day' && !device.screen.width.match(/^(s|xs)$/) && `
		display: grid;
		grid-template-columns:	3fr 1fr 1fr;
		grid-template-areas:	"text datePickerControl printButton";
		padding: 7rem;
	`}
`;
const TextContainer = styled.h2`
	grid-area: text;
	padding: 0;
	${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
		font-size: ${Style.FontSize('m', props.device.screen.width)}rem;
	`}
	${(props) => props.device.screen.width.match(/^(xs)$/) && `
		margin: 2rem 2rem 0;
	`}
	${(props) => props.device.screen.width.match(/^(s)$/) && `
		margin: 2rem 0 0 0;
	`}
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		font-size: ${Style.FontSize('l', props.device.screen.width)}rem;
		margin: 0 2rem 0 0;
	`}
`;
const DatePickerContainer = styled.div`
	grid-area: datePickerControl;
`;
const PrintButtonContainer = styled.div`
	grid-area: printButton;
	&:hover {
		transform: scale(1.02);
	}
	&:focus,
	&:active {
		transform: scale(.98);
	}
`;
const ScheduleDateTextContainer = styled.span`
	display: block;
	${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
		font-size: ${Style.FontSize('s', props.device.screen.width)}rem;
		margin: 0;
	`}
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		font-size: ${Style.FontSize('m', props.device.screen.width)}rem;
		margin: 0 2rem 0 0;
	`}
`;
const PrinterLink = styled.a`
`;
const PrinterLinkInvisibleTextContainer = styled.span`
	${Style.BlockHidden()}
`;
const PrinterLinkIconContainer = styled.span`
	display: block;
	padding: 2rem;
`;
const ReturnCollapsibleComponentPosition = ({ screen: { width } }) => (width === 'xs' || width === 's' ? 'left' : 'right');
const ReturnCollapsibleButtonWidth = ({ screen: { width } }) => (width === 'xs' ? '100%' : 'auto');
const ReturnCollapsibleButtonContentSize = ({ screen: { width } }) => (width === 'xs' ? 'm' : 'm');
const ScheduleHeader = ({
	scope,
	device,
	svgsAll,
	dates,
	controls,
}) => {
	const [collapsed, setCollapsed] = useState(true);
	return (
		<ScheduleHeaderContainer
			scope={scope}
			device={device}
		>
			<TextContainer
				device={device}
			>
				{returnScheduleHeaderText(device, dates)}
			</TextContainer>
			{
				controls && controls.datePicker && (
					<DatePickerContainer>
						<Collapsible
							button={{
								position: ReturnCollapsibleComponentPosition(device),
								width: ReturnCollapsibleButtonWidth(device),
								content: {
									text: 'Dates',
									size: ReturnCollapsibleButtonContentSize(device),
								},
							}}
							body={{
								overlay: {
									position: ReturnCollapsibleComponentPosition(device),
									screenWidths: ['s', 'm', 'l', 'xl'],
									width: 17,
									height: 20,
								},
								backgroundColor: 'bold-blue',
							}}
							svgsAll={svgsAll}
							callBack={setCollapsed}
							device={device}
						>
							<DatePicker
								scope={controls.datePicker.scope}
								dates={dates}
								focused={!collapsed}
								handler={controls.datePicker.datePickHandler}
								device={device}
								svgsAll={svgsAll}
							/>
						</Collapsible>
					</DatePickerContainer>
				)
			}
			{
				controls && controls.printButton &&
				controls.printButton.includes(device.screen.width) &&
				(
					<PrintButtonContainer>
						<PrinterLink
							href={`/daily-schedule-print?date=${dates.startDate.format('YYYY-MM-DD')}`}
						>
							<PrinterLinkInvisibleTextContainer>
								Print schedule for&nbsp;
								{`${he.decode(returnDateRangeText(dates.startDate, dates.endDate))}`}
							</PrinterLinkInvisibleTextContainer>
							<PrinterLinkIconContainer>
								<Icon
									color="bold-purple"
									size="l"
									content="icon-printer"
									device={device}
									svgsAll={svgsAll}
								/>
							</PrinterLinkIconContainer>
						</PrinterLink>
					</PrintButtonContainer>
				)
			}
		</ScheduleHeaderContainer>
	);
};

export default ScheduleHeader;
