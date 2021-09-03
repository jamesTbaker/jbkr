

// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';

// --- COMPONENT

const BodyContainer = styled.div`
	margin: 0;
	transition: padding ${StylePatterns.StandardTransitionTime()};
`;

export default (props) => (
	<div>
		<BodyContainer
			className="body-container"
			screenType={props.screenType}
		>
			{props.children}
		</BodyContainer>
	</div>
);
