import PropTypes from 'prop-types';
import styled from 'styled-components';
/* 	ol {
		counter-reset: list-item;
	}
	li {
		display: block;
		counter-increment: list-item;
	}
	li:before {
		content: counters(list-item,'.') ' ';
	}
 */
const ArticleTableOfContentsContainer = styled.nav`
`;
/**
 * The TOC
 */
export const ArticleTableOfContents = ({
	contents,
}) => <ArticleTableOfContentsContainer
	dangerouslySetInnerHTML={{
		'__html': contents,
	}}
>
</ArticleTableOfContentsContainer>;
ArticleTableOfContents.propTypes = {
	/**
	 * The html content.
	 */
	'contents': PropTypes.string.isRequired,
};
