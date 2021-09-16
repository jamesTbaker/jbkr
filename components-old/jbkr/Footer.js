
// ----- IMPORTS

import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Brand from './Brand';
import StylePatterns from '../services/StylePatterns';

// --- COMPONENT

const FooterContainer = styled.footer`
	
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "footerLeft footerRight";
	`}
	font-size: ${StylePatterns.FontSize('xs', 'small')};
	color: ${StylePatterns.Color('grey-9')};
	border-top: .2rem solid ${StylePatterns.Color('blue-3')};

	${props => props.screenType === 'small' && `
		margin: 5rem 2rem 0 2rem;
	`}
	${props => props.screenType === 'medium' && `
		margin: 5rem 5rem 0 5rem;
	`}
	${props => props.screenType === 'large' && `
		margin: 5rem 5rem 0 25rem;
	`}
`;
const BrandContainer = styled.div`
	
	${props => props.screenType === 'small' && `
		padding: 2rem 0 0;
	`}
	${props => props.screenType === 'medium' && `
		grid-area: footerLeft;
		padding: 2rem 2rem 2rem 0;
		text-align: right;
		${StylePatterns.VerticalAlignMiddle()};
	`}
	${props => props.screenType === 'large' && `
		grid-area: footerRight;
		padding: 2rem 0 2rem 1rem;
		${StylePatterns.VerticalAlignMiddle()};
	`}

	svg.brand {
		${props => props.screenType === 'small' && `
			height: 2rem;
		`}
		${props => props.screenType === 'medium' && `
			height: 3rem;
		`}
		${props => props.screenType === 'large' && `
			height: 3rem;
		`}
	}
`;
const CopyrightContainer = styled.div`

	${props => props.screenType === 'small' && `
		padding: 0 0 2rem;
	`}
	${props => props.screenType === 'medium' && `
		grid-area: footerRight;
		padding: 2rem 0 2rem 1rem;
	`}
	${props => props.screenType === 'large' && `
		grid-area: footerLeft;
		padding: 2rem 2rem 2rem 0;
		text-align: right;
	`}
	${props => props.screenType !== 'small' && `
		p {
			${StylePatterns.VerticalAlignMiddle()};
		}
	`}
	p {
		margin: 0
	}
`;
const BrandLink = styled.a`

	${props => props.screenType !== 'small' && `
		display: inline-block;
		border: 0;

		&:hover {
			border: 0;
		}
	`}
`;

export default (props) => (
	<FooterContainer
		screenType={props.screenType}
	>
		<BrandContainer
			screenType={props.screenType}
		>
			<BrandLink
				href="/"
				screenType={props.screenType}
			>
				<Brand />
			</BrandLink>
		</BrandContainer>
		<CopyrightContainer
			screenType={props.screenType}
		>
			<p>&copy; 1999&ndash;2019, James T. Baker. All Rights Reserved.</p>
		</CopyrightContainer>
	</FooterContainer>

);
