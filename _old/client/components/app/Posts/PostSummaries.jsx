/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { PostSummary } from './PostSummary';

const PostsContainer = styled.div``;

export const PostSummaries = ({ postSummaries }) => (
	<PostsContainer>
		{
			postSummaries.map((postSummary) => <PostSummary
				postSummary={{
					'image': {
						'url': postSummary.coverImage.url,
						'alt': postSummary.coverImage.alternativeText,
						'width': postSummary.coverImage.width,
						'height': postSummary.coverImage.height,
					},
					'frontMatter': {
						'slug': postSummary.slug,
						'title': postSummary.title,
						'publicationDate': postSummary.publicationDate,
						'tagline': postSummary.tagline,
					},
					'snippetDescription': postSummary.snippetDescription,
				}}
				key={postSummary.ID}
			/>)
		}
	</PostsContainer>
);
