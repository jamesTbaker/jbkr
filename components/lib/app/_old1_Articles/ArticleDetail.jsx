/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleHeader } from './ArticleHeader';
import { ArticleIntro } from './ArticleIntro';
import { ArticleSections } from './ArticleSections';

const ArticleContainer = styled.article`
	margin-top: 20rem;
`;

export const ArticleDetail = ({
	title,
	frontMatter,
	mainContent,
}) => (
	<ArticleContainer>
		<ArticleHeader
			headImage={frontMatter.headImage}
			title={title}
			updateDate={frontMatter.updateDate}
			publicationDate={frontMatter.publicationDate}
			stats={frontMatter.stats}
			tagline={frontMatter.tagline}
		/>
		<ArticleIntro
			briefStatements={frontMatter.briefStatements}
			introText={frontMatter.introText}
			introVideo={frontMatter.introVideo}
		/>
		{
			mainContent.simpleBody &&

			<Copy
				kind="copy-container--standard"
				htmlContent={mainContent.simpleBody}
			/>
		}
		{
			mainContent.sections &&

			<ArticleSections
				sections={mainContent.sections}
			/>
		}
	</ArticleContainer>
);
