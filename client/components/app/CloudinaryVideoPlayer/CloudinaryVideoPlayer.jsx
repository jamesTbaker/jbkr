import 'cloudinary-video-player/dist/cld-video-player.min.js';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import { Cloudinary } from 'cloudinary-core';
import { useEffect } from 'react';
const VideoPlayer = ({
	url,
	credit,
	alternativeText,
}) => {

	// https://res.cloudinary.com/jbkrcdn/video/upload/v1630585827/hub_bumper_intro_437bf83939.mp4


	// extract Cloudinary cloud name from URL
	const protocolFlag = '//';
	const protocolIndex = url.indexOf(protocolFlag);
	const urlSansProtocol = url.slice(protocolIndex + protocolFlag.length);

	// create and configure a Cloudinary instance with your cloud name
	const CloudinaryClient = new Cloudinary({
		'cloud_name': process.env.cloudinaryCloudName,
	});
	/* Configure the Cloudinary instance with an ID (required by the SDK of
		the Cloudinary Video Player), mute the player, activate the controls,
		and specify the source. */
	useEffect(() => {
		const videoPlayer = CloudinaryClient.videoPlayer('video-player', {
			'muted': true,
			'controls': true,
		});
		videoPlayer.source(videoID);
	});
	// returns a native HTML <video> element with the video-player instance
	return (
		<div>
			<video id="video-player" />
		</div>
	);
};
export default VideoPlayer;
