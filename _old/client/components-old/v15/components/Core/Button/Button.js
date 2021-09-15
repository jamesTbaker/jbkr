/**
 * @name Button
 * @component
 * @category Ingredients
 * @smart
 * @description Button.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Surface from '../Surface/Surface';
import Style from '../../../services/styles';
import { ReturnArrayOfStandardSizes } from '../../../services/config';

const ReturnSurfaceDisplay = ({ content: { hideText, icon: { content } } }) => (
	!hideText && content ? 'gridColumns' : null
);
const ReturnElevation = (container) => (
	typeof (container.elevation) === 'undefined' ?
		// eslint-disable-next-line no-use-before-define
		Button.defaultProps.container.elevation :
		container.elevation
);
const ReturnBorderSize = ({ 
	clipped,
	content: { size },
}) => {
	if (clipped) {
		return 0;
	}
	if (size === 'xs' || size === 's' || size === 'm') {
		return 0.25;
	}
	return 0.5;
};
const ReturnPaddingObject = ({
	clipped,
	content: { size }, 
	device: { screen: { width } }, 
}) => {
	if (clipped) {
		return {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
		};
	}
	// determine border size so we can account for it later
	const borderSize = ReturnBorderSize({ content: { size } });
	// start with a base of font size in rem
	const fontSize = Style.FontSize(size, width);
	// define total amounts of horizontal and vertical padding from font size, minus two borders
	const totalPaddingVertical = fontSize;
	const totalPaddingHorizontal = fontSize * 2;
	// return padding object, halving the totals for each side; round up any floats
	return {
		top: Math.ceil(totalPaddingVertical * 0.5) - borderSize,
		right: Math.ceil(totalPaddingHorizontal * 0.5) - borderSize,
		bottom: Math.ceil(totalPaddingVertical * 0.5) - borderSize,
		left: Math.ceil(totalPaddingHorizontal * 0.5) - borderSize,
	};
};
const ReturnVisibleTextContainerHorizontalPadding =
	({ content: { size, icon: { position } }, device: { screen: { width } } }) => {
		let returnValue;
		if (size && position && width) {
			if (position === 'before') {
				returnValue = 'padding-left: ';
			}
			if (position === 'after') {
				returnValue = 'padding-right: ';
			}
			if (position === 'before' || position === 'after') {
				returnValue += `${Style.FontSize(size, width) * 0.5}rem;`;
			}
		}
		return returnValue;
	};
const Container = styled.button.attrs(({ container }) => {
	if (container.attributes) {
		const returnValue = {};
		if (typeof (container.attributes.id) !== 'undefined') {
			returnValue.id = container.attributes.id;
		}
		if (typeof (container.attributes['aria-expanded']) !== 'undefined') {
			returnValue['aria-expanded'] = container.attributes['aria-expanded'];
		}
		if (typeof (container.attributes['aria-controls']) !== 'undefined') {
			returnValue['aria-controls'] = container.attributes['aria-controls'];
		}
		return returnValue;
	}
	return null;
})`
	border: 0;
	padding: 0;
	background-color: transparent;
	${({ container: { width } }) => (typeof (width) === 'number' && `width: ${width}rem`)};
	${({ container: { width } }) => (typeof (width) === 'string' && `width: ${width}`)};
	${({ container: { margin } }) => (typeof (margin) === 'number' && `margin: ${margin}rem`)};
	${({ container: { margin } }) => (typeof (margin) === 'object' && `margin: ${margin.top}rem ${margin.right}rem ${margin.bottom}rem ${margin.left}rem`)};
	cursor: pointer;
	${({ container: { zIndex } }) => `z-index: ${zIndex}`};
`;
const IconContainer = styled.span`
	${({ icon: { rotation } }) => (rotation && `transform: rotate(${rotation}deg);`)};
	transition: transform ${Style.StandardTransitionTime()}ms ease-in-out;
`;
const VisibleTextContainer = styled.span`
	font-size: ${({ content: { size }, device: { screen: { width } } }) => (`${Style.FontSize(size, width)}rem`)};
	line-height: ${({ content: { size }, device: { screen: { width } } }) => (`${Style.LineHeightImmediate(size, width)}rem`)};
	font-weight: normal;
	${({ content, device }) => ReturnVisibleTextContainerHorizontalPadding({ content, device })}
	align-self: center;
`;
const InvisibleTextContainer = styled.span`
	${Style.InlineHidden()}
`;
const Button = ({
	container,
	content,
	svgsAll,
	clickHandler,
	interactive,
	device,
	clipped,
}) => (
	<Container
		container={container}
		onClick={clickHandler}
		role="button"
	>
		<Surface
			base={{
				width: container.width,
				padding: content.padding || ReturnPaddingObject({
					clipped,
					content: {
						size: (content.size || Button.defaultProps.content.size),
					},
					device,
				}),
				elevation: ReturnElevation(container),
				backgroundColor:
					(container.backgroundColor || Button.defaultProps.container.backgroundColor),
				borderColor: (container.borderColor || Button.defaultProps.container.borderColor),
				borderSize: ReturnBorderSize({ clipped, content }),
				display: content.icon && ReturnSurfaceDisplay({ content }),
			}}
			content={{
				color: (content.color || Button.defaultProps.content.color),
				size: (content.size || Button.defaultProps.content.size),
				textAlign: (content.textAlign || Button.defaultProps.content.textAlign),
			}}
			interactive={interactive}
			tabindex="0"
			device={device}
		>
			{
				content.icon && content.icon.content &&
				content.icon.position && content.icon.position === 'before'

				&& (
					<IconContainer
						icon={content.icon}
					>
						<Icon
							color={content.icon.color}
							size={(content.icon.size || Button.defaultProps.content.icon.size)}
							svgsAll={svgsAll}
							content={content.icon.content}
							device={device}
							transform={content.icon.transform}
							verticalAlign={content.icon.verticalAlign}
						/>
					</IconContainer>
				)
			}
			{
				!content.hideText

				&& (
					<VisibleTextContainer
						content={{
							size: (content.size || Button.defaultProps.content.size),
							icon: {
								position: Button.defaultProps.content.icon.position,
								...content.icon,
							},
						}}
						device={device}
					>
						{content.text}
					</VisibleTextContainer>
				)
			}
			{
				content.hideText

				&& <InvisibleTextContainer>{content.text}</InvisibleTextContainer>
			}
			{
				content.icon && content.icon.content &&
				(!content.icon.position || content.icon.position !== 'before')

				&& (
					<IconContainer
						icon={content.icon}
					>
						<Icon
							color={(content.color || Button.defaultProps.content.color)}
							size={(content.size || Button.defaultProps.content.size)}
							content={content.icon.content}
							svgsAll={svgsAll}
							device={device}
						/>
					</IconContainer>
				)
			}
		</Surface>
	</Container>
);
Button.propTypes = {
	/** The three dimensional surface and its margin */
	container: PropTypes.shape({
		elevation: PropTypes.number,
		backgroundColor: PropTypes.string,
		borderColor: PropTypes.string,
		width: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		margin: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.shape({
				top: PropTypes.number,
				right: PropTypes.number,
				bottom: PropTypes.number,
				left: PropTypes.number,
			}),
		]),
		attributes: PropTypes.shape({
			id: PropTypes.string,
			'aria-expanded': PropTypes.bool,
			'aria-controls': PropTypes.string,
		}),
	}),
	/** The text and icon in the button */
	content: PropTypes.shape({
		color: PropTypes.string,
		text: PropTypes.string.isRequired,
		hideText: PropTypes.bool,
		size: PropTypes.oneOf(ReturnArrayOfStandardSizes()),
		icon: PropTypes.shape({
			position: PropTypes.oneOf([
				'before', 'after',
			]),
			color: PropTypes.string,
			content: PropTypes.string,
			transform: PropTypes.string,
			size: PropTypes.string,
			verticalAlign: PropTypes.string,
		}),
		textAlign: PropTypes.string,
	}),
	svgsAll: PropTypes.arrayOf(PropTypes.object),
	/** Reference to function executed when button is clicked. E.g., () => handleClick(...params). */
	clickHandler: PropTypes.func,
};
Button.defaultProps = {
	container: {
		elevation: 6,
		backgroundColor: 'bold-pink',
		borderColor: 'transparent',
	},
	content: {
		color: 'white',
		size: 'm',
		icon: {
			position: 'after',
		},
		textAlign: 'left',
	},
};

export default Button;
