import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableOfContentsContainer = styled.nav`
	ol {
		counter-reset: list-item;
	}
	li {
		display: block;
		counter-increment: list-item;
	}
	li:before {
		content: counters(list-item,'.') ' ';
	}
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
