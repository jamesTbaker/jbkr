/**
 * @name Styles Tokens
 * @description Generate and store the base tokens for the design system.
 */

const fse = require('fs-extra');
const Utilities = require('utilities');
const StyleDefinitions = require('./definition');
const StylesExtraction = require('./extraction');

module.exports = {

	// -- COLOR

	ReturnJBKRColorsFromStoredObjects: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			// get a promise to retrieve all relevant data
			StylesExtraction.ReturnStoredFigmaStyleObjects()
				// if the promise is resolved with a result
				.then((figmaPages) => {
					// set up container
					const colors = {};
					// drill down to get an array of style objects
					const styleObjectsDistantAncestor = figmaPages
						.figmaStyleObjects.filter(
							(object) =>
								object.name
								=== StyleDefinitions.figma.pageTitles.colorJBKR,
						);
					const styleObjectsNearAncestor =
						styleObjectsDistantAncestor[0].children[0]
							.children.filter(
								(child) => child.name === 'StyleObjects',
							);
					const styleObjectArray =
						styleObjectsNearAncestor[0].children;
					// for each style object
					styleObjectArray.forEach((styleObject) => {
						const propertiesArray =
							styleObject.name.split(' / ');
						const nestingLevelThisStyle =
							propertiesArray.length - 1;
						const thisColorRGBA =
							styleObject.fills[0].color;
						const thisColorHSL = Utilities
							.ReturnHSLValuesFromRBGPercents({
								r: thisColorRGBA.r,
								g: thisColorRGBA.g,
								b: thisColorRGBA.b,
							});
						const thisColorHSLA = {
							h: thisColorHSL.h,
							s: thisColorHSL.s,
							l: thisColorHSL.l,
							a: thisColorRGBA.a,
						};
						if (
							propertiesArray[1]
							&& !(colors[propertiesArray[1]])
						) {
							colors[propertiesArray[1]] = {};
						}
						if (
							propertiesArray[2]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							] = {};
						}
						if (
							propertiesArray[3]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							] = {};
						}
						if (
							propertiesArray[4]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								][
								propertiesArray[4]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							] = {};
						}
						if (
							propertiesArray[5]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								][
								propertiesArray[4]
								][
								propertiesArray[5]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							] = {};
						}
						if (
							propertiesArray[6]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								][
								propertiesArray[4]
								][
								propertiesArray[5]
								][
								propertiesArray[6]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							][
								propertiesArray[6]
							] = {};
						}
						if (nestingLevelThisStyle === 3) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							] = thisColorHSLA;
						}
						if (nestingLevelThisStyle === 4) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							] = thisColorHSLA;
						}
						if (nestingLevelThisStyle === 5) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							] = thisColorHSLA;
						}
						if (nestingLevelThisStyle === 6) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							][
								propertiesArray[6]
							] = thisColorHSLA;
						}
					});

					// then resolve this promise with the result
					resolve({
						error: false,
						colors,
					});
				})
				// if the promise is rejected with an error
				.catch((error) => {
					// reject this promise with the error
					reject(error);
				});
		}),
	ReturnLightColorsFromStoredObjects: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			// get a promise to retrieve all relevant data
			StylesExtraction.ReturnStoredFigmaStyleObjects()
				// if the promise is resolved with a result
				.then((figmaPages) => {
					// set up container
					const colors = {};
					// const nestingLevels = [1, 2, 3, 4, 5, 6];
					// drill down to get an array of style objects
					const styleObjectsDistantAncestor = figmaPages
						.figmaStyleObjects.filter(
							(object) =>
								object.name
								=== StyleDefinitions.figma.pageTitles.light,
						);
					const styleObjectsNearAncestor =
						styleObjectsDistantAncestor[0].children[0]
							.children.filter(
								(child) => child.name === 'StyleObjects',
							);
					const styleObjectArray =
						styleObjectsNearAncestor[0].children;
					// for each style object
					styleObjectArray.forEach((styleObject) => {
						const propertiesArray =
							styleObject.name.split(' / ');
						const nestingLevelThisStyle =
							propertiesArray.length - 1;
						const thisColorRGBA =
							styleObject.fills[0].color;
						const thisColorHSL = Utilities
							.ReturnHSLValuesFromRBGPercents({
								r: thisColorRGBA.r,
								g: thisColorRGBA.g,
								b: thisColorRGBA.b,
							});
						const thisColorHSLA = {
							h: thisColorHSL.h,
							s: thisColorHSL.s,
							l: thisColorHSL.l,
							a: thisColorRGBA.a,
						};
						if (
							propertiesArray[1]
							&& !(colors[propertiesArray[1]])
						) {
							colors[propertiesArray[1]] = {};
						}
						if (
							propertiesArray[2]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							] = {};
						}
						if (
							propertiesArray[3]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							] = {};
						}
						if (
							propertiesArray[4]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								][
								propertiesArray[4]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							] = {};
						}
						if (
							propertiesArray[5]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								][
								propertiesArray[4]
								][
								propertiesArray[5]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							] = {};
						}
						if (
							propertiesArray[6]
							&& !(
								colors[
								propertiesArray[1]
								][
								propertiesArray[2]
								][
								propertiesArray[3]
								][
								propertiesArray[4]
								][
								propertiesArray[5]
								][
								propertiesArray[6]
								]
							)
						) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							][
								propertiesArray[6]
							] = {};
						}
						if (nestingLevelThisStyle === 3) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							] = thisColorHSLA;
						}
						if (nestingLevelThisStyle === 4) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							] = thisColorHSLA;
						}
						if (nestingLevelThisStyle === 5) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							] = thisColorHSLA;
						}
						if (nestingLevelThisStyle === 6) {
							colors[
								propertiesArray[1]
							][
								propertiesArray[2]
							][
								propertiesArray[3]
							][
								propertiesArray[4]
							][
								propertiesArray[5]
							][
								propertiesArray[6]
							] = thisColorHSLA;
						}
					});

					// then resolve this promise with the result
					resolve({
						error: false,
						colors,
					});
				})
				// if the promise is rejected with an error
				.catch((error) => {
					// reject this promise with the error
					reject(error);
				});
		}),
	BuildColorTokens: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			// get a promise to return the styles objects
			Promise.all([
				module.exports.ReturnJBKRColorsFromStoredObjects(),
				module.exports.ReturnLightColorsFromStoredObjects(),
			])
				// if the promise is resolved with a result
				.then((colorsResults) => {
					const colors = colorsResults[0]
						.colors.Assignment.jbkr;
					colors.Light = colorsResults[1]
						.colors.Assignment.Light;
					// extract and format the objects data for convenience
					const colorsString = JSON.stringify(colors);
					// write data to file
					fse.writeFileSync(
						`${StyleDefinitions.tokens.filePath}${StyleDefinitions.tokens.names.color}`,
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
		}),

	// -- TYPE

	ReturnTypeStyle: ({
		deviceWidth,
		type: {
			size,
			weight,
			slant,
			usage,
		},
	}) => {
		const baseTypeSize = module.exports.ReturnBaseTypeSize({
			deviceWidth,
		});
		const scalingSteps = StyleDefinitions.type.size.scalingSteps[size];
		const typeStyle = {
			size: module.exports
				.ReturnScaledTypeSize({
					deviceWidth,
					baseTypeSize,
					scalingSteps,
				}),
			style: slant === 'italic' ? 'italic' : 'normal',
		};
		typeStyle.weight = module.exports
			.ReturnTypeWeight({
				baseTypeSize,
				scalingSteps,
				size: typeStyle.size * StyleDefinitions.gridBase,
				weight,
			});
		typeStyle.height = module.exports
			.ReturnTypeLineHeight({
				size: typeStyle.size * StyleDefinitions.gridBase,
				usage,
			});
		typeStyle.spacing = module.exports
			.ReturnTypeSpacing({
				size: typeStyle.size * StyleDefinitions.gridBase,
			});
		return typeStyle;
	},
	ReturnBaseTypeSize: ({ deviceWidth }) =>
		StyleDefinitions.gridBase * StyleDefinitions.type.size
			.baseMultipliersByDeviceWidth[deviceWidth],
	ReturnScaledTypeSize: ({
		deviceWidth, baseTypeSize, scalingSteps,
	}) => {
		const scaleMultipliersThisDeviceWidth = StyleDefinitions.type.size
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
		return scaledTypeSize / StyleDefinitions.gridBase;
	},
	ReturnTypeWeight: ({
		baseTypeSize, scalingSteps, weight,
	}) => {
		const baseMultiplierThisWeight = StyleDefinitions.type.weight
			.baseMultipliersByWeight[weight];
		const scaleMultipliersThisWeight = StyleDefinitions.type.weight
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
	},
	ReturnTypeLineHeight: ({ size, usage }) => {
		const usageClone = usage === 'display' ? 'display' : 'body';
		const scaleMultipliersThisUse = StyleDefinitions.type.usage
			.scalingMultipliers[usageClone];
		const naturalHeight = size > scaleMultipliersThisUse.highestLowSize ?
			size * scaleMultipliersThisUse.high :
			size * scaleMultipliersThisUse.low;
		return Utilities.ReturnNumberRoundedUpToMultiple(
			naturalHeight,
			StyleDefinitions.gridBase,
		) / StyleDefinitions.gridBase;
	},
	ReturnTypeSpacing: ({ size }) => (
		(
			(size / StyleDefinitions.gridBase) ** 2 * StyleDefinitions
				.type.spacing.multiplier
		) / StyleDefinitions.gridBase
	),
	BuildTypeTokens: () =>
		// return a new promise
		new Promise((resolve) => {
			const typeStyles = {};
			StyleDefinitions.device.widths.tokens.forEach((deviceWidthToken) => {
				typeStyles[deviceWidthToken] = {};
				StyleDefinitions.type.size.tokens.forEach((typeSizeToken) => {
					typeStyles[deviceWidthToken][typeSizeToken] = {};
					StyleDefinitions.type.weight.tokens
						.forEach((typeWeightToken) => {
							typeStyles[deviceWidthToken][typeSizeToken][
								typeWeightToken] = {};
							StyleDefinitions.type.slant.tokens
								.forEach((typeSlantToken) => {
									typeStyles[deviceWidthToken][
										typeSizeToken][typeWeightToken][
										typeSlantToken] = {};
									StyleDefinitions.type.usage.tokens
										.forEach((typeUsageToken) => {
											typeStyles[deviceWidthToken][
												typeSizeToken][typeWeightToken][
												typeSlantToken][typeUsageToken] =
												module.exports.ReturnTypeStyle({
													deviceWidth: deviceWidthToken,
													type: {
														size: typeSizeToken,
														weight: typeWeightToken,
														slant: typeSlantToken,
														usage: typeUsageToken,
													},
												});
										});
								});
						});
				});
			});
			const typeStylesString = JSON.stringify(typeStyles);
			// write data to file
			fse.writeFileSync(
				`${StyleDefinitions.tokens.filePath}${StyleDefinitions.tokens.names.type}`,
				typeStylesString,
			);
			resolve({ error: false });
		}),

	// -- SHADOW

	ReturnShadowsFromStoredObjects: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			// get a promise to retrieve all relevant data
			StylesExtraction.ReturnStoredFigmaStyleObjects()
				// if the promise is resolved with a result
				.then((figmaPages) => {
					// set up container
					const shadows = {};
					// drill down to get an array of style objects
					const styleObjectsDistantAncestor = figmaPages
						.figmaStyleObjects.filter(
							(object) =>
								object.name
								=== StyleDefinitions.figma.pageTitles.shadow,
						);
					const styleObjectsNearAncestor =
						styleObjectsDistantAncestor[0].children[0]
							.children.filter(
								(child) => child.name === 'StyleObjects',
							);
					const styleObjectArray =
						styleObjectsNearAncestor[0].children;
					// for each style object
					styleObjectArray.forEach((styleObject) => {
						const thisShadowSet = [];
						styleObject.effects.forEach((effect) => {
							if (effect.type === 'DROP_SHADOW') {
								const thisColorHSL = Utilities
									.ReturnHSLValuesFromRBGPercents({
										r: effect.color.r,
										g: effect.color.g,
										b: effect.color.b,
									});
								const thisColorHSLA = {
									h: thisColorHSL.h,
									s: thisColorHSL.s,
									l: thisColorHSL.l,
									a: effect.color.a,
								};
								thisShadowSet.push({
									'offset-x': effect.offset.x / StyleDefinitions.gridBase,
									'offset-y': effect.offset.y / StyleDefinitions.gridBase,
									'blur-radius': effect.radius / StyleDefinitions.gridBase,
									color: thisColorHSLA,
								});
							}
						});
						shadows[styleObject.name.split(' / ')[1]] =
							thisShadowSet;
					});
					// then resolve this promise with the result
					resolve({
						error: false,
						shadows,
					});
				})
				// if the promise is rejected with an error
				.catch((error) => {
					// reject this promise with the error
					reject(error);
				});
		}),
	BuildShadowTokens: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			// get a promise to return the styles objects
			module.exports.ReturnShadowsFromStoredObjects()
				// if the promise is resolved with a result
				.then((result) => {
					// extract and format the objects data for convenience
					const shadowsString = JSON.stringify(result.shadows);
					// write data to file
					fse.writeFileSync(
						`${StyleDefinitions.tokens.filePath}${StyleDefinitions.tokens.names.shadow}`,
						shadowsString,
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
		}),

	// -- ALL

	BuildAllTokens: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			// get a promise to
			StylesExtraction.StoreFigmaStyleObjects()
				// if the promise is resolved with a result
				.then(() => {
					// get a promise to
					Promise.all([
						module.exports.BuildColorTokens(),
						module.exports.BuildTypeTokens(),
						module.exports.BuildShadowTokens(),
					])
						// if the promise is resolved with a result
						.then((result) => {
							// then resolve this promise with the result
							resolve(result);
						})
						// if the promise is rejected with an error
						.catch((error) => {
							// reject this promise with the error
							reject(error);
						});
				})
				// if the promise is rejected with an error
				.catch((error) => {
					// reject this promise with the error
					reject(error);
				});
		}),

};
