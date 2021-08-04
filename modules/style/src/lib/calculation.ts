/**
 * Extract styles data from Figma and store it locally.
 *
 * @internal
 */
import * as fs from 'fs';
import {
	returnHSLValuesFromRBGPercents,
	returnNumberRoundedUpToMultiple,
	returnCopyOfObjectWithStringKeys,
} from 'utilities';
import { styleDefinition } from './definition.js';
import { returnStoredFigmaStylePages } from './extraction.js';
import { DeviceWidthToken, DeviceWidthTokens }
	from '../models/device';
import { TypeSizeToken, TypeSizeValue, TypeWeightToken, TypeWeightValue, TypeUsageToken, TypeSlantToken, TypeStyleToken }
	from '../models/type';
import { FigmaDocument, FigmaPage, FigmaStyleObject }
	from '../models/figma';
import {
	HSLAColor, RangeOfColorLevels, NeutralColors, BrandColors,
	AccentColors, StateColors, LightColors, JBKRColorSet, LightColorSet, ColorTokenObject
} from '../models/color';

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
export const returnColors = ():Promise<ColorTokenObject> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to get the figma style pages
		returnStoredFigmaStylePages()
			// if the  promise is resolved with a result
			.then((figmaPages:FigmaPage[]) => {
				// set up containers; colors is what we'll return,
				// and it will become either jbkrColors or lightColors
				const allColors:ColorTokenObject = {
						Neutral: {
							Finch: {},
							Sky: {},
							Spruce: {},
							Seafoam: {},
						},
						Brand: {
							Finch: {},
							Spruce: {},
							Peony: {},
						},
						Accent: {
							OnDark: {
								Primary: {},
								Secondary: {},
								Tertiary: {},
								Quarternary: {},
							},
							OnMedium: {
								Primary: {},
								Tertiary: {},
								Quarternary: {},
							},
							OnLight: {
								Primary: {},
								Secondary: {},
								Quarternary: {},
							},
						},
						State: {
							Positive: {},
							Warning: {},
							Negative: {},
							Neutral: {},
						},
						Light: {
							OnLight: {},
							OnDark: {},
						},
				};
				// extract the relevant Figma pages
				const jbkrColorsFigmaPage = figmaPages
					.filter(
						(figmaPage) =>
							figmaPage.name === styleDefinition
								.figma.pageTitles.colorJBKR,
					);
				const lightColorsFigmaPage = figmaPages
					.filter(
						(figmaPage) =>
							figmaPage.name === styleDefinition
								.figma.pageTitles.light,
					);

				// extract the StyleObjects frame in the page
				const jbkrStyleObjectsFrame =
					jbkrColorsFigmaPage[0].children[0]
						.children.filter(
							(child) => child.name === 'StyleObjects',
						);
				const lightStyleObjectsFrame =
					lightColorsFigmaPage[0].children[0]
						.children.filter(
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
					const propertiesArray =
						styleObject.name.split(' / ');
					// get this style object's fill color as RGBA
					const thisColorRGBA =
						styleObject.fills[0].color;
					// get HSL equivalent to RGB portion of RGBA
					const thisColorHSL = returnHSLValuesFromRBGPercents({
							r: thisColorRGBA.r,
							g: thisColorRGBA.g,
							b: thisColorRGBA.b,
						});
					// construct the HSLA version of the fill color
					const thisColorHSLA = {
						h: thisColorHSL.h,
						s: thisColorHSL.s,
						l: thisColorHSL.l,
						a: thisColorRGBA.a,
					};
					if (propertiesArray[2] === 'jbkr') {
						if (propertiesArray[3] === 'Neutral') {
							if (propertiesArray[4] === 'Finch') {
								allColors.Neutral.Finch[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Sky') {
								allColors.Neutral.Sky[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Spruce') {
								allColors.Neutral.Spruce[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Seafoam') {
								allColors.Neutral.Seafoam[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
						if (propertiesArray[3] === 'Brand') {
							if (propertiesArray[4] === 'Finch') {
								allColors.Brand.Finch[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Spruce') {
								allColors.Brand.Spruce[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Peony') {
								allColors.Brand.Peony[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
						if (propertiesArray[3] === 'Accent') {
							if (propertiesArray[4] === 'OnDark') {
								if (propertiesArray[5] === 'Primary') {
									allColors.Accent.OnDark
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Secondary') {
									allColors.Accent.OnDark
										.Secondary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Tertiary') {
									allColors.Accent.OnDark
										.Tertiary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									allColors.Accent.OnDark
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
							if (propertiesArray[4] === 'OnMedium') {
								if (propertiesArray[5] === 'Primary') {
									allColors.Accent.OnMedium
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Tertiary') {
									allColors.Accent.OnMedium
										.Tertiary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									allColors.Accent.OnMedium
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
							if (propertiesArray[4] === 'OnLight') {
								if (propertiesArray[5] === 'Primary') {
									allColors.Accent.OnLight
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Secondary') {
									allColors.Accent.OnLight
										.Secondary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									allColors.Accent.OnLight
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
						}
						if (propertiesArray[3] === 'State') {
							if (propertiesArray[4] === 'Positive') {
								allColors.State.Positive[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Warning') {
								allColors.State.Warning[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Negative') {
								allColors.State.Negative[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Neutral') {
								allColors.State.Neutral[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
					}
					if (propertiesArray[2] === 'Light') {
						if (propertiesArray[3] === 'OnLight') {
							allColors.Light.OnLight[propertiesArray[6]] =
								thisColorHSLA;
						}
						if (propertiesArray[3] === 'OnDark') {
							allColors.Light.OnDark[propertiesArray[6]] =
								thisColorHSLA;
						}
					}
				});
				// then resolve the main promise with the return value
				resolve(allColors);
			})
			// if the  promise is rejected with an error
			.catch((error) => {
				// reject the main promise with the error
				reject(error);
			});
	});

export const buildColorTokens = ():Promise<{ error: boolean }> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to both sets of colors
		returnColors()
			// if the promise is resolved with a result
			.then((colorsResults) => {
				// extract and format the objects data for convenience
				const colorsString = `export const color = ${JSON.stringify(colorsResults)};`;
				// write data to file
				fs.writeFileSync(
					`${styleDefinition.storage.path}${styleDefinition.storage.names.color}`,
					colorsString,
				);
				// then resolve this promise with the result
				resolve({
					error: false,
				});
			})
			// if the promise is rejected with an error
			.catch((error) => {
				// reject this promise with the error
				reject(error);
			});
	});


export const returnBaseTypeSize =
	({ deviceWidth }:{ deviceWidth: DeviceWidthToken}):TypeSizeValue => {
	return styleDefinition.gridBase * styleDefinition.type.size
		.baseMultipliersByDeviceWidth[deviceWidth];
};
export const returnScaledTypeSize = ({
	deviceWidth,
	baseTypeSize,
	scalingSteps,
}:{
	deviceWidth: DeviceWidthToken,
	baseTypeSize: number,
	scalingSteps: number,
}):number => {
		const scaleMultipliersThisDeviceWidth = styleDefinition.type.size
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
		return scaledTypeSize / styleDefinition.gridBase;
};
export const returnTypeWeight = ({
	baseTypeSize, scalingSteps, weight,
}:{
	baseTypeSize:TypeSizeValue, scalingSteps:number, weight:TypeWeightToken,
}):TypeWeightValue => {
	const baseMultiplierThisWeight = styleDefinition.type.weight
		.baseMultipliersByWeight[weight];
	const scaleMultipliersThisWeight = styleDefinition.type.weight
		.scalingMultipliersByWeight[weight];
	const baseWeight = baseTypeSize * baseMultiplierThisWeight;
	const minimumWeight = baseWeight - scaleMultipliersThisWeight.maxSubtraction;
	const maximumWeight = baseWeight + scaleMultipliersThisWeight.maxAddition;
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
export const returnTypeLineHeight = ({ size, usage }:{ size: TypeSizeValue, usage: TypeUsageToken }):number => {
	// const usageClone = usage === 'display' ? 'display' : 'body';
	const scaleMultipliersThisUse = styleDefinition.type.lineHeight
		.scalingMultipliers[usage];
	const naturalHeight = size > scaleMultipliersThisUse.highestLowSize ?
		size * scaleMultipliersThisUse.high :
		size * scaleMultipliersThisUse.low;
	return returnNumberRoundedUpToMultiple({
		number: naturalHeight,
		multiple: styleDefinition.gridBase,
	}) / styleDefinition.gridBase;
};
export const returnTypeSpacing = ({ size }: { size: TypeSizeValue }):number => (
	(
		(size / styleDefinition.gridBase) ** 2 * styleDefinition
			.type.spacing.multiplier
	) / styleDefinition.gridBase
);
export const returnTypeStyle = ({
	deviceWidth,
	type: {
		size,
		weight,
		slant,
		usage,
	},
}:{
	deviceWidth: DeviceWidthToken,
	type: {
		size: TypeSizeToken,
		weight: TypeWeightToken,
		slant: TypeSlantToken,
		usage: TypeUsageToken,
	},
}):TypeStyleToken => {
		const baseTypeSize = returnBaseTypeSize({
			deviceWidth,
		});
		const scalingSteps = styleDefinition.type.size.scalingSteps[size];
		const scaledTypeSize = returnScaledTypeSize({
			deviceWidth,
			baseTypeSize,
			scalingSteps,
		});
		const typeStyle:TypeStyleToken = {
			size: scaledTypeSize,
			style: slant === 'italic' ? 'italic' : 'normal',
			weight: returnTypeWeight({
				baseTypeSize,
				scalingSteps,
				weight,
			}),
			height: returnTypeLineHeight({
				size: scaledTypeSize *
					styleDefinition.gridBase,
				usage,
			}),
			spacing: returnTypeSpacing({
				size: scaledTypeSize * styleDefinition.gridBase,
			}),
		};

		return typeStyle;
};

export const buildTypeTokens = ():Promise<{ error: boolean }> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
			const typeStyles:{
				[key: string]: any;
			} = {};
			styleDefinition.device.widths.tokens.forEach((deviceWidthToken) => {
				typeStyles[deviceWidthToken] = {};
				styleDefinition.type.size.tokens.forEach((typeSizeToken) => {
					typeStyles[deviceWidthToken][typeSizeToken] = {};
					styleDefinition.type.weight.tokens
						.forEach((typeWeightToken) => {
							typeStyles[deviceWidthToken][typeSizeToken][
								typeWeightToken] = {};
							styleDefinition.type.slant.tokens
								.forEach((typeSlantToken) => {
									typeStyles[deviceWidthToken][
										typeSizeToken][typeWeightToken][
										typeSlantToken] = {};
									styleDefinition.type.lineHeight.tokens
										.forEach((typeLineHeightoken) => {
											typeStyles[deviceWidthToken][
												typeSizeToken][typeWeightToken][
												typeSlantToken][typeLineHeightoken] =
												module.exports.ReturnTypeStyle({
													deviceWidth: deviceWidthToken,
													type: {
														size: typeSizeToken,
														weight: typeWeightToken,
														slant: typeSlantToken,
														usage: typeLineHeightoken,
													},
												});
										});
								});
						});
				});
			});
			const typeStylesString = JSON.stringify(typeStyles);
			// write data to file
			fs.writeFileSync(
				`${styleDefinition.storage.path}${styleDefinition.storage.names.type}`,
				typeStylesString,
			);
			resolve({ error: false });
	});
