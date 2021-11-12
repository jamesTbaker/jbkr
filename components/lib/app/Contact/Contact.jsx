import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Brand } from '../../..';
import { Button } from '../../core/Button/Button';


const videoCommonAttributes = {
	'autoPlay': true,
	'muted': true,
	'loop': true,
	'playsInline': true,
	'tabIndex': '-1',
	'aria-hidden': true,
};
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
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
		background-size: 30.5rem 32rem;
		background-repeat: no-repeat;
	}
	@media (min-width: 648px) {
		background-size: 61rem 64rem;
	}
	@media (min-width: 648px) {
		background-size: 61rem 64rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
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
const ContactHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		padding: 15rem 0 10rem 0;
		text-align: left;
	}
`;
const ContactBody = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		text-align: center;
		width: 100%;
	}
`;
const ContactBodyMediaLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const ContactBodyBrandNotLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 2rem 0 2rem 7rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const BrandContainerNotLargeDevice = styled.div`
	width: 3rem;
	height: 12rem;
`;
const BrandTaglineNotLargeDevice = styled.div`
	width: 16rem;
	height: 6rem;
	margin: 3rem 0 3rem 2rem;
`;
const ContactBodyMediaImagesLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		top: 4rem;
		left: 0;
		width: 100%;
		text-align: left;
		z-index: ${zIndexNumber().contactBodyMediaImageLargeDevice};
	}
`;
const ImageLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ $imageURL }) => `background-image: url("${$imageURL}");`
		}
		width: calc((100% - 16rem) / 5);
		height: 18rem;
		background-size: cover;
		background-repeat: no-repeat;
	}
	@media (prefers-reduced-motion: no-preference) {
		display: none;
	}
`;
const ContactBodyMediaVideosLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		top: 4rem;
		left: 0;
		width: 100%;
		text-align: left;
		z-index: ${zIndexNumber().contactBodyMediaVideoLargeDevice};
	}
`;
const VideoLargeDevice = styled.video.attrs(() => videoCommonAttributes)`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc((100% - 16rem) / 5);
		height: 18rem;
		object-fit: cover;
	}
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;
const ContactBodyContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 0 auto;
		padding: 37rem 0 10rem 0;
		text-align: left;
		max-width: 160rem;
		width: 100%;
		position: relative;
		top: 0;
		z-index: ${zIndexNumber().contactBodyContent};
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
		text-align: center;
	}
`;
const ContactBodyConstrainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		max-width: 150rem;
		width: 100%;
		margin: 0 auto;
		text-align: left;
	}
`;
const EmailOptionContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
	padding: 2rem 0 5rem;
	a {
		width: 100%;
		span {
			width: 100%;
		}
	}
`;
const ChannelsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
	padding-top: 2rem;
`;
const ChannelContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {

	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
	a {
		width: 100%;
		margin-bottom: 2rem;
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
			</ContactHeader>
			<ContactBody>
				<ContactBodyBrandNotLargeDevice>
					<BrandContainerNotLargeDevice>
						<Brand
							includeWordmark={false}
							contextColor="onDark"
						/>
					</BrandContainerNotLargeDevice>
					<BrandTaglineNotLargeDevice>
						<Copy
							kind="contact--brand-tagline"
						>
							{text.brandTagline}
						</Copy>
					</BrandTaglineNotLargeDevice>
				</ContactBodyBrandNotLargeDevice>
				<ContactBodyMediaLargeDevice>
					<ContactBodyMediaImagesLargeDevice>
						<ImageLargeDevice
							$imageURL={media.sampleBackgroundImageLarge.url}
						/>
						<ImageLargeDevice
							$imageURL={media.sampleBackgroundImageLarge.url}
						/>
						<ImageLargeDevice
							$imageURL={media.sampleBackgroundImageLarge.url}
						/>
						<ImageLargeDevice
							$imageURL={media.sampleBackgroundImageLarge.url}
						/>
						<ImageLargeDevice
							$imageURL={media.sampleBackgroundImageLarge.url}
						/>
					</ContactBodyMediaImagesLargeDevice>
					<ContactBodyMediaVideosLargeDevice>
						<VideoLargeDevice
							poster={media.sampleBackgroundImageLarge.url}
						>
							<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
						</VideoLargeDevice>
						<VideoLargeDevice
							poster={media.sampleBackgroundImageLarge.url}
						>
							<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
						</VideoLargeDevice>
						<VideoLargeDevice
							poster={media.sampleBackgroundImageLarge.url}
						>
							<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
						</VideoLargeDevice>
						<VideoLargeDevice
							poster={media.sampleBackgroundImageLarge.url}
						>
							<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
						</VideoLargeDevice>
						<VideoLargeDevice
							poster={media.sampleBackgroundImageLarge.url}
						>
							<source src={media.sampleBackgroundVideoLarge.url} type="video/mp4" />
						</VideoLargeDevice>
					</ContactBodyMediaVideosLargeDevice>
				</ContactBodyMediaLargeDevice>
				<ContactBodyConstrainer>
					<ContactBodyContainer>
						<Copy
							kind="contact--section-header"
						>
							{text.emailHeader}
						</Copy>
						<EmailOptionContainer>
							<Button
								text="hi@jbkr.me"
								url="mailto:hi@jbkr.me"
								iconBefore="email"
								size="standard"
								surfaceStyle="outlined"
								contextColor="onDark"
							/>
						</EmailOptionContainer>
						<Copy
							kind="contact--section-header"
						>
							{text.channelsHeader}
						</Copy>
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
					</ContactBodyContainer>
				</ContactBodyConstrainer>
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
