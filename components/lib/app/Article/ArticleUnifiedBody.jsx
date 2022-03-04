import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleSection } from './ArticleSection';
import { deviceWidthQuery, color } from '@jbkr/style-service';
import { Button } from '../../core/Button/Button';
import { MediaItem } from '../Common/MediaItem';


const ArticleUnifiedBodyContainer = styled.div``;
const CodeEmbedContainer = styled.figure`
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: none;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		margin: 0 0 3rem;
	}
`;
const CodeEmbedIframe = styled.iframe`
	width: 100%;
	height: 62rem;
	border: 0;
	border-radius: .375rem;
	overflow:hidden;
	margin-bottom: 1rem;
`;
const CodeEmbedCaption = styled.figcaption`
	font-size: 1.375rem;
`;
const CodeEditButtonContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		margin: 0 0 3rem;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: none;
	}
`;
const MediaSetContainer = styled.figure`
	margin: 0 0 3rem;
	${deviceWidthQuery.only({ 'width': 's' })} {
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
	}
`;
const MediaItemContainer = styled.div`
	margin: 0 0 1rem;
	${deviceWidthQuery.only({ 'width': 's' })} {
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
	}
`;
const MediaSetCaptionContainer = styled.figcaption`
	font-size: 1.375rem;
`;
const MediaSetCaptionTextContainer = styled.p`
	display: inline;
	color: ${color({
		'kind': 'Neutral',
		'tone': 'Base',
		'level': 1,
		'format': 'string'
	})};
`;
const MediaSetCaptionCreditContainer = styled.p`
	display: inline;
	opacity: .8;
`;

export const ArticleUnifiedBody = ({ parts }) => (
	<ArticleUnifiedBodyContainer>
		{
			parts.map((part) => {
				if (part.type === 'text') {
					return (
						<Copy
							kind="copy-container--standard"
							htmlContent={part.text}
							key={part.key}
						/>
					);
				}
				if (part.type === 'codeEmbed') {
					let constructedURL = `${part.url}?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&hidedevtools=1`;
					if (part.file) {
						constructedURL += `&module=${encodeURIComponent(part.file)}`;
					} else {
						constructedURL += '&view=preview';
					}
					return (
						<div
							key={part.key}
						>
							<CodeEmbedContainer>
								<CodeEmbedIframe
									src={constructedURL}
									title={part.accessibilityTitle}
									// allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
									sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
								/>
								<CodeEmbedCaption>
									<Copy
										kind="copy-container--standard"
										htmlContent={part.caption}
									/>
								</CodeEmbedCaption>
							</CodeEmbedContainer>
							<CodeEditButtonContainer>
								<Button
									size="standard"
									surfaceStyle="filled"
									contextColor="onDark"
									text="Edit on CodeSandbox"
									iconAfter="open-new-tab"
									url={constructedURL}
								/>
							</CodeEditButtonContainer>
						</div>
					);
				}
				if (part.type === 'media') {
					return (
						<MediaSetContainer
							key={part.key}
						>
							{
								part.media
									.map((mediaItem) => {
										if (
											['webp', 'png', 'jpeg', 'gif']
												.includes(mediaItem.type)
										) {
											return (
												<MediaItemContainer
													key={mediaItem.key}
												>
													<MediaItem
														category="image"
														specs={mediaItem}
													/>
												</MediaItemContainer>
											);
										}
										if (
											['webm', 'mp4']
												.includes(mediaItem.type)
										) {
											return (
												<MediaItemContainer
													key={mediaItem.key}
												>
													<MediaItem
														category="video"
														specs={{
															'video': mediaItem,
														}}
													/>
												</MediaItemContainer>
											);
										}
									}
								)
							}
							<MediaSetCaptionContainer>
								<Copy
									kind="copy-container--article--body--image-caption"
								>
									<MediaSetCaptionTextContainer
										dangerouslySetInnerHTML={{
											'__html': part.caption
										}}
									/>&nbsp;&mdash;&nbsp;
									{
										part.credits.map((
											creditValue,
											creditIndex
										) =>
											<MediaSetCaptionCreditContainer
												key={`media-credit-${creditIndex}`}
												dangerouslySetInnerHTML={{
													'__html':
														creditIndex + 1 <
														part.credits.length ?
														creditValue + '&nbsp;' :
														creditValue
												}}
											/>
										)
									}
								</Copy>
							</MediaSetCaptionContainer>
						</MediaSetContainer>
					);
				}
			})
		}
	</ArticleUnifiedBodyContainer>
);
