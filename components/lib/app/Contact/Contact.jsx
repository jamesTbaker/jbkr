import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Brand } from '../../..';
import { Button } from '../../core/Button/Button';


const customBreakpointsInPixels = {
	'one': 360,
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
	${deviceWidthQuery.only({ 'width': 'l' })} {
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
		padding: 2rem 0 2rem 5rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
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
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		position: relative;
		text-align: center;
		width: 100%;
	}
`;


const MediaContainerFive = styled.div`
	@media (max-width: ${customBreakpointsInPixels.four - 1}px) {
		display: none;
	}
	@media (min-width: ${customBreakpointsInPixels.four}px) {
	}
`;
const MediaImagesContainerFive = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	top: 4rem;
	left: 0;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaImageLargeDevice};
`;
const MediaImageFive = styled.div`
	${
		({ $imageURL }) => `background-image: url("${$imageURL}");`
	}
	width: calc((100% - 16rem) / 5);
	height: 18rem;
	background-size: cover;
	background-repeat: no-repeat;
	/* @media (prefers-reduced-motion: no-preference) {
		display: none;
	} */
`;
const MediaVideosContainerFive = styled.div`
	display: flex;
	display: none;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	top: 4rem;
	left: 0;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaVideoLargeDevice};
`;
const MediaVideoFive = styled.video.attrs(() => videoCommonAttributes)`
	width: calc((100% - 16rem) / 5);
	height: 18rem;
	object-fit: cover;
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
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	top: 4rem;
	left: 0;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaImageLargeDevice};
`;
const MediaImageThree = styled.div`
	${
		({ $imageURL }) => `background-image: url("${$imageURL}");`
	}
	width: calc((100% - 8rem) / 3);
	height: 18rem;
	background-size: cover;
	background-repeat: no-repeat;
	/* @media (prefers-reduced-motion: no-preference) {
		display: none;
	} */
`;
const MediaVideosContainerThree = styled.div`
	display: flex;
	display: none;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	top: 4rem;
	left: 0;
	width: 100%;
	text-align: left;
	z-index: ${zIndexNumber().contactBodyMediaVideoLargeDevice};
`;
const MediaVideoThree = styled.video.attrs(() => videoCommonAttributes)`
	width: calc((100% - 8rem) / 3);
	height: 18rem;
	object-fit: cover;
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;


const ContentContainer = styled.div`
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		max-width: 160rem;
		width: 100%;
		margin: 0 auto;
		text-align: left;
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
					'level': 34,
					'alpha': 0,
					'format': 'string'
				})}
			);

	}
`;
const ContentConstrainer = styled.div`
	@media (max-width: ${customBreakpointsInPixels.three - 1}px) {
		padding: 0 2rem;
	}
	@media (min-width: ${customBreakpointsInPixels.three}px) {
		margin: 0 auto;
		padding: 32rem 0 0 0;
		text-align: left;
		max-width: 150rem;
		width: calc(100% - 4rem);
		position: relative;
		top: 0;
		z-index: ${zIndexNumber().contactBodyContent};
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "brand text";
		grid-column-gap: 4rem;
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
	width: 12.5rem;
	height: 52.5rem;
	margin: 0 auto 4rem;
`;
const TaglineContainerBody = styled.div`
	width: 17rem;
	height: 4rem;
	margin: 0 auto;
`;
const ContactOptionsContent = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: text;
		text-align: left;
	}
`;
const EmailHeaderContainer = styled.div`
	padding-bottom: 2rem;
`;
const EmailContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
	display: grid;
	grid-gap: 2rem;
	padding-bottom: 5rem;
	@media (min-width: ${customBreakpointsInPixels.one}px) and (max-width: ${customBreakpointsInPixels.three - 1}px) {
		grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
	}
	@media (min-width: ${customBreakpointsInPixels.four}px) {
		grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
	}
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
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
	display: grid;
	grid-gap: 2rem;
	@media (min-width: ${customBreakpointsInPixels.one}px) and (max-width: ${customBreakpointsInPixels.three - 1}px) {
		grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
	}
	@media (min-width: ${customBreakpointsInPixels.four}px) {
		grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
	}
`;
const ChannelContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
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
}) => (
	<ContactContainer>
		<MainContentContainer
			$backgroundImageSmall={media.sampleBackgroundImageSmall.url}
		>
			<ContactHeader>
				<Copy
					kind="landmark-title"
				>
					{title}
				</Copy>
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
			<ContactBody>
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

Contact.propTypes = {
	/* 'title': PropTypes.string,
	'skills': PropTypes.shape({
		'technical': PropTypes.shape({
			'featured': PropTypes.arrayOf(SkillWithReactKey),
			'standard': PropTypes.arrayOf(SkillWithReactKey),
		}),

		'business': PropTypes.shape({
			'featured': PropTypes.arrayOf(SkillWithReactKey),
			'standard': PropTypes.arrayOf(SkillWithReactKey),
		}),
		'design': PropTypes.shape({
			'featured': PropTypes.arrayOf(SkillWithReactKey),
			'standard': PropTypes.arrayOf(SkillWithReactKey),
		}),
	}),
	'professionalExperiences': PropTypes.arrayOf(ProfessionalExperienceWithReactKey),
	'educationCertifications': PropTypes.arrayOf(EducationCertificationWithReactKey),
	'volunteerExperiences': PropTypes.arrayOf(VolunteerExperienceWithReactKey), */
}
