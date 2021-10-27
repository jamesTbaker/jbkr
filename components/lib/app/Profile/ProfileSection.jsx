import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, zIndexNumber, color
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';


const VideoOverlay = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: ${zIndexNumber().profileSectionVideoOverlay};
		background-image:
			linear-gradient(
				to left bottom,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .8,
					'format': 'string'
				})},
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .9,
					'format': 'string'
				})} 15%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .8,
					'format': 'string'
				})} 30%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': 0,
					'format': 'string'
				})} 50%
			),
			linear-gradient(
				to bottom,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': 0,
					'format': 'string'
				})},
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .5,
					'format': 'string'
				})} 30rem,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'alpha': .7,
					'format': 'string'
				})} 40rem,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
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
		top: -8rem;
		left: -8rem;
		width: 100rem;
		height: 56rem;
		z-index: ${zIndexNumber().profileSectionTitleUnderlay};
		background-image:
			radial-gradient(
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'alpha': .7,
					'format': 'string'
				})} 0%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
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
const LargeWidthVideo = styled.video`
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
const ProfileSectionContainer = styled.section`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-color: #112;
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
		<LargeWidthVideo
			autoPlay muted loop playsInline
			poster={posterLargeScreen}
		>
			<source src={videoLargeScreen} type="video/mp4" />
		</LargeWidthVideo>
		<TitleUnderlay />
		<VideoOverlay />
		<ContentContainer>
			{children}
		</ContentContainer>
	</ProfileSectionContainer>
);
