import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import styled from 'styled-components';
import PropTypes from 'prop-types';




export const VideoItem = ({ options, onReady }) => {
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
	/* return (
		<div data-vjs-player>
			<video ref={videoRef} className="video-js vjs-big-play-centered" />
		</div>
	); */
	return (
		<video ref={videoRef} className="video-js" />
	);
}
