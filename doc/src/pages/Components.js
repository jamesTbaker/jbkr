import React from 'react';
import Layout from '@theme/Layout';
import styled from 'styled-components';
import { deviceWidthQuery } from '@jbkr/style-service';

const Main = styled.main`
	width: 100%;
	position:fixed; top: 60px; left:0px; bottom: 3rem; right:0px;
	/* height: 100%; display: flex; */
	iframe {
		width: 100%;
		height: 100%;
		/* flex: 1; */
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
