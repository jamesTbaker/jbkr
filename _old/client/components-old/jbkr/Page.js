
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

// --- COMPONENT

export default (props) => (
	<div className="sb-root--page">
		<Header
			screenType={props.screenType}
			headTitle={props.headTitle}
			headDescription={props.headDescription}
		/>
		<MainContent
			screenType={props.screenType}
			backgroundImage={props.backgroundImage}
			topContentOne={props.topContentOne}
			topContentTwo={props.topContentTwo}
			topContentThree={props.topContentThree}
			topContentFour={props.topContentFour}
			lowerPageContent={props.lowerPageContent}
		/>
		<Footer
			screenType={props.screenType}
		/>
	</div>
);
