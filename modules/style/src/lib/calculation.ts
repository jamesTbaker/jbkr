/**
 * Extract styles data from Figma and store it locally.
 *
 * @internal
 */
// models
import {
	returnHSLValuesFromRBGPercents, returnNumberRoundedUpToMultiple,
} from 'utilities';
import * as fs from 'fs';
// eslint-disable-next-line import/extensions
import { FigmaPage }	from '../models/figma';
// eslint-disable-next-line import/extensions
import { AllColors } from '../models/color';
// eslint-disable-next-line import/extensions
import { DeviceWidthToken } from '../models/device';
import {
	TypeSizeKey, TypeWeightKey, TypeLineHeightKey,
	TypeSlantKey, TypeStyle, AllTypeStyles,
// eslint-disable-next-line import/extensions
} from '../models/type';
// eslint-disable-next-line import/extensions
import { ShadowSubset, AllShadows } from '../models/shadow';
// lib predecessors

// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import { foundation } from './foundation.js';
import {
	storeFigmaStylePages, returnStoredFigmaStylePages,

// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
} from './extraction.js';
// modules

/**
 * Get all colors from the stored Figma pages. This includes the colors
 * assigned to the jbkr brand and the colors representing
 * light shining on surfaces.
 *
 * @remarks
 * Depends on the page titles specified in [[`definition`]].
 *
 * @returns An array of Figma page objects, or an `Error`.
 *
 * @internal
 */
export const returnAllColors = ():Promise<AllColors> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to retrieve the figma style pages
		returnStoredFigmaStylePages()
			// if the retrieval promise is resolved with a result
			.then((figmaPages:FigmaPage[]) => {
				// set up container
				const allColors:{
// eslint-disable-next-line @typescript-eslint/no-explicit-any
					[key: string]: any;
				} = {};
				// extract the relevant Figma pages
				const jbkrColorsFigmaPage = figmaPages
					.filter(
						(figmaPage) =>
							figmaPage.name === foundation
								.figma.pageTitles.colorJBKR,
					);
				const lightColorsFigmaPage = figmaPages
					.filter(
						(figmaPage) =>
							figmaPage.name === foundation
								.figma.pageTitles.light,
					);

				// extract the StyleObjects frame in the page
				const jbkrStyleObjectsFrame =jbkrColorsFigmaPage[0].
					children[0].children.filter(
						(child) => child.name === 'StyleObjects',
					);
				const lightStyleObjectsFrame =lightColorsFigmaPage[0]
					.children[0].children.filter(
						(child) => child.name === 'StyleObjects',
					);
				// extract the style objects from the frame
				const styleObjects = [
					...jbkrStyleObjectsFrame[0].children,
					...lightStyleObjectsFrame[0].children,
				];
				// for each style object
				styleObjects.forEach((styleObject) => {
					// get array of properties describing this style
					const propertiesArray = styleObject.name.split(' / ');
					// get this style object's fill color as RGBA
					const thisColorRGBA = styleObject.fills[0].color;
					// get HSL equivalent to RGB portion of RGBA
					const thisColorHSL = returnHSLValuesFromRBGPercents({
						'r': thisColorRGBA.r,
						'g': thisColorRGBA.g,
						'b': thisColorRGBA.b,
					});
					// construct the HSLA version of the fill color
					const thisColorHSLA = {
						'h': thisColorHSL.h,
						's': thisColorHSL.s,
						'l': thisColorHSL.l,
						'a': thisColorRGBA.a,
					};
					if (propertiesArray[2] === 'Light') {
						if (!(propertiesArray[2] in allColors)) {
							allColors[propertiesArray[2]] = {};
						}
						if (!(
							propertiesArray[3] in allColors[propertiesArray[2]]
						)) {
							allColors[propertiesArray[2]][propertiesArray[3]] =
								{};
						}
						allColors[propertiesArray[2]][propertiesArray[3]][
							propertiesArray[4]] = thisColorHSLA;
					}
					if (propertiesArray[2] === 'jbkr') {
						if (
							propertiesArray[3] === 'Neutral'
							|| propertiesArray[3] === 'Brand'
							|| propertiesArray[3] === 'State'
						) {
							if (!(
								propertiesArray[3] in
								allColors
							)) {
								allColors[propertiesArray[3]] = {};
							}
							if (!(
								propertiesArray[4] in
								allColors[propertiesArray[3]]
							)) {
								allColors[propertiesArray[3]][
									propertiesArray[4]] = {};
							}
							allColors[propertiesArray[3]][propertiesArray[4]][
								propertiesArray[5]] = thisColorHSLA;
						}
						if (propertiesArray[3] === 'Accent') {
							if (!(
								propertiesArray[3] in
								allColors
							)) {
								allColors[propertiesArray[3]] = {};
							}
							if (!(
								propertiesArray[4] in
								allColors[propertiesArray[3]]
							)) {
								allColors[propertiesArray[3]][
									propertiesArray[4]] = {};
							}
							if (!(
								propertiesArray[5] in
								allColors[propertiesArray[3]][
									propertiesArray[4]]
							)) {
								allColors[propertiesArray[3]][
									propertiesArray[4]][propertiesArray[5]] =
										{};
							}
							allColors[propertiesArray[3]][propertiesArray[4]][
								propertiesArray[5]][propertiesArray[6]] =
									thisColorHSLA;
						}
					}
				});
				// then resolve the main promise with the return value
				resolve(allColors as AllColors);
			})
			// if the retrieval promise is rejected with an error
			.catch((error) => {
				// reject the main promise with the error
				reject(error);
			});
	});
export const returnBaseTypeSize = (
	{ deviceWidth }:
	{ deviceWidth: DeviceWidthToken},
):number => foundation.gridBase * foundation.type.size
	.baseMultipliersByDeviceWidth[deviceWidth];
export const returnScaledTypeSize = (
	{
		deviceWidth,
		baseTypeSize,
		scalingSteps,
	}:{
		deviceWidth: DeviceWidthToken,
		baseTypeSize: number,
		scalingSteps: number,
	},
):number => {
	const scaleMultipliersThisDeviceWidth = foundation.type.size
		.scalingMultipliersByDeviceWidth[deviceWidth];
	const scaleMultiplierThisTypeSizeThisDeviceWidth = scalingSteps < 0
		? scaleMultipliersThisDeviceWidth.low
		: scaleMultipliersThisDeviceWidth.high;
	let scaledTypeSize = baseTypeSize;
	if (scalingSteps > 0) {
		for (
			let scalingStepsPerformed = 0;
			scalingStepsPerformed < scalingSteps;
			scalingStepsPerformed += 1
		) {
			scaledTypeSize *= scaleMultiplierThisTypeSizeThisDeviceWidth;
		}
		scaledTypeSize = Math.ceil(scaledTypeSize);
	}
	if (scalingSteps < 0) {
		for (
			let scalingStepsPerformed = 0;
			scalingStepsPerformed > scalingSteps;
			scalingStepsPerformed -= 1
		) {
			scaledTypeSize *= (1 / scaleMultiplierThisTypeSizeThisDeviceWidth);
		}
		scaledTypeSize = Math.floor(scaledTypeSize);
	}
	return scaledTypeSize / foundation.gridBase;
};
export const returnTypeWeight = (
	{
		baseTypeSize, scalingSteps, weight,
	}:{
		baseTypeSize:number, scalingSteps:number, weight:TypeWeightKey,
	},
):number => {
	const baseMultiplierThisWeight =
		foundation.type.weight.baseMultipliersByWeight[weight];
	const scaleMultipliersThisWeight =
		foundation.type.weight.scalingMultipliersByWeight[weight];
	const baseWeight =
		baseTypeSize * baseMultiplierThisWeight;
	const minimumWeight =
		baseWeight - scaleMultipliersThisWeight.maxSubtraction;
	const maximumWeight =
		baseWeight + scaleMultipliersThisWeight.maxAddition;
	let naturallyScaledWeight = baseWeight;
	if (scalingSteps > 0) {
		for (
			let scalingStepsPerformed = 0;
			scalingStepsPerformed < scalingSteps;
			scalingStepsPerformed += 1
		) {
			naturallyScaledWeight *= scaleMultipliersThisWeight.natural;
		}
		naturallyScaledWeight = Math.ceil(naturallyScaledWeight);
	}
	if (scalingSteps < 0) {
		for (
			let scalingStepsPerformed = 0;
			scalingStepsPerformed > scalingSteps;
			scalingStepsPerformed -= 1
		) {
			naturallyScaledWeight *= (1 / scaleMultipliersThisWeight.natural);
		}
		naturallyScaledWeight = Math.floor(naturallyScaledWeight);
	}
	let scaledWeight = naturallyScaledWeight;
	if (naturallyScaledWeight > maximumWeight) {
		scaledWeight = maximumWeight;
	}
	if (naturallyScaledWeight < minimumWeight) {
		scaledWeight = minimumWeight;
	}
	return scaledWeight;
};
export const returnTypeLineHeight = (
	{ size, lineHeight }:
	{ size: number, lineHeight: TypeLineHeightKey },
):number => {
	const scaleMultipliersThisUse = foundation.type.lineHeight
		.scalingMultipliers[lineHeight];
	const naturalHeight = size > scaleMultipliersThisUse.highestLowSize
		? size * scaleMultipliersThisUse.high
		: size * scaleMultipliersThisUse.low;
	return returnNumberRoundedUpToMultiple({
		'number': naturalHeight,
		'multiple': foundation.gridBase,
	}) / foundation.gridBase;
};
export const returnTypeSpacing = (
	{ size }: { size: number },
):number => (
	(
		(size / foundation.gridBase) ** 2 * foundation
			.type.spacing.multiplier
	) / foundation.gridBase
);
export const returnTypeStyle = (
	{
		deviceWidth,
		'type': {
			size,
			weight,
			slant,
			lineHeight,
		},
	}:{
		deviceWidth: DeviceWidthToken,
		type: {
			size: TypeSizeKey,
			weight: TypeWeightKey,
			slant: TypeSlantKey,
			lineHeight: TypeLineHeightKey,
		},
	},
):TypeStyle => {
	const baseTypeSize = returnBaseTypeSize({
		deviceWidth,
	});
	const scalingSteps = foundation.type.size.scalingSteps[size];
	const scaledTypeSize = returnScaledTypeSize({
		deviceWidth,
		baseTypeSize,
		scalingSteps,
	});
	const typeStyle:TypeStyle = {
		'size': scaledTypeSize,
		'style': slant === 'italic' ? 'italic' : 'normal',
		'weight': returnTypeWeight({
			baseTypeSize,
			scalingSteps,
			weight,
		}),
		'height': returnTypeLineHeight({
			'size': scaledTypeSize
					* foundation.gridBase,
			lineHeight,
		}),
		'spacing': returnTypeSpacing({
			'size': scaledTypeSize * foundation.gridBase,
		}),
	};

	return typeStyle;
};
export const returnAllTypeStyles = ():Promise<AllTypeStyles> =>
	// return a new, main promise
	new Promise((resolve) => {
		// set up container
		const typeStyles:{
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			[key: string]: any;
		} = {};
		//
		Object.keys(foundation.device.widths).forEach((deviceWidth) => {
			typeStyles[deviceWidth] = {};
			foundation.type.size.tokens.forEach((typeSize) => {
				typeStyles[deviceWidth][typeSize] = {};
				foundation.type.weight.tokens
					.forEach((typeWeight) => {
						typeStyles[deviceWidth][typeSize][
							typeWeight] = {};
						foundation.type.slant.tokens
							.forEach((typeSlant) => {
								typeStyles[deviceWidth][
									typeSize][typeWeight][
									typeSlant] = {};
								foundation.type.lineHeight.tokens
									.forEach((typeLineHeight) => {
										typeStyles[deviceWidth][
											typeSize][typeWeight][
											typeSlant][
											typeLineHeight] =
												returnTypeStyle({
													'deviceWidth':
														deviceWidth as
														DeviceWidthToken,
													'type': {
														'size':
															typeSize as
															TypeSizeKey,
														'weight':
															typeWeight as
															TypeWeightKey,
														'slant':
															typeSlant as
															TypeSlantKey,
														'lineHeight':
															typeLineHeight as
															TypeLineHeightKey,
													},
												});
									});
							});
					});
			});
		});
		resolve(typeStyles as AllTypeStyles);
	});
export const returnAllShadows = ():Promise<AllShadows> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to retrieve the figma style pages
		returnStoredFigmaStylePages()
			// if the retrieval promise is resolved with a result
			.then((figmaPages:FigmaPage[]) => {
				// set up container
				const shadows:AllShadows = {};
				// extract the relevant Figma page
				const shadowsFigmaPage = figmaPages
					.filter(
						(figmaPage) =>
							figmaPage.name === foundation
								.figma.pageTitles.shadow,
					);
				// extract the StyleObjects frame in the page
				const shadowsStyleObjectsFrame =
					shadowsFigmaPage[0].children[0].children.filter(
						(child) => child.name === 'StyleObjects',
					);
				// extract the style objects from the frame
				const styleObjects = shadowsStyleObjectsFrame[0].children;
				// for each style object
				styleObjects.forEach((styleObject) => {
					const thisShadowSet:ShadowSubset = [];
					styleObject.effects.forEach((effect) => {
						if (effect.type === 'DROP_SHADOW') {
							const thisColorHSL =
								returnHSLValuesFromRBGPercents({
									'r': effect.color.r,
									'g': effect.color.g,
									'b': effect.color.b,
								});
							const thisColorHSLA = {
								'h': thisColorHSL.h,
								's': thisColorHSL.s,
								'l': thisColorHSL.l,
								'a': effect.color.a,
							};
							thisShadowSet.push({
								'offset-x':
									effect.offset.x / foundation.gridBase,
								'offset-y':
									effect.offset.y / foundation.gridBase,
								'blur-radius':
									effect.radius / foundation.gridBase,
								'color': thisColorHSLA,
							});
						}
					});
					shadows[styleObject.name.split(' / ')[1]] = thisShadowSet;
				});
				// then resolve the main promise with the populated container
				resolve(shadows);
			})
			// if the retrieval promise is rejected with an error
			.catch((error) => {
				// reject the main promise with the error
				reject(error);
			});
	});
export const buildStyleSet = (
	{ tokenSet }:
	{ tokenSet: 'color' | 'type' | 'shadow'},
):Promise<{ error: boolean }> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		let styleSetFunction;
		if (tokenSet === 'color') {
			styleSetFunction = returnAllColors;
		} else if (tokenSet === 'type') {
			styleSetFunction = returnAllTypeStyles;
		} else if (tokenSet === 'shadow') {
			styleSetFunction = returnAllShadows;
		}
		if (styleSetFunction) {
			// get a promise to retrieve the shadow styles
			styleSetFunction()
				// if the retrieval promise is resolved with a result
				.then((result:AllColors | AllTypeStyles | AllShadows) => {
					// extract and format the objects data for convenience
					const styleConstString =
						`export const ${tokenSet} = ${JSON.stringify(result)};`;
					// write data to file
					fs.writeFileSync(
						`${foundation.storage.path}\
						${foundation.storage.names[tokenSet]}`,
						styleConstString,
					);
					// then resolve the main promise with the result
					resolve({
						'error': false,
					});
				})
				// if the retrieval promise is rejected with an error
				.catch((error) => {
					// reject the main promise with the error
					reject(error);
				});
		} else {
			reject(new Error(
				'buildStyleSet - could not find appropriate function',
			));
		}
	});
export const buildAllStyleSets = ():Promise<{ error: boolean }> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to store a fresh copy of the Figma style pages
		storeFigmaStylePages()
			// if the storage promise is resolved with a result
			.then(() => {
				// get promises to build each token set
				Promise.all([
					buildStyleSet({ 'tokenSet': 'color' }),
					buildStyleSet({ 'tokenSet': 'type' }),
					buildStyleSet({ 'tokenSet': 'shadow' }),
				])
					// if the build promises are resolved with a result
					.then(() => {
						// then resolve the main promise with a message
						resolve({ 'error': false });
					})
					// if the build promises are rejected with an error
					.catch((error) => {
						// reject the main promise with the error
						reject(error);
					});
			})
			// if the storage promises are rejected with an error
			.catch((error) => {
				// reject the main promise with the error
				reject(error);
			});
	});
