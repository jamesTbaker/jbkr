import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon, IconNames, Copy } from '../../primitive/Icon/Icon';
import { deviceWidthQuery, color, hiddenInline } from '@jbkr/style-service';

const ButtonContentContainer = styled.span`
	${
		({ $contextColor, $surfaceStyle }) => {
			let colorBorderDefault,
			colorBorderActive,
			colorBackgroundDefault,
			colorBackgroundActive,
			colorContentDefault,
			colorContentActive;
			if (
				$surfaceStyle === 'filled' &&
				$contextColor === 'onLight'
			) {
				colorBorderDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 8,
					'format': 'string'
				});
				colorBorderActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 9,
					'format': 'string'
				});
				colorBackgroundDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 8,
					'format': 'string'
				});
				colorBackgroundActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 9,
					'format': 'string'
				});
				colorContentDefault = color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 1,
					'format': 'string'
				});
				colorContentActive = colorContentDefault;
			}
			if (
				$surfaceStyle === 'filled' &&
				$contextColor === 'onDark'
			) {
				colorBorderDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 5,
					'format': 'string'
				});
				colorBorderActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 4,
					'format': 'string'
				});
				colorBackgroundDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 5,
					'format': 'string'
				});
				colorBackgroundActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 4,
					'format': 'string'
				});
				colorContentDefault = color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'format': 'string'
				});
				colorContentActive = colorContentDefault;
			}
			if (
				$surfaceStyle === 'outlined' ||
				$surfaceStyle === 'transparent'
			) {
				colorBackgroundDefault = 'transparent';
				colorBackgroundActive = 'transparent';
			}
			if (
				(
					$surfaceStyle === 'outlined' ||
					$surfaceStyle === 'transparent'
				) &&
				$contextColor === 'onDark'
			) {
				colorContentDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 5,
					'format': 'string'
				});
				colorContentActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 4,
					'format': 'string'
				});
			}
			if (
				(
					$surfaceStyle === 'outlined' ||
					$surfaceStyle === 'transparent'
				) &&
				$contextColor === 'onLight'
			) {
				colorContentDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 7,
					'format': 'string'
				});
				colorContentActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 8,
					'format': 'string'
				});
			}
			if (
				$surfaceStyle === 'outlined' &&
				$contextColor === 'onDark'
			) {
				colorBorderDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 4,
					'format': 'string'
				});
				colorBorderActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 2,
					'format': 'string'
				});
			}
			if (
				$surfaceStyle === 'outlined' &&
				$contextColor === 'onLight'
			) {
				colorBorderDefault = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 6,
					'format': 'string'
				});
				colorBorderActive = color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 7,
					'format': 'string'
				});
			}
			if (
				$surfaceStyle === 'transparent'
			) {
				colorBorderDefault = 'transparent';
				colorBorderActive = 'transparent';
			}
			return `
				background-color: ${colorBackgroundDefault};
				border: solid .125rem ${colorBorderDefault};
				color: ${colorContentDefault};
				transition: all 250ms;
				border-radius: .375rem;
				&:hover {
					background-color: ${colorBackgroundActive};
					border: solid .125rem ${colorBorderActive};
					color: ${colorContentActive};
				}
			`;
		}
	}
`;
const ButtonContent = ({
	size,
	surfaceStyle,
	contextColor,
	text,
	textHidden,
	iconBefore,
	iconAfter,
}) => (
	<ButtonContentContainer
		$contextColor={contextColor}
		$surfaceStyle={surfaceStyle}
	>
		{text}
	</ButtonContentContainer>
);
const ButtonContentComponentFacilitator = styled.span.attrs(({
	url,
}) => {
	const returnValue = {};
	if (url && !url.startsWith('http')) {
		returnValue.as = 'a';
	}
	return returnValue;
})`
	${
		({ url, contextColor }) => {
			if (url && !url.startsWith('http')) {
				const colorFocusRing = contextColor && contextColor === 'onLight' ?
					color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 2,
						'format': 'string'
					}) :
					color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string'
					});
				return `
					text-decoration: none;
					&:focus {
						outline: none;
						border-radius: .25rem;
						box-shadow: 0 0 0 .125rem ${colorFocusRing};
					}
				`;
			}
		}
	}
`;
const ButtonRefForwarder = React.forwardRef((
	{
		onClick,
		href,
		size,
		surfaceStyle,
		contextColor,
		text,
		textHidden,
		iconBefore,
		iconAfter,
		url,
	},
	ref
) => (
    <ButtonContentComponentFacilitator
		onClick={onClick}
		href={href}
		ref={ref}
		url={url}
		contextColor={contextColor}
	>
		<ButtonContent
			size={size}
			surfaceStyle={surfaceStyle}
			contextColor={contextColor}
			text={text}
			textHidden={textHidden}
			iconBefore={iconBefore}
			iconAfter={iconAfter}
		/>
    </ButtonContentComponentFacilitator>
));
const ButtonElement = styled.span.attrs(({ clickHandler, url, contextColor }) => {
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
		returnValue.as = 'button';
		returnValue.onClick = clickHandler
	}
	return returnValue;
})`
	${
		({ url, contextColor }) => {
			if (url && url.startsWith('http')) {
				const colorFocusRing = contextColor && contextColor === 'onLight' ?
					color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 2,
						'format': 'string'
					}) :
					color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string'
					});
				return `
					text-decoration: none;
					&:focus {
						outline: none;
						border-radius: .25rem;
						box-shadow: 0 0 0 .125rem ${colorFocusRing};
					}
				`;
			}
		}
	}
	background-color: transparent;
	border: none;
	padding: 0;
	${
		({ clickHandler, contextColor }) => {
			if (clickHandler) {
				const colorFocusRing = contextColor && contextColor === 'onLight' ?
					color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 2,
						'format': 'string'
					}) :
					color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string'
					});
				return `
					&:focus {
						outline: none;
						border-radius: .25rem;
						box-shadow: 0 0 0 .125rem ${colorFocusRing};
					}
				`;
			}
		}
	}

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
	<ButtonElement
		clickHandler={clickHandler}
		url={url}
		contextColor={contextColor}
	>
		<ButtonRefForwarder
			size={size}
			surfaceStyle={surfaceStyle}
			contextColor={contextColor}
			text={text}
			textHidden={textHidden}
			iconBefore={iconBefore}
			iconAfter={iconAfter}
			url={url}
		/>
	</ButtonElement>
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
