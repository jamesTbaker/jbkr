import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';


const ScreenTitleSecondaryContentPreface = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const ScreenTitleSecondaryContentMain = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
	.effect {
		color: red;
	}
`;

const ScreenTitleSecondaryContainer = styled.div`
	margin: 0;
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;

export const ScreenTitleSecondary = ({ use, title }) => {
	const screenTitleSecondaryContentMainRef = useRef();
	let mainContentSplit = '';
	title.main.split('').forEach((character) => {
		mainContentSplit += `<span>${character}</span>`;
	});
	useEffect(() => {
		const characterElements = screenTitleSecondaryContentMainRef.current.firstChild.querySelector('span');
		console.log('characterElements');
		console.log(characterElements);
		console.log(typeof(characterElements));

		let char = 0;
		const onTick = () => {
			const span = characterElements[char];
			span.classList.add('effect');
			char++;
			if (char === characterElements.length) {
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
					/* htmlContent={`
						<div style="display: block; text-align: start; position: relative;">
							Scrote Ever So Lovely:
						</div>
						<div style="display: block; text-align: start; position: relative;">
							Throw a Spanner in the
						</div>
						<div style="display: block; text-align: start; position: relative;">
							Works
						</div>
					`} */
				/>
			</ScreenTitleSecondaryContentMain>
		</ScreenTitleSecondaryContainer>
	);
};
