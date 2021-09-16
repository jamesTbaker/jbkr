
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';
import Header from '../components/Header';
import PageTop from '../components/PageTop';
import Footer from '../components/Footer';

// --- COMPONENT


const MainContainer = styled.main`
	margin-left: ${props => props.screenType === 'large' ?
		'20rem' : '0' };
`;


export default (props) => (
	<MainContainer
		className="sb-root--page-main-content"
		screenType={props.screenType}
	>
		<PageTop
			screenType={props.screenType}
			backgroundImage={props.backgroundImage}
			topContentOne={props.topContentOne}
			topContentTwo={props.topContentTwo}
			topContentThree={props.topContentThree}
			topContentFour={props.topContentFour}
		/>
		{props.lowerPageContent}
	</MainContainer>
);
