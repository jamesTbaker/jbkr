import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import 'videojs-youtube';
import styled from 'styled-components';
import { color } from '@jbkr/style-service';
import PropTypes from 'prop-types';

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
		border-radius: .375rem;
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
export const VideoItem = ({
	videoURL,
	videoType,
	posterURL,
	onReady,
}) => {
	// compose options object from props and defaults
	const options = {
		'fluid': true,
		'responsive': true,
		'controls': true,
		'sources': [{
			'src': videoURL,
		}],
		'poster': posterURL,
	};
	if (videoType === 'video/youtube') {
		options.sources[0].type = videoType;
		options.techOrder = ['youtube'];
		options.youtube = {
			'ytControls': 0,
			'modestbranding': 1,
		};
	} else {
		options.sources[0].type = `video/${videoType}`;
	}
	// generate two refs
	const videoRef = React.useRef(null);
	const playerRef = React.useRef(null);
	// initialize and configure the video player
	React.useEffect(() => {
		// if there's no player element
		if (!playerRef.current) {
			// try to get the video element; video is set up with videoRef below
			const videoElement = videoRef.current;
			// stop everything if there's no video element
			if (!videoElement) return;
			// initialize a configured player from the video element
			// 		and get references to it
			const player = playerRef.current = videojs(
				videoElement,
				options,
				() => {
					onReady && onReady(player);
				}
			);
		} else {
			// here, update player through props; e.g.,
			//		const player = playerRef.current;
			//		player.autoplay(options.autoplay);
			//		player.src(options.sources);
		}
	}, [options, videoRef]);
	// Dispose the Video.js player when the functional component unmounts
	React.useEffect(() => {
		// try to get a reference to the player
		const player = playerRef.current;
		return () => {
			// if we got a reference to the player
			if (player) {
				// dispose of the player
				player.dispose();
				// unset the ref
				playerRef.current = null;
			}
		};
	}, [playerRef]);
	return (
		<VideoItemContainer>
			<video
				ref={videoRef}
				className="video-js"
			/>
		</VideoItemContainer>
	);
}
