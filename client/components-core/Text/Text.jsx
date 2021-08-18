// import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Style } from '../../services/styles';
import { style } from 'style-service';
// const TextContainer = styled.span`
// 	font-size: ${Style.FontSize('xxxl', 'large')}rem;
// `;
const TextContainer = styled.span`
	color: ${style.color.string(
		{ 'color': style.color.props().Accent.OnLight.Secondary.Iris },
	)};
`;

export const Text = ({ children }) => <TextContainer>{children}</TextContainer>;


/* // ${({}) => style.type.style({})};

const TextContainer = styled.span`
	${({
	deviceWidth,
	size,
	weight,
	slant,
	usage,
}) => style.type.style(
	deviceWidth,
	size,
	weight,
	slant,
	usage,
)};
`;
export const Text = ({
	deviceWidth = 's',
	size = 's',
	weight,
	slant,
	usage,
	children
}) =>
	// <TextContainer
	// 	deviceWidth={deviceWidth}
	// 	size={size}
	// 	weight={weight}
	// 	slant={slant}
	// 	usage={usage}
	// >
	// 	{children}
	// </TextContainer>;
	<>
		{children}
	</>;
 */
