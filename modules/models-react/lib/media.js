import { string, number, exact, oneOfType, arrayOf, oneOf } from 'prop-types';


export const ImageBaseProps = {
	'url': string.isRequired,
	'type': string.isRequired,
	'width': number.isRequired,
	'height': number.isRequired,
	'alternativeText': string,
	'credit': string,
};
export const VideoBaseProps = {
	'url': string.isRequired,
	'type': string.isRequired,
	'alternativeText': string,
};

export const Image = exact(ImageBaseProps);
export const Video = exact(VideoBaseProps);
