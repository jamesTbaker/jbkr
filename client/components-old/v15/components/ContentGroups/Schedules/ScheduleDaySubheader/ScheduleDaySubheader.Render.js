import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

const ScheduleDaySubheaderContainer = styled.span`
	display: inline-block;
	font-size: ${(props) => (`${Style.FontSize('s', props.device.screen.width)}rem`)};
	font-weight: ${Style.FontWeight('bold')};
	color: ${Style.Color({ token: 'grey-17' })};
`;

const ScheduleDaySubheader = ({
	device,
	text,
}) => (
	<ScheduleDaySubheaderContainer
		device={device}
	>
		{text}
	</ScheduleDaySubheaderContainer>
);

export default ScheduleDaySubheader;
