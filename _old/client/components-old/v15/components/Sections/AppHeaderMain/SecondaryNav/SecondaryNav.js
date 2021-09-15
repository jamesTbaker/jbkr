/**
 * @name Secondary Navigation
 * @component
 * @category Navigation
 * @smart
 * @description Secondary navigation.
 */

import React from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import Style from '../../../../services/styles';
import Surface from '../../../Core/Surface/Surface';

const SecondaryNavContainer = styled.nav`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			grid-area: secondaryNav;
			display: flex;
			justify-content: flex-end;
			font-size: ${Style.FontSize('s', width)}rem;
			font-weight: ${Style.FontWeight('bold')};
	`}
`;
const SecondaryLinkAnchor = styled.a`
	margin-left: 5rem;
`;
const BigPinkButtonContainer = styled.button.attrs(({ container }) => {
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
const SecondaryNav = ({
	device,
	svgsAll,
	links,
	hours,
}) => (
	<SecondaryNavContainer
		device={device}
	>
		{
			links.map((link) => {
				let { url } = link;
				if (
					link['file-url'] &&
					typeof (link['file-url']) === 'string'
				) {
					url = link['file-url'];
				}
				return (
					<SecondaryLinkAnchor
						key={nanoid()}
						href={url}
						target={
							link['new-tab'] && link['new-tab'] === 'Yes' ?
								'_blank' :
								'_self'
						}
					>
						{link.text}
					</SecondaryLinkAnchor>
				);
			})
		}
		{/* The big pink box needs to be a button because it changes what
			happens on the screen. However, it's a very unusual button
			whose feature will likely never be used anywhere else, so
			it doesn't make sense to shoehorn it into the Button
			component
		 */}
		<BigPinkButtonContainer
			id="button--reveal-daily-schedule"
			container={{
				margin: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 5,
				},
			}}
		>
			<Surface
				base={{
					elevation: 0,
					backgroundColor: 'bold-pink',
					borderColor: 'bold-pink',
					borderSize: 0,
					padding: 2,
				}}
				content={{
					color: 'white',
				}}
			>
				Exhibit Halls Open&nbsp;
				{hours.openingTimeFormatted}
				&nbsp;&ndash;&nbsp;
				{hours.closingTimeFormatted}
			</Surface>
		</BigPinkButtonContainer>

	</SecondaryNavContainer>
);

SecondaryNav.propTypes = {
	allSections: PropTypes.shape({
		primarySections: PropTypes.arrayOf(PropTypes.object),
	}),
	hours: PropTypes.shape({
		open: PropTypes.bool,
		openingTimeFormatted: PropTypes.string,
		closingTimeFormatted: PropTypes.string,
	}),
};

export default SecondaryNav;
