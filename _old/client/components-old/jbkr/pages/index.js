
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import ProfileBrief from '../pdf/Profile Brief - James T. Baker.pdf';
import { scroller } from 'react-scroll';
import BackToDeepDiveLink from '../components/BackToDeepDiveLink';
import SkillRatingVisualization from '../components/SkillRatingVisualization';

// ----- PAGE

// STYLED COMPONENTS

const BriefContainer = styled.p`
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('m', 'small')};
		line-height: ${(StylePatterns.FontSize('l', 'small').slice(0, -3) * 1.5)}rem;
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('m', 'medium')};
		line-height: ${(StylePatterns.FontSize('l', 'medium').slice(0, -3) * 1.5)}rem;
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('m', 'large')};
		line-height: ${(StylePatterns.FontSize('l', 'large').slice(0, -3) * 1.3)}rem;
	`}
	em {
		${({ screenType }) => screenType === 'small' && `
			font-size: ${StylePatterns.FontSize('l', 'small')};
		`}
		${({ screenType }) => screenType === 'medium' && `
			font-size: ${StylePatterns.FontSize('l', 'medium')};
		`}
		${({ screenType }) => screenType === 'large' && `
			font-size: ${StylePatterns.FontSize('l', 'large')};
		`}
	}
`;
const DeepDiveHeader = styled.h2`
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('xl', 'small')};
	`}
`;
const DeepDiveList = styled.ul`
	margin: 2rem 0 0 0;

	${({ screenType }) => screenType === 'small' && `
		padding-bottom: 3.8rem;
	`}
`;
const DeepDiveListItem = styled.li`
	list-style: none;
	margin: 0;

	${({ screenType }) => screenType !== 'small' && `
		padding: 0 0 2.2rem;
	`}
	${({ screenType }) => screenType === 'small' && `
		padding: 1rem 0 1.2rem;
	`}
`;
const DeepDiveLink = styled.a`
	border: 0;
	cursor: pointer;
	
	&:hover {
		border: 0;
	}
`;
const Section = styled.section`
	padding: 5rem 0;
	${props => props.screenType === 'small' && `
		margin: 0 2rem;
	`}
	${props => props.screenType !== 'small' && `
		margin: 0 5rem;
	`}
	border-top: .2rem solid ${StylePatterns.Color('grey-8')};
`;
const SectionHeader = styled.h2`
	${props => props.screenType === 'large' && `
		margin-bottom: 2.25rem;
	`}
	${props => props.screenType === 'medium' && `
		margin-bottom: 2.25rem;
	`}
	${props => props.screenType === 'small' && `
		margin-bottom: 2.25rem;
	`}
`;
const LowerPageContentContainer = styled.div`
`;

// =============

const SkillsListContainer = styled.div`
	border-top: .1rem solid ${StylePatterns.Color('grey-5')};
	padding: 3rem 0 6rem;
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:"skillsHeader skillsBody";
		grid-template-rows: auto;
		grid-template-columns: 1fr 2fr;
		grid-gap: 3rem;
	`}
`;
const SkillListHeader = styled.h3`
	${props => props.screenType === 'large' && `
		grid-area: ${props.gridArea};
		margin: 0;
		line-height: 1;
	`}
`;
const SkillList = styled.ul`
	${props => props.screenType === 'large' && `
		grid-area: ${props.gridArea};
	`}
	${props => props.screenType !== 'small' && props.columns && `
		column-count: ${props.columns};
		column-gap: 3rem;
	`}
	${props => props.screenType === 'small' && `
		padding-top: 2rem;
	`}
`;
const SkillBasicContainer = styled.li`
	margin-bottom: 1.5rem;
`;
const SkillRatingContainer = styled.li`
	display: grid;
	grid-template-areas:"skillText skillVisualization";
	grid-template-columns: 1fr 1fr;
	grid-gap: 3rem;
	margin-left: 0;
	${props => props.screenType !== 'small' && `
		margin-bottom: 1.25rem;
	`}
	${props => props.screenType === 'small' && `
		padding: 1.5rem 0;
		border-bottom: .1rem solid ${StylePatterns.Color('grey-2')};
	`}
	&:last-child {
		border-color: transparent;
	}
`;
const SkillRatingText = styled.span`
	grid-area: skillText;
	text-align: right;
`;
// =============

const JobContainer = styled.div`
	border-top: .1rem solid ${StylePatterns.Color('grey-5')};
	padding: 3rem 0 6rem;
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:"jobMeta jobBody";
		grid-template-rows: auto;
		grid-template-columns: 1fr 2fr;
		grid-gap: 3rem;
	`}
`;
const JobMetaContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: jobMeta;
	`}
`;
const JobTitle = styled.h3`
	margin: 0;
	line-height: 1;
`;
const JobEmployer = styled.p`
	font-weight: ${StylePatterns.FontWeight('medium')};
	margin: .5rem 0 .25rem;
`;
const JobDates = styled.p`
	font-weight: ${StylePatterns.FontWeight('regular')};
	font-style:  italic;
	margin: .5rem 0 .25rem;
`;
const JobDescription = styled.div`
	font-weight: ${StylePatterns.FontWeight('light')};
	margin: 1rem 0 .25rem;

	${props => props.screenType !== 'small' && `
		column-count: 2;
		column-gap: 3rem;
	`}
`;

// =============

const EducationAndCertificationsSectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "certifications grad undergrad";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const EducationAndCertificationsSection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const SchoolTitle = styled.h3`
`;
const SchoolSubjectOrDegree = styled.p`
	font-weight: ${StylePatterns.FontWeight('medium')};
	margin: .5rem 0 .25rem;
`;
const SchoolDates = styled.p`
	font-weight: ${StylePatterns.FontWeight('regular')};
	font-style:  italic;
	margin: .5rem 0 .25rem;
`;

// =============

const VolunteerExperiencesSectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "latest mid earliest";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const VolunteerExperiencesSection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const VolExpContribution = styled.h3`
`;
const VolExpOrganization = styled.p`
	font-weight: ${StylePatterns.FontWeight('medium')};
	margin: .5rem 0 .25rem;
`;
const VolExpDates = styled.p`
	font-weight: ${StylePatterns.FontWeight('regular')};
	font-style:  italic;
	margin: .5rem 0 .25rem;
`;

// CONTENTS

const handleSkillsNavItemClick = () => {
	scroller.scrollTo('skills', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleProfressionalExperienceNavItemClick = () => {
	scroller.scrollTo('professional-experience', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleEdAndCertificationsNavItemClick = () => {
	scroller.scrollTo('education-and-certifications', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleVolunteerExperienceNavItemClick = () => {
	scroller.scrollTo('volunteer-experience', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const HeadTitle = 'Profile';
const HeadDescription = 'Profile of James T. Baker';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			Greater Boston, USA
		</p>
		<p>
			<a href={ProfileBrief}>
				Profile Brief
				<Icon
					iconPosition="after"
					iconContent="cloud-download"
					iconSize="1.5"
				/>
			</a>
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>Profile</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<h2>I speak suit, geek, and creative.</h2>
		<BriefContainer
			screenType={screenType}
		>
			My <em>20 years'</em> experience in&nbsp;
			<em>design</em>,&nbsp;
			<em>technical product development</em>, and&nbsp;
			<em>management</em>&nbsp;
			have allowed me to <em>lead and execute</em> projects and operations
			at the intersection of <em>business</em>, <em>software</em>, <em>design</em>, and <em>digital media</em>.
		</BriefContainer>

	</div>
);
const returnTopContentFour = screenType => (
	<div
		className="sb-root--top-content"
		id="deep-dive-container"
	>
		<DeepDiveHeader
			screenType={screenType}
		>
			Deep Dive
		</DeepDiveHeader>
		<DeepDiveList
			screenType={screenType}
		>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleSkillsNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="flask"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Skills
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleProfressionalExperienceNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="history"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Professional Experience
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleEdAndCertificationsNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="bank"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Education and Certifications
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleVolunteerExperienceNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="heart-o"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Volunteer Experience
				</DeepDiveLink>
			</DeepDiveListItem>
		</DeepDiveList>
	</div>
);
const returnLowerPageContent = screenType => (
	<LowerPageContentContainer
		className="sb-root--lower-content"
		screenType={screenType}
	>
		<Section
			screenType={screenType}
			id="skills"
		>
			<SectionHeader
				screenType={screenType}
			>
				Skills
			</SectionHeader>
			<SkillsListContainer
				screenType={screenType}
			>
				<SkillListHeader
					screenType={screenType}
					gridArea="skillsHeader"
				>
					Tech
				</SkillListHeader>
				<SkillList
					screenType={screenType}
					gridArea="skillsBody"
				>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							JavaScript / ES6 / ES7
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							React
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							REST API development
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Node.js
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							MongoDB
						</SkillRatingText>
						<SkillRatingVisualization
							level="7"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Serverless / AWS Lambda
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							System architecture
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Drupal
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Git
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							PHP
						</SkillRatingText>
						<SkillRatingVisualization
							level="7"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							SQL
						</SkillRatingText>
						<SkillRatingVisualization
							level="5"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							ColdFusion
						</SkillRatingText>
						<SkillRatingVisualization
							level="5"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Linux
						</SkillRatingText>
						<SkillRatingVisualization
							level="4"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							VirtualBox
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
				</SkillList>
			</SkillsListContainer>
			<SkillsListContainer
				screenType={screenType}
			>
				<SkillListHeader
					screenType={screenType}
					gridArea="skillsHeader"
				>
					Business
				</SkillListHeader>
				<SkillList
					screenType={screenType}
					gridArea="skillsBody"
					columns={2}
				>
					<SkillBasicContainer>Communicating and motivating across organizational levels and boundaries</SkillBasicContainer>
					<SkillBasicContainer>Analysis, research, information integration and synthesis, design thinking, systems thinking</SkillBasicContainer>
					<SkillBasicContainer>Team building, individual mentorship</SkillBasicContainer>
					<SkillBasicContainer>Agile process, Scrum Master</SkillBasicContainer>
					<SkillBasicContainer>Process engineering</SkillBasicContainer>
					<SkillBasicContainer>Financial management</SkillBasicContainer>
					<SkillBasicContainer>Product / project / program management</SkillBasicContainer>
					<SkillBasicContainer>Customer service and support</SkillBasicContainer>
					<SkillBasicContainer>Business strategy, strategic planning, strategic management</SkillBasicContainer>
					<SkillBasicContainer>Change management</SkillBasicContainer>
					<SkillBasicContainer>Collaboration, conflict management, delegation, negotiation</SkillBasicContainer>
					<SkillBasicContainer>Prioritizing, scheduling, decision making, delegation</SkillBasicContainer>
					<SkillBasicContainer>Emotional intelligence, cultural intelligence, empathy, mentoring, diplomacy, patience, building trust</SkillBasicContainer>
				</SkillList>
			</SkillsListContainer>
			<SkillsListContainer
				screenType={screenType}
			>
				<SkillListHeader
					screenType={screenType}
					gridArea="skillsHeader"
				>
					Design / Engineering
				</SkillListHeader>
				<SkillList
					screenType={screenType}
					gridArea="skillsBody"
				>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Universal design (accessibility)
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Art direction
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							UX / CX engineering
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Brand strategy, development
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Content strategy
						</SkillRatingText>
						<SkillRatingVisualization
							level="8"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Data visualization
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Typography, color, composition
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Figma
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Adobe Illustrator
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Adobe Photoshop
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Adobe After Effects
						</SkillRatingText>
						<SkillRatingVisualization
							level="3"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Adobe Premiere
						</SkillRatingText>
						<SkillRatingVisualization
							level="3"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Adobe InDesign
						</SkillRatingText>
						<SkillRatingVisualization
							level="7"
						/>
					</SkillRatingContainer>
					<SkillRatingContainer
						screenType={screenType}
					>
						<SkillRatingText>
							Digital asset management
						</SkillRatingText>
						<SkillRatingVisualization
							level="9"
						/>
					</SkillRatingContainer>
				</SkillList>
			</SkillsListContainer>

			<BackToDeepDiveLink />
		</Section>
		
		
		
		
		<Section
			screenType={screenType}
			id="professional-experience"
		>
			<SectionHeader
				screenType={screenType}
			>
				Professional Experience
			</SectionHeader>
			<JobContainer
					screenType={screenType}
				>
				<JobMetaContainer
					screenType={screenType}
				>
					<JobTitle>Programs Manager: Web Enterprise Processes, Digital Media Asset Management, Business Data Feeds</JobTitle>
					<JobEmployer>Museum of Science, Boston</JobEmployer>
					<JobDates>July 2013 &mdash; Present</JobDates>
				</JobMetaContainer>
				<JobDescription
					screenType={screenType}
				>
					<ul>
						<li>
							Manage multiple enterprise software development programs, including all phases of SDLC, in a matrix organization.
							<ul>
								<li>
									Web Enterprise Processes &mdash; With dozens of stakeholders across the organization, analyzing 56 business processes, re-engineering for process improvements, and converting from paper and 1990s digital workflows to apps built on Office 365 / SharePoint Online. In many cases, reducing business process cycle time from days to minutes.							
								</li>
								<li>
									Digital Media Asset Management – Maintain and update DAMS used to store, organize, and search 30k+ images. Determine requirements for successor system, which will also house 40TB video and thousands of audio files, with help of stakeholders: marketing, product managers and developers, media producers, system administrators, and storage architects, finance/legal, librarians/archivists.
								</li>
								<li>
									Business Data Feeds – Work with software engineers, database administrators, and system administrators on requirements (data schemas, generation frequency), development, generation, storage, and maintenance of feeds (XML, JSON) communicating between enterprise and consumer-facing applications.
								</li>
							</ul>
						</li>
						<li>
							Developed proprietary business process API (JavaScript), in turn leveraging Microsoft’s REST APIs, to allow for rapid production of custom apps. Recognized by Microsoft personnel as a pioneer in the use of JavaScript and the REST APIs to solve proprietary business problems.
						</li>
						<li>
							Communicating with stakeholders and with hundreds of users: staff members, senior management, Chairman of the Board, vendors, and collaborating partners.
						</li>
						<li>
							Continually monitoring and controlling quality. Collecting and analyzing user feedback, and using it to inform and prioritize user stories.
						</li>
						<li>
							Alert stakeholders and senior management to risks and provide risk mitigation strategies.
						</li>
						<li>
							Converted programs from waterfall to agile and continue to drive other internal process improvements.
						</li>
						<li>
							Report to AVP of Information and Interactive Technology.
						</li>
					</ul>
				</JobDescription>
			</JobContainer>
				

			<JobContainer
					screenType={screenType}
				>
				<JobMetaContainer
					screenType={screenType}
				>
					<JobTitle>Program Manager: Consumer Web Products</JobTitle>
					<JobEmployer>Museum of Science, Boston</JobEmployer>
					<JobDates>July 2011 &mdash; July 2013</JobDates>
				</JobMetaContainer>
				<JobDescription
					screenType={screenType}
				>
					<ul>
						<li>
							Manage web development program in a matrix organization.
						</li>
						<li>
							Program dimensions:
							<ul>
								<li>
									20+ websites / web apps: organization’s main website, numerous marketing and fundraising campaigns, research data collection used to influence environmental policy, education-oriented products, and internal digital signage.
								</li>
								<li>
									350k unique monthly visitors.
								</li>
								<li>
									Ecommerce, backend architecture, DevOps with internal and external admins, information architecture and content strategy, interactive UI features, accessibility meeting the standards for NSF and NASA funding, and visual branding and aesthetic.
								</li>
							</ul>
						</li>
						<li>
							Built agile (scrum) development team from scratch, including co-located and distributed team members (Boston and Shanghai), and including editors, UX designers, software engineers, and QA staff. Began as a very hands-on manager. Once the team was functioning and practices were set, stepped back to become primarily a ScrumMaster (helping product owners with backlogs and facilitating processes with the development team), as well as an advisor to the development team, and a liaison to senior management.
						</li>
						<li>
							Ensure revenue channels and opportunities are adequately supported, product goals were met, and organizational resources were utilized efficiently.
						</li>
						<li>
							Lead Web Governance Team (21 key stakeholders) and communicate with numerous other stakeholders across the organization. Lead prioritization and strategic discussions.
						</li>
						<li>
							Review analytics to evaluate and report on efficacy of web properties.
						</li>
						<li>
							Alert stakeholders and senior management to risks and provide risk mitigation strategies.
						</li>
						<li>
							Transformed culture surrounding these central and vital organizational assets. Led the introduction of agile processes to the organization.
						</li>
						<li>
							Report to AVP of Information and Interactive Technology.
						</li>
					</ul>
				</JobDescription>
			</JobContainer>


			<JobContainer
					screenType={screenType}
				>
				<JobMetaContainer
					screenType={screenType}
				>
					<JobTitle>Designer / Full Stack Web Developer</JobTitle>
					<JobEmployer>Museum of Science, Boston</JobEmployer>
					<JobDates>August 2010 &mdash; July 2011</JobDates>
				</JobMetaContainer>
				<JobDescription
					screenType={screenType}
				>
					<ul>
						<li>
							Developed consumer web products inside a waterfall paradigm.
						</li>
						<li>
							Collaborated with stakeholders, content strategist, system administrators, other designers.
						</li>
						<li>
							Created visual designs and interactive user experiences, sometimes from scratch, and sometimes based on the work of exhibit designers and/or print marketing designers.
						</li>
						<li>
							Used PHP, MySQL, HTML, CSS, JavaScript, Flash, Illustrator, and Photoshop.
						</li>
					</ul>
				</JobDescription>
			</JobContainer>


			<JobContainer
					screenType={screenType}
				>
				<JobMetaContainer
					screenType={screenType}
				>
					<JobTitle>Founder, Consulting Principal</JobTitle>
					<JobEmployer>jamesTbaker</JobEmployer>
					<JobDates>April 2002 &mdash; June 2011</JobDates>
				</JobMetaContainer>
				<JobDescription
					screenType={screenType}
				>
					<ul>
						<li>
							Consulted and contracted to develop web products, digital media, brands, and print collateral for small to medium businesses.
						</li>
						<li>
							Clients were primarily marketing departments of medium-sized businesses and owners of small businesses.
						</li>
						<li>
							Built distributed team of subcontractors in Boston, Seoul, Mumbai, London, and Melbourne.
						</li>
						<li>
							In early days, worked in waterfall paradigm, but moved to much more agile practices around 2006.
						</li>
						<li>
							Used PHP, MySQL, HTML, CSS, JavaScript, Flash, Illustrator, and Photoshop.
						</li>
					</ul>
				</JobDescription>
			</JobContainer>


			<JobContainer
					screenType={screenType}
				>
				<JobMetaContainer
					screenType={screenType}
				>
					<JobTitle>Director of Food and Beverage</JobTitle>
					<JobEmployer>Hotel Ithaca</JobEmployer>
					<JobDates>June 2002 &mdash; July 2004</JobDates>
				</JobMetaContainer>
				<JobDescription
					screenType={screenType}
				>
					<ul>
						<li>
							Multimillion-dollar operations including events, restaurant, bar, and room service for 181 rooms.
						</li>
						<li>
							Reduced liquor cost.
						</li>
						<li>
							Stabilized operations.
						</li>
					</ul>
				</JobDescription>
			</JobContainer>


			<JobContainer
					screenType={screenType}
				>
				<JobMetaContainer
					screenType={screenType}
				>
					<JobTitle>Director of Technology and Product</JobTitle>
					<JobEmployer>University Pride, Ltd.</JobEmployer>
					<JobDates>November 2000 &mdash; March 2002</JobDates>
				</JobMetaContainer>
				<JobDescription
					screenType={screenType}
				>
					<ul>
						<li>
							Oversaw market research to determine target market size and the features of a web portal desired by said market.
						</li>
						<li>
							Initiated and participated in the production of the redesigned portal.
						</li>
						<li>
							Like many dot-coms during this period, the company failed due to shifts in the viability of advertising-based business models.
						</li>
					</ul>
				</JobDescription>
			</JobContainer>


			<BackToDeepDiveLink />
		</Section>





		<Section
			screenType={screenType}
			id="education-and-certifications"
		>
			<SectionHeader
				screenType={screenType}
			>
				Education and Certifications
			</SectionHeader>

			<EducationAndCertificationsSectionsContainer
				screenType={screenType}
			>
				<EducationAndCertificationsSection
					screenType={screenType}
					gridArea="certifications"
				>
					<SchoolTitle>Certified ScrumMaster&reg; (CSM)</SchoolTitle>
					<SchoolSubjectOrDegree>Scrum Alliance</SchoolSubjectOrDegree>
					<SchoolDates>2015 &mdash; 2021</SchoolDates>
					<p>Credential ID: <a href="https://certification.scrumalliance.org/accounts/484936-james-t-baker/certifications" target="_blank">484936</a></p>

					<SchoolTitle>Project Management Professional (PMP)&reg;</SchoolTitle>
					<SchoolSubjectOrDegree>Project Management Institute (PMI)</SchoolSubjectOrDegree>
					<SchoolDates>2015 &mdash; 2021</SchoolDates>
					<p>Credential ID: <a href="https://www.youracclaim.com/badges/5fde2a55-c93f-4dc9-8cad-bbc52d24d815/linked_in_profile" target="_blank">1877258</a></p>

				</EducationAndCertificationsSection>


				<EducationAndCertificationsSection
					screenType={screenType}
					gridArea="grad"
				>
					<SchoolTitle>Tufts University</SchoolTitle>
					<SchoolSubjectOrDegree>Philosophy: Epistemology, Ethics</SchoolSubjectOrDegree>
					<SchoolDates>2007</SchoolDates>
				
					<SchoolTitle>Harvard Extension School</SchoolTitle>
					<SchoolSubjectOrDegree>Philosophy: Logic, Metaphysics</SchoolSubjectOrDegree>
					<SchoolDates>2006</SchoolDates>
				</EducationAndCertificationsSection>


				<EducationAndCertificationsSection
					screenType={screenType}
					gridArea="undergrad"
				>
					<SchoolTitle>Ithaca College</SchoolTitle>
					<SchoolSubjectOrDegree>B.S., Business Administration</SchoolSubjectOrDegree>
					<SchoolDates>2002</SchoolDates>
					<ul>
						<li>
							Concentration in Management
						</li>
						<li>
							Summa Cum Laude
						</li>
						<li>
							GPA: 3.921 / 4
						</li>
						<li>
							Dean's Scholar
						</li>
						<li>
							Named to Dean’s List all semesters
						</li>
						<li>
							Member, Sigma Iota Epsilon (student division of the National Academy of Management)
						</li>
					</ul>
				</EducationAndCertificationsSection>
			</EducationAndCertificationsSectionsContainer>
			<BackToDeepDiveLink />
		</Section>
		
		
		
		
		<Section
			screenType={screenType}
			id="volunteer-experience"
		>
			<SectionHeader
				screenType={screenType}
			>
				Volunteer Experience
			</SectionHeader>
			<VolunteerExperiencesSectionsContainer
				screenType={screenType}
			>


				<VolunteerExperiencesSection
					screenType={screenType}
					gridArea="latest"
				>
					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>Rock and Roll Hall of Fame and Museum</VolExpOrganization>
					<VolExpDates>2015 &mdash; 2016</VolExpDates>
					<p>Developing automated business processes on top of Office 365 / SharePoint Online.</p>

					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>The Juilliard School</VolExpOrganization>
					<VolExpDates>2015</VolExpDates>
					<p>Developing automated business processes on top of Office 365 / SharePoint Online.</p>

					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>Artists for Africa</VolExpOrganization>
					<VolExpDates>2014</VolExpDates>
					<p>Branding, website design, intellectual property management.</p>

				</VolunteerExperiencesSection>


				<VolunteerExperiencesSection
					screenType={screenType}
					gridArea="mid"
				>
					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>Museum of Science and Industry (MOSI)</VolExpOrganization>
					<VolExpDates>2013</VolExpDates>
					<p>Building web apps on top of Drupal.</p>

					<VolExpContribution>Laborer, Instructor</VolExpContribution>
					<VolExpOrganization>Mexico City Municipal Government</VolExpOrganization>
					<VolExpDates>2003 &mdash; 2009</VolExpDates>
					<p>Semi-annual volunteer to help engage local youth in community improvement, especially through urban agriculture.</p>

					<VolExpContribution>Tutor</VolExpContribution>
					<VolExpOrganization>Independent Contractor</VolExpOrganization>
					<VolExpDates>2001</VolExpDates>
					<p>Aiding students learning accounting, Microsoft Excel.</p>
				</VolunteerExperiencesSection>


				<VolunteerExperiencesSection
					screenType={screenType}
					gridArea="earliest"
				>
					<VolExpContribution>Vocalist</VolExpContribution>
					<VolExpOrganization>Christ Episcopal Church</VolExpOrganization>
					<VolExpDates>2001 &mdash; 2003</VolExpDates>
					<p>Periodic performer.</p>

					<VolExpContribution>Chapter Founder, Webmaster</VolExpContribution>
					<VolExpOrganization>East Texas PFLAG</VolExpOrganization>
					<VolExpDates>1999</VolExpDates>
					<p>Organized and recruited members for chapter. Created and maintained organization's web presence.</p>

					<VolExpContribution>Consultant, Designer</VolExpContribution>
					<VolExpOrganization>Jim Simon for City Council</VolExpOrganization>
					<VolExpDates>1998</VolExpDates>
					<p>Branding, production of campaign materials.</p>

				</VolunteerExperiencesSection>

			</VolunteerExperiencesSectionsContainer>

			<BackToDeepDiveLink />
		</Section>


		
	</LowerPageContentContainer>
);


// 	SEND TO PAGE COMPONENT

export default () => {
	return (
		<div className="sb-root--page-specification">
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
				<Page
					screenType="small"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage="storrow-drive--horizontal"
					topContentOne={returnTopContentOne('small')}
					topContentTwo={returnTopContentTwoBBB('small')}
					topContentThree={returnTopContentThree('small')}
					topContentFour={returnTopContentFour('small')}
					lowerPageContent={returnLowerPageContent('small')}
				/>
			</MediaQuery>
			<MediaQuery
				minWidth={ScreenSizes.ReturnMediumMin()}
				maxWidth={ScreenSizes.ReturnMediumMax()}
			>
				<Page
					screenType="medium"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage="storrow-drive--horizontal"
					topContentOne={returnTopContentOne('medium')}
					topContentTwo={returnTopContentTwoBBB('medium')}
					topContentThree={returnTopContentThree('medium')}
					topContentFour={returnTopContentFour('medium')}
					lowerPageContent={returnLowerPageContent('medium')}
				/>
			</MediaQuery>
			<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
				<Page
					screenType="large"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage="storrow-drive--horizontal"
					topContentOne={returnTopContentOne('large')}
					topContentTwo={returnTopContentTwoBBB('large')}
					topContentThree={returnTopContentThree('large')}
					topContentFour={returnTopContentFour('large')}
					lowerPageContent={returnLowerPageContent('large')}
				/>
			</MediaQuery>
		</div>
	);
}
