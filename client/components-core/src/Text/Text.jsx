import styled from 'styled-components';
import { style } from 'style-service';

const TextContainer = styled.span`
	${({
		deviceWidth,
		size,
		weight,
		slant,
		usage,
	}) => style.type.style({
		deviceWidth,
		size,
		weight,
		slant,
		usage,
	})}
`;

export const Text = ({
	deviceWidth = 's',
	size = 's',
	weight,
	slant,
	usage,
	children,
}) => (<TextContainer
	deviceWidth={deviceWidth}
	size={size}
	weight={weight}
	slant={slant}
	usage={usage}
>
	{children}
</TextContainer>);
