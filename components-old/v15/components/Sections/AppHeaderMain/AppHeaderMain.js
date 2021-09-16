/**
 * @name App Header Main
 * @component
 * @category Core
 * @smart
 * @description Header of main app / site.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PrimaryNavBrand from './PrimaryNavBrand/PrimaryNavBrand';
import PrimaryNavSections from './PrimaryNavSections/PrimaryNavSections';
import SecondaryNav from './SecondaryNav/SecondaryNav';
import TertiaryNavAndSearch from './TertiaryNavAndSearch/TertiaryNavAndSearch';

const AppHeaderContainer = styled.header`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			position: relative;
			display: grid;
			align-items: start;
			grid-template-columns:	44rem 1fr 1 fr;
			grid-template-areas:	"tertiaryNavAndSearch	tertiaryNavAndSearch	tertiaryNavAndSearch"
									"primaryNavBrand		primaryNavSections		secondaryNav";
	`}
	${({ device: { screen: { width } } }) => (
		width === 'xs' || width === 's') && `
			position: relative;
			display: grid;
			align-items: start;
			grid-template-columns:	44rem 1fr 1 fr;
			grid-template-areas:	"tertiaryNavAndSearch	tertiaryNavAndSearch	tertiaryNavAndSearch"
									"primaryNavBrand		primaryNavSections		secondaryNav";
	`}
`;

const AppHeaderMain = ({
	device,
	svgsAll,
	allSections,
	hours,
}) => (
	<AppHeaderContainer
		device={device}
	>
		<PrimaryNavBrand
			device={device}
		/>
		<PrimaryNavSections
			device={device}
			sections={allSections.primarySections}
		/>
		<SecondaryNav
			device={device}
			links={allSections.secondaryLinks}
			svgsAll={svgsAll}
			hours={hours}
		/>
		<TertiaryNavAndSearch
			device={device}
			links={allSections.tertiaryLinks}
		/>
	</AppHeaderContainer>
);

AppHeaderMain.propTypes = {
	allSections: PropTypes.shape({
		primarySections: PropTypes.arrayOf(PropTypes.object),
		secondaryLinks: PropTypes.arrayOf(PropTypes.object),
		tertiaryLinks: PropTypes.arrayOf(PropTypes.object),
	}),
	hours: PropTypes.shape({
		open: PropTypes.bool,
		openingTimeFormatted: PropTypes.string,
		closingTimeFormatted: PropTypes.string,
	}),
};

export default AppHeaderMain;
