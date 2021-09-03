
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import CryBaby from '../img/other/cry-baby.jpg';

// ----- PAGE

// STYLED COMPONENTS
const EmailContainer = styled.a`
	border-bottom: 0;
`;
const CommentContainer = styled.p`
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('l', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('l', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('l', 'large')};
	`}
`;

// CONTENTS

const HeadTitle = '404';
const HeadDescription = 'Page not found';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			Page Not Found
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>404</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<img src={CryBaby} width="100%" />
	</div>
);
const returnTopContentFour = screenType => (
	<div className="sb-root--top-content">
		<CommentContainer
			screenType={screenType}
		>
			<h2>Don't Cry</h2>
			That page doesn't exist, but it's possible that you're from the future and I just haven't made it yet.
		</CommentContainer>
	</div>
);
const returnLowerPageContent = screenType => ('');

// 	SEND TO PAGE COMPONENT

export default () => {
	return (
		<div className="sb-root--page-specification">
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
				<Page
					screenType="small"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage="sidewalk-multi"
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
					backgroundImage="sidewalk-multi"
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
					backgroundImage="sidewalk-multi"
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
