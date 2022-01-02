import styled, { keyframes } from 'styled-components';
import { Brand } from '../../..';
import { Copy } from '../../core/Copy/Copy';
import {
	deviceWidthQuery, color, standardTime, fadeUpKeyframes, hiddenInline
} from '@jbkr/style-service';

const textFadeUpAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(6rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;
const brandFadeUpAnimation = keyframes`
	0% {
		opacity: 0;
		transform: translateY(2rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;
const ScreenTitlePrimaryAppendix = styled.span`
	${hiddenInline}
`;
const ScreenTitlePrimaryContainer = styled.div`
	animation: ${textFadeUpAnimation} ${standardTime().s}s ease-in 1;
`;
const BrandContainer = styled.div`
	animation: ${brandFadeUpAnimation} .75s ease-in .5s 1;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 13.125rem;
		height: 8rem;
	}
`;

export const ScreenTitlePrimary = ({
	includeBrand,
	contextColor,
	titleVisible,
	titleHiddenAppendix,
}) => (
	<>
		{
			includeBrand &&
			<BrandContainer>
				<Brand
					contextColor={contextColor}
				/>
			</BrandContainer>
		}
		<ScreenTitlePrimaryContainer>
			<Copy
				kind="landmark-title"

			>
				{titleVisible}
				<ScreenTitlePrimaryAppendix>
					{titleHiddenAppendix}
				</ScreenTitlePrimaryAppendix>
			</Copy>
		</ScreenTitlePrimaryContainer>
	</>
);
