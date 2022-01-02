import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { color, zIndexNumber, hiddenInline } from '@jbkr/style-service';


const ScreenTitleSecondaryContentPreface = styled.div``;
const ScreenTitleSecondaryContentMain = styled.div`
	span.word-container {
		position: relative;
		display: inline-flex;
		margin-bottom: 1rem;
		padding: 1rem;
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

const ScreenTitleSecondaryContainer = styled.div`
	margin: 0;
`;

export const ScreenTitleSecondary = ({ use, title }) => {
	const screenTitleSecondaryContentMainRef = useRef();
	let mainContentSplit = '<span class="word-container">' +
		'<span class="word-content">';
	title.main.split('').forEach((character) => {
		if (character === ' ') {
			mainContentSplit += '</span></span>' +
				'<span class="whitespace-character">&nbsp;</span>' +
				'<span class="word-container"><span class="word-content">';
		} else {
			mainContentSplit +=
				`<span class="visible-character">${character}</span>`;
		}
	});
	mainContentSplit += '</span></span>';
	useEffect(() => {
		const wordContainers = screenTitleSecondaryContentMainRef
			.current.firstChild.children;
		let char = 0;
		const onTick = () => {
			const span = wordContainers[char];
			span.classList.add('animation-state--final');
			char++;
			if (char === wordContainers.length) {
				complete();
				return;
			}
		};
		let timer = setInterval(onTick, 50);
		const complete = () => {
			clearInterval(timer);
			timer = null
		}
	});
	return (
		<ScreenTitleSecondaryContainer
			as={use && use === 'profileSectionTitle' ? 'h2' : 'h1'}
		>
			{
				title && title.preface &&
				<ScreenTitleSecondaryContentPreface>
					<Copy
						kind="profile--section-title--preface"
					>
						{title.preface}&nbsp;
					</Copy>
				</ScreenTitleSecondaryContentPreface>
			}
			<ScreenTitleSecondaryContentMain
				ref={screenTitleSecondaryContentMainRef}
			>
				<Copy
					kind="article--title"
					htmlContent={mainContentSplit}
				/>
			</ScreenTitleSecondaryContentMain>
		</ScreenTitleSecondaryContainer>
	);
};
