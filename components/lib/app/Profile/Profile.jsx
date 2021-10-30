import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber
} from '@jbkr/style-service';
// import { MainContent } from '../Layout/MainContent';
import { Aside } from '../Layout/Aside';
// import { ProfileHeader } from './ProfileHeader';
import { ProfileSkill } from './ProfileSkill';
import { ProfileSkillVisualization } from './ProfileSkillVisualization';
import { ProfileSkills } from './ProfileSkills';
import { ProfileSection } from './ProfileSection';
import { ProfileProfessionalExperience } from './ProfileProfessionalExperience';
import { ProfileEducationCertification } from './ProfileEducationCertification';
import { ProfileVolunteerExperience } from './ProfileVolunteerExperience';
import { ProfileSectionHeader } from './ProfileSectionHeader';
import { Button } from '../../core/Button/Button';
import { Copy } from '../../core/Copy/Copy';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { Brand } from '../../..';
import { Collapsible } from '../../..';


const ProfileSectionsData = {
	'technicalSkills': {
		'id': 'FN8MtdLdWPDsdANtLqZ82kcM',
		'hash': 'technical-skills',
		'anchor': 'Technical Skills',
		'title': {
			'preface': 'Skills',
			'main': 'Technical',
		},
	},
	'businessSkills': {
		'id': 'w7Q3L2kW5Jez7pL8sJtum6HA',
		'hash': 'business-skills',
		'anchor': 'Business Skills',
		'title': {
			'preface': 'Skills',
			'main': 'Business',
		},
	},
	'designSkills': {
		'id': 'pmftULeaT8sHpT2WNGKQa5X2',
		'hash': 'design-engineering-skills',
		'anchor': 'Design / Engineering Skills',
		'title': {
			'preface': 'Skills',
			'main': 'Design / Engineering',
		},
	},
	'professionalExperiences': {
		'id': 'FF8Bq5SaRnP6ud7QZcGe5HF8',
		'hash': 'professional-experiences',
		'anchor': 'Professional Experiences',
		'title': {
			'main': 'Professional Experiences',
		},
	},
	'educationAndCertifications': {
		'id': 'EnS2mjjJwpKnhdk8z2fauHpc',
		'hash': 'education-and-certification',
		'anchor': 'Education and Certification',
		'title': {
			'main': 'Education and Certification',
		},
	},
	'volunteerExperiences': {
		'id': 'bj82LMezkKNSzKiLyoCn3oii',
		'hash': 'volunteer-experiences',
		'anchor': 'Volunteer Experiences',
		'title': {
			'main': 'Volunteer Experiences',
		},
	},
};
const ProfileContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
		/* display: grid;
		grid-template-areas:	"aside"
								"main"; */
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		margin: 14rem auto 0;
		width: 100%;
		max-width: 180rem;
	}
`;
const ProfileHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 8rem 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 15rem 51rem 10rem 15rem;
	}
`;
const BrandContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 13.125rem;
		height: 8rem;
	}
`;
const BrandLink = styled.a`
	${
		({ $contextColor }) => {
			const colorFocusRing = $contextColor === 'onLight' ?
				color({
					'kind': 'Accent',
					'tone': 'Finch',
					'level': 2,
					'format': 'string'
				}) :
				color({
					'kind': 'Accent',
					'tone': 'Finch',
					'level': 1,
					'format': 'string'
					});
			const colorFocusRingSeparator = $contextColor === 'onLight' ?
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 1,
					'format': 'string'
				}) :
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'format': 'string'
				});
			return `
				&:focus {
					outline: none;
					> span {
						border-radius: .375rem;
						box-shadow: 0 0 0 .25rem ${colorFocusRingSeparator}, 0 0 0 .5rem ${colorFocusRing};
					}
				}
			`;
		}
	}
`;
const MainContentContainer = styled.main`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		/* grid-area: main; */
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: main;
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
			url('https://res.cloudinary.com/jbkrcdn/image/upload/v1633623944/Backgrounds/Copenhagen-Curves_gy6gjw.jpg');
		background-repeat: no-repeat;
		background-position: top 15rem right 0;
		background-size: 884px 438px;
	}
`;
const ExpandedTableOfContentsContainer = styled.aside`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		right: 18rem;
		height: 100%;
	}
`;
const ExpandedTableOfContentsListContainer = styled.nav`
	width: 28rem;
	position: sticky;
	top: 37rem;
	z-index: 1000;
`;
const ExpandedTableOfContentsList = styled.ol`
	margin: 0;
	padding: 0;
`;
const ExpandedTableOfContentsListItem = styled.li`
	list-style-type: none;
	margin-bottom: 4rem;
`;
const CompressedTableOfContentsContainer = styled.aside`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		/* grid-area: aside; */
		padding: 3rem 2rem;
		position: fixed;
		top: 13rem;
		width: 100%;
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
const CompressedTableOfContentsListContainer = styled.nav`
`;
const CompressedTableOfContentsList = styled.ol`
		position: fixed;
		top: 23rem;
		left: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 2rem;
		background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 37,
			'format': 'string',
		})};

	/* max-width: 36rem;
	border-radius: .375rem;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 39,
		'format': 'string',
	})}; */
`;
const CompressedTableOfContentsListItem = styled.li`
	list-style-type: none;
	padding-bottom: 1rem;
`;
const HiddenH3 = styled.h3`
	${hiddenBlock}
	margin: 0;
`;
const FeaturedVisualizedSkillsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-bottom: 3rem;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
const StandardVisualizedSkillsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
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
		border-top: solid .125rem ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string',
		})};
		padding: 1.875rem 0 3rem 0;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		width: calc(50% - 1.125rem);
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		border-top: solid .125rem ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string',
		})};
		padding: 1.875rem 0 3rem 0;
		width: calc(50% - 1.125rem);
	}
`;
const ProfessionalExperiencesContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const EducationAndCertificationsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-areas: "certification graduate undergraduate";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 2rem 2rem;
	}
`;
const EducationAndCertificationsSubset = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ gridArea }) => `grid-area: ${gridArea};`
		}
	}
`;
const VolunteerExperiencesContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
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
	volunteerExperiences
}) => (
	<ProfileContainer>
		<MainContentContainer id="main-content" role="main">
			<ProfileHeader>
				<BrandContainer>
					<BrandLink
						href="/"
						$contextColor="onDark"
					>
						<Brand
							contextColor="onDark"
						/>
					</BrandLink>
				</BrandContainer>
				<Copy
					kind="landmark-title"
				>
					Profile
				</Copy>
			</ProfileHeader>
			<ProfileSection
				videoLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				videoNotLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				posterLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635344345/Backgrounds/profile--section-background--poster--large-screen--sample_gfxpti.jpg"
				posterNotLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635434862/Backgrounds/profile--section-background--poster--small-screen--sample_ct6z2k.jpg"
			>
				<ProfileSectionHeader
					content={ProfileSectionsData.technicalSkills}
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
				videoLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				videoNotLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				posterLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635344345/Backgrounds/profile--section-background--poster--large-screen--sample_gfxpti.jpg"
				posterNotLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635434862/Backgrounds/profile--section-background--poster--small-screen--sample_ct6z2k.jpg"
			>
				<ProfileSectionHeader
					content={ProfileSectionsData.businessSkills}
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
				videoLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				videoNotLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				posterLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635344345/Backgrounds/profile--section-background--poster--large-screen--sample_gfxpti.jpg"
				posterNotLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635434862/Backgrounds/profile--section-background--poster--small-screen--sample_ct6z2k.jpg"
			>
				<ProfileSectionHeader
					content={ProfileSectionsData.designSkills}
				/>
				{
					skills.design.featured && skills.design.featured[0] &&

					<>
						<HiddenH3>Featured</HiddenH3>
						<FeaturedVisualizedSkillsContainer>
							{
								skills.design.featured.map((skill) =>
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
					skills.design.standard && skills.design.standard[0] &&

					<>
						<HiddenH3>Standard</HiddenH3>
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
					</>
				}
			</ProfileSection>
			<ProfileSection
				videoLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				videoNotLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				posterLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635344345/Backgrounds/profile--section-background--poster--large-screen--sample_gfxpti.jpg"
				posterNotLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635434862/Backgrounds/profile--section-background--poster--small-screen--sample_ct6z2k.jpg"
			>
				<ProfileSectionHeader
					content={ProfileSectionsData.professionalExperiences}
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
				videoLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				videoNotLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				posterLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635344345/Backgrounds/profile--section-background--poster--large-screen--sample_gfxpti.jpg"
				posterNotLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635434862/Backgrounds/profile--section-background--poster--small-screen--sample_ct6z2k.jpg"
			>
				<ProfileSectionHeader
					content={ProfileSectionsData.educationAndCertifications}
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
				videoLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				videoNotLargeScreen="https://res.cloudinary.com/jbkrcdn/video/upload/v1633607248/Backgrounds/profile--section-background--large-screen--sample_pmufvu.mp4"
				posterLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635344345/Backgrounds/profile--section-background--poster--large-screen--sample_gfxpti.jpg"
				posterNotLargeScreen="https://res.cloudinary.com/jbkrcdn/image/upload/v1635434862/Backgrounds/profile--section-background--poster--small-screen--sample_ct6z2k.jpg"
			>
				<ProfileSectionHeader
					content={ProfileSectionsData.volunteerExperiences}
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
		<CompressedTableOfContentsContainer
			id="table-of-contents"
		>
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
				<CompressedTableOfContentsListContainer>
					<CompressedTableOfContentsList>
						{
							Object.keys(ProfileSectionsData).map((sectionKey) =>
								<CompressedTableOfContentsListItem
									key={`compressed--${ProfileSectionsData[sectionKey].id}`}
								>
										<CopyLink
											url={`#${ProfileSectionsData[sectionKey].hash}`}
											inline={false}
										>
											{ProfileSectionsData[sectionKey].anchor}
										</CopyLink>
								</CompressedTableOfContentsListItem>,
							)
						}
					</CompressedTableOfContentsList>
				</CompressedTableOfContentsListContainer>
			</Collapsible>
		</CompressedTableOfContentsContainer>
		<ExpandedTableOfContentsContainer>
			<ExpandedTableOfContentsListContainer>
				<ExpandedTableOfContentsList>
					{
						Object.keys(ProfileSectionsData).map((sectionKey) =>
							<ExpandedTableOfContentsListItem
								key={`expanded--${ProfileSectionsData[sectionKey].id}`}
							>
								<Copy
									kind="profile--table-of-contents-item--anchor--large-device"
								>
									<CopyLink
										url={`#${ProfileSectionsData[sectionKey].hash}`}
										inline={false}
									>
										{ProfileSectionsData[sectionKey].anchor}
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
