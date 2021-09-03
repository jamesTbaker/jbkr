import React from 'react';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import Style from '../../../services/styles';
import { ReturnArrayOfStandardSizes } from '../../../services/config';

const Container = styled.span`
	svg {
		height: ${({ size, device }) => (`${Style.FontSize(size, device.screen.width)}rem`)};
		fill: ${({ color }) => (`${Style.Color({ token: color })}`)};
		overflow: hidden;
		vertical-align: ${({ verticalAlign }) => verticalAlign};
	}
`;
const ReturnSVGPathsFromToken = (token, svgsAll) => {
	let returnValue;
	svgsAll.forEach((svg) => {
		if (svg.token === token) {
			returnValue = svg.paths;
		}
	});
	return returnValue;
};
const Icon = ({
	content,
	color,
	size,
	svgsAll,
	device,
	transform,
	verticalAlign,
}) => {
	const svgPaths = ReturnSVGPathsFromToken(content, svgsAll);
	return (
		<Container
			color={color}
			size={size}
			device={device}
			verticalAlign={verticalAlign}
		>
			<svg 
				viewBox="0 0 48 48"
				transform={transform}
			>
				{
					svgPaths &&
					svgPaths.map((svgPath) => (
						<path
							d={svgPath}
							key={uuid()}
						/>
					))
				}
			</svg>
		</Container>
	);
};
Icon.propTypes = {
	color: PropTypes.string.isRequired,
	size: PropTypes.oneOf(ReturnArrayOfStandardSizes()).isRequired,
	content: PropTypes.string.isRequired,
	transform: PropTypes.string,
	verticalAlign: PropTypes.string,
};
Icon.defaultProps = {
	verticalAlign: 'center',
};

export default Icon;
