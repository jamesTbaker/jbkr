import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleSection } from './ArticleSection';
import { deviceWidthQuery } from '@jbkr/style-service';


const ArticleSectionsContainer = styled.div``;

export const ArticleUnifiedBody = ({ parts }) => (
	<ArticleUnifiedBodyContainer>
		<Copy
			kind="copy-container--standard"
			htmlContent={mainContent.simpleBody}
		/>
	</ArticleUnifiedBodyContainer>
);
