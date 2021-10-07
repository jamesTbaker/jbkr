/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { MediaItem } from '../Media/MediaItem';
import { Copy } from '../../core/Copy/Copy';
import Link from 'next/link';

const ArticleSummaryContainer = styled.header``;

export const ArticleSummary = ({
	'content': {
		featured,
		slug,
		publicationDate,
		teaserDescription,
		teaserImages,
		title,
		tagline,
	},
}) => (
	<ArticleSummaryContainer>
		<MediaItem
			type={teaserImages.small.type}
			specs={teaserImages.small}
		/>
		<MediaItem
			type={teaserImages.large.type}
			specs={teaserImages.large}
		/>
		<Copy
			kind="h3"
			htmlContent={title}
		/>
		{
			tagline &&
			<Copy kind="body--enlarged">
				{tagline}
			</Copy>
		}
		<Copy
			kind="body--standard"
			htmlContent={teaserDescription}
		/>
		<Link
			href={`/library/${slug}`}
		>
			Read More
		</Link>

	</ArticleSummaryContainer>
);
