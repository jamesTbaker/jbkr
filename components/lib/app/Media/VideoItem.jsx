/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ReactPlayer from 'react-player/file';

export const VideoItem = ({
	video,
}) => (
	<ReactPlayer
		url={video.url}
		controls
		config={{
			'file': {
				'attributes': {
					'controlsList': 'nodownload',
				},
			},
		}}
		width="100%"
		height="100%"
	/>
);
