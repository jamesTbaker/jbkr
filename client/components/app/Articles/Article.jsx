/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Image from 'next/image';
import { Copy } from '../../core/Copy/Copy';
import { TableOfContents }
	from '../TableOfContents/TableOfContents';

const ArticleContainer = styled.div``;

export const Article = ({
	frontMatter,
	mainContent,
}) => (
	<ArticleContainer>
		{
			frontMatter.headImage &&
			<Image src={frontMatter.headImage.url}
				alt={frontMatter.headImage.alternativeText}
				width={frontMatter.headImage.width}
				height={frontMatter.headImage.height}
				quality={100}
			/>
		}
		{
			frontMatter.headImage && frontMatter.headImage.credit &&
			<Copy
				kind="small"
				htmlContent={frontMatter.headImage.credit}
			/>
		}
		{
			frontMatter.headImage && frontMatter.headImage.caption &&
			<Copy
				kind="small"
				htmlContent={frontMatter.headImage.caption}
			/>
		}
		<Copy
			kind="h1"
			htmlContent={frontMatter.title}
		/>
		{
			frontMatter.updateDate &&
			<Copy kind="body--standard">
				{`Updated: ${frontMatter.updateDate}`}
			</Copy>
		}
		<Copy kind="body--standard">
			{`Published: ${frontMatter.publicationDate}`}
		</Copy>
		<Copy kind="body--standard">
			{frontMatter.stats}
		</Copy>
		{/* {
			frontMatter.tagline &&

			<Copy
				kind="body--standard"
				htmlContent={frontMatter.tagline}
			/>
		} */}
		{
			frontMatter.tableOfContents &&

			<TableOfContents
				contents={frontMatter.tableOfContents}
			/>
		}
		{
			mainContent.simpleBody &&
			<Copy
				kind="body-container--standard"
				htmlContent={mainContent.simpleBody}
			/>
		}
	</ArticleContainer>
);
