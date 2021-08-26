/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { H2, H3, Code } from '@storybook/components';
import { colors, standardCorners } from '@jbkr/style-service';
import { returnHSLAStringFromHSLAObject } from '@jbkr/utilities';

const Swatch = styled.div`
	height: 3rem;
	${standardCorners()}
	background-color:
		${({ hslaObject }) => returnHSLAStringFromHSLAObject({ hslaObject })};
`;
const ColorSpecification = styled.li`
	font-family: 'Inter';
	font-size: 14px;
	line-height: 24px;
	list-style: none;
	color: hsl(225.7, 24.1%, 82.9%);
`;
const ColorSpecificationSet = styled.ul`
	padding-left: 0;
	margin: 1rem 0 0 0;
`;
const ColorToneSectionContainer = styled.div`
	margin: 3rem 0;
`;
const ColorToneContainer = styled.ul`
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	padding: 0;
`;
const ColorLevelContainer = styled.li`
	padding: .5rem;
	min-width: 5rem;
	max-width: 14rem;
	list-style: none;
	border: 1px solid hsla(225,61%,23%,1);
	${standardCorners()}
`;

const ColorKind = ({ kindName, kindContent }) => {
	return(
		<>
			<H2>Kind: <Code>{kindName}</Code></H2>
			{
				Object.keys(kindContent).map((key, index) => {
					// console.log('key');
					// console.log(key);
					return (<ColorTone
						key={`${key}-${index}`}
						kindName={kindName}
						toneName={key}
						toneContent={kindContent[key]}
					/>);
				})
			}
		</>
	);
};
const ColorTone = ({ kindName, toneName, toneContent }) => {
	return(
		<ColorToneSectionContainer>
			<H3 style={{'color': 'white'}}>Tone: <Code>{toneName}</Code></H3>
			<ColorToneContainer>
				{
					Object.keys(toneContent).map((key, index) =>
						<ColorLevel
							key={`${key}-${index}`}
							kindName={kindName}
							toneName={toneName}
							levelName={key}
							levelContent={toneContent[key]}
						/>,
					)
				}
			</ColorToneContainer>
		</ColorToneSectionContainer>
	);
};
const ColorLevel = ({ kindName, toneName, levelName, levelContent }) => {
	return(
		<ColorLevelContainer>
			<Swatch
				hslaObject={levelContent}
			/>
			<ColorSpecificationSet>
				<ColorSpecification>Kind: {kindName}</ColorSpecification>
				<ColorSpecification>Tone: {toneName}</ColorSpecification>
				<ColorSpecification>Level: {levelName}</ColorSpecification>
			</ColorSpecificationSet>
		</ColorLevelContainer>
	);
};


export const ColorSwatches = () => {
	const allColors = colors();
	delete allColors.Light;
	return (
		<>
			{
				Object.keys(allColors).map((key, index) =>
					<ColorKind
						key={`${key}-${index}`}
						kindName={key}
						kindContent={allColors[key]}
					/>,
				)
			}
		</>
	);
};
