/**
 * @name Primary Navigation - Sections
 * @component
 * @category Navigation
 * @smart
 * @description Sections of links in primary navigation.
 */

import React from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import Style from '../../../../services/styles';
import PrimaryNavSection from '../PrimaryNavSection/PrimaryNavSection';

const PrimarySectionsContainer = styled.nav`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			grid-area: primaryNavSections;
	`}
`;

const PrimarySectionsList = styled.ul`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			display: flex;
			flex-basis: auto;
			flex-direction: row;
			height: 6rem;
			padding: 0;
			margin: 0;
	`}
`;

const PrimaryNavSections = ({
	device,
	sections,
}) => (
	<PrimarySectionsContainer
		device={device}
	>
		<PrimarySectionsList
			device={device}
		>
			{/* <PrimaryNavSection
				device={device}
				section={sections[0]}
				key={nanoid()}
			/> */}
			{
				sections.map((section) => (
					<PrimaryNavSection
						device={device}
						section={section}
						key={nanoid()}
					/>
				))
			}
		</PrimarySectionsList>
	</PrimarySectionsContainer>
);

export default PrimaryNavSections;
