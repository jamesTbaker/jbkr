import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

const ScheduleDayHeaderContainer = styled.div`
	font-size: ${(props) => (`${Style.FontSize('m', props.device.screen.width)}rem`)};
	color: ${(props) => (Style.Color({ token: 'bold-aqua' }))};
`;

const ScheduleDayHeader = ({
	device,
	level,
	text,
}) => (
	<ScheduleDayHeaderContainer
		as={`h${level}`}
		device={device}
	>
		{text}
	</ScheduleDayHeaderContainer>
);

export default ScheduleDayHeader;
