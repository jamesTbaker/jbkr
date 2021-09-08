/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleBriefStatements } from './ArticleBriefStatements';
import { ArticleSubsections } from './ArticleSubsections';

const ArticleSectionContainer = styled.div``;

export const ArticleSection = ({ section }) => (
	<ArticleSectionContainer>
		{
			section.sectionTitle &&
			<div
				dangerouslySetInnerHTML={{'__html': section.sectionTitle}}
			/>
		}
		{
			section.sectionBriefStatements &&

			<ArticleBriefStatements
				briefStatements={section.sectionBriefStatements}
			/>
		}

		{
			section.subsections &&
			<ArticleSubsections
				subsections={section.subsections}
			/>
		}
		{
			section.sectionQuote &&
			<div
				dangerouslySetInnerHTML={{'__html': section.sectionQuote}}
			/>
		}
	</ArticleSectionContainer>
);
