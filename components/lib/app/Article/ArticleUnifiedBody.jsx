import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleSection } from './ArticleSection';
import { deviceWidthQuery } from '@jbkr/style-service';
import { Button } from '../../core/Button/Button';


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

export const ArticleUnifiedBody = ({ parts }) => (
	<ArticleUnifiedBodyContainer>
		{
			parts.map((part) => {
				if (part.type === 'text') {
					return (
						<Copy
							kind="copy-container--standard"
							htmlContent={part.text}
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
						<>
							<CodeEmbedContainer>
								<CodeEmbedIframe
									src={constructedURL}
									title={part.accessibilityTitle}
									allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
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
						</>
					);
				}
				if (part.type === 'media') {

				}
			})
		}
	</ArticleUnifiedBodyContainer>
);
