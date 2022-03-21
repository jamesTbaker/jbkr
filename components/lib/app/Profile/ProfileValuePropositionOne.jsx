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
	margin: 0;
`;
export const ProfileValuePropositionOne = ({ content }) => {
	const profileValuePropositionOneContentLineOneRef = useRef();
	const profileValuePropositionOneContentLineTwoRef = useRef();
	let lineOneContentSplit = '<span class="word-container">' +
		'<span class="word-content">';
	content.lineOne.split('').forEach((character) => {
		if (character === ' ') {
			lineOneContentSplit += '</span></span>' +
				'<span class="whitespace-character">&nbsp;</span>' +
				'<span class="word-container"><span class="word-content">';
		} else {
			lineOneContentSplit += character;
		}
	});
	lineOneContentSplit += '</span></span>';
	let lineTwoContentSplit = '<span class="word-container">' +
		'<span class="word-content">';
	content.lineTwo.split('').forEach((character) => {
		if (character === ' ') {
			lineTwoContentSplit += '</span></span>' +
				'<span class="whitespace-character">&nbsp;</span>' +
				'<span class="word-container"><span class="word-content">';
		} else {
			lineTwoContentSplit += character;
		}
	});
	lineTwoContentSplit += '</span></span>';
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
	});
	return (
		<ProfileValuePropositionOneContainer>
			<ContentContainer
				ref={profileValuePropositionOneContentLineOneRef}
			>
				<Copy
					kind="profile--value-proposition--one"
					htmlContent={lineOneContentSplit}
				/>
			</ContentContainer>
			<ContentContainer
				ref={profileValuePropositionOneContentLineTwoRef}
			>
				<Copy
					kind="profile--value-proposition--one"
					htmlContent={lineTwoContentSplit}
				/>
			</ContentContainer>
		</ProfileValuePropositionOneContainer>
	);
};
