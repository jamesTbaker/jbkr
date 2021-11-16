/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';

const ArticleBriefStatementContainer = styled.div``;

export const ArticleBriefStatement = ({ content }) => (
	<ArticleBriefStatementContainer>
		<Copy
			kind="small"
			htmlContent={content}
		/>
	</ArticleBriefStatementContainer>
);
