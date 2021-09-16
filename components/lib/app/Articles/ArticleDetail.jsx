/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Copy } from '../../core/Copy/Copy';
import { ArticleHeader } from './ArticleHeader';
import { ArticleIntro } from './ArticleIntro';
import { ArticleSections } from './ArticleSections';

export const ArticleDetail = ({
	title,
	frontMatter,
	mainContent,
}) => (
	<article>
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
);
