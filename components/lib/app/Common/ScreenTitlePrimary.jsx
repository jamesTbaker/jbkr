import { useRef, useEffect } from 'react';
import styled from 'styled-components';
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
	${deviceWidthQuery.only({ 'width': 's' })} {
		margin-left: -.5rem;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		margin-left: -1rem;
	}
`;
const NameContainer = styled.div`
	height: 4rem;
	transform: translateY(2rem);
	opacity: 0;
	transition: all .75s;
	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		height: 5rem;
	}
`;

export const ScreenTitlePrimary = ({
	includeName,
	titleVisible,
	titleHiddenAppendix,
}) => {
	const nameContainerRef = useRef();
	const screenTitleSecondaryContainerRef = useRef();
	useEffect(() => {
		if (includeName) {
			nameContainerRef.current.classList.add('animation-state--final');
		}
		screenTitleSecondaryContainerRef.current.classList.add('animation-state--final');
	});
	return (
		<>
			{
				includeName &&
				<NameContainer
					ref={nameContainerRef}
					aria-hidden
				>
					<Copy
						kind="landmark-title--preface"
					>
						James Baker
					</Copy>
				</NameContainer>
			}
			<ScreenTitlePrimaryContainer
				ref={screenTitleSecondaryContainerRef}
				delay={includeName ? '.5s' : '0s'}
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
