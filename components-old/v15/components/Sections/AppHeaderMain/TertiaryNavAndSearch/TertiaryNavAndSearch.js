/**
 * @name Tertiary Nav
 * @component
 * @category Core
 * @smart
 * @description Tertiary navigation.
 */

import React from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes, { oneOf } from 'prop-types';
import Style from '../../../../services/styles';

const TertiaryNavContainer = styled.nav`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			grid-area: tertiaryNavAndSearch;
			display: flex;
			justify-content: flex-end;
			font-size: ${Style.FontSize('s', width)}rem;
			font-weight: ${Style.FontWeight('bold')};
			background-color: ${Style.Color('grey-12')};
			padding: 2.5rem 4rem;
	`}
`;
const TertiaryLinkAnchor = styled.a`
	margin-left: 5rem;
`;
const TertiaryNav = ({
	device,
	links,
}) => (
	<TertiaryNavContainer
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
					<TertiaryLinkAnchor
						key={nanoid()}
						href={url}
						target={
							link['new-tab'] && link['new-tab'] === 'Yes' ?
								'_blank' :
								'_self'
						}
					>
						{link.text}
					</TertiaryLinkAnchor>
				);
			})
		}
	</TertiaryNavContainer>
);

TertiaryNav.propTypes = {
	links: PropTypes.arrayOf(PropTypes.shape({
		'file-url': PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.string),
		]),
		url: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.string),
		]),
		text: PropTypes.string,
		'icon-position': PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.arrayOf(PropTypes.string),
		]),
		'make-button': PropTypes.string,
		'new-tab': PropTypes.string,
	})),
};

export default TertiaryNav;
