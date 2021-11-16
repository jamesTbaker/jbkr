/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { MainContent } from '../Layout/MainContent';
import { ArticleSummary } from './ArticleSummary';

const ArticleSummariesContainer = styled.div`
`;

export const ArticleSummaries = ({
	title,
	articles,
}) => (
	<ArticleSummariesContainer>
		<MainContent>
			<Copy
				kind="h1"
				htmlContent={title}
			/>
			<Copy
				kind="h2"
			>
				Featured Articles
			</Copy>
			{
				articles.featured.map((articleSummary) =>
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
				articles.standard.map((articleSummary) =>
					<ArticleSummary
						key={articleSummary.key}
						content={articleSummary}
					/>,
				)
			}
		</MainContent>
	</ArticleSummariesContainer>
);
