import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, zIndexNumber
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
		background-color: hsla(325, 20%, 20%, .9);
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
const ProfileSectionContainer = styled.div`
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
		<VideoOverlay />
		<ContentContainer>
			{children}
		</ContentContainer>
	</ProfileSectionContainer>
);
