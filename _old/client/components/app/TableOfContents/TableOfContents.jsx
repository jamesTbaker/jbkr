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
const TableOfContentsContainer = styled.nav`
`;
/**
 * The TOC
 */
export const TableOfContents = ({
	contents,
}) => <TableOfContentsContainer
	dangerouslySetInnerHTML={{
		'__html': contents,
	}}
>
</TableOfContentsContainer>;
TableOfContents.propTypes = {
	/**
	 * The html content.
	 */
	'contents': PropTypes.string.isRequired,
};
