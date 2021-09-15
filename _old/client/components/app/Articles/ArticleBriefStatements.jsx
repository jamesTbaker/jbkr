/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { ArticleBriefStatement } from './ArticleBriefStatement';

const ArticleBriefStatementsContainer = styled.div``;

export const ArticleBriefStatements = ({ briefStatements }) => (
	<ArticleBriefStatementsContainer>
		{
			briefStatements.map((briefStatement) =>
				<ArticleBriefStatement
					key={briefStatement.key}
					content={briefStatement.content}
				/>,
			)
		}
	</ArticleBriefStatementsContainer>
);
