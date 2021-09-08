/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ReactPlayer from 'react-player/file';

export const VideoPlayer = ({
	content,
}) => (
	<ReactPlayer
		url={content.url}
		controls
		config={{
			'file': {
				'attributes': {
					'controlsList': 'nodownload',
				},
			},
		}}
	/>
);
