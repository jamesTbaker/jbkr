
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Brand from './Brand';
import StylePatterns from '../services/StylePatterns';
import ScreenSizes from '../services/ScreenSizes';



// --- COMPONENT

const FooterContainer = styled.footer`
	display: grid;
	grid-template-columns: 3rem auto;
	grid-column-gap: 1.5rem;
	padding: ${props => props.screenType === 'small' ?
		'2rem 1rem 2rem' : '2rem 5rem 2rem' };
	font-size: ${StylePatterns.FontSize('xs', 'small')};
	background-color: ${StylePatterns.Color('blue-1')};
	color: ${StylePatterns.Color('grey-9')};
`;

const BrandContainer = styled.div`
	grid-area: 1 / 1 / 2 / 2;
`;

const CopyrightContainer = styled.div`
	grid-area: 1 / 2 / 2 / 3;
`;

const VerticalAlignMiddleContainer = styled.div`
	${StylePatterns.VerticalAlignMiddle()};
`;

export default (props) => (
	<div>
		<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
			<FooterContainer
				screenType="small"
			>
				<BrandContainer>
					<VerticalAlignMiddleContainer>
						<Brand />
					</VerticalAlignMiddleContainer>
				</BrandContainer>
				<CopyrightContainer>
					<VerticalAlignMiddleContainer>
						&copy; 1999&ndash;2019, James T. Baker. All Rights Reserved.
					</VerticalAlignMiddleContainer>
				</CopyrightContainer>
			</FooterContainer>
		</MediaQuery>
		<MediaQuery
			minWidth={ScreenSizes.ReturnMediumMin()}
			maxWidth={ScreenSizes.ReturnMediumMax()}
		>
			<FooterContainer
				screenType="medium"
			>
				<BrandContainer>
					<VerticalAlignMiddleContainer>
						<Brand />
					</VerticalAlignMiddleContainer>
				</BrandContainer>
				<CopyrightContainer>
					<VerticalAlignMiddleContainer>
						&copy; 1999&ndash;2019, James T. Baker. All Rights Reserved.
					</VerticalAlignMiddleContainer>
				</CopyrightContainer>
			</FooterContainer>
		</MediaQuery>
		<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
			<FooterContainer
				screenType="large"
			>
				<BrandContainer>
					<VerticalAlignMiddleContainer>
						<Brand />
					</VerticalAlignMiddleContainer>
				</BrandContainer>
				<CopyrightContainer>
					<VerticalAlignMiddleContainer>
						&copy; 1999&ndash;2019, James T. Baker. All Rights Reserved.
					</VerticalAlignMiddleContainer>
				</CopyrightContainer>
			</FooterContainer>
		</MediaQuery>
	</div>
);
