import { useState } from 'react';
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
const VideoPreview = styled.button.attrs(({
	$clickHandler,
}) => {
	return {
		'onClick': $clickHandler,
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 100%;
		height: 40rem;
		background-size: cover;
		border: none;
		border-radius: .375rem;
		${
			({ $image }) => `
				background-image: url('${$image.url}');
			`
		}
	}
`;
const Sample = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;

export const ArticleIntroVideo = ({ video, image }) => {
	const [
		videoVisible,
		setVideoVisible,
	] = useState(false);
	return (
		<ArticleIntroVideoContainer
			videoVisible={videoVisible}
		>
			{
				!videoVisible &&

				<VideoPreview
					$image={image}
					$clickHandler={setVideoVisible}
				/>
			}
			{
				videoVisible &&

				<MediaItem
					type={video.type}
					specs={video}
					// htmlID={`media--${mediaItem.hash}`}
				/>
			}
		</ArticleIntroVideoContainer>
	);
};
