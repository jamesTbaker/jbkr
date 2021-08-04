/**
 * Extract styles data from Figma and store it locally.
 *
 * @internal
 */
import * as fs from 'fs';
import { ReturnHSLValuesFromRBGPercents } from 'utilities';
import { styleDefinition } from './definition.js';
import { returnStoredFigmaStylePages } from './extraction.js';
import { FigmaDocument, FigmaPage, FigmaStyleObject }
	from '../models/figma';
import {
	HSLAColor, RangeOfColorLevels, NeutralColors, BrandColors,
	AccentColors, StateColors, LightColors, ColorTokenObject
} from '../models/color';

// export const returnJBKRColorsFromStoredObjects = ():Promise<{
// 	Neutral: NeutralColors;
// 	Brand: BrandColors;
// 	Accents: AccentColors;
// 	State: StateColors;
// }> =>
export const returnJBKRColorsFromStoredObjects = ():Promise<void> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to get the figma style pages
		returnStoredFigmaStylePages()
			// if the  promise is resolved with a result
			.then((figmaPages:FigmaPage[]) => {
					// set up container
					const colors:{
						Neutral: NeutralColors;
						Brand: BrandColors;
						Accent: AccentColors;
						State: StateColors;
					} = {
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
					};
					// extract the relevant Figma page
					const relevantFigmaPage = figmaPages
						.filter(
							(figmaPage) =>
								figmaPage.name === styleDefinition
									.figma.pageTitles.colorJBKR,
						);
					// extract the StyleObjects frame in the page
					const styleObjectsFrame =
						relevantFigmaPage[0].children[0]
							.children.filter(
								(child) => child.name === 'StyleObjects',
							);
					// extract the style objects from the frame
					const styleObjects =
						styleObjectsFrame[0].children;
					// for each style object
					styleObjects.forEach((styleObject) => {
						// get array of properties describing this style
						const propertiesArray =
							styleObject.name.split(' / ');
						// determine how deeply this style will be
						// nested in the final color tokens object
						// (first three properties aren't relevant)
						const nestingLevelThisStyle =
							propertiesArray.length - 3;
						// get this style object's fill color as RGBA
						const thisColorRGBA =
							styleObject.fills[0].color;

						// get HSL equivalent to RGB portion of RGBA
						const thisColorHSL = ReturnHSLValuesFromRBGPercents({
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
						if (propertiesArray[3] === 'Neutral') {
							if (propertiesArray[4] === 'Finch') {
								colors.Neutral.Finch[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Sky') {
								colors.Neutral.Sky[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Spruce') {
								colors.Neutral.Spruce[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Seafoam') {
								colors.Neutral.Seafoam[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
						if (propertiesArray[3] === 'Brand') {
							if (propertiesArray[4] === 'Finch') {
								colors.Brand.Finch[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Spruce') {
								colors.Brand.Spruce[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Peony') {
								colors.Brand.Peony[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
						if (propertiesArray[3] === 'Accent') {
							if (propertiesArray[4] === 'OnDark') {
								if (propertiesArray[5] === 'Primary') {
									colors.Accent.OnDark
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Secondary') {
									colors.Accent.OnDark
										.Secondary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Tertiary') {
									colors.Accent.OnDark
										.Tertiary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									colors.Accent.OnDark
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
							if (propertiesArray[4] === 'OnMedium') {
								if (propertiesArray[5] === 'Primary') {
									colors.Accent.OnMedium
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Tertiary') {
									colors.Accent.OnMedium
										.Tertiary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									colors.Accent.OnMedium
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
							if (propertiesArray[4] === 'OnLight') {
								if (propertiesArray[5] === 'Primary') {
									colors.Accent.OnLight
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Secondary') {
									colors.Accent.OnLight
										.Secondary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									colors.Accent.OnLight
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
						}
						if (propertiesArray[3] === 'State') {
							if (propertiesArray[4] === 'Positive') {
								colors.State.Positive[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Warning') {
								colors.State.Warning[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Negative') {
								colors.State.Negative[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Neutral') {
								colors.State.Neutral[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
					});
				// then resolve the main promise with the result
				resolve();
			})
			// if the  promise is rejected with an error
			.catch((error) => {
				// reject the main promise with the error
				reject(error);
			});
	});
