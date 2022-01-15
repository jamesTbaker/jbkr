import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleSection } from './ArticleSection';
import { deviceWidthQuery } from '@jbkr/style-service';


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
