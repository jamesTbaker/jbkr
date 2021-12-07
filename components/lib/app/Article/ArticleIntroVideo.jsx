import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../..';
import { MediaItem } from '../../..';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';


const ArticleIntroVideoContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 4rem 0 3rem;
		border-top: solid .125rem ${color({
			'kind': 'Accent',
			'tone': 'Sunshine',
			'level': 1,
			'format': 'string',
		})};
	}
`;
const Sample = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
export const ArticleIntroVideo = ({ video, image }) => (
	<ArticleIntroVideoContainer>
		<MediaItem
			type={video.type}
			specs={video}
			// htmlID={`media--${mediaItem.hash}`}
		/>
	</ArticleIntroVideoContainer>
);
