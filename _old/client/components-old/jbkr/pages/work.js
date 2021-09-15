
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';

// ----- PAGE

// STYLED COMPONENTS

const WorkLinkContainer = styled.a`
	display: inline-block;
	padding-left: 2rem;
	border-bottom: 0;

	&:hover {
		border-bottom: 0;
	}
`;
const ExperienceLinkContainer = styled.a`
	border-bottom: 0;
`;
const MoreWorkBanner = styled.p`
	padding: 5rem;
	margin: 0 5rem;
	text-align: center;
	background-color: ${StylePatterns.Color('blue-3')};

	${({ screenType }) => screenType === 'small' && `
		margin: 5rem 2rem 0;
	`}
	${({ screenType }) => screenType !== 'small' && `
		margin: 0 5rem;
	`}
`;
const ClientContainer = styled.p`
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('xl', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('xl', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('xl', 'large')};
	`}
`;

// CONTENTS

const HeadTitle = 'Work';
const HeadDescription = 'About the work of James T. Baker';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			Building the Internet since 1999.
		</p>
		<p>
			<ExperienceLinkContainer
				href="/index"
			>
				More experience
				<Icon
					iconPosition="after"
					iconContent="angle-double-right"
					iconSize="1.5"
				/>
			</ExperienceLinkContainer>
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>Work</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<p>
			2013 &ndash; 2019
		</p>
		<ClientContainer
			screenType={screenType}
		>
			Museum of Science, Boston
		</ClientContainer>
	</div>
);
const returnTopContentFour = screenType => (
	<div className="sb-root--top-content">
		<ul>
			<li><em>Managed program</em> with team of <em>80+ direct stakeholders</em>.</li>
			<li>My simultaneous roles: product owner / program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer,and  system administrator.</li>
			<li>Built suite of 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend.</li>
			<li>Key tech: JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.</li>
		</ul>
		<p>
			<WorkLinkContainer
				href="/hub"
			>
				Learn more about The Hub
			</WorkLinkContainer>
		</p>
	</div>
);
const returnLowerPageContent = screenType => (
	<div className="sb-root--bottom-content">
		<MoreWorkBanner
			screenType={screenType}
		>
			More work will be placed here soon.
		</MoreWorkBanner>
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
					backgroundImage="downtown-red"
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
					backgroundImage="downtown-red"
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
					backgroundImage="downtown-red"
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
