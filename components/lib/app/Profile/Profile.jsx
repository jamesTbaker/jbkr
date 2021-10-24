import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color
} from '@jbkr/style-service';
// import { MainContent } from '../Layout/MainContent';
import { Aside } from '../Layout/Aside';
// import { ProfileHeader } from './ProfileHeader';
import { ProfileSkills } from './ProfileSkills';
import { ProfileProfessionalExperiences } from './ProfileProfessionalExperiences';
import { ProfileEducationCertifications } from './ProfileEducationCertifications';
import { ProfileVolunteerExperiences } from './ProfileVolunteerExperiences';
import { Button } from '../../core/Button/Button';
import { Copy } from '../../core/Copy/Copy';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { Brand } from '../../..';

/* const ProfileContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-rows: 14rem 48rem auto;
		grid-template-columns: 72% 28%;
		grid-template-areas:	"profileTitle		profileTableOfContents"
								"profileSections	profileTableOfContents";
		margin: 14rem auto 0;
		width: 100%;
		max-width: 180rem;
	}
`; */
const ProfileContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		margin: 14rem auto 0;
		width: 100%;
		max-width: 180rem;
	}
`;
const ProfileHeader = styled.header`
	background-color: darkblue;
	${deviceWidthQuery.not({ 'width': 'l' })} {
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
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: main;
	}
`;
const Something = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const CompressedTableOfContentsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const ExpandedTableOfContentsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: fixed;
		top: 296px;
		right: 120px;
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
		<CompressedTableOfContentsContainer>
			<Aside>
				<nav>
					<ol>
						<li><a href="#technical-skills">
							Technical Skills
						</a></li>
						<li><a href="#business-skills">
							Business Skills
						</a></li>
						<li><a href="#design-engineering-skills">
							Design / Engineering Skills
						</a></li>
						<li><a href="#professional-experiences">
							Professional Experiences
						</a></li>
						<li><a href="#education-and-certification">
							Education and Certification
						</a></li>
						<li><a href="#volunteer-experiences">
							Volunteer Experiences
						</a></li>
					</ol>
				</nav>
			</Aside>
		</CompressedTableOfContentsContainer>
		<ExpandedTableOfContentsContainer>
			<Aside>
				<nav>
					<ol>
						<li><a href="#technical-skills">
							Technical Skills
						</a></li>
						<li><a href="#business-skills">
							Business Skills
						</a></li>
						<li><a href="#design-engineering-skills">
							Design / Engineering Skills
						</a></li>
						<li><a href="#professional-experiences">
							Professional Experiences
						</a></li>
						<li><a href="#education-and-certification">
							Education and Certification
						</a></li>
						<li><a href="#volunteer-experiences">
							Volunteer Experiences
						</a></li>
					</ol>
				</nav>
			</Aside>
		</ExpandedTableOfContentsContainer>
	</ProfileContainer>
);
