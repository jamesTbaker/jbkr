import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, color, zIndexNumber } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Button } from '../../core/Button/Button';
import { ScreenTitlePrimary } from '../Common/ScreenTitlePrimary';


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
	z-index: ${zIndexNumber().fourOhFourBackgroundOverlay};
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
					'level': 35,
					'alpha': 1,
					'format': 'string'
				})} 0%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 35,
					'alpha': .8,
					'format': 'string'
				})} 25%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 35,
					'alpha': 0,
					'format': 'string'
				})} 70%
			),
			linear-gradient(
				to bottom,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 35,
					'alpha': .1,
					'format': 'string'
				})} 0,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 36,
					'alpha': .5,
					'format': 'string'
				})} 35%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'alpha': .8,
					'format': 'string'
				})} 70%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'alpha': 1,
					'format': 'string'
				})} 99%
			);
	}
`;
const FourOhFourContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		width: 100%;
		max-width: 180rem;
		margin: 14rem auto 0;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})``;
const FourOhFourHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 8rem 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		padding: 15rem 0 0 0;
		text-align: left;
	}
`;
const FourOhFourBody = styled.div`
	width: 100%;
	height: 75rem;
	transform: translateY(6rem);
	opacity: 0;
	overflow: hidden;
	transition: all 1.5s .5s;
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		z-index: ${zIndexNumber().fourOhFourContainer};
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
		border-radius: .375rem;
		object-position: center top;
		object-fit: cover;
		z-index: ${zIndexNumber().fourOhFourBackgroundVideo};
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
		z-index: ${zIndexNumber().fourOhFourBackgroundVideo};
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
		z-index: ${zIndexNumber().fourOhFourBackgroundImage};
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
		z-index: ${zIndexNumber().fourOhFourBackgroundImage};
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


// ============


const ContentConstrainer = styled.div`
	position: relative;
	margin-top: 20rem;
	z-index: ${zIndexNumber().fourOhFourContent};
`;
const ContentBackground = styled.div`
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 39,
		'alpha': 1,
		'format': 'string'
	})};
	@media (min-width: 648px) {
		width: 75%;
		margin: 0 25% 0 0;
		border-radius: 0 .375rem .375rem 0;
	}
	@media (min-width: 896px) {
		width: 50%;
		margin: 0 50% 0 0;
		border-radius: 0 .375rem .375rem 0;
	}
`;
const ContentContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		padding: 2rem;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		width: calc(100% - 2rem);
		max-width: 75rem;
		padding: 5rem 3rem 5rem 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 5rem 3rem 5rem 0;
		margin: 0 0 0 auto;
	}
`;


// ============


const LinksContainer = styled.div`
	padding-top: 2rem;
	a > span {
		padding-left: 0;
		padding-right: 0;
		transition: all .5s;
	}
	a:focus > span {
		padding-left: 1.875rem;
		padding-right: 1.875rem;
	}
`;
export const FourOhFour = ({
	title,
	media,
	text,
	links,
}) => {
	const fourOhFourBodyRef = useRef();
	useEffect(() => {
		fourOhFourBodyRef.current.classList.add('animation-state--final');
	});
	return (
		<FourOhFourContainer>
			<MainContentContainer>
				<FourOhFourHeader>
					<ScreenTitlePrimary
						titleVisible={title}
					/>
				</FourOhFourHeader>
				<FourOhFourBody
					ref={fourOhFourBodyRef}

				>
					<VideoLargeDevice
						poster={media.backgroundImageLarge.url}
					>
						<source src={media.backgroundVideoLarge.url} type="video/mp4" />
					</VideoLargeDevice>
					<VideoNotLargeDevice
						poster={media.backgroundImageSmall.url}
					>
						<source src={media.backgroundVideoSmall.url} type="video/mp4" />
					</VideoNotLargeDevice>
					<ImageLargeDevice
						$imageURL={media.backgroundImageLarge.url}
					/>
					<ImageNotLargeDevice
						$imageURL={media.backgroundImageSmall.url}
					/>
					<BackgroundOverlay />
					<ContentConstrainer>
						<ContentBackground>
							<ContentContainer>
								<Copy
									kind="four-oh-four--secondary-header"
								>
									{text.headerSecondary}
								</Copy>
								<Copy
									kind="four-oh-four--paragraph"
								>
									{text.paragraph}
								</Copy>
								<LinksContainer>
									{
										links.map((link) =>
											<Button
												text={link.anchorText}
												url={link.url}
												iconAfter="arrow-right"
												size="standard"
												surfaceStyle="transparent"
												contextColor="onDark"
												key={link.key}
											/>
										)
									}
								</LinksContainer>
							</ContentContainer>
						</ContentBackground>
					</ContentConstrainer>
				</FourOhFourBody>
			</MainContentContainer>
		</FourOhFourContainer>
	);
};
