import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { color, zIndexNumber, hiddenInline } from '@jbkr/style-service';

const ContentContainer = styled.span`
	display: block;
	margin: 0;
`;
const ProfileValuePropositionTwoContainer = styled.span`
	display: block;
	margin: 0 0 15rem 0;
	transform: translateY(2rem);
	opacity: 0;
	transition: all 1s 2.5s;
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
`;
export const ProfileValuePropositionTwo = ({ content, screenSize }) => {
	const profileValuePropositionTwoContainerRef = useRef();
	useEffect(() => {
		profileValuePropositionTwoContainerRef.current.classList.add('animation-state--final');
	});
	return (
		<ProfileValuePropositionTwoContainer
			ref={profileValuePropositionTwoContainerRef}
		>
			{
				(screenSize === 'large' || screenSize === 'medium') &&
				content.map((lineValue, lineIndex) =>
					<ContentContainer
						key={'profile--value-proposition-two--content-' +
								`container--${screenSize}-screen--${lineIndex}`
							}
					>
						<Copy
							kind="profile--value-proposition--two--not-small"
							htmlContent={lineValue}
						/>
					</ContentContainer>
				)
			}
			{
				screenSize === 'small' &&
				content.map((lineValue, lineIndex) =>
					<ContentContainer
						key={'profile--value-proposition-two--content-' +
								`container--${screenSize}-screen--${lineIndex}`
							}
					>
						<Copy
							kind="profile--value-proposition--two--small"
							htmlContent={lineValue}
						/>
					</ContentContainer>
				)
			}
		</ProfileValuePropositionTwoContainer>
	);
};
