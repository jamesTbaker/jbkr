import styled from 'styled-components';
import { MediaItem } from '../Media/MediaItem';
import { Copy } from '../../core/Copy/Copy';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';


const ReturnMediaAndTextGridDataOnLargeWidthDevices = ({ subsection }) => ({
	'horizontalGrid': subsection.subsectionMediaGravity ? true : false,
	'mediaGridArea': subsection.subsectionMediaGravity ? subsection.subsectionMediaGravity : null,
	'textGridArea': !subsection.subsectionMediaGravity ? null : subsection.subsectionMediaGravity === 'left' ? 'right' : 'left',
});

const ArticleSubsectionContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		/* margin-bottom: 3rem; */
		${
			({ gridArea }) => gridArea && `grid-area: ${gridArea}`
		}
	}
`;
const SubsectionBodyContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ subsectionGrid }) => {
				if (subsectionGrid.horizontalGrid) {
					return `
						display: grid;
						grid-template-columns: 1fr 1fr;
						grid-gap: 4rem;
						grid-template-areas: "left right";
					`;
					/* const baseGridDeclarations = `
						display: grid;
						grid-gap: 4rem;
						grid-template-areas: "left right";
					`;
					if (subsectionGrid.mediaGridArea === 'left') {
						return `
							${baseGridDeclarations}
							grid-template-columns: 1fr 2fr;
						`;
					}
					if (subsectionGrid.mediaGridArea === 'right') {
						return `
							${baseGridDeclarations}
							grid-template-columns: 2fr 1fr;
						`;
					} */
				}
			}
		}
	}
`;

const SubsectionMediaContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ mediaGridArea }) => mediaGridArea && `
				grid-area: ${mediaGridArea};
			`
		}
	}
`;
const SubsectionMediaItemContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin-bottom: 3rem;
	}
`;
const SubsectionTextContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ textGridArea }) => textGridArea && `grid-area: ${textGridArea}`
		}
	}
`;

export const ArticleSubsection = ({ subsection }) => {
	const subsectionGrid = ReturnMediaAndTextGridDataOnLargeWidthDevices({ subsection });
	return (
		<ArticleSubsectionContainer
			gridArea={subsection.subsectionGravity}
		>
			{
				subsection.subsectionTitle &&
				<div
					dangerouslySetInnerHTML={{'__html': subsection.subsectionTitle}}
				/>
			}
			<SubsectionBodyContainer
				subsectionGrid={subsectionGrid}
			>
					{
						(subsection.subsectionMediaComponents ||
						subsection.subsectionMedia) &&
						<SubsectionMediaContainer
							mediaGridArea={subsectionGrid.mediaGridArea}
						>
							{
								subsection.subsectionMediaComponents &&
								subsection.subsectionMediaComponents[0] &&
								subsection.subsectionMediaComponents.map((mediaComponentItem) =>
									<SubsectionMediaItemContainer>
										<MediaItem
											key={`media-component--${mediaComponentItem}`}
											category="component"
											specs={mediaComponentItem}
										/>
									</SubsectionMediaItemContainer>,
								)
							}
							{
								subsection.subsectionMedia && subsection.subsectionMedia[0] &&
								subsection.subsectionMedia
									.map((mediaItem) => {
										if (
											['webp', 'png', 'jpeg', 'gif']
												.includes(mediaItem.type)
										) {
											return (
												<SubsectionMediaItemContainer>
													<MediaItem
														key={mediaItem.hash}
														category="image"
														specs={mediaItem}
													/>
												</SubsectionMediaItemContainer>
											);
										}
										if (
											['webm', 'mp4']
												.includes(mediaItem.type)
										) {
											return (
												<SubsectionMediaItemContainer>
													<MediaItem
														key={mediaItem.hash}
														category="video"
														specs={{
															'video': mediaItem,
														}}
													/>
												</SubsectionMediaItemContainer>
											);
										}
									}
								)
							}
						</SubsectionMediaContainer>
					}
					{
						subsection.subsectionText &&
						<SubsectionTextContainer
							textGridArea={subsectionGrid.textGridArea}
						>
								<div
									dangerouslySetInnerHTML={{'__html': subsection.subsectionText}}
								/>
						</SubsectionTextContainer>
					}
			</SubsectionBodyContainer>
		</ArticleSubsectionContainer>
	);
};
