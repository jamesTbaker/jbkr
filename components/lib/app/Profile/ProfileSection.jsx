import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, zIndexNumber, color
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';


const VideoOverlay = styled.div`
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
					'alpha': .3,
					'format': 'string'
				})} 0,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .5,
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
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
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
`;
const LargeDeviceVideo = styled.video`
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
const NotLargeDeviceVideo = styled.video`
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
		padding: 7rem 51rem 7rem 15rem;
		position: relative;
		z-index: ${zIndexNumber().profileSectionContainer};
	}
`;
export const ProfileSection = ({
	videoLargeScreen,
	videoNotLargeScreen,
	posterLargeScreen,
	posterNotLargeScreen,
	children
}) => (
	<ProfileSectionContainer>
		<LargeDeviceVideo
			autoPlay muted loop playsInline
			poster={posterLargeScreen}
		>
			<source src={videoLargeScreen} type="video/mp4" />
		</LargeDeviceVideo>
		<NotLargeDeviceVideo
			autoPlay muted loop playsInline
			poster={posterNotLargeScreen}
		>
			<source src={videoNotLargeScreen} type="video/mp4" />
		</NotLargeDeviceVideo>
		<TitleUnderlay />
		<VideoOverlay />
		<ContentContainer>
			{children}
		</ContentContainer>
	</ProfileSectionContainer>
);
