import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon, IconNames } from '../../primitive/Icon/Icon';
// import { deviceWidthQuery, color, hiddenInline } from '@jbkr/style-service';

/* const ButtonContent = React.forwardRef(({ onClick, href }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			Click Me
		</a>
	)
}); */
const ButtonElement = styled.span.attrs(({
	ref,
	onClick,
	href,
	parent,
}) => {
	const returnValue = {};
	if (parent === 'Link') {
		returnValue.as = 'a';
	}
	/* if (clickHandler && !url) {
		returnValue.onClick = clickHandler
	}
	if (url && url.startsWith('http')) {
		returnValue.as = 'a';
		returnValue.href = url;
		returnValue.target = '_blank';
		returnValue.rel = 'noopener noreferrer';
	}
	if (url && !url.startsWith('http')) {
		returnValue.as = Link;
		returnValue.href = url;
	} */
	return returnValue;
})`
`;
// background-color: transparent;
// border: none;
// padding: 0;

const ButtonContentContainer = styled.span``;

const ButtonContent = ({ text }) => (
	<ButtonContentContainer>
		{text}
	</ButtonContentContainer>
);


const ButtonElementContainer = React.forwardRef((
	{
		onClick,
		href,
		parent,
		text,
	},
	ref
) => (
    <ButtonElement
		ref={ref}
		onClick={onClick}
		href={href}
		parent={parent}
	>
		<ButtonContent
			text={text}
		/>
    </ButtonElement>
));

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
	<>
		{
			url && !url.startsWith('http') &&
			<Link href={url} passHref>
				<ButtonElementContainer
					parent="Link"
					text={text}
				/>
			</Link>
		}
		{
			url && url.startsWith('http') &&
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<ButtonElementContainer
					parent="a"
					text={text}
				/>
			</a>
		}
		{
			clickHandler && !url &&
			<button
				onClick={clickHandler}
			>
				<ButtonElementContainer
					parent="button"
					text={text}
				/>
			</button>
		}
	</>
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
