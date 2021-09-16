/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { ArticleSection } from './ArticleSection';

const ArticleSectionsContainer = styled.div``;

export const ArticleSections = ({ sections }) => (
	<ArticleSectionsContainer>
		{
			sections.map((section) =>
				<ArticleSection
					key={section.sectionID}
					section={section}
				/>,
			)
		}
	</ArticleSectionsContainer>
);
