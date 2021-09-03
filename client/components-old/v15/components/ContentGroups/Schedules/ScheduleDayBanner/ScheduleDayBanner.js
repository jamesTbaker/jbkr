import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';
import Icon from '../../../Core/Icon/Icon';

const ScheduleDayBannerContainer = styled.div`
	${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
		padding: 3rem;
	`}
	${(props) => !props.device.screen.width.match(/^(s|xs)$/) && `
		padding: 7rem;
	`}
	font-size: ${(props) => (`${Style.FontSize('s', props.device.screen.width)}rem`)};
	color: ${Style.Color({ token: 'white' })};
	background-color: ${Style.Color({ token: 'bold-purple' })};
`;
const ScheduleDayBannerHeader = styled.h3`
	display: flex;
	font-size: ${(props) => (`${Style.FontSize('2', props.device.screen.width)}rem`)};
	font-weight: ${Style.FontWeight('bold')};
	margin-bottom: 3rem;
	text-transform: uppercase;
	&:after {
		content: '';
		flex-grow: 1;
		max-width: 60rem;
		margin-left: 1.25rem;
		border-bottom: solid .25rem ${Style.Color({ token: 'grey-8' })};
		${(props) => props.device.screen.width.match(/^(s|xs)$/) && `
			margin-bottom: 1rem;
		`}
		${(props) => props.device.screen.width === 'm' && `
			margin-bottom: 1rem;
		`}
		${(props) => props.device.screen.width.match(/^(l|xl)$/) && `
			margin-bottom: ${((Style.FontSize('2', props.device.screen.width) / 2) + 0.25)}rem;
		`}
	}
`;
const MessageContainer = styled.div`
	display: flex;
`;
const IconContainer = styled.div`
	padding-right: 1rem;
`;
const ScheduleDayBanner = ({
	hours,
	svgsAll,
	device,
}) => (
	<ScheduleDayBannerContainer
		device={device}
	>
		<ScheduleDayBannerHeader
			device={device}
		>
			Announcements
		</ScheduleDayBannerHeader>
		<MessageContainer>
			<IconContainer>
				<Icon
					color="primary-blue"
					size="m"
					content="icon-bell"
					svgsAll={svgsAll}
					device={device}
				/>
			</IconContainer>
			<div>
				{hours.exceptionMessage}
			</div>
		</MessageContainer>
	</ScheduleDayBannerContainer>
);

export default ScheduleDayBanner;
