import styled from 'styled-components';
import { colors, standardCorners } from '@jbkr/style-service';
import { returnHSLAStringFromHSLAObject } from '@jbkr/utilities';

const Swatch = styled.div`
	width: 3rem;
	height: 3rem;
	${standardCorners()}
	background-color:
		${({ hslaObject }) => returnHSLAStringFromHSLAObject({ hslaObject })};
`;


const ColorKind = ({ kind }) => {
	// console.log(kind);
	return(
		<>
			{
				Object.keys(kind).map((key, index) => {
					// console.log('key');
					// console.log(key);
					return (<ColorTone
						key={`${key}-${index}`}
						tone={kind[key]}
					/>);
				})
			}
		</>
	);
};
const ColorTone = ({ tone }) => {
	// console.log(tone);
	return(
		<>
			{
				Object.keys(tone).map((key, index) =>
					<ColorLevel
						key={`${key}-${index}`}
						level={tone[key]}
					/>,
				)
			}
		</>
	);
};
const ColorLevel = ({ level }) => {
	console.log(level);
	return(
		<>
			<Swatch
				hslaObject={level}
			/>
		</>
	);
};


export const ColorSwatches = () => {
	const allColors = colors();
	// console.log(allColors);
	return (
		<>
			{
				Object.keys(allColors).map((key, index) =>
					<ColorKind
						key={`${key}-${index}`}
						kind={allColors[key]}
					/>,
				)
			}
		</>
	);
};
