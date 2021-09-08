/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { ArticleBriefStatements } from './ArticleBriefStatements';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { Copy } from '../../core/Copy/Copy';

const ArticleIntroContainer = styled.div``;

export const ArticleIntro = ({
	briefStatements,
	introText,
	introVideo,
}) => (
	<ArticleIntroContainer>
		{
			briefStatements &&

			<ArticleBriefStatements
				briefStatements={briefStatements}
			/>
		}
		{
			introText &&

			<Copy
				kind="body-container--enlarged"
				htmlContent={introText}
			/>
		}
		{
			introVideo &&

			<VideoPlayer
				content={introVideo}
			/>
		}
	</ArticleIntroContainer>
);
