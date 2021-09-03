
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';

const SkillRatingVisualizationContainer = styled.span`
	grid-area: skillVisualization;
	position: relative;
	&:before {
		display: block;
		position: absolute;
		top: .7rem;
		content: '';
		width: 100%;
		height: .8rem;
		background-color: ${StylePatterns.Color('blue-3')};
	}
	&:after {
		display: block;
		position: absolute;
		top: .7rem;
		content: '';
		width: 	${({ level }) => level && `${level}0%`};
		height: .8rem;
		background-color: ${StylePatterns.Color('blue-9')};
	}
`;

const SkillRatingVisualizationTextContainer = styled.span`
	${StylePatterns.BlockHidden()}
`;
const returnExpertiseText = (level) => (`: ${level}0% expertise`);

const SkillRatingVisualization = ({
	level,
	screenType,
}) => (
	<SkillRatingVisualizationContainer
		level={level}
		screenType={screenType}
	>
		<SkillRatingVisualizationTextContainer>
			{returnExpertiseText(level)}
		</SkillRatingVisualizationTextContainer>
	</SkillRatingVisualizationContainer>
);

export default SkillRatingVisualization;
