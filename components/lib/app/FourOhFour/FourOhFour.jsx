import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Brand } from '../../..';
import { Button } from '../../core/Button/Button';
import { ScreenTitlePrimary } from '../Common/ScreenTitlePrimary';




const FourOhFourContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		width: 100%;
		max-width: 180rem;
		margin: 14rem auto 0;
		text-align: center;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})``;
const FourOhFourHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		padding: 15rem 0 0 0;
		text-align: left;
	}
`;
const FourOhFourBody = styled.div`
	width: 100%;
	text-align: center;
	transform: translateY(6rem);
	opacity: 0;
	transition: all 1.5s .5s;
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
`;
const ContentContainer = styled.div``;
export const FourOhFour = ({
	title,
	media,
	text,
}) => {
	const fourOhFourBodyRef = useRef();
	useEffect(() => {
		fourOhFourBodyRef.current.classList.add('animation-state--final');
	});
	return (
		<FourOhFourContainer>
			<MainContentContainer>
				<FourOhFourHeader>
					<ScreenTitlePrimary
						titleVisible={title}
					/>
				</FourOhFourHeader>
				<FourOhFourBody
					ref={fourOhFourBodyRef}
				>
					<ContentContainer>
						<Copy
							kind="contact--section-header"
						>
							{text.headerSecondary}
						</Copy>
						<Copy
							kind="contact--brand-tagline"
						>
							{text.paragraph}
						</Copy>
					</ContentContainer>
				</FourOhFourBody>
			</MainContentContainer>
		</FourOhFourContainer>
	);
};
