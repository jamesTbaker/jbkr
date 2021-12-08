import styled from 'styled-components';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
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
	.video-js.vjs-big-play-button:focus,
	.video-js:hover .vjs-big-play-button {
		background-color: transparent;
		background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' fill='%23fcd'%3E%3Cpath fill-rule='evenodd' d='M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z'/%3E%3C/svg%3E")
	}
	.video-js .vjs-big-play-button {
		width: 88px;
		height: 88px;
		background: none;
		background-repeat: no-repeat;
		background-position: 50%;
		background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' fill='%23ff6699'%3E%3Cpath fill-rule='evenodd' d='M44 88C19.738 88 0 68.262 0 44S19.738 0 44 0s44 19.738 44 44-19.738 44-44 44zm0-85C21.393 3 3 21.393 3 44c0 22.608 18.393 41 41 41s41-18.392 41-41C85 21.393 66.607 3 44 3zm16.063 43.898L39.629 60.741a3.496 3.496 0 01-3.604.194 3.492 3.492 0 01-1.859-3.092V30.158c0-1.299.712-2.483 1.859-3.092a3.487 3.487 0 013.604.194l20.433 13.843a3.497 3.497 0 01.001 5.795zm-1.683-3.311L37.946 29.744a.49.49 0 00-.276-.09.51.51 0 00-.239.062.483.483 0 00-.265.442v27.685c0 .262.166.389.265.442.1.053.299.118.515-.028L58.38 44.414A.489.489 0 0058.6 44a.49.49 0 00-.22-.413z'/%3E%3C/svg%3E");
		border: none;
		top: 50%;
		left: 50%;
		margin-top: -44px;
		margin-left: -44px;
		color: purple
	}
	.video-js .vjs-big-play-button .vjs-icon-placeholder {
		display: none
	}
	.video-js .vjs-button>.vjs-icon-placeholder:before {
		line-height: 1.55
	}
	.video-js .vjs-control:not(.vjs-disabled):not(.vjs-time-control):hover {
		/* color: ${color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
			'format': 'string'
		})};
		text-shadow: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
			'format': 'string'
		})} 1px 0 10px; */
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
			/* category === 'component' && specs === 'HubContacts' &&
			<HubContacts /> */
		}
	</MediaItemContainer>
);
