import styled from 'styled-components';
import { MediaItem } from '../Media/MediaItem';
import { Copy } from '../../core/Copy/Copy';

const ArticleSubsectionContainer = styled.div`
	${
		({ gravity }) => gravity && `grid-area: ${gravity}`
	}
`;

export const ArticleSubsection = ({ subsection }) => (
	<ArticleSubsectionContainer
		gravity={subsection.subsectionGravity}
	>
		{
			subsection.subsectionTitle &&
			<div
				dangerouslySetInnerHTML={{'__html': subsection.subsectionTitle}}
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
