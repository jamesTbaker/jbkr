/* eslint-disable max-len */
import styled from 'styled-components';

const returnColors = ({ greyscale, contextColor }) => {
	const colors = {};
	if (!greyscale) {
		colors.logo = {
			'topRight':		'#49C5B1',
			'right':		'#DC4397',
			'bottomRight':	'#69B3E7',
			'bottomLeft':	'#edc414',
			'left':			'#BB95D1',
			'topLeft': 		'#FC746A',
		};
	} else {
		if (contextColor === 'onLight') {
			colors.logo = {
				'topRight':		'rgb(85, 85, 85)',
				'right':		'rgb(85, 85, 85)',
				'bottomRight':	'rgb(85, 85, 85)',
				'bottomLeft':	'rgb(85, 85, 85)',
				'left':			'rgb(85, 85, 85)',
				'topLeft': 		'rgb(85, 85, 85)',
			};
		}
		if (contextColor === 'onDark') {
			colors.logo = {
				'topRight':		'rgb(255, 255, 255)',
				'right':		'rgb(255, 255, 255)',
				'bottomRight':	'rgb(255, 255, 255)',
				'bottomLeft':	'rgb(255, 255, 255)',
				'left':			'rgb(255, 255, 255)',
				'topLeft': 		'rgb(255, 255, 255)',
			};
		}
	}
	if (contextColor === 'onLight') {
		colors.wordmark = 'rgb(85, 85, 85)';
	}
	if (contextColor === 'onDark') {
		colors.wordmark = 'rgb(255, 255, 255)';
	}
	return colors;
};
const HubLogotypeContainer = styled.div`
	display: block;
	height: 100%;
	svg {
		height: 100%;
		${
			({ $colors }) => `
				path.logo--left {
					fill: ${$colors.logo.left};
				}
				path.logo--topLeft {
					fill: ${$colors.logo.topLeft};
				}
				path.logo--topRight {
					fill: ${$colors.logo.topRight};
				}
				path.logo--right {
					fill: ${$colors.logo.right};
				}
				path.logo--bottomRight {
					fill: ${$colors.logo.bottomRight};
				}
				path.logo--bottomLeft {
					fill: ${$colors.logo.bottomLeft};
				}
				path.wordmark--character {
					fill: ${$colors.wordmark};
				}
			`
		}
	}
`;
export const HubLogotype = ({ greyscale, contextColor }) => (
	<HubLogotypeContainer
		$colors={returnColors({ greyscale, contextColor })}
	>
		<svg viewBox="0 0 500 200">
			<g>
				<g className="logo">
					<path className="logo--left" d="M16.7,130.9c-2.7-6-4.3-11.7-5.3-18.4 c-0.5-3.6-0.5-12.9,0-16.4c1-6.9,2.6-12.4,5.3-18.5c0.4-0.9,0.7-1.6,0.8-1.7c0,0,29.2,16.7,29.3,16.9c0,0-0.2,0.8-0.6,1.8 c-1.2,3.6-1.5,5.3-1.5,9.6c0,4.3,0.3,6.4,1.5,9.8c0.3,1,0.7,1.9,0.7,2.1c0.1,0.3-1,0.9-24.2,14.4l-5,2.9L16.7,130.9z" />
					<path className="logo--topLeft" d="M36.6,77.5c-7.7-4.5-14.3-8.2-14.5-8.4l-0.5-0.2l1-1.5 c3-4.3,8.4-10,12.4-13.2c10.1-8,22-12.8,34.9-14l1.5-0.1V57v16.9l-1.6,0.3c-2.3,0.4-6,1.7-8.4,2.9c-3.1,1.6-5.6,3.4-8.2,6.2 c-1.3,1.3-2.4,2.4-2.4,2.4C50.7,85.6,44.3,82,36.6,77.5L36.6,77.5z" />
					<path className="logo--topRight" d="M98.7,84.4c-4-4.9-10.7-8.8-17.2-10.1L79.8,74V57v-17l1.7,0.1 c3.9,0.3,9.9,1.6,13.9,2.9c13,4.3,24.5,12.7,32.4,23.8c0.8,1.1,1.4,2,1.4,2.1c0,0.1-28.9,16.9-29.1,16.9 C100,85.9,99.4,85.2,98.7,84.4z" />
					<path className="logo--right" d="M118.4,124.8l-14.7-8.5l0.5-1.1c2.3-5.7,2.5-13.8,0.5-20.1 c-0.3-1-0.5-1.9-0.5-2c0.2-0.2,28.7-16.6,28.9-16.7c0.6-0.1,3.4,7.1,4.6,11.9c2.3,8.8,2.7,18,1.2,26.8c-1,5.7-3.3,12.9-5.5,17.3 l-0.4,0.7L118.4,124.8z" />
					<path className="logo--bottomRight" d="M79.8,151.7v-16.9l0.6-0.1c7.3-1.5,11.9-3.9,16.8-8.7l2.6-2.5 l14.6,8.4l14.6,8.4l-0.8,1.1c-10.6,15.1-28.2,25.4-46.5,27l-1.9,0.2L79.8,151.7z" />
					<path className="logo--bottomLeft" d="M69.3,168.6c-8.2-0.8-17.5-3.7-24.8-7.7 c-6.7-3.7-13.2-9-18-14.6c-2.3-2.7-4.5-5.7-4.3-5.9c0.1-0.1,6.7-3.9,14.6-8.5l14.5-8.3l2.5,2.5c4.5,4.5,9.3,7.1,15.5,8.4l2.1,0.4 v16.9v16.9l-0.7,0C70.4,168.7,69.7,168.6,69.3,168.6L69.3,168.6z" />
				</g>
				<g className="wordmark">
					<path className="wordmark--character" d="M196.4,11.9h-10.6v31.2h-6.1V11.9h-10.5V6.8h27.2L196.4,11.9 z" />
					<path className="wordmark--character" d="M231.4,43.1h-6.1V27.3h-17.3v15.8h-6.1V6.8h6.1v15.3h17.3 V6.8h6.1L231.4,43.1z" />
					<path className="wordmark--character" d="M261.2,43.1h-20.7V6.8h19.8v5.1h-13.7v10.3h12.7v5.1h-12.7 V38h14.5L261.2,43.1z" />
					<path className="wordmark--character" d="M261.9,191.2h-13.9V137h-61.6v54.3h-13.9v-119h13.9v52.2 h61.6V72.2h13.9V191.2z" />
					<path className="wordmark--character" d="M380.3,143.1c0,33.4-15.1,50.1-45.2,50.1 c-28.9,0-43.3-16.1-43.3-48.2V72.2h13.9v71.9c0,24.4,10.3,36.6,30.9,36.6c19.9,0,29.8-11.8,29.8-35.4V72.2h13.9L380.3,143.1z" />
					<path className="wordmark--character" d="M410.1,191.2v-119H444c10.3,0,18.4,2.5,24.5,7.6 c6,5,9,11.6,9,19.7c0,6.7-1.8,12.6-5.5,17.6c-3.7,5-8.7,8.5-15.1,10.6v0.3c8,0.9,14.4,4,19.3,9.1c4.8,5.1,7.2,11.7,7.2,19.9 c0,10.2-3.7,18.4-11,24.7c-7.3,6.3-16.5,9.5-27.6,9.5L410.1,191.2z M424,84.8v38.4h14.3c7.6,0,13.6-1.8,18-5.5 c4.4-3.7,6.6-8.9,6.6-15.6c0-11.6-7.6-17.3-22.8-17.3L424,84.8z M424,135.8v42.8H443c8.2,0,14.5-1.9,19-5.8 c4.5-3.9,6.8-9.2,6.8-15.9c0-14.1-9.6-21.1-28.7-21.1L424,135.8z" />
				</g>
			</g>
		</svg>
	</HubLogotypeContainer>
);
