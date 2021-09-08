/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Image from 'next/image';
import { Copy } from '../../core/Copy/Copy';

const ArticleHeaderContainer = styled.header``;

export const ArticleHeader = ({
	headImage,
	title,
	updateDate,
	publicationDate,
	stats,
	tagline,
}) => (
	<ArticleHeaderContainer>
		{
			headImage &&
			<Image src={headImage.url}
				alt={headImage.alternativeText}
				width={headImage.width}
				height={headImage.height}
				quality={100}
			/>
		}
		{
			headImage && headImage.credit &&
			<Copy
				kind="small"
				htmlContent={headImage.credit}
			/>
		}
		{
			headImage && headImage.caption &&
			<Copy
				kind="small"
				htmlContent={headImage.caption}
			/>
		}
		<Copy
			kind="h1"
			htmlContent={title}
		/>
		{
			updateDate &&
			<Copy kind="body--standard">
				{`Updated: ${updateDate}`}
			</Copy>
		}
		<Copy kind="body--standard">
			{`Published: ${publicationDate}`}
		</Copy>
		<Copy kind="body--standard">
			{stats}
		</Copy>
		{
			tagline &&
			<Copy
				kind="body--standard"
				htmlContent={tagline}
			/>
		}
	</ArticleHeaderContainer>
);
