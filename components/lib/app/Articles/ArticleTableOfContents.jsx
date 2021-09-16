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
const ArticleTableOfContentsContainer = styled.div`
`;
export const ArticleTableOfContents = ({
	contents,
}) => <ArticleTableOfContentsContainer>
	<h2 id="table-of-contents">Table of Contents</h2>
	<nav
		dangerouslySetInnerHTML={{
			'__html': contents,
		}}
	/>
</ArticleTableOfContentsContainer>;
