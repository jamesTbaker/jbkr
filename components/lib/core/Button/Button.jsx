import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { ContextColorKey } from '@jbkr/models-react';
import Link from 'next/link';
import { Icon, IconNames } from '../../primitive/Icon/Icon';
import { Copy } from '../../core/Copy/Copy';
import { color, hiddenBlock } from '@jbkr/style-service';

const IconContainer = styled.span`
	${
		({ $position, $size }) => {
			let positionName = '';
			const verticalPaddingSize = $size === 'standard' ? '.5rem' : '0';
			const height = $size === 'standard' ? '3rem' : '2rem';
			if ($position === 'before') {
				positionName = 'iconBefore';
			}
			if ($position === 'after') {
				positionName = 'iconAfter';
			}
			return `
				grid-area: ${positionName};
				height: ${height};
				padding: ${verticalPaddingSize} 0;
			`
		}
	}
`;
const returnContentSize = ({ buttonSize }) => buttonSize === 'standard' ? 's' : '1xs';
const returnColors = ({ surfaceStyle, contextColor }) => {
	const colors = {
		'content': {},
		'background': {},
		'border': {},
		'focusRing': {},
		'focusRingSeparator': {},
	};
	if (
		surfaceStyle === 'filled' &&
		contextColor === 'onLight'
	) {
		colors.border.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 8,
			'format': 'string'
		});
		colors.border.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 9,
			'format': 'string'
		});
		colors.background.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 8,
			'format': 'string'
		});
		colors.background.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 9,
			'format': 'string'
		});
		colors.content.default = color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		});
		colors.content.active = colors.content.default;
	}
	if (
		surfaceStyle === 'filled' &&
		contextColor === 'onDark'
	) {
		colors.border.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 4,
			'format': 'string'
		});
		colors.border.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		});
		colors.background.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 4,
			'format': 'string'
		});
		colors.background.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 2,
			'format': 'string'
		});
		colors.content.default = color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 41,
			'format': 'string'
		});
		colors.content.active = colors.content.default;
	}
	if (
		surfaceStyle === 'outlined' ||
		surfaceStyle === 'transparent'
	) {
		colors.background.default = 'transparent';
		colors.background.active = 'transparent';
	}
	if (
		(
			surfaceStyle === 'outlined' ||
			surfaceStyle === 'transparent'
		) &&
		contextColor === 'onDark'
	) {
		colors.content.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 4,
			'format': 'string'
		});
		colors.content.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 2,
			'format': 'string'
		});
	}
	if (
		(
			surfaceStyle === 'outlined' ||
			surfaceStyle === 'transparent'
		) &&
		contextColor === 'onLight'
	) {
		colors.content.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 7,
			'format': 'string'
		});
		colors.content.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 8,
			'format': 'string'
		});
	}
	if (
		surfaceStyle === 'outlined' &&
		contextColor === 'onDark'
	) {
		colors.border.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		});
		colors.border.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 1,
			'format': 'string'
		});
	}
	if (
		surfaceStyle === 'outlined' &&
		contextColor === 'onLight'
	) {
		colors.border.default = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 6,
			'format': 'string'
		});
		colors.border.active = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 7,
			'format': 'string'
		});
	}
	if (
		surfaceStyle === 'transparent'
	) {
		colors.border.default = 'transparent';
		colors.border.active = 'transparent';
	}
	colors.focusRing = contextColor === 'onDark' ?
		color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		}) :
		color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 2,
			'format': 'string'
			});
	colors.focusRingSeparator = contextColor === 'onDark' ?
		color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 41,
			'format': 'string'
		}) :
		color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		});

	return colors;
};
const returnLabelCopyKind = ({ buttonSize }) => buttonSize === 'standard' ? 'button-label--horizontal--standard' : 'button-label--horizontal--small';
const HiddenTextContainer = styled.span`
	${hiddenBlock}
`;
const ButtonContentContainer = styled.span`
	${
		({ $textHidden, $iconBefore, $iconAfter, $size }) => {
			if (!$textHidden) {
				const paddingStatement = $size === 'standard' ?
					'padding: 1.875rem 3.875rem 1.875rem 1.875rem;' :
					'padding: .875rem  1.875rem .875rem  1.875rem;';
				if ($iconBefore && !$iconAfter) {
					return `
						display: grid;
						grid-template-columns: 2rem auto;
						grid-column-gap: .5rem;
						grid-template-areas: "iconBefore label";
						${paddingStatement}
					`;
				}
				if (!$iconBefore && $iconAfter) {
					return `
						display: grid;
						grid-template-columns: auto 2rem;
						grid-column-gap: .5rem;
						grid-template-areas: "label iconAfter";
						${paddingStatement}
					`;
				}
				if ($iconBefore && $iconAfter) {
					return `
						display: grid;
						grid-template-columns: 2rem auto 2rem;
						grid-column-gap: .5rem;
						grid-template-areas: "iconBefore label iconAfter";
						${paddingStatement}
					`;
				}
				if (!$iconBefore && !$iconAfter) {
					return `
						display: grid;
						grid-template-columns: auto;
						grid-template-areas: "label";
						${paddingStatement}
					`;
				}
			} else {
				const paddingStatement = 'padding: .375rem .875rem;';
				return `
					display: grid;
					${paddingStatement}
				`;
			}
		}
	}
	${
		({ $colors }) => `
			border-radius: .375rem;
			color: ${$colors.content.default};
			border: solid .125rem ${$colors.border.default};
			background-color: ${$colors.background.default};
			transition: all 250ms;
			&:hover {
				color: ${$colors.content.active};
				border: solid .125rem ${$colors.border.active};
				background-color: ${$colors.background.active};
				svg {
					fill: ${$colors.content.active};
				}
			}
		`
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
	iconBeforeTransform,
	iconAfterTransform,
	colors,
}) => (
	<ButtonContentContainer
		$size={size}
		$surfaceStyle={surfaceStyle}
		$contextColor={contextColor}
		$textHidden={textHidden}
		$iconBefore={iconBefore}
		$iconAfter={iconAfter}
		$colors={colors}
	>
		{
			iconBefore &&
			<IconContainer
				$size={size}
				$position="before"
			>
				<Icon
					content={iconBefore}
					color={colors.content.default}
					size={returnContentSize({ 'buttonSize': size })}
					transform={iconBeforeTransform}
				/>
			</IconContainer>
		}
		{
			!textHidden &&
			<Copy
				kind={returnLabelCopyKind({ 'buttonSize': size })}
			>
				{text}
			</Copy>
		}
		{
			textHidden &&
			<HiddenTextContainer>{text}</HiddenTextContainer>
		}
		{
			iconAfter &&
			<IconContainer
				$size={size}
				$position="after"
			>
				<Icon
					content={iconAfter}
					color={colors.content.default}
					size={returnContentSize({ 'buttonSize': size })}
					transform={iconAfterTransform}
				/>
			</IconContainer>
		}
	</ButtonContentContainer>
);
const ButtonContentComponentFacilitator = styled.span.attrs(({
	$url,
	$clickHandler,
	$colors,
}) => {
	const returnValue = {};
	if ($url && !$url.startsWith('http')) {
		returnValue.as = 'a';
	}
	if ($clickHandler) {
		returnValue.onClick = $clickHandler;
	}
	return returnValue;
})`
	display: block; width: max-content;
	${
		({ $url, $colors }) => {
			if ($url && !$url.startsWith('http')) {
				return `
					text-decoration: none;
					&:focus {
						outline: none;
						border-radius: .375rem;
						box-shadow: 0 0 0 .25rem ${$colors.focusRingSeparator}, 0 0 0 .5rem ${$colors.focusRing};
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
		iconBeforeTransform,
		iconAfterTransform,
		url,
		colors,
		clickHandler,
	},
	ref
) => (
    <ButtonContentComponentFacilitator
		onClick={onClick}
		href={href}
		ref={ref}
		$url={url}
		$contextColor={contextColor}
		$clickHandler={clickHandler}
		$colors={colors}
	>
		<ButtonContent
			size={size}
			surfaceStyle={surfaceStyle}
			contextColor={contextColor}
			text={text}
			textHidden={textHidden}
			iconBefore={iconBefore}
			iconAfter={iconAfter}
			iconBeforeTransform={iconBeforeTransform}
			iconAfterTransform={iconAfterTransform}
			colors={colors}
		/>
    </ButtonContentComponentFacilitator>
));
const ButtonElement = styled.span.attrs(({
	$clickHandler,
	$url,
	$ariaDisabled,
	$ariaExpanded,
	$ariaControls,
}) => {
	const returnValue = {};
	if ($url && !$url.startsWith('http')) {
		returnValue.as = Link;
		returnValue.href = $url;
		returnValue.passHref = true;
	}
	if ($url && $url.startsWith('http')) {
		returnValue.as = 'a';
		returnValue.href = $url;
		returnValue.target = '_blank';
		returnValue.rel = 'noopener noreferrer';
	}
	if ($clickHandler && !$url) {
		returnValue.as = 'button';
		returnValue.onClick = $clickHandler;
		if ($ariaDisabled === true) {
			returnValue['aria-disabled'] = 'true';
		}
		if ($ariaDisabled === false) {
			returnValue['aria-disabled'] = 'false';
		}
		if ($ariaExpanded === true) {
			returnValue['aria-expanded'] = 'true';
		}
		if ($ariaExpanded === false) {
			returnValue['aria-expanded'] = 'false';
		}
		if ($ariaControls) {
			returnValue['aria-controls'] = $ariaControls;
		}
	}
	return returnValue;
})`
	${
		({ $url, $contextColor }) => {
			let linkStyleStatments = '';
			const colorFocusRing = $contextColor && $contextColor === 'onLight' ?
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
				const colorFocusRingSeparator = $contextColor && $contextColor === 'onLight' ?
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 1,
						'format': 'string'
					}) :
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 41,
						'format': 'string'
					});
			if ($url && $url.startsWith('http')) {
				linkStyleStatments = 'display: block; width: max-content; text-decoration: none;';
			}
			return `
				${linkStyleStatments}
				&:focus {
					outline: none;
					border-radius: .375rem;
					box-shadow: 0 0 0 .25rem ${colorFocusRingSeparator}, 0 0 0 .5rem ${colorFocusRing};
				}
			`;
		}
	}
	${
		({ $textHidden }) => $textHidden && `display: grid;`
	}
	cursor: pointer;
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
	iconBeforeTransform,
	iconAfterTransform,
	clickHandler,
	url,
	ariaDisabled,
	ariaExpanded,
	ariaControls,
}) => (
	<ButtonElement
		$clickHandler={clickHandler}
		$url={url}
		$textHidden={textHidden}
		$ariaDisabled={ariaDisabled}
		$ariaExpanded={ariaExpanded}
		$ariaControls={ariaControls}
	>
		<ButtonRefForwarder
			size={size}
			surfaceStyle={surfaceStyle}
			contextColor={contextColor}
			text={text}
			textHidden={textHidden}
			iconBefore={iconBefore}
			iconAfter={iconAfter}
			iconBeforeTransform={iconBeforeTransform}
			iconAfterTransform={iconAfterTransform}
			url={url}
			colors={returnColors({ surfaceStyle, contextColor })}
			clickHandler={clickHandler}
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
	'contextColor': ContextColorKey,
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
	/**
	 * CSS transform, applied to icon before the text.
	 */
	'iconBeforeTransform': PropTypes.string,
	/**
	 * CSS transform, applied to icon before the text.
	 */
	'iconAfterTransform': PropTypes.string,
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
	'size': 'standard',
	'surfaceStyle': 'filled',
	'contextColor': 'onDark',
	'textHidden': false,
};
