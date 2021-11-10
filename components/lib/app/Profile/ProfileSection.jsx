import styled from 'styled-components';
import PropTypes from 'prop-types';
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
	z-index: ${zIndexNumber().profileSectionVideoOverlay};
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
					'level': 37,
					'alpha': 1,
					'format': 'string'
				})} 95%
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
const LargeDeviceVideo = styled.video.attrs(() => videoCommonAttributes)`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: ${zIndexNumber().profileSectionVideo};
	}
`;
const NotLargeDeviceVideo = styled.video.attrs(() => videoCommonAttributes)`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: ${zIndexNumber().profileSectionVideo};
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
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
		padding: 7rem 0;
	}
`;
export const ProfileSection = ({
	videoLargeScreen,
	videoNotLargeScreen,
	imageLargeScreen,
	imageNotLargeScreen,
	children
}) => (
	<ProfileSectionContainer>
		<LargeDeviceVideo
			poster={imageLargeScreen}
		>
			<source src={videoLargeScreen} type="video/mp4" />
		</LargeDeviceVideo>
		<NotLargeDeviceVideo
			poster={imageNotLargeScreen}
		>
			<source src={videoNotLargeScreen} type="video/mp4" />
		</NotLargeDeviceVideo>
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
	'videoLargeScreen': PropTypes.string,
	'videoNotLargeScreen': PropTypes.string,
	'imageLargeScreen': PropTypes.string,
	'imageNotLargeScreen': PropTypes.string,
	'children': PropTypes.any,
}
