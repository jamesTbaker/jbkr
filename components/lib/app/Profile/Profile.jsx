import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {
	SkillWithReactKey,
	ProfessionalExperienceWithReactKey,
	EducationCertificationWithReactKey,
	VolunteerExperienceWithReactKey,
} from '@jbkr/models-react';
import Head from 'next/head';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, standardTime
} from '@jbkr/style-service';
import { ProfileSkillVisualization } from './ProfileSkillVisualization';
import { ProfileSection } from './ProfileSection';
import { ProfileProfessionalExperience } from './ProfileProfessionalExperience';
import { ProfileEducationCertification } from './ProfileEducationCertification';
import { ProfileVolunteerExperience } from './ProfileVolunteerExperience';
import { ProfileSectionHeader } from './ProfileSectionHeader';
import { Copy } from '../../core/Copy/Copy';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { Collapsible } from '../../core/Collapsible/Collapsible';
import { ScreenTitlePrimary } from '../Common/ScreenTitlePrimary';

const ProfileContainer = styled.div`
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
const ProfileHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 8rem 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		padding: 15rem 0 10rem 0;
		text-align: left;
	}
`;
const ProfileHeaderContentConstrainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-right: 36rem;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: main;
		${({ $menuBackgroundImageLarge }) => `
			background-image:
				linear-gradient(
					to bottom,
					${color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 2,
						'alpha': .075,
						'format': 'string'
					})},
					${color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 2,
						'alpha': .075,
						'format': 'string'
					})} 20rem
				),
				linear-gradient(
					to bottom,
					${color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 41,
						'alpha': .85,
						'format': 'string'
					})},
					${color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 41,
						'alpha': .85,
						'format': 'string'
					})} 20rem
				),
				url('${$menuBackgroundImageLarge}');
		`}
		background-position: top 15rem right 0;
		background-size: 111rem 55rem;
		background-repeat: no-repeat;
		@media (min-width: 1321px) {
			background-position: top 15rem right 7.5rem;
		}
	}
`;
const ExpandedTableOfContentsContainer = styled.aside.attrs(() => {
	return {
		'aria-label': 'Page Complimentary Information',
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 6rem;
		left: 0;
		width: 100%;
		height: 100%;
		text-align: center;
		opacity: 0;
		transition: all .5s;
		&.animation-state--final {
			top: 0;
			opacity: 1;
		}
	}
`;
const ExpandedTableOfContentsListContainer = styled.nav.attrs(() => {
	return {
		'id': 'expanded-table-of-contents',
		'aria-label': 'Page Table of Contents',
	};
})`
		width: calc(100% - 4rem);
		max-width: 150rem;
		height: 100%;
		margin: 0 auto;
		text-align: right;
`;
const ExpandedTableOfContentsList = styled.ol`
	position: sticky;
	top: 37rem;
	width: 28rem;
	margin: 0 0 0 auto;
	padding: 0;
	z-index: ${zIndexNumber().expandedNavigation};
	text-align: left;
	@media (max-height: 660px) {
		top: 25rem;
	}
	@media (max-height: 580px) {
		top: 20rem;
	}
`;
const ExpandedTableOfContentsListItem = styled.li`
	list-style-type: none;
	margin-bottom: 4rem;
	@media (max-height: 800px) {
		margin-bottom: 3rem;
	}
	@media (max-height: 760px) {
		a {
			font-size: 80%;
		}
	}
`;
const CompressedTableOfContentsContainer = styled.aside.attrs(() => {
	return {
		'aria-label': 'Page Complimentary Information',
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		position: fixed;
		top: 13rem;
		width: 100%;
		padding: 3rem 2rem;
		background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 37,
			'format': 'string',
		})};
		z-index: ${zIndexNumber().compressedTableOfContentsContainer};
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const CompressedTableOfContentsCollapsibleContainer = styled.nav.attrs(() => {
	return {
		'id': 'compressed-table-of-contents',
		'aria-label': 'Page Table of Contents',
	};
})``;
const CompressedTableOfContentsListContainer = ({
	contentVisible,
	clickHandler,
	sectionProperties,
}) => (
	<CompressedTableOfContentsList
		contentVisible={contentVisible}
	>
		{
			Object.keys(sectionProperties).map((sectionIndex) =>
				<CompressedTableOfContentsListItem
					key={`compressed--${sectionProperties[sectionIndex].id}`}
				>
						<CopyLink
							url={`#${sectionProperties[sectionIndex].hash}`}
							inline={false}
							clickHandler={clickHandler}
						>
							{sectionProperties[sectionIndex].anchor}
						</CopyLink>
				</CompressedTableOfContentsListItem>,
			)
		}
	</CompressedTableOfContentsList>
);
const CompressedTableOfContentsList = styled.ol`
	position: fixed;
	top: 23rem;
	left: 0;
	width: 100%;
	height: 0;
	overflow: hidden;
	margin: 0;
	padding: 0 2rem;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 37,
		'format': 'string',
	})};
	transition: height .5s, padding .5s;
	z-index: ${zIndexNumber().compressedTableOfContentsContainer};
	${
		({ contentVisible}) => {
			if (contentVisible) {
				return `
					height: 100%;
					padding: 2rem;
					li {
						margin-top: 0;
						margin-left: 0;
						opacity: 1;
					}
				`;
			}
		}
	}
`;
const CompressedTableOfContentsListItem = styled.li`
	list-style-type: none;
	margin-top: -1rem;
	margin-left: -1rem;
	padding-bottom: 1rem;
	opacity: 0;
	transition-property: opacity, margin-left, margin-top;
	transition-duration: .5s;
	&:nth-child(1) {
		transition-delay: .2s;
	}
	&:nth-child(2) {
		transition-delay: .225s;
	}
	&:nth-child(3) {
		transition-delay: .25s;
	}
	&:nth-child(4) {
		transition-delay: .275s;
	}
	&:nth-child(5) {
		transition-delay: .3s;
	}
	&:nth-child(6) {
		transition-delay: .325s;
	}
	&:nth-child(7) {
		transition-delay: .35s;
	}
	&:nth-child(8) {
		transition-delay: .375s;
	}
	&:nth-child(9) {
		transition-delay: .4s;
	}
	a {
		padding: 1rem 0;
		:focus {
			padding: 1rem .5rem;
		}
	}
`;
const HiddenH3 = styled.h3`
	${hiddenBlock}
	margin: 0;
`;
const FeaturedVisualizedSkillsContainer = styled.ul`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin: 0 0 3rem 0;
		padding: 0;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
	}
`;
const StandardVisualizedSkillsContainer = styled.ul`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin: 0;
		padding: 0;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0;
		padding: 0;
	}
`;
const SkillsStatementsList = styled.ul`
	margin: 0;
	padding: 0;
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
const SkillsStatementsListItem = styled.li`
	list-style-type: none;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 1.875rem 0 3rem 0;
		border-top: solid .125rem ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string',
		})};
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		width: calc(50% - 1.125rem);
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(50% - 1.125rem);
		padding: 1.875rem 0 3rem 0;
		border-top: solid .125rem ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string',
		})};
	}
`;
const ProfessionalExperiencesContainer = styled.div``;
const EducationAndCertificationsContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-areas: "certification graduate undergraduate";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 2rem 2rem;
	}
`;
const EducationAndCertificationsSubset = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ gridArea }) => `grid-area: ${gridArea};`
		}
	}
`;
const VolunteerExperiencesContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-areas:	"volunteerExperience0 volunteerExperience3 volunteerExperience6"
								"volunteerExperience1 volunteerExperience4 volunteerExperience7"
								"volunteerExperience2 volunteerExperience5 volunteerExperience8";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 2rem 2rem;
	}
`;
export const Profile = ({
	title,
	skills,
	professionalExperiences,
	educationCertifications,
	volunteerExperiences,
	sectionProperties,
	media,
}) => {
	const profileSkillsTechnicalRef = useRef();
	const profileSkillsBusinessRef = useRef();
	const profileSkillsDesignRef = useRef();
	const profileProfessionalExperiencesRef = useRef();
	const profileEducationAndCertificationsRef = useRef();
	const profileVolunteerExperiencesRef = useRef();
	const profileExpandedTableOfContentsRef = useRef();

	const [profileSkillsBusinessViewed,
			setProfileSkillsBusinessViewed] = useState(false);
	const [profileSkillsDesignViewed,
			setProfileSkillsDesignViewed] = useState(false);
	const [profileProfessionalExperiencesViewed,
			setProfileProfessionalExperiencesViewed] = useState(false);
	const [profileEducationAndCertificationsViewed,
			setProfileEducationAndCertificationsViewed] = useState(false);
	const [profileVolunteerExperiencesViewed,
			setProfileVolunteerExperiencesViewed] = useState(false);

	useEffect(() => {
		profileSkillsTechnicalRef.current.classList.add(
			'animation-state--final'
		);
		profileExpandedTableOfContentsRef.current.classList.add(
			'animation-state--final'
		);
		gsap.registerPlugin(ScrollTrigger);
		gsap.defaults({
			ease: 'power4.inOut',
			duration: standardTime().s,
			skewType: 'simple',
		});
		gsap.from(
			profileSkillsBusinessRef.current,
			{
				opacity: 0,
				y: 72,
				skewY: 3,
				skewType: 'simple',
				scrollTrigger: {
					trigger: profileSkillsBusinessRef.current,
					start: "top 90%",
					end: "top 60%",
					scrub: 4,
					onEnter() {
						setProfileSkillsBusinessViewed(true)
					},
				},
			},
		);
		gsap.from(
			profileSkillsDesignRef.current,
			{
				opacity: 0,
				y: 72,
				skewY: 3,
				scrollTrigger: {
					trigger: profileSkillsDesignRef.current,
					start: "top 90%",
					end: "top 60%",
					scrub: 4,
					onEnter() {
						setProfileSkillsDesignViewed(true)
					},
				},
			},
		);
		gsap.from(
			profileProfessionalExperiencesRef.current,
			{
				opacity: 0,
				y: 72,
				skewY: 3,
				scrollTrigger: {
					trigger: profileProfessionalExperiencesRef.current,
					start: "top 90%",
					end: "top 60%",
					scrub: 4,
					onEnter() {
						setProfileProfessionalExperiencesViewed(true)
					},
				},
			},
		);
		gsap.from(
			profileEducationAndCertificationsRef.current,
			{
				opacity: 0,
				y: 72,
				skewY: 3,
				scrollTrigger: {
					trigger: profileEducationAndCertificationsRef.current,
					start: "top 90%",
					end: "top 60%",
					scrub: 4,
					onEnter() {
						setProfileEducationAndCertificationsViewed(true)
					},
				},
			},
		);
		gsap.from(
			profileVolunteerExperiencesRef.current,
			{
				opacity: 0,
				y: 72,
				skewY: 3,
				scrollTrigger: {
					trigger: profileVolunteerExperiencesRef.current,
					start: "top 90%",
					end: "top 60%",
					scrub: 4,
					onEnter() {
						setProfileVolunteerExperiencesViewed(true)
					},
				},
			},
		);
	}, []);
	return (
		<ProfileContainer>
			<Head>
				{
					Object.keys(media).map(itemKey =>
						itemKey.startsWith('video') && <link
							rel="preload"
							as="video"
							href={media[itemKey].url}
							key={`video-preload--${itemKey}`}
						></link>
					)
				}
			</Head>
			<MainContentContainer
				$menuBackgroundImageLarge={media.imageMenuLarge.url}
			>
				<ProfileHeader>
					<ProfileHeaderContentConstrainer>
						<ScreenTitlePrimary
							includeBrand={true}
							contextColor="onDark"
							titleVisible={title}
							titleHiddenAppendix="&nbsp;of James T. Baker"
						/>
					</ProfileHeaderContentConstrainer>
				</ProfileHeader>
				<ProfileSection
					videoSmallScreen={media.videoTechSkillsSmall}
					videoLargeScreen={media.videoTechSkillsLarge}
					imageSmallScreen={media.imageTechSkillsSmall}
					imageLargeScreen={media.imageTechSkillsLarge}
					className="animated"
					viewed={true}
					ref={profileSkillsTechnicalRef}
				>
					<ProfileSectionHeader
						content={sectionProperties.technicalSkills}
					/>
					{
						skills.technical.featured && skills.technical.featured[0] &&

						<>
							<HiddenH3>Featured</HiddenH3>
							<FeaturedVisualizedSkillsContainer>
								{
									skills.technical.featured.map((skill) =>
										<ProfileSkillVisualization
											key={skill.key}
											skill={skill}
											featured
										/>
									)
								}
							</FeaturedVisualizedSkillsContainer>
						</>
					}
					{
						skills.technical.standard && skills.technical.standard[0] &&

						<>
							<HiddenH3>Standard</HiddenH3>
							<StandardVisualizedSkillsContainer>
								{
									skills.technical.standard.map((skill) =>
										<ProfileSkillVisualization
											key={skill.key}
											skill={skill}
										/>
									)
								}
							</StandardVisualizedSkillsContainer>
						</>
					}
				</ProfileSection>
				<ProfileSection
					videoSmallScreen={media.videoBusinessSkillsSmall}
					videoLargeScreen={media.videoBusinessSkillsLarge}
					imageSmallScreen={media.imageBusinessSkillsSmall}
					imageLargeScreen={media.imageBusinessSkillsLarge}
					viewed={profileSkillsBusinessViewed}
					ref={profileSkillsBusinessRef}
				>
					<ProfileSectionHeader
						content={sectionProperties.businessSkills}
					/>
					{
						skills.business.standard && skills.business.standard[0] &&

						<>
							<SkillsStatementsList>
								{
									skills.business.standard.map((skill) =>
										<SkillsStatementsListItem
											key={skill.key}
										>
											<Copy
												kind="profile--skill-statement"
											>
												{skill.name}
											</Copy>
										</SkillsStatementsListItem>
									)
								}
							</SkillsStatementsList>
						</>
					}
				</ProfileSection>
				<ProfileSection
					videoSmallScreen={media.videoDesignSkillsSmall}
					videoLargeScreen={media.videoDesignSkillsLarge}
					imageSmallScreen={media.imageDesignSkillsSmall}
					imageLargeScreen={media.imageDesignSkillsLarge}
					viewed={profileSkillsDesignViewed}
					ref={profileSkillsDesignRef}
				>
					<ProfileSectionHeader
						content={sectionProperties.designSkills}
					/>
					{
						skills.design.standard && skills.design.standard[0] &&

						<StandardVisualizedSkillsContainer>
							{
								skills.design.standard.map((skill) =>
									<ProfileSkillVisualization
										key={skill.key}
										skill={skill}
									/>
								)
							}
						</StandardVisualizedSkillsContainer>
					}
				</ProfileSection>
				<ProfileSection
					videoSmallScreen={media.videoProfessionalExperienceSmall}
					videoLargeScreen={media.videoProfessionalExperienceLarge}
					imageSmallScreen={media.imageProfessionalExperienceSmall}
					imageLargeScreen={media.imageProfessionalExperienceLarge}
					viewed={profileProfessionalExperiencesViewed}
					ref={profileProfessionalExperiencesRef}
				>
					<ProfileSectionHeader
						content={sectionProperties.professionalExperiences}
					/>
					<ProfessionalExperiencesContainer>
					{
						professionalExperiences.map((professionalExperience) =>
							<ProfileProfessionalExperience
								key={professionalExperience.key}
								professionalExperience={professionalExperience}
							/>
						)
					}
					</ProfessionalExperiencesContainer>
				</ProfileSection>
				<ProfileSection
					videoSmallScreen={media.videoEducationAndCertificationSmall}
					videoLargeScreen={media.videoEducationAndCertificationLarge}
					imageSmallScreen={media.imageEducationAndCertificationSmall}
					imageLargeScreen={media.imageEducationAndCertificationLarge}
					viewed={profileEducationAndCertificationsViewed}
					ref={profileEducationAndCertificationsRef}
				>
					<ProfileSectionHeader
						content={sectionProperties.educationAndCertifications}
					/>
					<EducationAndCertificationsContainer>
						<EducationAndCertificationsSubset
							gridArea="certification"
						>
							{
								educationCertifications.filter(
									educationCertification =>
									educationCertification.type === 'certification'
								).map(
									educationCertification =>
									<ProfileEducationCertification
										key={educationCertification.key}
										educationCertification={educationCertification}
									/>
								)
							}
						</EducationAndCertificationsSubset>
						<EducationAndCertificationsSubset
							gridArea="graduate"
						>
							{
								educationCertifications.filter(
									educationCertification =>
									educationCertification.type === 'graduate'
								).map(
									educationCertification =>
									<ProfileEducationCertification
										key={educationCertification.key}
										educationCertification={educationCertification}
									/>
								)
							}
						</EducationAndCertificationsSubset>
						<EducationAndCertificationsSubset
							gridArea="undergraduate"
						>
							{
								educationCertifications.filter(
									educationCertification =>
									educationCertification.type === 'undergraduate'
								).map(
									educationCertification =>
									<ProfileEducationCertification
										key={educationCertification.key}
										educationCertification={educationCertification}
									/>
								)
							}
						</EducationAndCertificationsSubset>
					</EducationAndCertificationsContainer>
				</ProfileSection>
				<ProfileSection
					videoSmallScreen={media.videoVolunteerExperiencesSmall}
					videoLargeScreen={media.videoVolunteerExperiencesLarge}
					imageSmallScreen={media.imageVolunteerExperiencesSmall}
					imageLargeScreen={media.imageVolunteerExperiencesLarge}
					viewed={profileVolunteerExperiencesViewed}
					ref={profileVolunteerExperiencesRef}
				>
					<ProfileSectionHeader
						content={sectionProperties.volunteerExperiences}
					/>
					<VolunteerExperiencesContainer>
					{
						volunteerExperiences.map((volunteerExperience, volunteerExperienceIndex) =>
							<ProfileVolunteerExperience
								key={volunteerExperience.key}
								volunteerExperience={volunteerExperience}
								gridArea={`volunteerExperience${volunteerExperienceIndex}`}
							/>
						)
					}
					</VolunteerExperiencesContainer>
				</ProfileSection>
			</MainContentContainer>
			<CompressedTableOfContentsContainer>
				<CompressedTableOfContentsCollapsibleContainer>
					<Collapsible
						button={{
							'size': 'small',
							'surfaceStyle': 'outlined',
							'contextColor': 'onDark',
							'text': 'Contents'
						}}
						internalID="&ARrHqR&QJJVMLnA&3@rdsZN"
						copyKind="profile--table-of-contents-item--anchor--not-large-device"
					>
						<CompressedTableOfContentsListContainer
							sectionProperties={sectionProperties}
						/>
					</Collapsible>
				</CompressedTableOfContentsCollapsibleContainer>
			</CompressedTableOfContentsContainer>
			<ExpandedTableOfContentsContainer
				ref={profileExpandedTableOfContentsRef}
			>
				<ExpandedTableOfContentsListContainer>
					<ExpandedTableOfContentsList>
						{
							Object.keys(sectionProperties).map((sectionIndex) =>
								<ExpandedTableOfContentsListItem
									key={`expanded--${sectionProperties[sectionIndex].id}`}
								>
									<Copy
										kind="profile--table-of-contents-item--anchor--large-device"
									>
										<CopyLink
											url={`#${sectionProperties[sectionIndex].hash}`}
											inline={false}
										>
											{sectionProperties[sectionIndex].anchor}
										</CopyLink>
									</Copy>
								</ExpandedTableOfContentsListItem>,
							)
						}
					</ExpandedTableOfContentsList>
				</ExpandedTableOfContentsListContainer>
			</ExpandedTableOfContentsContainer>
		</ProfileContainer>
	);
};

Profile.propTypes = {
	'title': PropTypes.string,
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
	'volunteerExperiences': PropTypes.arrayOf(VolunteerExperienceWithReactKey),
}
