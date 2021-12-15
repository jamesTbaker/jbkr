import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Image, Video } from '@jbkr/models-react';
import {
	deviceWidthQuery, zIndexNumber, color
} from '@jbkr/style-service';


const videoCommonAttributes = {
	'autoPlay': true,
	'muted': true,
	'loop': true,
	'playsInline': true,
	'tabIndex': '-1',
	'aria-hidden': true,
};
const BackgroundOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: ${zIndexNumber().profileSectionBackgroundOverlay};
	${deviceWidthQuery.not({ 'width': 'l' })} {
		background-image:
			linear-gradient(
				175deg,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .5,
					'format': 'string'
				})} 0,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .6,
					'format': 'string'
				})} 5rem,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .7,
					'format': 'string'
				})} 15rem,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'alpha': 1,
					'format': 'string'
				})} 70%
			);
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-image:
			radial-gradient(
				ellipse at top right,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': 1,
					'format': 'string'
				})} 0%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .8,
					'format': 'string'
				})} 25%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': 0,
					'format': 'string'
				})} 70%
			),
			linear-gradient(
				to bottom,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .1,
					'format': 'string'
				})} 0,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .75,
					'format': 'string'
				})} 40rem,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': 1,
					'format': 'string'
				})} 70rem,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'alpha': 1,
					'format': 'string'
				})} 98%
			);
	}
`;
const TitleUnderlay = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: ${zIndexNumber().profileSectionTitleUnderlay};
		background-image:
			radial-gradient(
				ellipse at top left,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .7,
					'format': 'string'
				})} 0%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .5,
					'format': 'string'
				})} 30%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': 0,
					'format': 'string'
				})} 70%
			);
	}
`;
const ContentContainer = styled.div`
	position: relative;
	z-index: ${zIndexNumber().profileSectionContent};
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		text-align: left;
	}
`;
const ContentConstrainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-right: 36rem;
	}
`;
const VideoLargeDevice = styled.video.attrs(() => videoCommonAttributes)`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/* height: 100%; */
		object-position: center top;
		object-fit: cover;
		z-index: ${zIndexNumber().profileSectionBackgroundVideo};
	}
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;
const VideoNotLargeDevice = styled.video.attrs(() => videoCommonAttributes)`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-position: center top;
		object-fit: cover;
		z-index: ${zIndexNumber().profileSectionBackgroundVideo};
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;
const ImageLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: ${zIndexNumber().profileSectionBackgroundImage};
		${
			({ $imageURL }) => `background-image: url('${$imageURL}');`
		}
		background-size: cover;
		background-repeat: no-repeat;
	}
	@media (prefers-reduced-motion: no-preference) {
		display: none;
	}
`;
const ImageNotLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: ${zIndexNumber().profileSectionBackgroundImage};
		${
			({ $imageURL }) => `background-image: url('${$imageURL}');`
		}
		background-size: cover;
		background-repeat: no-repeat;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
	@media (prefers-reduced-motion: no-preference) {
		display: none;
	}
`;
const ProfileSectionContainer = styled.section`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 7rem 2rem;
		position: relative;
		z-index: ${zIndexNumber().profileSectionContainer};
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		z-index: ${zIndexNumber().profileSectionContainer};
		width: 100%;
		max-width: 180rem;
		margin: 0 auto;
		padding: 10rem 0 7rem;
	}
`;
export const ProfileSection = ({
	videoLargeScreen,
	videoNotLargeScreen,
	imageLargeScreen,
	imageNotLargeScreen,
	inView,
	children,
}) => (
	<ProfileSectionContainer>
		{
			inView &&
			<>
				<VideoLargeDevice
					poster={imageLargeScreen.url}
				>
					<source src={videoLargeScreen.url} type="video/mp4" />
				</VideoLargeDevice>
				<VideoNotLargeDevice
					poster={imageNotLargeScreen.url}
				>
					<source src={videoNotLargeScreen.url} type="video/mp4" />
				</VideoNotLargeDevice>
			</>
		}
		<ImageLargeDevice
			$imageURL={imageLargeScreen.url}
		/>
		<ImageNotLargeDevice
			$imageURL={imageNotLargeScreen.url}
		/>
		<TitleUnderlay />
		<BackgroundOverlay />
		<ContentContainer>
			<ContentConstrainer>
				{children}
			</ContentConstrainer>
		</ContentContainer>
	</ProfileSectionContainer>
);

ProfileSection.propTypes = {
	'videoLargeScreen': Video,
	'videoNotLargeScreen': Video,
	'imageLargeScreen': Image,
	'imageNotLargeScreen': Image,
	'children': PropTypes.any,
}
