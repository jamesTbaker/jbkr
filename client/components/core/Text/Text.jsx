/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '@jbkr/style-service';

const TextContainer = styled.span`
	${({
		deviceWidth,
		size,
		weight,
		slant,
		usage,
	}) => style.type.style({
		deviceWidth,
		size,
		weight,
		slant,
		usage,
	})}
	color: ${({ color }) => color };
`;

export const Text = ({
	deviceWidth = 's',
	size = 's',
	weight,
	slant,
	usage,
	color,
	children,
}) => (<TextContainer
	deviceWidth={deviceWidth}
	size={size}
	weight={weight}
	slant={slant}
	usage={usage}
	color={color}
>
	{children}
</TextContainer>);
Text.propTypes = {
	'deviceWidth': PropTypes.oneOf(style.device().widths.tokens),
	'size': PropTypes.oneOf(style.type.foundation().size.tokens),
	'weight': PropTypes.oneOf(style.type.foundation().weight.tokens),
	'slant': PropTypes.oneOf(style.type.foundation().slant.tokens),
	'usage': PropTypes.oneOf(style.type.foundation().lineHeight.tokens),
	'color': PropTypes.string,
};
