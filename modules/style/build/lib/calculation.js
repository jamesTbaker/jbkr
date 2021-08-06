// lib predecessors
import { styleDefinition } from './definition.js';
import { storeFigmaStylePages, returnStoredFigmaStylePages } from './extraction.js';
// modules
import { returnHSLValuesFromRBGPercents, returnNumberRoundedUpToMultiple, } from 'utilities';
import * as fs from 'fs';
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
    // get a promise to retrieve the figma style pages
    returnStoredFigmaStylePages()
        // if the retrieval promise is resolved with a result
        .then((figmaPages) => {
        // set up container
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
        // if the retrieval promise is rejected with an error
        .catch((error) => {
        // reject the main promise with the error
        reject(error);
    });
});
export const returnBaseTypeSize = ({ deviceWidth }) => {
    return styleDefinition.gridBase * styleDefinition.type.size
        .baseMultipliersByDeviceWidth[deviceWidth];
};
export const returnScaledTypeSize = ({ deviceWidth, baseTypeSize, scalingSteps, }) => {
    const scaleMultipliersThisDeviceWidth = styleDefinition.type.size
        .scalingMultipliersByDeviceWidth[deviceWidth];
    const scaleMultiplierThisTypeSizeThisDeviceWidth = scalingSteps < 0
        ? scaleMultipliersThisDeviceWidth.low
        : scaleMultipliersThisDeviceWidth.high;
    let scaledTypeSize = baseTypeSize;
    if (scalingSteps > 0) {
        for (let scalingStepsPerformed = 0; scalingStepsPerformed < scalingSteps; scalingStepsPerformed += 1) {
            scaledTypeSize *= scaleMultiplierThisTypeSizeThisDeviceWidth;
        }
        scaledTypeSize = Math.ceil(scaledTypeSize);
    }
    if (scalingSteps < 0) {
        for (let scalingStepsPerformed = 0; scalingStepsPerformed > scalingSteps; scalingStepsPerformed -= 1) {
            scaledTypeSize *= (1 / scaleMultiplierThisTypeSizeThisDeviceWidth);
        }
        scaledTypeSize = Math.floor(scaledTypeSize);
    }
    return scaledTypeSize / styleDefinition.gridBase;
};
export const returnTypeWeight = ({ baseTypeSize, scalingSteps, weight, }) => {
    const baseMultiplierThisWeight = styleDefinition.type.weight
        .baseMultipliersByWeight[weight];
    const scaleMultipliersThisWeight = styleDefinition.type.weight
        .scalingMultipliersByWeight[weight];
    const baseWeight = baseTypeSize * baseMultiplierThisWeight;
    const minimumWeight = baseWeight - scaleMultipliersThisWeight.maxSubtraction;
    const maximumWeight = baseWeight + scaleMultipliersThisWeight.maxAddition;
    let naturallyScaledWeight = baseWeight;
    if (scalingSteps > 0) {
        for (let scalingStepsPerformed = 0; scalingStepsPerformed < scalingSteps; scalingStepsPerformed += 1) {
            naturallyScaledWeight *= scaleMultipliersThisWeight.natural;
        }
        naturallyScaledWeight = Math.ceil(naturallyScaledWeight);
    }
    if (scalingSteps < 0) {
        for (let scalingStepsPerformed = 0; scalingStepsPerformed > scalingSteps; scalingStepsPerformed -= 1) {
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
export const returnTypeLineHeight = ({ size, lineHeight }) => {
    const scaleMultipliersThisUse = styleDefinition.type.lineHeight
        .scalingMultipliers[lineHeight];
    const naturalHeight = size > scaleMultipliersThisUse.highestLowSize ?
        size * scaleMultipliersThisUse.high :
        size * scaleMultipliersThisUse.low;
    return returnNumberRoundedUpToMultiple({
        number: naturalHeight,
        multiple: styleDefinition.gridBase,
    }) / styleDefinition.gridBase;
};
export const returnTypeSpacing = ({ size }) => ((Math.pow((size / styleDefinition.gridBase), 2) * styleDefinition
    .type.spacing.multiplier) / styleDefinition.gridBase);
export const returnTypeStyle = ({ deviceWidth, type: { size, weight, slant, lineHeight, }, }) => {
    const baseTypeSize = returnBaseTypeSize({
        deviceWidth,
    });
    const scalingSteps = styleDefinition.type.size.scalingSteps[size];
    const scaledTypeSize = returnScaledTypeSize({
        deviceWidth,
        baseTypeSize,
        scalingSteps,
    });
    const typeStyle = {
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
            lineHeight,
        }),
        spacing: returnTypeSpacing({
            size: scaledTypeSize * styleDefinition.gridBase,
        }),
    };
    return typeStyle;
};
export const returnTypeStyles = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    const typeStyles = {};
    Object.keys(styleDefinition.device.widths).forEach((deviceWidthToken) => {
        typeStyles[deviceWidthToken] = {};
        styleDefinition.type.size.tokens.forEach((typeSizeToken) => {
            typeStyles[deviceWidthToken][typeSizeToken] = {};
            styleDefinition.type.weight.tokens
                .forEach((typeWeightToken) => {
                typeStyles[deviceWidthToken][typeSizeToken][typeWeightToken] = {};
                styleDefinition.type.slant.tokens
                    .forEach((typeSlantToken) => {
                    typeStyles[deviceWidthToken][typeSizeToken][typeWeightToken][typeSlantToken] = {};
                    styleDefinition.type.lineHeight.tokens
                        .forEach((typeLineHeightoken) => {
                        typeStyles[deviceWidthToken][typeSizeToken][typeWeightToken][typeSlantToken][typeLineHeightoken] =
                            returnTypeStyle({
                                deviceWidth: deviceWidthToken,
                                type: {
                                    size: typeSizeToken,
                                    weight: typeWeightToken,
                                    slant: typeSlantToken,
                                    lineHeight: typeLineHeightoken,
                                },
                            });
                    });
                });
            });
        });
    });
    resolve(typeStyles);
});
export const returnShadowStyles = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to retrieve the figma style pages
    returnStoredFigmaStylePages()
        // if the retrieval promise is resolved with a result
        .then((figmaPages) => {
        // set up container
        const shadows = {};
        // extract the relevant Figma page
        const shadowsFigmaPage = figmaPages
            .filter((figmaPage) => figmaPage.name === styleDefinition
            .figma.pageTitles.shadow);
        // extract the StyleObjects frame in the page
        const shadowsStyleObjectsFrame = shadowsFigmaPage[0].children[0]
            .children.filter((child) => child.name === 'StyleObjects');
        // extract the style objects from the frame
        const styleObjects = shadowsStyleObjectsFrame[0].children;
        // for each style object
        styleObjects.forEach((styleObject) => {
            const thisShadowSet = [];
            styleObject.effects.forEach((effect) => {
                if (effect.type === 'DROP_SHADOW') {
                    const thisColorHSL = returnHSLValuesFromRBGPercents({
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
                        'offset-x': effect.offset.x / styleDefinition.gridBase,
                        'offset-y': effect.offset.y / styleDefinition.gridBase,
                        'blur-radius': effect.radius / styleDefinition.gridBase,
                        color: thisColorHSLA,
                    });
                }
            });
            shadows[styleObject.name.split(' / ')[1]] =
                thisShadowSet;
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
export const buildTokenSet = ({ tokenSet }) => 
// return a new, main promise
new Promise((resolve, reject) => {
    let tokenSetFunction;
    if (tokenSet === 'color') {
        tokenSetFunction = returnColors;
    }
    else if (tokenSet === 'type') {
        tokenSetFunction = returnTypeStyles;
    }
    else if (tokenSet === 'shadow') {
        tokenSetFunction = returnShadowStyles;
    }
    // const tokenSetFunction = tokenSet === 'color' ? buildColorTokens
    // 	: tokenSet === 'type' ? buildTypeTokens
    if (tokenSetFunction) {
        // get a promise to retrieve the shadow styles
        tokenSetFunction()
            // if the retrieval promise is resolved with a result
            .then((result) => {
            // extract and format the objects data for convenience
            const tokenObjectString = `export const ${tokenSet} = ${JSON.stringify(result)};`;
            // write data to file
            fs.writeFileSync(`${styleDefinition.storage.path}${styleDefinition.storage.names[tokenSet]}`, tokenObjectString);
            // then resolve the main promise with the result
            resolve({
                error: false,
            });
        })
            // if the retrieval promise is rejected with an error
            .catch((error) => {
            // reject the main promise with the error
            reject(error);
        });
    }
    else {
        reject(new Error('buildTokenSet - could not find appropriate function'));
    }
});
export const buildAllTokenSets = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to store a fresh copy of the Figma style pages
    storeFigmaStylePages()
        // if the storage promise is resolved with a result
        .then(() => {
        // get promises to build each token set
        Promise.all([
            buildTokenSet({ tokenSet: 'color' }),
            buildTokenSet({ tokenSet: 'type' }),
            buildTokenSet({ tokenSet: 'shadow' }),
        ])
            // if the build promises are resolved with a result
            .then((result) => {
            // then resolve the main promise with a message
            resolve({ error: false });
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
//# sourceMappingURL=calculation.js.map