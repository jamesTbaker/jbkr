import React from 'react';
import styled from 'styled-components';
import Style from '../../../services/styles';

const LoadFailureContainer = styled.div`
	font-size: ${(props) => (`${Style.FontSize('xl', props.device.screen.width)}rem`)};
	padding: 5rem;
	text-align: center;
	color: ${Style.Color({ token: 'bold-purple' })};
`;
const LoadFailureDecorativeTextContainer = styled.span`
	font-size: ${(props) => (`${Style.FontSize('xxxl', props.device.screen.width)}rem`)};
	display: block;
	color: ${Style.Color({ token: 'bold-pink' })};
`;
const LoadFailure = ({
	device,
}) => (
	<LoadFailureContainer
		device={device}
	>
		<LoadFailureDecorativeTextContainer
			device={device}
		>
			Oops!
		</LoadFailureDecorativeTextContainer>
		We can't show you this right now.
	</LoadFailureContainer>
);

export default LoadFailure;
