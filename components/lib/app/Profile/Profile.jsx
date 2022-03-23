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
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, standardTime
} from '@jbkr/style-service';
import { ProfileValuePropositionOne } from './ProfileValuePropositionOne';
import { ProfileValuePropositionTwo } from './ProfileValuePropositionTwo';
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
	position: relative;
	z-index: ${zIndexNumber().profileSectionContainer};
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
const ProfileValuePropositionsContainer = styled.section`
	z-index: ${zIndexNumber().profileSectionContainer};
	position: relative;
	width: calc(100% - 4rem);
	max-width: 150rem;
	margin: 0 auto;
	text-align: left;
`;
const ProfileValuePropositionOneContainerExtraSmallScreen = styled.div`
	@media (min-width: 386px) {
		display: none;
	}
`;
const ProfileValuePropositionOneContainerSmallToLargeScreen = styled.div`
	@media (max-width: 385px) {
		display: none;
	}
`;
const ProfileValuePropositionTwoContainerExtraSmallToSmallSmaller = styled.div`
	@media (min-width: 369px) {
		display: none;
	}
`;
const ProfileValuePropositionTwoContainerExtraSmallToSmallLarger = styled.div`
	@media (max-width: 368px) {
		display: none;
	}
	@media (min-width: 503px) {
		display: none;
	}
`;
const ProfileValuePropositionTwoContainerSmallToMedium = styled.div`
	@media (max-width: 502px) {
		display: none;
	}
	@media (min-width: 951px) {
		display: none;
	}
`;
const ProfileValuePropositionTwoContainerLargeScreen = styled.div`
	@media (max-width: 950px) {
		display: none;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})`
	@keyframes fadeInOut {
		0% {
			opacity: 0;
		}
		15% {
			opacity: 0;
		}
		35% {
			opacity: 1;
		}
		65% {
			opacity: 1;
		}
		85% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	@media (min-width: 580px) {
		&:before,
		&:after {
			content: '';
			position: absolute;
			top: 15rem;
			right: 0;
			width: 35rem;
			height: 90rem;
			border-radius: .375rem;
			background-size: cover;
			background-repeat: no-repeat;
			transition: all 1s;
		}
		&:before {
			${({ $menuBackgroundImageLargeOne }) => `
				background-image:
					url('${$menuBackgroundImageLargeOne}');
			`}
		}
		&:after {
			${({ $menuBackgroundImageLargeTwo }) => `
				background-image:
					url('${$menuBackgroundImageLargeTwo}');
			`}
			opacity: 0;
			animation: fadeInOut 5s linear infinite;
		}
	}
	@media (min-width: 700px) {
		&:before,
		&:after {
			width: 45rem;
		}
	}
	@media (min-width: 800px) {
		&:before,
		&:after {
			width: 53rem;
		}
	}
	@media (min-width: 880px) {
		&:before,
		&:after {
			width: 60rem;
		}
	}
	@media (min-width: 910px) {
		&:before,
		&:after {
			width: 64rem;
		}
	}
	@media (min-width: 951px) {
		&:before,
		&:after {
			width: 55rem;
			height: 86rem;
		}
	}
	@media (min-width: 1025px) {
		&:before,
		&:after {
			width: 65rem;
			height: 100rem;
		}
	}
	@media (min-width: 1100px) {
		&:before,
		&:after {
			width: 68rem;
		}
	}
	@media (min-width: 1150px) {
		&:before,
		&:after {
			width: 70rem;
		}
	}
	@media (min-width: 1200px) {
		&:before,
		&:after {
			width: 75rem;
		}
	}
	@media (min-width: 1312px) and (max-width: 1439px) {
		&:before,
		&:after {
			width: 80rem;
			right: 7rem;
		}
	}
	@media (min-width: 1440px) {
		&:before,
		&:after {
			width: 90rem;
			right: 7rem;
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
	valuePropositions,
}) => {
	const profileSkillsTechnicalRef = useRef();
	const profileSkillsBusinessRef = useRef();
	const profileSkillsDesignRef = useRef();
	const profileProfessionalExperiencesRef = useRef();
	const profileEducationAndCertificationsRef = useRef();
	const profileVolunteerExperiencesRef = useRef();
	const profileExpandedTableOfContentsRef = useRef();

	const [profileSkillsTechnicalViewed,
			setProfileSkillsTechnicalViewed] = useState(false);
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
		profileExpandedTableOfContentsRef.current.classList.add(
			'animation-state--final'
		);
		gsap.registerPlugin(ScrollTrigger);
		gsap.defaults({
			ease: 'power4.inOut',
			duration: standardTime().s,
		});
		ScrollTrigger.defaults({
			start: "top 100%",
			end: "top 75%",
			scrub: 4,
		});
		gsap.from(
			profileSkillsTechnicalRef.current,
			{
				opacity: 0,
				scrollTrigger: {
					trigger: profileSkillsTechnicalRef.current,
					onEnter() {
						setProfileSkillsTechnicalViewed(true);
					},
					onLeaveBack() {
						setProfileSkillsTechnicalViewed(false);
					},
				},
			},
		);
		gsap.from(
			profileSkillsBusinessRef.current,
			{
				opacity: 0,
				scrollTrigger: {
					trigger: profileSkillsBusinessRef.current,
					onEnter() {
						setProfileSkillsBusinessViewed(true);
					},
					onLeaveBack() {
						setProfileSkillsBusinessViewed(false);
					},
				},
			},
		);
		gsap.from(
			profileSkillsDesignRef.current,
			{
				opacity: 0,
				scrollTrigger: {
					trigger: profileSkillsDesignRef.current,
					onEnter() {
						setProfileSkillsDesignViewed(true);
					},
					onLeaveBack() {
						setProfileSkillsDesignViewed(false);
					},
				},
			},
		);
		gsap.from(
			profileProfessionalExperiencesRef.current,
			{
				opacity: 0,
				scrollTrigger: {
					trigger: profileProfessionalExperiencesRef.current,
					onEnter() {
						setProfileProfessionalExperiencesViewed(true);
					},
					onLeaveBack() {
						setProfileProfessionalExperiencesViewed(false);
					},
				},
			},
		);
		gsap.from(
			profileEducationAndCertificationsRef.current,
			{
				opacity: 0,
				scrollTrigger: {
					trigger: profileEducationAndCertificationsRef.current,
					onEnter() {
						setProfileEducationAndCertificationsViewed(true);
					},
					onLeaveBack() {
						setProfileEducationAndCertificationsViewed(false);
					},
				},
			},
		);
		gsap.from(
			profileVolunteerExperiencesRef.current,
			{
				opacity: 0,
				scrollTrigger: {
					trigger: profileVolunteerExperiencesRef.current,
					onEnter() {
						setProfileVolunteerExperiencesViewed(true);
					},
					onLeaveBack() {
						setProfileVolunteerExperiencesViewed(false);
					},
				},
			},
		);
	}, []);
	return (
		<ProfileContainer>
			<MainContentContainer
				$menuBackgroundImageLargeOne={media.imageMenuLargeOne.url}
				$menuBackgroundImageLargeTwo={media.imageMenuLargeTwo.url}
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
				<ProfileValuePropositionsContainer>
					<ProfileValuePropositionOneContainerExtraSmallScreen>
						<ProfileValuePropositionOne
							content={valuePropositions.one.extraSmall}
							screenSize="extraSmall"
						/>
					</ProfileValuePropositionOneContainerExtraSmallScreen>
					<ProfileValuePropositionOneContainerSmallToLargeScreen>
						<ProfileValuePropositionOne
							content={valuePropositions.one.smallToLarge}
							screenSize="smallToLarge"
						/>
					</ProfileValuePropositionOneContainerSmallToLargeScreen>
					<ProfileValuePropositionTwoContainerExtraSmallToSmallSmaller>
						<ProfileValuePropositionTwo
							content={
								valuePropositions.two.extraSmallToSmall
							}
							screenSize="extraSmallToSmallSmaller"
						/>
					</ProfileValuePropositionTwoContainerExtraSmallToSmallSmaller>
					<ProfileValuePropositionTwoContainerExtraSmallToSmallLarger>
						<ProfileValuePropositionTwo
							content={
								valuePropositions.two.extraSmallToSmall
							}
							screenSize="extraSmallToSmallLarger"
						/>
					</ProfileValuePropositionTwoContainerExtraSmallToSmallLarger>
					<ProfileValuePropositionTwoContainerSmallToMedium>
						<ProfileValuePropositionTwo
							content={
								valuePropositions.two.smallToMedium
							}
							screenSize="smallToMedium"
						/>
					</ProfileValuePropositionTwoContainerSmallToMedium>
					<ProfileValuePropositionTwoContainerLargeScreen>
						<ProfileValuePropositionTwo
							content={
								valuePropositions.two.large
							}
							screenSize="large"
						/>
					</ProfileValuePropositionTwoContainerLargeScreen>
				</ProfileValuePropositionsContainer>
				<ProfileSection
					videoSmallScreen={media.videoTechSkillsSmall}
					videoLargeScreen={media.videoTechSkillsLarge}
					imageSmallScreen={media.imageTechSkillsSmall}
					imageLargeScreen={media.imageTechSkillsLarge}
					viewed={profileSkillsTechnicalViewed}
					ref={profileSkillsTechnicalRef}
				>
					<ProfileSectionHeader
						content={sectionProperties.technicalSkills}
						viewed={profileSkillsTechnicalViewed}
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
						viewed={profileSkillsBusinessViewed}
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
						viewed={profileSkillsDesignViewed}
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
						viewed={profileProfessionalExperiencesViewed}
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
						viewed={profileEducationAndCertificationsViewed}
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
						viewed={profileVolunteerExperiencesViewed}
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
