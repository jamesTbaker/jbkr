import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';

const Main = styled.main`
	position: fixed;
	top: 60px;
	right:0px;
	bottom: 3rem;
	left: 0px;
	width: 100%;
	iframe {
		width: 100%;
		height: 100%;
	}
`;
export default () => {
	return (
		<Layout
			title="Components"
			description={
				'Storybook development and demonstration ' +
				'environment for \'jbkr\' UI components.'
			}
		>
			<Main>
				<iframe src={
					'https://62474889a7abe6004a5d45e9-lrociryjhv.' +
					'chromatic.com/?path=/story/introduction--page'
				} />
			</Main>
		</Layout>
	);
};
