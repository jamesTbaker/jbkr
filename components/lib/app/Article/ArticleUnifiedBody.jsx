import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { deviceWidthQuery, color } from '@jbkr/style-service';
import { MediaItem } from '../Common/MediaItem';

const ArticleUnifiedBodyContainer = styled.div`
	pre[class^="language"] {
		margin-bottom: 3rem;
	}
	${deviceWidthQuery.only({ 'width': 's' })} {
		pre[class^="language"] {
			font-size: 80%;
		}
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
				/* if (part.type === 'text') {
					return (
						<Copy
							kind="copy-container--standard"
							htmlContent={part.text}
							key={part.key}
						/>
					);
				} */
				if (part.type === 'mediaSet') {
					return (
						<MediaSetContainer
							key={part.key}
						>
							{
								part.items
									.map((mediaItem) => {
										/* if (mediaItem.objectType === 'image') {
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
										if (mediaItem.objectType === 'video') {
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
										if (mediaItem.objectType === 'YouTube') {
											return (
												<MediaItemContainer
													key={mediaItem.key}
												>
													<MediaItem
														category="youtube"
														specs={{
															'id': mediaItem.urlFragment,
															'title': mediaItem.accessibilityTitle,
														}}
													/>
												</MediaItemContainer>
											);
										}
										if (mediaItem.objectType === 'CodeSandbox') {
											return (
												<MediaItemContainer
													key={mediaItem.key}
												>
													<MediaItem
														category="codesandbox"
														specs={{
															'id': mediaItem.urlFragment,
															'file': mediaItem.file,
															'title': mediaItem.accessibilityTitle,
														}}
													/>
												</MediaItemContainer>
											);
										}
										if (mediaItem.objectType === 'Twitter') {
											return (
												<MediaItemContainer
													key={mediaItem.key}
												>
													<MediaItem
														category="twitter"
														specs={{
															'title': mediaItem.accessibilityTitle,
															...mediaItem.tweetData,
														}}
													/>
												</MediaItemContainer>
											);
										} */
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
