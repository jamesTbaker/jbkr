import styled from 'styled-components';
import {
	deviceWidthQuery, color, motion, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { VideoItem } from './VideoItem';
import { HubLogotype } from '../Hub/HubLogotype';
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

	/* .video-js .vjs-button>.vjs-icon-placeholder:before {
		line-height: 1.55
	}
	.video-js .vjs-control:not(.vjs-disabled):not(.vjs-time-control):hover {
		color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})};
	}
	.video-js .vjs-control-bar {
		height: 6rem;
		background: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 34,
			'format': 'string'
		})};
		padding: 1rem;
	}
	.video-js .vjs-play-control {
		font-size: .8em
	}
	.video-js .vjs-play-control .vjs-icon-placeholder:before {
		background-color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})};
		height: 1.5em;
		width: 1.5em;
		margin-top: .2em;
		border-radius: 1em;
		color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})}
	}
	.video-js .vjs-play-control:hover .vjs-icon-placeholder:before {
		background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
			'format': 'string'
		})};
		color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})}
	}
	.video-js .vjs-mute-control {
		display: none
	}
	.video-js .vjs-volume-panel {
		margin-left: .5em;
		margin-right: .5em;
		padding-top: .3em
	}
	.video-js .vjs-volume-bar.vjs-slider-horizontal,
	.video-js .vjs-volume-panel,
	.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active,
	.video-js .vjs-volume-panel.vjs-volume-panel-horizontal:hover,
	.video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal,
	.video-js .vjs-volume-panel:hover,
	.video-js .vjs-volume-panel:hover .vjs-volume-control.vjs-volume-horizontal {
		width: 3em
	}
	.video-js .vjs-volume-level:before {
		font-size: 1em
	}
	.video-js .vjs-volume-panel .vjs-volume-control {
		opacity: 1;
		width: 100%;
		height: 100%
	}
	.video-js .vjs-volume-bar {
		background-color: transparent;
		margin: 0
	}
	.video-js .vjs-slider-horizontal .vjs-volume-level {
		height: 100%
	}
	.video-js .vjs-volume-bar.vjs-slider-horizontal {
		margin-top: 0;
		margin-bottom: 0;
		height: 100%
	}
	.video-js .vjs-volume-bar:before {
		content: "";
		z-index: 0;
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: 0;
		border-left: 3em solid transparent;
		border-bottom: 2em solid ${color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
			'format': 'string'
		})};
		border-right: 0 solid transparent;
		border-top: 0 solid transparent
	}
	.video-js .vjs-volume-level {
		overflow: hidden;
		background-color: transparent
	}
	.video-js .vjs-volume-level:before {
		content: "";
		z-index: 1;
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: 0;
		border-left: 3em solid transparent;
		border-bottom: 2em solid ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})};
		border-right: 0 solid transparent;
		border-top: 0 solid transparent
	}
	.video-js .vjs-progress-control:hover .vjs-progress-holder {
		font-size: 1em
	}
	.video-js .vjs-play-progress:before {
		display: none
	}
	.video-js .vjs-progress-holder {
		border-radius: .2em;
		height: .5em;
		margin: 0
	}
	.video-js .vjs-load-progress,
	.video-js .vjs-load-progress div,
	.video-js .vjs-play-progress {
		border-radius: .2em
	} */
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
			<HubLogotype />
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
