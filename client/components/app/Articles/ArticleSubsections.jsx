/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { ArticleSubsection } from './ArticleSubsection';

const ArticleSubsectionsContainer = styled.div``;

export const ArticleSubsections = ({ subsections }) => (
	<ArticleSubsectionsContainer>
		{
			subsections.map((subsection) =>
				<ArticleSubsection
					key={subsection.subsectionID}
					content={subsection}
				/>,
			)
		}
	</ArticleSubsectionsContainer>
);
