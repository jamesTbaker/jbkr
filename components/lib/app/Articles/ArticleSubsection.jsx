/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { MediaItem } from '../Media/MediaItem';
import { Copy } from '../../core/Copy/Copy';

const ArticleSubsectionContainer = styled.div``;

export const ArticleSubsection = ({ subsection }) => (
	<ArticleSubsectionContainer>
		{
			subsection.subsectionGravity &&
			<Copy
				kind="small"
				htmlContent={`This subsection will be
pulled to ${subsection.subsectionGravity}.`}
			/>
		}
		{
			subsection.subsectionTitle &&
			<div
				dangerouslySetInnerHTML={{'__html': subsection.subsectionTitle}}
			/>
		}
		{
			subsection.subsectionMediaGravity &&
			<Copy
				kind="small"
				htmlContent={`This media will be
pulled to ${subsection.subsectionMediaGravity}.`}
			/>
		}
		{
			subsection.subsectionMedia && subsection.subsectionMedia[0] &&
			subsection.subsectionMedia.map((mediaItem) =>
				<MediaItem
					key={mediaItem.hash}
					type={mediaItem.type}
					specs={mediaItem}
				/>,
			)
		}
		{
			subsection.subsectionMediaComponents &&
			subsection.subsectionMediaComponents[0] &&
			subsection.subsectionMediaComponents.map((mediaComponentItem) =>
				<MediaItem
					key={`media-component--${mediaComponentItem}`}
					type="component"
					specs={mediaComponentItem}
				/>,
			)
		}
		{
			subsection.subsectionText &&
			<div
				dangerouslySetInnerHTML={{'__html': subsection.subsectionText}}
			/>
		}
	</ArticleSubsectionContainer>
);
