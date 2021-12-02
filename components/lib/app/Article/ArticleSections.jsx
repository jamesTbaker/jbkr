/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleSection } from './ArticleSection';

const ArticleSectionsContainer = styled.div``;

export const ArticleSections = ({ sections }) => (
	<ArticleSectionsContainer>
		<Copy
			kind="copy-container--standard"
		>
			{
				sections.map((section) =>
					<ArticleSection
						key={section.sectionID}
						section={section}
					/>,
				)
			}
		</Copy>
	</ArticleSectionsContainer>
);
