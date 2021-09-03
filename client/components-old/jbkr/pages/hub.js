
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import SectionBrief from '../components/SectionBrief';
import SectionBody from '../components/SectionBody';
import HubBrand from '../img/hub/Brand';
import DesktopViewMedium from '../img/hub/Desktop-view.jpg';
import DesktopViewSmall from '../img/hub/Desktop-view@0,5x.jpg';
import MobileViewMedium from '../img/hub/Mobile-view.jpg';
import MobileViewSmall from '../img/hub/Mobile-view@0,5x.jpg';
import Private from '../img/hub/Private';
import PalletPreview from '../img/hub/Pallet-preview';
import Contacts from '../img/hub/Contacts';
import Stars from '../img/hub/Stars.jpg';
import { scroller } from 'react-scroll';

// ----- PAGE

// STYLED COMPONENTS

const BriefList = styled.ul`
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('m', 'large')};
		column-count: 2;
		column-gap: 0;
		list-style-position: inside;
		margin-bottom: 0;
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('m', 'medium')};
	`}
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('m', 'small')};
		margin-bottom: 1rem;
	`}
	${({ screenType }) => screenType !== 'small' && `
		margin-bottom: 1rem;
	`}
`;
const BriefListItem = styled.li`
	list-style: none;
	margin: 0 0 2rem 0;
	display: inline-block;

	${({ screenType }) => screenType === 'small' && `
		&:last-child {
			margin-bottom: 0;
		}
	`}
`;
const DeepDiveList = styled.ul`
	margin: 0;

	${({ screenType }) => screenType === 'small' && `
		padding-bottom: 1.8rem;
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
	${props => props.screenType === 'large' && `
		padding: 5rem 0;
		margin: 0 5rem;
	`}
	${props => props.screenType === 'medium' && `
		padding: 5rem 0 2rem 0;
		margin: 0 5rem;
	`}
	${props => props.screenType === 'small' && `
		padding: 2rem 0;
		margin: 0 2rem;
	`}

	border-top: .2rem solid ${StylePatterns.Color('blue-10')};
	display: grid;
	grid-template-rows: auto auto auto;
	grid-template-areas:	"header"
							"brief"
							"mainAndQuote";
`;
const SectionHeader = styled.h2`
	grid-area: header;
	width: 33%;
`;
const ProblemSolutionSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "problem solution";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const ProblemSolutionSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const ProductViewsSubsectionsContainer = styled.div`
	border-top: .2rem solid ${StylePatterns.Color('blue-10')};

	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:	"mobile desktop"
								"disclaimer disclaimer";
		grid-template-rows: auto auto;
		grid-template-columns: 1fr 1fr;
	`}
	${props => props.screenType !== 'small' && `
		padding: 5rem 0;
		margin: 0 5rem;
	`}
	${props => props.screenType === 'small' && `
		padding: 2rem 0;
		margin: 0 2rem;
	`}
`;
const ProductViewsSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const ColumnsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		column-count: ${props.columnCount};
		column-gap: 5rem;
	`}
`;
/* const TechSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "list prose";
		grid-template-rows: auto;
		grid-template-columns: 1fr 4fr;
		grid-gap: 5rem 5rem;
	`}
`;
const TechSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`; */
const BrandingSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:	"OneA	OneB"
								"TwoA	TwoB"
								"ThreeA	ThreeB";
		grid-template-rows: auto auto auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const BrandingSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const BrandIntroContainer = styled.p`
	max-width: 100rem;
`;
const BrandContainer = styled.div`
	padding: 2.5rem;
	text-align: center;
	${props => props.screenType === 'large' && `
		max-width: 80%;
	`}

	svg {
		max-width: 80%;
		margin: auto;
	}
	${props => props.backgroundImage && `
		background: url(${props.backgroundImage});

		g.letterforms path {
			fill: white;
		}
	`}
	${props => props.light && `
		background-color: ${StylePatterns.Color('white')};
	`}
	${props => props.greyScale && `
		background-color: ${StylePatterns.Color('grey-15')};

		g.letterforms path {
			fill: ${StylePatterns.Color('grey-5')};
		}
		g.logo path {
			fill: ${StylePatterns.Color('grey-5')};
		}
	`}
`;
const CalloutLink = styled.a`
	border: 0;
	
	&:hover {
		border: 0;
	}
`;
const PrivateRestrainer = styled.div`
	${props => props.screenType !== 'small' && `
		text-align: right;

		svg {
			max-width: 35rem;
			margin-right: 0;
			margin-left: auto;
			margin-bottom: 2rem;
		}
	`}
	${props => props.screenType === 'small' && `
		max-width: 20rem;
	`}
`;
const ContactRestrainer = styled.div`
	${props => props.screenType !== 'small' && `
		svg {
			max-width: 35rem;
			margin-left: 0;
			margin-right: auto;
			margin-bottom: 2rem;
		}
	`}
	${props => props.screenType === 'small' && `
		max-width: 20rem;
	`}
`;















/* const XXX = styled.div`

`;
const XXX = styled.div`

`;
const XXX = styled.div`
	${props => props.screenType === 'small' && `

	`}
	${props => props.screenType === 'medium' && `

	`}
	${props => props.screenType === 'large' && `

	`}
`;
const XXX = styled.div`
	${props => props.screenType === 'small' && `

	`}
	${props => props.screenType === 'medium' && `

	`}
	${props => props.screenType === 'large' && `

	`}
`;
const XXX = styled.div`
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType === 'medium' && `
		
	`}
	${props => props.screenType === 'large' && `
		
	`}
`; */

// CONTENTS

const handleProblemsAndSolutionsNavItemClick = () => {
	scroller.scrollTo('problems-and-solutions', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleTeamNavItemClick = () => {
	scroller.scrollTo('team', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleChangeManagementNavItemClick = () => {
	scroller.scrollTo('change-management', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleTechNavItemClick = () => {
	scroller.scrollTo('tech', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleBrandingNavItemClick = () => {
	scroller.scrollTo('branding', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};










const returnLowerPageContent = screenType => (
	<div className="sb-root--bottom-content">
		<Section
			screenType={screenType}
			id="problems-and-solutions"
		>
			<SectionHeader>Problems and Solutions</SectionHeader>
			<SectionBrief
				screenType={screenType}
				areas={[
					{
						area: 'one',
						statements: [
							'This is brief statement 1.',
							'This is brief statement 2. This is brief statement 2.'
						]
					}, {
						area: 'two',
						statements: [
							'This is brief statement 3. This is another. This is brief statement 3. This is another.'
						]
					}, {
						area: 'three',
						statements: [
							'This is brief statement 4. This is another.',
							'This is brief statement 5.'
						]
					}
				]}
			/>
			<SectionBody
				screenType={screenType}
				sectionTitle="Problems and Solutions"
				quote={{
					largeScreenPosition: 'right',
					content: 'I\'m a business-person, using design and technology to solve business problems'
				}}
			>
				<ProblemSolutionSubsectionsContainer
					screenType={screenType}
				>
					<ProblemSolutionSubsection
						screenType={screenType}
						gridArea="problem"
					>
						<h3>Problems</h3>
						<p>
							The Museum had an extensive but problematic group of web-based, enterprise software applications and contents.
							</p>
						<ul>
							<li>These were built in the late 90s / early 2000s, mostly in ColdFusion, a language now used by relatively few people and no one on staff.</li>
							<li>They stopped evolving over a decade earlier and no longer matched the organization’s business processes.</li>
							<li>A partial reboot effort several years prior left staff navigating between two systems.</li>
							<li>On the older server's web root were over 400k files, ranging from logs to image uploads to a prolific level of patched and repatched spaghetti code. no human could make sense of all of this.
								</li>
							<li>A staff member needing to update her own published document had to submit a work order.</li>
							<li>Staff members were clamoring for apps that worked the way they worked, wherever they worked, and more apps to solve more problems.</li>
							<li>The on-premise server running the old apps violated PCI standards and the organization was faced with the prospect of investing in costly upgrades.</li>
						</ul>
						<p>
							For all their deficiencies, these apps were indispensable. Hundreds of staff and board members used them daily, not only to accomplish discrete, structured tasks and familiarize themselves with policies, but to service more organic needs like collaborating on grant proposals, finding translators for onsite visitors, identifying subject matter experts for media requests, and recruiting ad hoc help for private events, marketing campaigns, product testing, fundraisers, and cleaning up the Charles River.
						</p>
					</ProblemSolutionSubsection>
					<ProblemSolutionSubsection
						screenType={screenType}
						gridArea="solution"
					>
						<h3>Solutions</h3>
						<p>Since the old system was significantly outdated and was incomprehensible from the backend (again, ColdFusion and over 400k files), I avoided even looking at it very much. Instead, I collaborated with every stakeholder group &mdash; over 80 stakeholders in all &mdash; to determine what their software should do.
							</p>
						<p>The results:</p>
						<ul>
							<li>56 JavaScript-based workflow apps.</li>
							<li>Each app conforms to updated business rules.</li>
							<li>A responsive and accessible UX, receiving near-universal praise.</li>
							<li>One server shut down in 2016, and the other in 2019. No PCI-related risks were realized. Almost everything is now in Microsoft's cloud. An on-premise API server was created but will likely move to AWS.</li>
							<li>100k lines of code, down from from 400k+ files.</li>
							<li>Simple, point-and-click access control.</li>
							<li>Distributed content management &mdash; with my oversight and support, staff members manage their own documents and web content.</li>
						</ul>
					</ProblemSolutionSubsection>
				</ProblemSolutionSubsectionsContainer>
			</SectionBody>
		</Section>

		<ProductViewsSubsectionsContainer
			screenType={screenType}
		>
			<ProductViewsSubsection
				screenType={screenType}
				gridArea="mobile"
			>
				{
					screenType === 'small' &&

					<img src={MobileViewSmall} width="100%" />
				}
				{
					screenType !== 'small' &&

					<img src={MobileViewMedium} width="100%" />
				}
			</ProductViewsSubsection>
			<ProductViewsSubsection
				screenType={screenType}
				gridArea="desktop"
			>
				{
					screenType === 'small' &&

					<img src={DesktopViewSmall} width="100%" />
				}
				{
					screenType !== 'small' &&

					<img src={DesktopViewMedium} width="100%" />
				}
			</ProductViewsSubsection>
			<ProductViewsSubsection
				screenType={screenType}
				gridArea="disclaimer"
			>
				<p style={{ padding: '2rem', margin: '2rem 0 0', textAlign: 'center', backgroundColor: StylePatterns.Color('blue-3') }}>More photos and demo videos are on the way.</p>
			</ProductViewsSubsection>
		</ProductViewsSubsectionsContainer>
		<Section
			screenType={screenType}
			id="team"
		>
			<SectionHeader>Team</SectionHeader>
			<SectionBrief
				screenType={screenType}
				areas={[
					{
						area: 'one',
						statements: [
							'80+ direct stakeholders.',
						]
					}
				]}
			/>
			<SectionBody
				screenType={screenType}
				sectionTitle="Team"
				quote={{
					largeScreenPosition: 'right',
					content: 'No one achieves anything alone'
				}}
			>
				<ColumnsContainer
					screenType={screenType}
					columnCount={2}
				>
					<p>I was fortunate to work directly with over 80 stakeholders, from security staff to scientists to accountants to VPs to event planners to the COO and the Board Chair. Each person brought a unique perspective on the organization, a distinct set of challenges they faced in their work, and fresh thinking about how software can solve problems.
					</p>
					<p>Consistent with much of my career, I wore a number of hats while building The Hub. I have been the product owner / program manager, but I've also been the business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer, and system administrator.
				</p>
				</ColumnsContainer>
			</SectionBody>
		</Section>


		<Section
			screenType={screenType}
			id="change-management"
		>
			<SectionHeader>Change Management</SectionHeader>
			<SectionBrief
				screenType={screenType}
				areas={[
					{
						area: 'one',
						statements: [
							'This is brief statement 1.',
							'This is brief statement 2. This is brief statement 2.'
						]
					}, {
						area: 'two',
						statements: [
							'This is brief statement 3. This is another. This is brief statement 3. This is another.'
						]
					}, {
						area: 'three',
						statements: [
							'This is brief statement 4. This is another.',
							'This is brief statement 5.'
						]
					}
				]}
			/>
			<SectionBody
				screenType={screenType}
				sectionTitle="Change Management"
				quote={{
					largeScreenPosition: 'right',
					content: 'Execution is everything'
				}}
			>
				<ColumnsContainer
					screenType={screenType}
					columnCount={2}
				>
					<p>Rather than tackling the entire platform at once, my first step was to identify one best app for R&D, and use that app for testing and for midscale, organic publicity. I chose an app "owned" by my IT colleagues so that my first stakeholders would be among the most patient and understanding with my R&D. It also turned out that my IT colleagues had some of the highest expectations and most trenchant criticism, but that was good because it forced me to iterate to an elevated standard that likely saved me trouble later and saved time in the long run. As the app was used by managers across the organization, people quickly became aware of what I were doing.
					</p>
					<p>I continued the theme of leveraging relationships throughout this process. There was internal pressure to shut down one of the two servers in order to show progress, and I eventually did so. However, I insisted on blending that approach with working with one group of stakeholders at a time, regardless of where their apps were located. This was easier and sensible for the stakeholders, who don't think in terms of servers, but I also knew that this was the quickest path to the finish line. That's because the biggest bottleneck I faced was stakeholders' schedules, so working group by group resulted in less scheduling overhead.
					</p>
					<p>It's also important to note that I used an agile, graduated release process, averaging one app every few weeks. Because of this, my support requirement was spread across a large time horizon, which meant that I never had a huge number of support requests. In turn, that meant that I was able to respond to support requests quickly, often releasing iterations on several apps per day. This was important for fostering good will across the organization; I suspect that if I'd taken a waterfall approach and released all 56 apps simultaneously, some stakeholders would have been waiting months before I could address their concerns.
					</p>
					<p>As apps were replaced and contents migrated, the legacy gateway to the system was maintained with messaging and continually updating links to new apps, allowing me to guide people to new apps through their familiar pathways. Similarly, the initial draft of the new system's central gateway strikes a balance between familiar concepts and a strong impression of innovation that communicates a high ROI.
					</p>
					<p>As part of the final transition from old to new, I hosted multiple drop-in help sessions. Many questions were answered, and change-resistant hands were held. One of the more surprising outcomes of these sessions was the feedback that people would have preferred even more guidance throughout these changes. To that end, I've planned that significant future changes will be accompanied by screens explaining usage in text, for those who prefer reading, and demonstrating usage in video (and audio), for those who prefer viewing or listening.
					</p>
				</ColumnsContainer>
			</SectionBody>
		</Section>


		<Section
			screenType={screenType}
			id="tech"
		>
			<SectionHeader>Tech</SectionHeader>
			<SectionBrief
				screenType={screenType}
				areas={[
					{
						area: 'one',
						statements: [
							'<b>REST API microservices</b> &mdash; Node.js, MongoDB, Express, ImageMagick, Windows Server'
						]
					}, {
						area: 'two',
						statements: [
							'<b>Frontend</b> &mdash; React, Sass, Webpack, SharePoint Framework (SPFx)'
						]
					}, {
						area: 'three',
						statements: [
							'<b>Client-side workflow engine</b> &mdash; JavaScript, jQuery, Sass'
						]
					}, {
						area: 'four',
						statements: [
							'<b>Access control, file management, client-side hosting</b> &mdash; Microsoft SharePoint / Office 365'
						]
					}, {
						area: 'five',
						statements: [
							'<b>Helpers</b> &mdash; Adobe Creative Cloud, Inkscape, and Figma'
						]
					}
				]}
			/>
			<SectionBody
				screenType={screenType}
				sectionTitle="Tech"
				quote={{
					largeScreenPosition: 'right',
					content: 'Technology is a means, not an end'
				}}
			>
				<ColumnsContainer
					screenType={screenType}
					columnCount={2}
				>
					<p>
						I'm a fan of Linux and other open source / libre technologies, but the Museum loves Microsoft, which has been a generous donor. Prior to my tenure, it was determined that whatever replaced the legacy systems would be built on Microsoft SharePoint Online with Microsoft InfoPath being an out-of-the-box, point-and-click solution for building workflow apps to replace existing apps.
					</p>
					<p>
						After some time, I convinced the Associate VP that InfoPath was going to be an impossibility. Suited for some power users but not developers, it simply couldn't accomodate the Museum's more complex business needs, even when supplemented with C#. I'd mostly worked in PHP in the past, but here I'd inherited SharePoint Online, a cloud service with virtually no backend access. Morevoer, my knowledge of JavaScript was scant, frontend frameworks like React were not yet common, and SharePoint Framework (SPFx) did not yet exist.
					</p>
					<p>
						I learned enough JavaScript and jQuery to repurpose the base concept of <a href="https://youtu.be/28e-_VNqxGg">Forms7</a> (storing data as JSON in a SharePoint list), added in a number of libraries, and built from scratch a client-side API that manages screens, permissions, workflow moderation, data validation, data storage and retrieval, and email notifications.
					</p>
					<p>
						SharePoint's email API was problematic for us because it wouldn't allow an app to send email to someone who'd never used the app before. (Microsoft calls this a security feature.) So, spinning up a server was the only option. A sys admin installed Windows and connected the machine to the network, but none of us wanted to be responsible for PHP, Apache, and MySQL. So, I installed Node.js, Express, and MongoDB and built from scratch a REST API that receives email data and forwards it to the in-house email server &mdash; and now affords 71 other services, too.
					</p>
					<p>
						These days, a simple, custom, multi-stage workflow app with email notificaitons can be built in about an hour.
					</p>
					<p>
						In 2018, I began to bring these disparate apps together into a cohesive platform, opting for a frontend built with React, again learning a whole new paradigm from scratch. Challenging, but very rewarding.
				</p>
				</ColumnsContainer>
			</SectionBody>
		</Section>


		<Section
			screenType={screenType}
			id="branding"
		>
			<SectionHeader>Branding</SectionHeader>
			<SectionBrief
				screenType={screenType}
				areas={[
					{
						area: 'one',
						statements: [
							'This is brief statement 1.',
							'This is brief statement 2. This is brief statement 2.'
						]
					}, {
						area: 'two',
						statements: [
							'This is brief statement 3. This is another. This is brief statement 3. This is another.'
						]
					}, {
						area: 'three',
						statements: [
							'This is brief statement 4. This is another.',
							'This is brief statement 5.'
						]
					}
				]}
			/>
			<SectionBody
				screenType={screenType}
				sectionTitle="Branding"
				quote={{
					largeScreenPosition: 'right',
					content: 'A great brand can inspire confidence and trust, and a brand doesn\'t have to be terrible to make people feel like they\'re dealing with an amateur they can\'t trust'
				}}
			>
				<BrandIntroContainer>
					Aside from typical branding concerns, I was especially interested in using branding to communicate that this important part of the organization, which had been neglected for so long, was now in profressional hands. I truly believe that a great brand can inspire confidence and trust, and a brand doesn't have to be terrible to make people feel like they're dealing with an amateur they can't trust.
				</BrandIntroContainer>
				<BrandingSubsectionsContainer
					screenType={screenType}
				>
					<BrandingSubsection
						screenType={screenType}
						gridArea="OneA"
					>
						<h3>Logo & Typography</h3>
						<p>The Hub is an endorsed sub-brand of the Museum's parent brand. The Hub's logo uses samples from the organization's parent brand color pallet in a shape that evokes the concept of a hub (elements around a central fixture). The logo doesn't include direct references to the parent brand, but typically appears in proximity to the parent brand.
					</p>
						<p>While the creative work is my own, it was reviewed by the Museum's Brand Design Manager.</p>
						<p>
							The logo can be used on dark and light colored backgrounds, and can be reproduced in greyscale. The file itself is a hand-edited SVG that can be targeted with CSS.
					</p>
						<p>Typography has been an odd duck. The parent brand's typeface is Akzidenz Grotesque, the forerunner to Helvetica. However, some parts of The Hub, such as document library interfaces, are generated by Microsoft and we currently have limited "theming" capabilities. In these spaces, people will be met with Microsoft's font, Segoe. Until we can transition all of The Hub to the organization's parent brand typeface, all parts of The Hub use the Segoe typeface in order to create a cohesive and consistent experience across the platform.</p>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="OneB"
					>
						<BrandContainer
							screenType={screenType}
							light
						>
							<HubBrand />
						</BrandContainer>
						<BrandContainer
							screenType={screenType}
							backgroundImage={Stars}
						>
							<HubBrand />
						</BrandContainer>
						<BrandContainer
							screenType={screenType}
							greyScale
						>
							<HubBrand />
						</BrandContainer>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="TwoB"
					>
						<h3>Color Pallet</h3>
						<p>The bulk of The Hub is enterprise apps &mdash; think forms, data tables, policy PDFs, and the occasional calendar. How does one people to something that is, by its nature, impersonal? Obviously, <i>gratuitous</i> photo, video, and audio would get in the way of people's work, so color becomes the primary attractor. Thus, I've thrown in color just about everywhere it won't be an inhibitor or distraction.
					</p>
						<p>I wanted to use the organization’s parent brand pallet, but I knew that to maximize color usage I would need to put colored type on a colored background &mdash; and maintain accessiblity standards for foreground-background contrast. Therefore, I had to create a light-to-dark scale for each hue, and then create Sass variables and transparency mixins for each one.
					</p>
					<p>
						<CalloutLink href="https://www.figma.com/file/e6ttbXfwvFZa5jhj0FHVAT3o/Color" target="_blank">
							Check out the full pallet in Figma&nbsp;
							<Icon
								iconPosition="after"
								iconContent="arrow-right"
								iconSize="1.8"
								color={StylePatterns.Color('grey-12')}
							/>
						</CalloutLink>
					</p>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="TwoA"
					>
						{
							screenType === 'small' &&

							<div>
								<Private />
								<PalletPreview />
							</div>
						}
						{
							screenType !== 'small' &&

							<div>
								<PrivateRestrainer
									screenType={screenType}
								>
									<Private />
								</PrivateRestrainer>
								<PalletPreview />
							</div>
						}
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="ThreeA"
					>
						<h3>Video and Photography</h3>
						<p>Human beings are especially attracted to faces &mdash; most especially their own. Thus, another part of my plan for making The Hub feel more human and more engaging is to use staff members' self-supplied face pics. (Admittedly, this concept is baked into <a href="https://developer.microsoft.com/en-us/fabric#/components/facepile#Variants" target="_blank">parts of Microsoft Office</a>, and I borrowed it from there.) A few photos are being pilot tested, but, for most staff members, initials hold the place where their photos will appear.
					</p>
						<p>In a select few other places where photos are used, tney comply with the Museum's main brand guidelines.
					</p>
						<p>As mentioned in <b>Change Management</b>, some staff members feel they would benefit from additional assistance in learning and understanding usage, and demo videos are part of my intended solution. I'm also working with our Help Desk to create a library of self-help materials and documentation. Any video pertaining to The Hub will begin with the adjacent, 4-second bumper with the animated identity.
					</p>
						{/* <ul>
						<li><a href="https://videos.pexels.com/videos/wheat-at-close-view-on-a-windy-day-1620048">Video resource</a></li>
						<li><a href="https://www.audioblocks.com/stock-audio/piano-sting-3-147124.html">Audio resource</a></li>
					</ul> */}
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="ThreeB"
					>
						<div>
							{
								screenType === 'small' &&

								<Contacts />
							}
							{
								screenType !== 'small' &&

								<ContactRestrainer
									screenType={screenType}
								>
									<Contacts />
								</ContactRestrainer>
							}
							<div style={{ position: 'relative', paddingTop: '56.25%' }}>
								<iframe
									style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
									src="https://www.youtube.com/embed/0iyG-OUl2GQ"
									frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								>
								</iframe>
							</div>
						</div>
					</BrandingSubsection>
				</BrandingSubsectionsContainer>
			</SectionBody>
		</Section>
	</div>
);

















const HeadTitle = 'The Hub';
const HeadDescription = 'Program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer,and  system administrator. 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend. JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			2013 &ndash; 2019
		</p>
		<p>
			Museum of Science, Boston
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>The Hub</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<h2>
			Brief
		</h2>
		<BriefList
			screenType={screenType}
		>
			<BriefListItem
				screenType={screenType}
			>
				Managed program with team of 80+ direct stakeholders.
			</BriefListItem>
			<BriefListItem
				screenType={screenType}
			>
				My simultaneous roles: product owner / program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer,and  system administrator.
			</BriefListItem>
			<BriefListItem
				screenType={screenType}
			>
				Built suite of 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend.
			</BriefListItem>
			<BriefListItem
				screenType={screenType}
			>
				Key tech: JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.
			</BriefListItem>
		</BriefList>
	</div>
);
const returnTopContentFour = screenType => (
	<div
		className="sb-root--top-content"
		id="deep-dive-container"
	>
		<h2>
			Deep Dive
		</h2>
		<DeepDiveList
			screenType={screenType}
		>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleProblemsAndSolutionsNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="wrench"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Problems and Solutions
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleTeamNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="users"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					The Team
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleChangeManagementNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="refresh"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Change Management
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleTechNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="cloud"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Technologies Used
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleBrandingNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="trademark"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Branding
				</DeepDiveLink>
			</DeepDiveListItem>
		</DeepDiveList>
	</div>
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
					backgroundImage="bridge"
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
					backgroundImage="bridge"
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
					backgroundImage="bridge"
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
