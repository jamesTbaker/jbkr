import styled from 'styled-components';
import {
	deviceWidthQuery, color, motion, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { VideoItem } from './VideoItem';
import { HubLogos } from '../Hub/HubLogos';
import { HubColorPreview } from '../Hub/HubColorPreview';
import { HubPrivate } from '../Hub/HubPrivate';
import { HubContacts } from '../Hub/HubContacts';


const MediaItemContainer = styled.div``;
const VideoItemContainer = styled.div`
	border-radius: .375rem;
	overflow: hidden;
	.video-js {
		color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})};
	}
	.video-js .vjs-big-play-button {
		top: 50%;
		left: 50%;
		width: 10rem;
		height: 8rem;
		font-size: 5rem;
		margin-top: -4rem;
		margin-left: -5rem;
		background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 34,
			'alpha': .9,
			'format': 'string'
		})};
		border-radius: .375rem;
		border: .25rem solid ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})};
		transition: color 250ms ease, border-color 250ms ease, background-color 250ms ease;
	}
	.video-js.vjs-big-play-button:focus,
	.video-js:hover .vjs-big-play-button {
		color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 2,
			'format': 'string'
		})};
		border-color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 2,
			'format': 'string'
		})};
		background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 37,
			'alpha': .9,
			'format': 'string'
		})};
	}
	.video-js .vjs-control-bar {
		height: 5rem;
		padding: .5rem;
		background: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 39,
			'alpha': .9,
			'format': 'string'
		})};
	}
	.video-js .vjs-remaining-time {
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
			'format': 'string'
		})};
	}
	.video-js .vjs-control {
		height: 4rem;
	}
	.video-js .vjs-control:focus:before,
	.video-js .vjs-control:hover:before,
	.video-js .vjs-control:focus {
		text-shadow: none;
		outline: none;
		padding: 0 .5rem;
		margin: 0 .25rem;
		border-radius: .25rem;
		box-shadow: 0 0 0 .25rem ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 41,
			'format': 'string'
		})}, 0 0 0 .5rem ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
			})};
	}
	.video-js .vjs-slider:focus {
		text-shadow: none;
		box-shadow: none;
	}
`;
export const MediaItem = ({
	category,
	specs,
}) => (
	<MediaItemContainer>
		{
			category === 'image' &&
			<Image
				src={specs.url}
				alt={specs.alternativeText}
				width={specs.width}
				height={specs.height}
				quality={100}
			/>
		}
		{

			category === 'video' &&
			<VideoItemContainer>
				<VideoItem
					options={{
						'controls': true,
						'responsive': true,
						'fluid': true,
						'sources': [{
							'src': specs.video.url,
							'type': `video/${specs.video.type}`
						}],
						'poster': specs.poster && specs.poster.url ?
							specs.poster.url : null,
					}}
				/>
			</VideoItemContainer>
		}
		{
			category === 'component' && specs === 'HubLogos' &&
			<HubLogos />
		}
		{
			category === 'component' && specs === 'HubPrivate' &&
			<HubPrivate />
		}
		{
			category === 'component' && specs === 'HubColorPreview' &&
			<HubColorPreview />
		}
		{
			category === 'component' && specs === 'HubContacts' &&
			<HubContacts />
		}
	</MediaItemContainer>
);
