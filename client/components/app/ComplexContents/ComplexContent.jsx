/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Image from 'next/image';
import { Copy } from '../../core/Copy/Copy';
import { TableOfContents }
	from '../TableOfContents/TableOfContents';

const ComplexContentContainer = styled.div``;

export const Post = ({
	image,
	frontMatter,
	body,
}) => (
	<ComplexContentContainer>
		<Image src={image.url}
			alt={image.alt}
			width={image.width}
			height={image.height}
			quality={100}
		/>
		<Copy
			kind="small"
			htmlContent={image.credit}
		/>
		<Copy
			kind="small"
			htmlContent={image.caption}
		/>
		<Copy
			kind="h1"
			htmlContent={frontMatter.title}
		/>
		<Copy kind="body--standard">{frontMatter.publicationDate}</Copy>
		<Copy kind="body--standard">
			{`${frontMatter.stats.words} words |
		${frontMatter.stats.minutes} minutes to read`}
		</Copy>
		{
			frontMatter.tagline &&

			<Copy
				kind="body--standard"
				htmlContent={frontMatter.tagline}
			/>
		}
		{
			frontMatter.tableOfContents &&

			<TableOfContents
				contents={frontMatter.tableOfContents}
			/>
		}
		<Copy
			kind="body-container--standard"
			htmlContent={body}
		/>
	</ComplexContentContainer>
);
