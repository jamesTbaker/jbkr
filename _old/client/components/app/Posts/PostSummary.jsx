/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Copy } from '../../core/Copy/Copy';

const PostSummaryContainer = styled.div``;

export const PostSummary = ({ postSummary }) => (
	<PostSummaryContainer>
		<Image src={postSummary.image.url}
			alt={postSummary.image.alt}
			width={postSummary.image.width}
			height={postSummary.image.height}
			quality={100}
		/>
		<Copy
			kind="h2"
			htmlContent={postSummary.frontMatter.title}
		/>
		<Copy kind="body--standard">
			{postSummary.frontMatter.publicationDate}</Copy>
		{
			postSummary.frontMatter.tagline &&

			<Copy
				kind="body--standard"
				htmlContent={postSummary.frontMatter.tagline}
			/>
		}
		<Copy
			kind="body-container--standard"
			htmlContent={postSummary.snippetDescription}
		/>
		<Link
			href={`/library/${postSummary.frontMatter.slug}`}
		>
			Read More
		</Link>
	</PostSummaryContainer>
);
