/**
 * Extract styles data from Figma and store it locally.
 *
 * @internal
 */
import * as fs from 'fs';
import { ReturnHSLValuesFromRBGPercents } from 'utilities';
import { styleDefinition } from './definition.js';
import { returnStoredFigmaStylePages } from './extraction.js';
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
export const returnColors = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to get the figma style pages
    returnStoredFigmaStylePages()
        // if the  promise is resolved with a result
        .then((figmaPages) => {
        // set up containers; colors is what we'll return,
        // and it will become either jbkrColors or lightColors
        const allColors = {
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
            .filter((figmaPage) => figmaPage.name === styleDefinition
            .figma.pageTitles.colorJBKR);
        const lightColorsFigmaPage = figmaPages
            .filter((figmaPage) => figmaPage.name === styleDefinition
            .figma.pageTitles.light);
        // extract the StyleObjects frame in the page
        const jbkrStyleObjectsFrame = jbkrColorsFigmaPage[0].children[0]
            .children.filter((child) => child.name === 'StyleObjects');
        const lightStyleObjectsFrame = lightColorsFigmaPage[0].children[0]
            .children.filter((child) => child.name === 'StyleObjects');
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
export const buildColorTokens = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to both sets of colors
    returnColors()
        // if the promise is resolved with a result
        .then((colorsResults) => {
        // extract and format the objects data for convenience
        const colorsString = `export const color = ${JSON.stringify(colorsResults)};`;
        // write data to file
        fs.writeFileSync(`${styleDefinition.storage.path}${styleDefinition.storage.names.color}`, colorsString);
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
//# sourceMappingURL=calculation.js.map