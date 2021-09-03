import React from 'react';
import styled from 'styled-components';
import Style from '../../../services/styles';

const SpinnerContainer = styled.div`
	width: ${(props) => props.container.width};
	height: ${(props) => props.container.height};
	background-color: ${(props) => props.container.backgroundColor};
`;
const SpinnerElement = styled.div`
	position: relative;
	width: ${(props) => props.orbit.diameter};
	height: ${(props) => props.orbit.diameter};
	border: ${(props) => props.orbit.thickness} solid ${(props) => props.orbit.color};
	border-radius: 50%;
	margin: 0 auto;
	top: calc(50% - ((${(props) => props.orbit.diameter} + (${(props) => props.orbit.thickness} * 2)) / 2));

	animation: loader-rotate ${(props) => props.orbit.duration} linear infinite;
	@keyframes loader-rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	&:after {
		position: absolute;
		content: '';
		width: calc(${(props) => props.orbit.diameter} - (0.82 * ${(props) => props.orbit.diameter}));
		height: calc(${(props) => props.orbit.diameter} - (0.82 * ${(props) => props.orbit.diameter}));
		border-radius: 50%;
		background: ${(props) => props.electron.color};
		top: calc((-${(props) => props.orbit.thickness} - (${(props) => props.orbit.diameter} - (0.87 * ${(props) => props.orbit.diameter}) / 2) + (${(props) => props.orbit.thickness} / 2)) + 50%);
		left: 50%;
		margin-left: calc(-1 * ((${(props) => props.orbit.diameter} - (0.82 * ${(props) => props.orbit.diameter})) / 2));
	}
`;
const Spinner = ({
	electron = {
		color: Style.Color({ token: 'bold-pink' }),
	},
	orbit = {
		color: Style.Color({ token: 'primary-blue' }),
		diameter: '100px',
		thickness: '3px',
		duration: '1s',
	},
	container = {
		width: '100%',
		height: '60vh',
		backgroundColor: 'transparent',
	},
}) => (
	<SpinnerContainer
		container={container}
	>
		<SpinnerElement
			electron={electron}
			orbit={orbit}
		/>
	</SpinnerContainer>
);

export default Spinner;
