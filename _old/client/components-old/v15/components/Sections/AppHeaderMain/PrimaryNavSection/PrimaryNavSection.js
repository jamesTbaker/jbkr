/**
 * @name Primary Navigation Section
 * @component
 * @category Navigation
 * @smart
 * @description One section of links in primary navigation.
 */

import React from 'react';
import styled from 'styled-components';
import Style from '../../../../services/styles';

let SectionBodyContainer = styled.div``;

const SectionContainer = styled.li`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			margin: 0 4rem 0 0;
			list-style: none;
			z-index: ${Style.ZIndex('header-primary-section')};
			&:hover {
				${SectionBodyContainer}  {
					height: 10rem;
					opacity: 1;
				}
			}
	`}
`;

const SectionHeaderContainer = styled.span`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			font-size: ${Style.FontSize('m', width)}rem;
	`}
`;

SectionBodyContainer = styled.div`
	${({ device: { screen: { width } } }) => (
		width === 'xl' || width === 'l' || width === 'm') && `
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: 5rem auto 0;
			max-width: 120rem;
			height: 0;
			opacity: 0;
			background-color: ${Style.Color({ token: 'white' })};
			box-shadow: -1rem -1rem ${Style.Color({ token: 'subtle-yellow' })};
			transition: height ${Style.StandardTransitionTime().stringSeconds}, opacity ${Style.StandardTransitionTime().stringSeconds};
	`}
`;

const SectionImage = styled.span`
	width: 3rem;
	height: 3rem;
	background-image:
`;

const PrimaryNavSection = ({
	device,
	section,
}) => (
	<SectionContainer
		device={device}
	>
		<SectionHeaderContainer
			device={device}
		>
			<a href={section.header.url}>
				{section.header.text}
			</a>
		</SectionHeaderContainer>
		<SectionBodyContainer
			device={device}
		>
			<SectionImage />
			This is some great content!
		</SectionBodyContainer>
	</SectionContainer>
);

export default PrimaryNavSection;
