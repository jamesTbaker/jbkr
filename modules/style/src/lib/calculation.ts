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
	AccentColors, StateColors, LightColors, JBKRColorSet, LightColorSet, ColorTokenObject
} from '../models/color';

/**
 * Get a set of colors from the stored Figma pages. Color set will either
 * be the jbkr colors or the colors representing light shining on surfaces.
 *
 * @remarks
 * Depends on the page titles specified in [[`definition`]].
 *
 * @param colorSet - the color set to return
 * @returns An array of Figma page objects, or an `Error`.
 *
 * @internal
 */
export const returnColorSystem =
	(colorSet: 'jbkr' | 'light'):Promise<JBKRColorSet | LightColorSet> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to get the figma style pages
		returnStoredFigmaStylePages()
			// if the  promise is resolved with a result
			.then((figmaPages:FigmaPage[]) => {
				// set up containers; colors is what we'll return,
				// and it will become either jbkrColors or lightColors
				const jbkrColors:JBKRColorSet = {
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
				const lightColors:LightColorSet = {
						Light: {
							OnLight: {},
							OnDark: {},
						},
				};
				// extract the relevant Figma page
				const relevantPageTitle = colorSet === 'jbkr' ?
					styleDefinition.figma.pageTitles.colorJBKR :
					styleDefinition.figma.pageTitles.light;
				const relevantFigmaPage = figmaPages
					.filter(
						(figmaPage) =>
							figmaPage.name === relevantPageTitle,
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
					if (colorSet === 'jbkr') {
						if (propertiesArray[3] === 'Neutral') {
							if (propertiesArray[4] === 'Finch') {
								jbkrColors.Neutral.Finch[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Sky') {
								jbkrColors.Neutral.Sky[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Spruce') {
								jbkrColors.Neutral.Spruce[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Seafoam') {
								jbkrColors.Neutral.Seafoam[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
						if (propertiesArray[3] === 'Brand') {
							if (propertiesArray[4] === 'Finch') {
								jbkrColors.Brand.Finch[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Spruce') {
								jbkrColors.Brand.Spruce[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Peony') {
								jbkrColors.Brand.Peony[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
						if (propertiesArray[3] === 'Accent') {
							if (propertiesArray[4] === 'OnDark') {
								if (propertiesArray[5] === 'Primary') {
									jbkrColors.Accent.OnDark
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Secondary') {
									jbkrColors.Accent.OnDark
										.Secondary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Tertiary') {
									jbkrColors.Accent.OnDark
										.Tertiary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									jbkrColors.Accent.OnDark
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
							if (propertiesArray[4] === 'OnMedium') {
								if (propertiesArray[5] === 'Primary') {
									jbkrColors.Accent.OnMedium
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Tertiary') {
									jbkrColors.Accent.OnMedium
										.Tertiary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									jbkrColors.Accent.OnMedium
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
							if (propertiesArray[4] === 'OnLight') {
								if (propertiesArray[5] === 'Primary') {
									jbkrColors.Accent.OnLight
										.Primary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Secondary') {
									jbkrColors.Accent.OnLight
										.Secondary[propertiesArray[6]] =
											thisColorHSLA;
								}
								if (propertiesArray[5] === 'Quarternary') {
									jbkrColors.Accent.OnLight
										.Quarternary[propertiesArray[6]] =
											thisColorHSLA;
								}
							}
						}
						if (propertiesArray[3] === 'State') {
							if (propertiesArray[4] === 'Positive') {
								jbkrColors.State.Positive[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Warning') {
								jbkrColors.State.Warning[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Negative') {
								jbkrColors.State.Negative[propertiesArray[6]] =
									thisColorHSLA;
							}
							if (propertiesArray[4] === 'Neutral') {
								jbkrColors.State.Neutral[propertiesArray[6]] =
									thisColorHSLA;
							}
						}
					}
					if (colorSet === 'light') {
						if (propertiesArray[3] === 'OnLight') {
							lightColors.Light.OnLight[propertiesArray[6]] =
								thisColorHSLA;
						}
						if (propertiesArray[3] === 'OnDark') {
							lightColors.Light.OnDark[propertiesArray[6]] =
								thisColorHSLA;
						}
					}
				});
				// create the value to return and set it to one
				// color set or the other
				const colors: JBKRColorSet | LightColorSet =
					colorSet === 'jbkr' ? jbkrColors : lightColors;
				// then resolve the main promise with the return value
				resolve(colors);
			})
			// if the  promise is rejected with an error
			.catch((error) => {
				// reject the main promise with the error
				reject(error);
			});
	});
