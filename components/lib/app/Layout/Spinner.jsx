import styled from 'styled-components';
import { color } from '@jbkr/style-service';

const SpinnerContainer = styled.span`
	width: 6rem;
	height: 6rem;
	border-radius: 50%;
	display: inline-block;
	position: relative;
	border: .25rem solid ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 28,
		'alpha': 1,
		'format': 'string'
	})};
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
	&:after {
		content: '';
		box-sizing: border-box;
		position: absolute;
		left: .5rem;
		top: .5rem;
		border: .25rem solid ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'alpha': 1,
			'format': 'string'
		})};
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Spinner = ({ children }) => (
	<SpinnerContainer>
		{children}
	</SpinnerContainer>
);
