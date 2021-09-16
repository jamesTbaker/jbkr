/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { TableOfContents }
	from '../TableOfContents/TableOfContents';

const ArticleAsideContainer = styled.div``;

export const ArticleAside = ({ tableOfContents }) => (
	<ArticleAsideContainer>
		{
			tableOfContents &&

			<>
				<Copy
					kind="h2"
					id="table-of-contents"
				>Table of Contents</Copy>
				<TableOfContents
					contents={tableOfContents}
				/>
			</>
		}
	</ArticleAsideContainer>
);
