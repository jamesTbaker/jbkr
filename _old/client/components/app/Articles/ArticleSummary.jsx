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
		teaserImage,
		title,
		tagline,
	},
}) => (
	<ArticleSummaryContainer>
		<MediaItem
			type={teaserImage.type}
			specs={teaserImage}
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
