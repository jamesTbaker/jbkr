import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { ArticleHeader } from './ArticleHeader';
import { ArticleBody } from './ArticleBody';


const ArticleContainer = styled.article`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		width: 100%;
		max-width: 180rem;
		margin: 14rem auto 0;
	}
`;
export const Article = ({
	title,
	frontMatter,
	mainContent,
}) => (
	<ArticleContainer>
		<ArticleHeader
			headImages={frontMatter.headImages}
			title={title}
			updateDate={frontMatter.updateDate}
			publicationDate={frontMatter.publicationDate}
			stats={frontMatter.stats}
			tagline={frontMatter.tagline}
		/>
		<ArticleBody
			bodyContent={mainContent}
			tableOfContents={frontMatter.tableOfContents}
		/>
	</ArticleContainer>
);
