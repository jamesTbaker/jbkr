
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

// STYLED COMPONENTS

const SubsectionHeader = styled.h3`
	${StylePatterns.BlockHidden()}
`;
const BriefContainer = styled.div`
	grid-area: brief;
	${props => props.screenType === 'medium' && `
		margin-bottom: 2rem;
	`}
	${props => props.screenType === 'large' && `
		margin-bottom: 5rem;
	`}
`;
const BriefStatementsContainer = styled.div`
	${props => props.screenType === 'small' && `
		padding: 0 0 0 1rem;
		border-left: .2rem solid ${StylePatterns.Color('blue-4')};
	`}
	${props => props.screenType === 'medium' && `
		column-count: 3;
		column-gap: 2rem;
	`}
	${props => props.screenType === 'large' && `
		column-count: 5;
		column-gap: 2rem;
	`}
`;
const BriefStatementGroupContainer = styled.div`
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType !== 'small' && `
		display: inline-block;
		padding: 0 3rem 0 1rem;
		border-left: .2rem solid ${StylePatterns.Color('blue-4')};

		p:last-child {
			margin-bottom: 0;
		}
	`}
`;
const BriefStatement = styled.p`
	${props => props.screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('s', 'small')};
	`}
	${props => props.screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('s', 'medium')};
	`}
	${props => props.screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('s', 'large')};
	`}
`;

// CONTENTS
const returnHtml = (html) => ({ __html: `${html}` });

export default (props) => (
	<BriefContainer
		screenType={props.screenType}
	>
		<SubsectionHeader>Brief</SubsectionHeader>
		<BriefStatementsContainer
			screenType={props.screenType}
		>
			{
				props.areas.map((areaObject, areaIndex) => (

					<BriefStatementGroupContainer
						key={shortid.generate()}
						screenType={props.screenType}
						gridArea={areaObject.area}
					>
						{
							areaObject.statements.map((statementValue, statementIndex) => (
							
								<BriefStatement
									key={shortid.generate()}	
									screenType={props.screenType}
									dangerouslySetInnerHTML={
										returnHtml(statementValue)
							}

								/>
							))
						}
					</BriefStatementGroupContainer>
				))
			}
		</BriefStatementsContainer>
	</BriefContainer>
);
