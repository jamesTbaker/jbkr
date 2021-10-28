import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
} from '@jbkr/style-service';
// import { MainContent } from '../Layout/MainContent';
import { Aside } from '../Layout/Aside';
// import { ProfileHeader } from './ProfileHeader';
import { ProfileSkill } from './ProfileSkill';
import { ProfileSkillVisualization } from './ProfileSkillVisualization';
import { ProfileSkills } from './ProfileSkills';
import { ProfileSection } from './ProfileSection';
import { ProfileProfessionalExperiences } from './ProfileProfessionalExperiences';
import { ProfileEducationCertifications } from './ProfileEducationCertifications';
import { ProfileVolunteerExperiences } from './ProfileVolunteerExperiences';
import { ProfileSectionHeader } from './ProfileSectionHeader';
import { Button } from '../../core/Button/Button';
import { Copy } from '../../core/Copy/Copy';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { Brand } from '../../..';
import { Collapsible } from '../../..';

const ProfileSectionsData = {
	'technicalSkills': {
		'hash': 'technical-skills',
		'anchor': 'Technical Skills',
		'title': {
			'preface': 'Skills',
			'main': 'Technical',
		},
	},
	'businessSkills': {
		'hash': 'business-skills',
		'anchor': 'Business Skills',
		'title': {
			'preface': 'Skills',
			'main': 'Business',
		},
	},
	'designSkills': {
		'hash': 'design-engineering-skills',
		'anchor': 'Design / Engineering Skills',
		'title': {
			'preface': 'Skills',
			'main': 'Design / Engineering',
		},
	},
	'professionalExperiences': {
		'hash': 'professional-experiences',
		'anchor': 'Professional Experiences',
		'title': {
			'main': 'Professional Experiences',
		},
	},
	'educationAndCertification': {
		'hash': 'education-and-certification',
		'anchor': 'Education and Certification',
		'title': {
			'main': 'Education and Certification',
		},
	},
	'volunteerExperiences': {
		'hash': 'volunteer-experiences',
		'anchor': 'Volunteer Experiences',
		'title': {
			'main': 'Volunteer Experiences',
		},
	},
};
const ProfileContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 13rem;
		display: grid;
		grid-template-areas:	"aside"
								"main";
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
		grid-area: main;
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
		grid-area: aside;
		padding: 3rem 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const CompressedTableOfContentsListContainer = styled.nav`
`;
const CompressedTableOfContentsList = styled.ol`
	margin: 1rem 0 0;
	padding: 2rem;
	border-radius: .375rem;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 39,
		'format': 'string',
	})};
`;
const CompressedTableOfContentsListItem = styled.li`
	list-style-type: none;
	padding-bottom: 1rem;
`;
const HiddenH3 = styled.h3`
	${hiddenBlock}
	margin: 0;
`;
const SampleComponent = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
export const Profile = ({
	title,
	skills,
	professionalExperiences,
	educationCertification,
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
						{
							skills.technical.featured.map((skill) =>
								<ProfileSkillVisualization
									key={skill.key}
									skill={skill}
									featured
								/>
							)
						}
					</>
				}
				{
					skills.technical.standard && skills.technical.standard[0] &&

					<>
						<HiddenH3>Standard</HiddenH3>
						{
							skills.technical.standard.map((skill) =>
								<ProfileSkillVisualization
									key={skill.key}
									skill={skill}
								/>
							)
						}
					</>
				}
				{/* <Copy kind="h3">Business Skills</Copy>
				{
					skills.business.featured && skills.business.featured[0] &&

					<>
						<Copy kind="h4">Featured</Copy>
						{
							skills.business.featured.map((skill) =>
								<ProfileSkill
									key={skill.key}
									skill={skill}
								/>
							)
						}
					</>
				}
				{
					skills.business.standard && skills.business.standard[0] &&

					<>
						<Copy kind="h4">Standard</Copy>
						{
							skills.business.standard.map((skill) =>
								<ProfileSkill
									key={skill.key}
									skill={skill}
								/>
							)
						}
					</>
				}
				<Copy kind="h3">Design / Engineering Skills</Copy>
				{
					skills.design.featured && skills.design.featured[0] &&

					<>
						<Copy kind="h4">Featured</Copy>
						{
							skills.design.featured.map((skill) =>
								<ProfileSkill
									key={skill.key}
									skill={skill}
									visualize
								/>
							)
						}
					</>
				}
				{
					skills.design.standard && skills.design.standard[0] &&

					<>
						<Copy kind="h4">Standard</Copy>
						{
							skills.design.standard.map((skill) =>
								<ProfileSkill
									key={skill.key}
									skill={skill}
									visualize
								/>
							)
						}
					</>
				} */}
			</ProfileSection>
			{/* <ProfileSkills
				skills={skills}
			/>
			<ProfileProfessionalExperiences
				professionalExperiences={professionalExperiences}
			/>
			<ProfileEducationCertifications
				educationCertification={educationCertification}
			/>
			<ProfileVolunteerExperiences
				volunteerExperiences={volunteerExperiences}
			/> */}
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
								<CompressedTableOfContentsListItem>
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
							<ExpandedTableOfContentsListItem>
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
