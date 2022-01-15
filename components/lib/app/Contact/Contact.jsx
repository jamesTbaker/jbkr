import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, color, zIndexNumber } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Brand } from '../../primitive/Brand/Brand';
import { Button } from '../../core/Button/Button';
import { ScreenTitlePrimary } from '../Common/ScreenTitlePrimary';


const customBreakpointsInPixels = {
	'one': 400,
	'three': 880,
	'four': 1025,
};
const videoCommonAttributes = {
	'autoPlay': true,
	'muted': true,
	'loop': true,
	'playsInline': true,
	'tabIndex': '-1',
	'aria-hidden': true,
};
const ContactContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		width: 100%;
		max-width: 180rem;
		margin: 14rem auto 0;
		text-align: center;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})`
	@media (max-width: ${customBreakpointsInPixels.three - 1}px) {
		${
			({ $backgroundImageSmall }) => `
				background-image:
					linear-gradient(
						to bottom,
						${color({
							'kind': 'Neutral',
							'tone': 'Finch',
							'level': 37,
							'alpha': .3,
							'format': 'string'
						})} 0,
						${color({
							'kind': 'Neutral',
							'tone': 'Finch',
							'level': 37,
							'alpha': .6,
							'format': 'string'
						})} 40%,
						${color({
							'kind': 'Neutral',
							'tone': 'Finch',
							'level': 37,
							'alpha': 1,
							'format': 'string'
						})} 100%
					),
					url('${$backgroundImageSmall}');
			`
		}
		background-position: top 0 right 0;
		background-size: 60% auto;
		background-repeat: no-repeat;
	}
`;
const ContactHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 0 2rem;
	}
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		padding-bottom: 8rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		padding: 15rem 0 10rem 0;
		text-align: left;
	}
`;
const BrandingContainerHeader = styled.div`
	@media (max-width: ${customBreakpointsInPixels.three - 1}px) {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 2rem 0 2rem 5rem;
	}
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		display: none;
	}
`;
const LogoContainerHeader = styled.div`
	width: 3rem;
	height: 12rem;
`;
const TaglineContainerHeader = styled.div`
	width: 16rem;
	height: 6rem;
	margin: 3rem 0 3rem 2rem;
`;
const ContactBody = styled.div`
	transform: translateY(6rem);
	opacity: 0;
	transition: all 1.5s .5s;
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		position: relative;
		width: 100%;
		text-align: center;
	}
`;
const MediaContainerFive = styled.div`
	@media (max-width: ${customBreakpointsInPixels.four - 1}px) {
		display: none;
	}
`;
const MediaImagesContainerFive = styled.div`
	position: absolute;
	top: 4rem;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaImageLargeDevice};
`;
const MediaImageFive = styled.div`
	${
		({ $imageURL }) => `background-image: url('${$imageURL}');`
	}
	width: calc((100% - 16rem) / 5);
	height: 18rem;
	background-size: cover;
	background-repeat: no-repeat;
	@media (prefers-reduced-motion: no-preference) {
		display: none;
	}
`;
const MediaVideosContainerFive = styled.div`
	position: absolute;
	top: 4rem;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaVideoLargeDevice};
`;
const MediaVideoFive = styled.video.attrs(() => videoCommonAttributes)`
	width: calc((100% - 16rem) / 5);
	height: 18rem;
	object-fit: cover;
	border-radius: .375rem;
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;
const MediaContainerThree = styled.div`
	@media (max-width: ${customBreakpointsInPixels.three - 1}px) {
		display: none;
	}
	@media (min-width: ${customBreakpointsInPixels.four}px) {
		display: none;
	}
`;
const MediaImagesContainerThree = styled.div`
	position: absolute;
	top: 4rem;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaImageLargeDevice};
`;
const MediaImageThree = styled.div`
	${
		({ $imageURL }) => `background-image: url('${$imageURL}');`
	}
	width: calc((100% - 8rem) / 3);
	height: 18rem;
	background-size: cover;
	background-repeat: no-repeat;
	@media (prefers-reduced-motion: no-preference) {
		display: none;
	}
`;
const MediaVideosContainerThree = styled.div`
	position: absolute;
	top: 4rem;
	left: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaVideoLargeDevice};
`;
const MediaVideoThree = styled.video.attrs(() => videoCommonAttributes)`
	width: calc((100% - 8rem) / 3);
	height: 18rem;
	object-fit: cover;
	border-radius: .375rem;
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;
const ContentContainer = styled.div`
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		max-width: 160rem;
		width: 100%;
		margin: 0 auto;
		padding-bottom: 6rem;
		text-align: left;
		border-radius: .375rem;
		background-image:
			linear-gradient(
				to bottom,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 34,
					'alpha': 1,
					'format': 'string'
				})},
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 39,
					'alpha': .8,
					'format': 'string'
				})}
			),
			url('https://res.cloudinary.com/jbkrcdn/image/upload/v1641226472/earth-from-space--contact_nx5riv.jpg');
		background-position: center bottom;
	}
`;
const ContentConstrainer = styled.div`
	@media (max-width: ${customBreakpointsInPixels.three - 1}px) {
		padding: 0 2rem;
	}
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "brand text";
		grid-column-gap: 4rem;
		max-width: 150rem;
		width: calc(100% - 4rem);
		margin: 0 auto;
		padding: 32rem 0 0 0;
		text-align: left;
		z-index: ${zIndexNumber().contactBodyContent};
	}
	@media (min-width: ${customBreakpointsInPixels.four}px) {
		padding: 37rem 0 0 0;
	}
`;
const BrandingContainerBody = styled.div`
	@media (max-width: ${customBreakpointsInPixels.three - 1}px) {
		display: none;
	}
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		grid-area: brand;
	}
`;
const LogoContainerBody = styled.div`
	width: 8.375rem;
	height: 35rem;
	margin: 0 auto 4rem;
`;
const TaglineContainerBody = styled.div`
	width: 17rem;
	margin: 0 auto;
	text-align: center;
`;
const ContactOptionsContent = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: text;
		text-align: left;
	}
`;
const EmailHeaderContainer = styled.div`
	padding-bottom: 2rem;
`;
const EmailContainer = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
	padding-bottom: 5rem;
	a {
		width: 100%;
		span {
			width: 100%;
		}
	}
`;
const ChannelsHeaderContainer = styled.div`
	padding-bottom: 2rem;
`;
const ChannelsContainer = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
`;
const ChannelContainer = styled.div`
	a {
		width: 100%;
		span {
			width: 100%;
		}
	}
`;
export const Contact = ({
	title,
	media,
	text,
	channels,
}) => {
	const contactBodyRef = useRef();
	useEffect(() => {
		contactBodyRef.current.classList.add('animation-state--final');
	});
	return (
		<ContactContainer>
			<MainContentContainer
				$backgroundImageSmall={media.sampleBackgroundImageSmall.url}
			>
				<ContactHeader>
					<ScreenTitlePrimary
						titleVisible={title}
					/>
					<BrandingContainerHeader>
						<LogoContainerHeader>
							<Brand
								includeWordmark={false}
								contextColor="onDark"
							/>
						</LogoContainerHeader>
						<TaglineContainerHeader>
							<Copy
								kind="contact--brand-tagline"
							>
								{text.brandTagline}
							</Copy>
						</TaglineContainerHeader>
					</BrandingContainerHeader>
				</ContactHeader>
				<ContactBody
					ref={contactBodyRef}
				>
					<MediaContainerFive>
						<MediaImagesContainerFive>
							<MediaImageFive
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
							<MediaImageFive
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
							<MediaImageFive
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
							<MediaImageFive
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
							<MediaImageFive
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
						</MediaImagesContainerFive>
						<MediaVideosContainerFive>
							<MediaVideoFive
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoFive>
							<MediaVideoFive
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoFive>
							<MediaVideoFive
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoFive>
							<MediaVideoFive
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoFive>
							<MediaVideoFive
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoFive>
						</MediaVideosContainerFive>
					</MediaContainerFive>
					<MediaContainerThree>
						<MediaImagesContainerThree>
							<MediaImageThree
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
							<MediaImageThree
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
							<MediaImageThree
								$imageURL={media.sampleBackgroundImageLarge.url}
							/>
						</MediaImagesContainerThree>
						<MediaVideosContainerThree>
							<MediaVideoThree
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoThree>
							<MediaVideoThree
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoThree>
							<MediaVideoThree
								poster={media.sampleBackgroundImageLarge.url}
							>
								<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
							</MediaVideoThree>
						</MediaVideosContainerThree>
					</MediaContainerThree>
					<ContentContainer>
						<ContentConstrainer>
							<BrandingContainerBody>
								<LogoContainerBody>
									<Brand
										includeWordmark={false}
										contextColor="onDark"
									/>
								</LogoContainerBody>
								<TaglineContainerBody>
									<Copy
										kind="contact--brand-tagline"
									>
										{text.brandTagline}
									</Copy>
								</TaglineContainerBody>
							</BrandingContainerBody>
							<ContactOptionsContent>
								<EmailHeaderContainer>
									<Copy
										kind="contact--section-header"
									>
										{text.emailHeader}
									</Copy>
								</EmailHeaderContainer>
								<EmailContainer>
									<Button
										text="hi@jbkr.me"
										url="mailto:hi@jbkr.me"
										iconBefore="email"
										size="standard"
										surfaceStyle="outlined"
										contextColor="onDark"
									/>
								</EmailContainer>
								<ChannelsHeaderContainer>
									<Copy
										kind="contact--section-header"
									>
										{text.channelsHeader}
									</Copy>
								</ChannelsHeaderContainer>
								<ChannelsContainer>
									{
										channels.map((channel) =>
											<ChannelContainer
												key={channel.key}
											>
												<Button
													text={channel.anchorText}
													url={channel.url}
													iconBefore={channel.anchorIconBefore}
													size="standard"
													surfaceStyle="outlined"
													contextColor="onDark"
												/>
											</ChannelContainer>
										)
									}
								</ChannelsContainer>
							</ContactOptionsContent>
						</ContentConstrainer>
					</ContentContainer>
				</ContactBody>
			</MainContentContainer>
		</ContactContainer>
	);
};

Contact.propTypes = {
	'title': PropTypes.string,
}
