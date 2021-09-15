
// ----- IMPORTS

import * as React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';

// ----- COMPONENT

const BrandContainer = styled.div`
	color: ${StylePatterns.Color('blue-12')};

	rect.brand--rectangle {
		fill:${StylePatterns.Color('blue-5')};
	}
	polygon.brand--temptation {
		fill: ${StylePatterns.Color('yellow-1')};
	}
	g.brand--letterforms-container path {
		fill: ${StylePatterns.Color('blue-8')};
	}
`;
const Brand = props => (
	<BrandContainer className="sb-root--brand">
		<svg className="brand" version="1.1" x="0px" y="0px" viewBox="0 0 1259 500">
			<g className="brand--rectangle-container">
				<rect className="brand--rectangle" width="500" height="500"/>
			</g>
			<g className="brand--letterforms-container">
				<path d="M660.32,153.95v209.53c0,42.91-25.21,63.86-69.67,63.08c-2.71-0.13-5.43,0-8.92-0.26v-38.13
					c2.58,0.13,4.39,0.26,6.72,0.26c17.97,0,25.08-8.92,25.08-25.59V153.95H660.32z M609.65,100.43c0-14.09,12.15-25.46,27.14-25.46
					c14.87,0,27.02,11.38,27.02,25.46c0,13.96-12.15,25.33-27.02,25.33C621.8,125.77,609.65,114.39,609.65,100.43z"/>
				<path d="M710.47,87.76h46.79v99.01h1.94c7.11-14.35,21.72-35.42,56.75-35.42c45.89,0,81.95,35.93,81.95,102.12
					c0,65.41-35.03,102.5-81.82,102.5c-34.12,0-49.51-20.29-56.87-34.77h-2.71v31.28h-46.02V87.76z M803.03,317.59
					c30.89,0,47.18-27.14,47.18-64.37c0-36.97-16.03-63.47-47.18-63.47c-30.12,0-46.66,24.95-46.66,63.47S773.17,317.59,803.03,317.59
					z"/>
				<path d="M937.86,87.76h46.79V233.7h3.23l71.35-79.75h54.68l-76.91,85.7l81.44,112.85h-55.97l-60.75-84.92
					l-17.06,18.23v66.7h-46.79V87.76z"/>
				<path d="M1144.94,153.95h45.37v33.09h2.07c7.24-23.01,26.11-35.93,48.99-35.93c10.73,0,19.65,2.84,26.63,7.24
					l-14.48,38.78c-5.04-2.33-10.86-4.14-18.48-4.14c-24.43,0-43.3,17.71-43.3,42.79v116.72h-46.79V153.95z"/>
			</g>
			<polygon className="brand--temptation" points="239.68,75 290.42,295.15 260.32,425 209.58,204.85 	"/>
		</svg>
	</BrandContainer>
);
export default Brand;
