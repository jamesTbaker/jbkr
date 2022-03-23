import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { deviceWidthQuery } from '@jbkr/style-service';

const ContentContainer = styled.span`
	display: block;
	margin: 0;
`;
const ProfileValuePropositionTwoContainer = styled.span`
	display: block;
	transform: translateY(2rem);
	opacity: 0;
	transition: all 1s 2.5s;
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
	margin: 0 0 8rem 0;
	@media (min-width: 502px) {
		margin: 0 0 8rem 0;
	}
	@media (min-width: 950px) {
		margin: 0 0 13.5rem 0;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 0 0 15rem 0;
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
				(screenSize === 'large' || screenSize === 'smallToMedium') &&
				content.map((lineValue, lineIndex) =>
					<ContentContainer
						key={'profile--value-proposition-two--content-' +
								`container--${screenSize}-screen--${lineIndex}`
							}
					>
						<Copy
							kind="profile--value-proposition--two--extra-small-to-large"
							htmlContent={lineValue}
						/>
					</ContentContainer>
				)
			}
			{
				screenSize === 'extraSmallToSmallLarger' &&
				content.map((lineValue, lineIndex) =>
					<ContentContainer
						key={'profile--value-proposition-two--content-' +
								`container--${screenSize}-screen--${lineIndex}`
							}
					>
						<Copy
							kind="profile--value-proposition--two--extra-small-to-large"
							htmlContent={lineValue}
						/>
					</ContentContainer>
				)
			}
			{
				screenSize === 'extraSmallToSmallSmaller' &&
				content.map((lineValue, lineIndex) =>
					<ContentContainer
						key={'profile--value-proposition-two--content-' +
								`container--${screenSize}-screen--${lineIndex}`
							}
					>
						<Copy
							kind="profile--value-proposition--two--extra-small-to-small--smaller"
							htmlContent={lineValue}
						/>
					</ContentContainer>
				)
			}
		</ProfileValuePropositionTwoContainer>
	);
};
