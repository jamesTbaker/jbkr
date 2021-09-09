/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { ArticleBriefStatements } from './ArticleBriefStatements';
import { MediaItem } from '../Media/MediaItem';
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

			<MediaItem
				type={introVideo.type}
				specs={introVideo}
			/>
		}
	</ArticleIntroContainer>
);
