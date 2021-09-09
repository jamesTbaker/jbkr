/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { MainContent } from '../Regions/MainContent';
import { Aside } from '../Regions/Aside';
import { ArticleHeader } from './ArticleHeader';
import { ArticleIntro } from './ArticleIntro';
import { ArticleSections } from './ArticleSections';
import { ArticleAside } from './ArticleAside';

const ArticleScreenContainer = styled.div`
`;

export const ArticleScreen = ({
	frontMatter,
	mainContent,
}) => (
	<ArticleScreenContainer>
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
	</ArticleScreenContainer>
);
