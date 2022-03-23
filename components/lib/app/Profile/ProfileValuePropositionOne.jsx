import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { color, zIndexNumber, hiddenInline } from '@jbkr/style-service';

const FlashOnSelectedWords = ({ delayMilliseconds, words }) => {
	const flashDurationMilliseconds = 50;
	setTimeout(() => {
		let char = 0;
		const onTick = () => {
			const span = words[char];
			span.classList.add('animation-state--final');
			char++;
			if (char === words.length) {
				complete();
				return;
			}
		};
		let timer = setInterval(onTick, flashDurationMilliseconds);
		const complete = () => {
			clearInterval(timer);
			timer = null;
		}

	}, delayMilliseconds);

};
const ContentContainer = styled.div`
	span.word-container {
		position: relative;
		display: inline-flex;
		margin-bottom: 1rem;
		margin-right: -.5rem;
		padding: 1rem 1.5rem;
		opacity: 0;
		overflow: hidden;
		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			display: inline-flex;
			width: 100%;
			height: 100%;
			background-color: ${color({
				'kind': 'Accent',
				'tone': 'Finch',
				'format': 'string',
				'level': 1,
			})};
			z-index: ${zIndexNumber().screenTitleBackground};
		}
		:first-child:before {
			border-top-left-radius: .375rem;
			border-bottom-left-radius: .375rem;
		}
		:last-child:before {
			border-top-right-radius: .375rem;
			border-bottom-right-radius: .375rem;
		}
		span.word-content {
			position: relative;
			z-index: ${zIndexNumber().screenTitle};
		}
	}
	span.whitespace-character {
		display: inline-block;
		${hiddenInline}
	}
	span.word-container.animation-state--final {
		opacity: 1;
	}
`;
const ProfileValuePropositionOneContainer = styled.span`
	display: block;
	margin: 0 0 2rem 0;
`;
export const ProfileValuePropositionOne = ({ content, screenSize }) => {
	const profileValuePropositionOneContents = [];
	const profileValuePropositionOneContentLineOneRef = useRef();
	const profileValuePropositionOneContentLineTwoRef = useRef();
	const profileValuePropositionOneContentLineThreeRef = useRef();
	content.forEach((lineContent) => {
		let markedUpLine = '<span class="word-container">' +
		'<span class="word-content">';
		lineContent.split('').forEach((character) => {
			if (character === ' ') {
				markedUpLine += '</span></span>' +
					'<span class="whitespace-character">&nbsp;</span>' +
					'<span class="word-container"><span class="word-content">';
			} else {
				markedUpLine += character;
			}
		});
		markedUpLine += '</span></span>';
		profileValuePropositionOneContents.push(markedUpLine);
	});
	useEffect(() => {
		FlashOnSelectedWords({
			'delayMilliseconds': 1500,
			'words': profileValuePropositionOneContentLineOneRef
			.current.firstChild.children,
		});
		FlashOnSelectedWords({
			'delayMilliseconds': 1750,
			'words': profileValuePropositionOneContentLineTwoRef
			.current.firstChild.children,
		});
		if (screenSize === 'extraSmall') {
			FlashOnSelectedWords({
				'delayMilliseconds': 2000,
				'words': profileValuePropositionOneContentLineThreeRef
				.current.firstChild.children,
			});
		}
	});
	return (
		<ProfileValuePropositionOneContainer>
			{
				profileValuePropositionOneContents.map((lineValue, lineIndex) => {
					let thisLineRef = profileValuePropositionOneContentLineOneRef;
					if (lineIndex === 1) {
						thisLineRef = profileValuePropositionOneContentLineTwoRef;
					}
					if (
						lineIndex === 2 &&
						screenSize === 'extraSmall'
					) {
						thisLineRef = profileValuePropositionOneContentLineThreeRef;
					}
					return (
						<ContentContainer
							ref={thisLineRef}
							key={'profile--value-proposition-two--content-' +
									`container--${screenSize}-screen--${lineIndex}`
								}
						>
							<Copy
								kind="profile--value-proposition--one"
								htmlContent={lineValue}
							/>
						</ContentContainer>
					);
				})
			}
		</ProfileValuePropositionOneContainer>
	);
};
