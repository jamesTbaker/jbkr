/**
 * @name Surface
 * @component
 * @category Ingredients
 * @smart
 * @description Every two-dimensional space within app.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReturnQuantityOfElevationValuesOverZero } from '../../../services/config';
import Style from '../../../services/styles';

const ReturnElevationValues = (elevationString) => {
	// start with a base value derived from incoming value
	const elevationBase = parseInt(elevationString, 10);
	// set up value to +2, unless that's over the highest elevation;
	// if so, set to highest elevation
	const elevationUp =
		(
			elevationBase + 2 > ReturnQuantityOfElevationValuesOverZero()
		) ?
			ReturnQuantityOfElevationValuesOverZero() : (elevationBase + 2);
	// set down value to -2, unless that's under 0; if so, set to 0
	const elevationDown = (elevationBase - 2 < 0) ? 0 : (elevationBase - 2);
	return {
		'base': elevationBase,
		'up': elevationUp,
		'down': elevationDown,
	};
};
const Base = styled.div`
	${({ 'base': { width } }) => (typeof (width) === 'number' && `width: ${width}rem`)};
	${({ 'base': { width } }) => (typeof (width) === 'string' && `width: ${width}`)};
	${({ 'base': { margin } }) => (typeof (margin) === 'number' && `margin: ${margin}rem`)};
	${({ 'base': { margin } }) => (typeof (margin) === 'object' && `margin: ${margin.top}rem ${margin.right}rem ${margin.bottom}rem ${margin.left}rem`)};
	${({ 'base': { backgroundColor } }) => (backgroundColor && `background-color: ${Style.Color({ 'token': backgroundColor })};`)};
	${({ 'base': { borderColor } }) => (borderColor ? `border-color: ${Style.Color({ 'token': borderColor })};` : 'border-color: transparent;')};
	${({ 'base': { elevation } }) => (elevation && `box-shadow: ${Style.Elevation(`ux-l-${elevation}`)};`)};
	border-width: ${({ 'base': { borderSize } }) => (`${borderSize}rem`)};
	border-style: solid;
	transition: all ${Style.StandardTransitionTime().stringSeconds};
	${({
	interactive, 'base': { elevation, backgroundColor, borderColor },
}) => {
		let returnValue = '';
		if (interactive) {
			returnValue += `&:hover {
				transform: scale(1.02);`;
			if (backgroundColor) {
				returnValue += `background-color: ${Style.Color({ 'token': backgroundColor, 'lighten': 1 })};`;
			}
			if (borderColor) {
				returnValue += `border-color: ${Style.Color({ 'token': borderColor, 'lighten': 1 })};`;
			}
			if (elevation) {
				returnValue += `box-shadow: ${Style.Elevation(`ux-l-${ReturnElevationValues(elevation).up}`)};`;
			}
			returnValue +=
				`}
				&:focus,
				&:active {
					transform: scale(.98);`;
			if (backgroundColor) {
				returnValue += `background-color: ${Style.Color({ 'token': backgroundColor, 'darken': 1 })};`;
			}
			if (borderColor) {
				returnValue += `border-color: ${Style.Color({ 'token': borderColor, 'darken': 1 })};`;
			}
			if (elevation) {
				returnValue += `box-shadow: ${Style.Elevation(`ux-l-${ReturnElevationValues(elevation).down}`)};`;
			}
			returnValue += '}';
		}
		return returnValue;
	}}
`;
const Content = styled.div`
	${({ 'base': { display }, 'content': { size, textAlign }, device }) => (
		display && display === 'gridColumns' &&
		`
			display: grid;
			grid-template-columns: ${Style.FontSize(size, device.screen.width)}rem auto;
			grid-auto-flow: column;
			text-align: ${textAlign || 'left'};
		`
	)};
	${({ 'base': { padding } }) => (typeof (padding) === 'number' && `padding: ${padding}rem`)};
	${({ 'base': { padding } }) => (typeof (padding) === 'object' && `padding: ${padding.top}rem ${padding.right}rem ${padding.bottom}rem ${padding.left}rem`)};
	color: ${({ 'content': { color } }) => {
		if (color) {
			return Style.Color({ 'token': color });
		}
		return Style.Color({ 'token': 'black' });
	}};
	}
	${({
		interactive, content,
	}) => {
		let returnValue = '';
		if (interactive) {
			returnValue +=
				`&:hover {
					color: ${Style.Color({ 'token': content.color, 'lighten': 1 })};
					svg {
						fill: ${Style.Color({ 'token': content.color, 'lighten': 1 })};
					};
				}`;
			returnValue +=
				`&:focus,
				&:active {
					color: ${Style.Color({ 'token': content.color, 'darken': 1 })};
					svg {
						fill: ${Style.Color({ 'token': content.color, 'darken': 1 })};
					};
				`;
		}
		return returnValue;
	}}
`;
const Surface = ({
	base,
	content,
	children,
	tabindex,
	interactive,
	device,
}) => (
	<Base
		base={base}
		interactive={interactive}
	>
		{content && (
			<Content
				content={content}
				base={base}
				interactive={interactive}
				device={device}
			>
				{children}
			</Content>
		)}
		{!content && (
			children
		)}
	</Base>
);

Surface.propTypes = {
	/** The base of the surface, or, really, the surface itself. */
	'base': PropTypes.shape({
		'elevation': PropTypes.number,
		'backgroundColor': PropTypes.string,
		'borderColor': PropTypes.string,
		'borderSize': PropTypes.number,
		'width': PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		'margin': PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.shape({
				'top': PropTypes.number,
				'right': PropTypes.number,
				'bottom': PropTypes.number,
				'left': PropTypes.number,
			}),
		]),
		'padding': PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.shape({
				'top': PropTypes.number,
				'right': PropTypes.number,
				'bottom': PropTypes.number,
				'left': PropTypes.number,
			}),
		]),
	}),
	/** The content container */
	'content': PropTypes.shape({
		'color': PropTypes.string,
		'padding': PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.shape({
				'top': PropTypes.number,
				'right': PropTypes.number,
				'bottom': PropTypes.number,
				'left': PropTypes.number,
			}),
		]),
	}),
	/** Is this surface part of an interactive element such as a button? */
	// interactive: PropTypes.bool,
};

export default Surface;
