import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Brand } from '../../..';
import { Copy } from '../../core/Copy/Copy';
import { deviceWidthQuery, hiddenInline } from '@jbkr/style-service';

const ScreenTitlePrimaryAppendix = styled.span`
	${hiddenInline}
`;
const ScreenTitlePrimaryContainer = styled.div`
	transform: translateY(6rem);
	opacity: 0;
	${
		({ delay }) => `transition: all 1.5s ${delay};`
	}
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
`;
const BrandContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 13.125rem;
		height: 8rem;
		transform: translateY(2rem);
		opacity: 0;
		transition: all .75s;
		&.animation-state--final {
			transform: translateY(0);
			opacity: 1;
		}
	}
`;

export const ScreenTitlePrimary = ({
	includeBrand,
	contextColor,
	titleVisible,
	titleHiddenAppendix,
}) => {
	const brandContainerRef = useRef();
	const screenTitleSecondaryContainerRef = useRef();
	useEffect(() => {
		if (includeBrand) {
			brandContainerRef.current.classList.add('animation-state--final');
		}
		screenTitleSecondaryContainerRef.current.classList.add('animation-state--final');
	});
	return (
		<>
			{
				includeBrand &&
				<BrandContainer
					ref={brandContainerRef}
				>
					<Brand
						contextColor={contextColor}
					/>
				</BrandContainer>
			}
			<ScreenTitlePrimaryContainer
				ref={screenTitleSecondaryContainerRef}
				delay={includeBrand ? '.5s' : '0s'}
			>
				<Copy
					kind="landmark-title"

				>
					{titleVisible}
					{
						titleHiddenAppendix &&
						<ScreenTitlePrimaryAppendix>
							{titleHiddenAppendix}
						</ScreenTitlePrimaryAppendix>
					}
				</Copy>
			</ScreenTitlePrimaryContainer>
		</>
	);
};
