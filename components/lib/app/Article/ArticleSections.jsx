/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleSection } from './ArticleSection';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';


const ArticleSectionsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		/* width: 75%; */
	}
`;

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
