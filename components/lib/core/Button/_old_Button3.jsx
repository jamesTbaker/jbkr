import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon, IconNames } from '../../primitive/Icon/Icon';
import { deviceWidthQuery, color, hiddenInline } from '@jbkr/style-service';

const ButtonContentContainer = styled.span``;
const ButtonContent = ({ text }) => (
	<ButtonContentContainer>
		{text}
	</ButtonContentContainer>
);
const ButtonElementContainer = styled.span.attrs(({
	ref,
	onClick,
	href,
	clickHandler,
	url,
}) => {
	const returnValue = {};
	if (url && !url.startsWith('http')) {
		returnValue.as = 'a';
	}
	return returnValue;
})`
`;
const ButtonElementInner = React.forwardRef((
	{
		onClick,
		href,
		clickHandler,
		url,
		text,
	},
	ref
) => (
    <ButtonElementContainer
		ref={ref}
		onClick={onClick}
		href={href}
		clickHandler={clickHandler}
		url={url}
	>
		<ButtonContent
			text={text}
		/>
    </ButtonElementContainer>
));
const ButtonElementOuter = styled.button.attrs(({ clickHandler, url }) => {
	const returnValue = {};
	if (url && !url.startsWith('http')) {
		returnValue.as = Link;
		returnValue.href = url;
		returnValue.passHref = true;
	}
	if (url && url.startsWith('http')) {
		returnValue.as = 'a';
		returnValue.href = url;
		returnValue.target = '_blank';
		returnValue.rel = 'noopener noreferrer';
	}
	if (clickHandler && !url) {
		returnValue.onClick = clickHandler
	}
	return returnValue;
})`
	background-color: transparent;
	border: none;
	padding: 0;
`;

/**
 * Button
 */
export const Button = ({
	size,
	surfaceStyle,
	contextColor,
	text,
	textHidden,
	iconBefore,
	iconAfter,
	clickHandler,
	url,
}) => (
	<ButtonElementOuter
		clickHandler={clickHandler}
		url={url}
	>
		<ButtonElementInner
			clickHandler={clickHandler}
			url={url}
			text={text}
		/>
	</ButtonElementOuter>
);

Button.propTypes = {
	/**
	 * The size of the button.
	 */
	'size': PropTypes.oneOf(['standard', 'small']),
	/**
	 * Whether the button should be filled, only outlined, or fully transparent.
	 */
	'surfaceStyle': PropTypes.oneOf(['filled', 'outlined', 'transparent']),
	/**
	 * Whether the button appears on a light or dark background.
	 */
	'contextColor': PropTypes.oneOf(['onDark', 'onLight']),
	/**
	 * The text characters describing the button's function.
	 */
	'text': PropTypes.string.isRequired,
	/**
	 * Whether or not to hide the text.
	 */
	'textHidden': PropTypes.bool,
	/**
	 * Which, if any, icon to place before the text.
	 */
	'iconBefore': PropTypes.oneOf(IconNames),
	/**
	 * Which, if any, icon to place after the text.
	 */
	'iconAfter': PropTypes.oneOf(IconNames),
	/** Function executed when button is clicked.
	 * E.g., () => { // do something }.
	 */
	'clickHandler': PropTypes.func,
	/**
	 * The URL to which to navigate. If `url` is supplied, then, instead of a
	 * button, we'll render a link and `clickHandler` will be ignored.
	 */
	'url': PropTypes.string,
};
Button.defaultProps = {
	size: 'standard',
	surfaceStyle: 'filled',
	contextColor: 'onDark',
	textHidden: false,
};
