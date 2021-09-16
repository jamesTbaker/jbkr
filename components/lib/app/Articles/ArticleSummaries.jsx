/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { MainContent } from '../Layout/MainContent';
import { ArticleSummary } from './ArticleSummary';

const ArticleSummariesContainer = styled.div`
`;

export const ArticleSummaries = ({
	featuredArticles,
	standardArticles,
}) => (
	<ArticleSummariesContainer>
		<MainContent>
			<Copy
				kind="h2"
			>
				Featured Articles
			</Copy>
			{
				featuredArticles.map((articleSummary) =>
					<ArticleSummary
						key={articleSummary.key}
						content={articleSummary}
					/>,
				)
			}
			<Copy
				kind="h2"
			>
				Standard Articles
			</Copy>
			{
				standardArticles.map((articleSummary) =>
					<ArticleSummary
						key={articleSummary.key}
						content={articleSummary}
					/>,
				)
			}
		</MainContent>
	</ArticleSummariesContainer>
);
