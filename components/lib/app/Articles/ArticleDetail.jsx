/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { MainContent } from '../Layout/MainContent';
import { Aside } from '../Layout/Aside';
import { ArticleHeader } from './ArticleHeader';
import { ArticleIntro } from './ArticleIntro';
import { ArticleSections } from './ArticleSections';
import { ArticleAside } from './ArticleAside';

const ArticleDetailContainer = styled.div`
`;

export const ArticleDetail = ({
	frontMatter,
	mainContent,
}) => (
	<ArticleDetailContainer>
		<MainContent>
			<article>
				<ArticleHeader
					headImage={frontMatter.headImage}
					title={frontMatter.title}
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
						kind="body-container--standard"
						htmlContent={mainContent.simpleBody}
					/>
				}
				{
					mainContent.sections &&

					<ArticleSections
						sections={mainContent.sections}
					/>
				}
			</article>
			<Aside>
				<ArticleAside
					tableOfContents={frontMatter.tableOfContents}
				/>
			</Aside>
		</MainContent>
	</ArticleDetailContainer>
);
