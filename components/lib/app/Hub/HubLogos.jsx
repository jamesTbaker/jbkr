/* eslint-disable max-len */
import styled from 'styled-components';
import { HubLogotype } from './HubLogotype';

const HubLogosContainer = styled.div`
	border-radius: .375rem;
	overflow: hidden;
`;
const HubLogoContainer = styled.div`
	padding: 2rem 7rem;
	${
		({ backgroundColor }) => `background-color: ${backgroundColor};`
	}
	${
		({ backgroundImage }) => `
			background-image: url('${backgroundImage}');
			background-position: 0% 0%;
		`
	}
`;

export const HubLogos = () => (
	<HubLogosContainer>
		<HubLogoContainer
			backgroundColor="#fff"
		>
			<HubLogotype
				greyscale={false}
				contextColor="onLight"
			/>
		</HubLogoContainer>
		<HubLogoContainer
			backgroundImage="https://res.cloudinary.com/jbkrcdn/image/upload/v1638993824/The-Hub--Stars_ebavny.jpg"
		>
			<HubLogotype
				greyscale={false}
				contextColor="onDark"
			/>
		</HubLogoContainer>
		<HubLogoContainer
			backgroundColor="#ccc"
		>
			<HubLogotype
				greyscale={true}
				contextColor="onLight"
			/>
		</HubLogoContainer>
	</HubLogosContainer>
);
