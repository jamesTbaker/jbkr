/**
 * @module Style Definition
 */
import * as fs from 'fs';
import * as fsextra from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { returnHSLValuesFromRBGPercents, returnNumberRoundedUpToMultiple, returnCopyOfObjectWithStringKeys, } from '@jbkr/utilities';
import { foundation } from './foundation.js';
import { storeFigmaStylePages, returnStoredFigmaStylePages, } from './extraction.js';
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
export const returnAllColors = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to retrieve the figma style pages
    returnStoredFigmaStylePages()
        // if the retrieval promise is resolved with a result
        .then((figmaPages) => {
        // set up container
        const allColors = {};
        // extract the relevant Figma pages
        const jbkrColorsFigmaPage = figmaPages
            .filter((figmaPage) => figmaPage.name === foundation
            .extraction.figma.pageTitles.colorJBKR);
        const lightColorsFigmaPage = figmaPages
            .filter((figmaPage) => figmaPage.name === foundation
            .extraction.figma.pageTitles.light);
        // extract the StyleObjects frame in the page
        const jbkrStyleObjectsFrame = jbkrColorsFigmaPage[0].
            children[0].children.filter((child) => child.name === 'StyleObjects');
        const lightStyleObjectsFrame = lightColorsFigmaPage[0]
            .children[0].children.filter((child) => child.name === 'StyleObjects');
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
                if (!(propertiesArray[3] in allColors[propertiesArray[2]])) {
                    allColors[propertiesArray[2]][propertiesArray[3]] =
                        {};
                }
                allColors[propertiesArray[2]][propertiesArray[3]][propertiesArray[4]] = thisColorHSLA;
            }
            if (propertiesArray[2] === 'jbkr') {
                if (propertiesArray[3] === 'Neutral'
                    || propertiesArray[3] === 'Brand'
                    || propertiesArray[3] === 'State') {
                    if (!(propertiesArray[3] in
                        allColors)) {
                        allColors[propertiesArray[3]] = {};
                    }
                    if (!(propertiesArray[4] in
                        allColors[propertiesArray[3]])) {
                        allColors[propertiesArray[3]][propertiesArray[4]] = {};
                    }
                    allColors[propertiesArray[3]][propertiesArray[4]][propertiesArray[5]] = thisColorHSLA;
                }
                if (propertiesArray[3] === 'Accent') {
                    if (!(propertiesArray[3] in
                        allColors)) {
                        allColors[propertiesArray[3]] = {};
                    }
                    if (!(propertiesArray[4] in
                        allColors[propertiesArray[3]])) {
                        allColors[propertiesArray[3]][propertiesArray[4]] = {};
                    }
                    if (!(propertiesArray[5] in
                        allColors[propertiesArray[3]][propertiesArray[4]])) {
                        allColors[propertiesArray[3]][propertiesArray[4]][propertiesArray[5]] =
                            {};
                    }
                    allColors[propertiesArray[3]][propertiesArray[4]][propertiesArray[5]][propertiesArray[6]] =
                        thisColorHSLA;
                }
            }
        });
        // fix the incorrect alpha transparency coming from API on the
        // color for which it really matters (transparent)
        allColors.Neutral.Base.Transparent.a = 0;
        // then resolve the main promise with the return value
        resolve(allColors);
    })
        // if the retrieval promise is rejected with an error
        .catch((error) => {
        // reject the main promise with the error
        reject(error);
    });
});
export const returnBaseTypeSize = ({ deviceWidth }) => foundation.gridBase * foundation.type.size
    .baseMultipliersByDeviceWidth[deviceWidth];
export const returnScaledTypeSize = ({ deviceWidth, baseTypeSize, scalingSteps, }) => {
    const scaleMultipliersThisDeviceWidth = foundation.type.size
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
    return scaledTypeSize / foundation.gridBase;
};
export const returnTypeWeight = ({ baseTypeSize, scalingSteps, weight, }) => {
    const baseMultiplierThisWeight = foundation.type.weight.baseMultipliersByWeight[weight];
    const scaleMultipliersThisWeight = foundation.type.weight.scalingMultipliersByWeight[weight];
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
export const returnTypeSpacing = ({ size }) => ((Math.pow((size / foundation.gridBase), 2) * foundation
    .type.spacing.multiplier) / foundation.gridBase);
export const returnTypeStyle = ({ deviceWidth, 'type': { size, weight, slant, lineHeight, }, }) => {
    const baseTypeSize = returnBaseTypeSize({
        deviceWidth,
    });
    const scalingSteps = foundation.type.size.scalingSteps[size];
    const scaledTypeSize = returnScaledTypeSize({
        deviceWidth,
        baseTypeSize,
        scalingSteps,
    });
    const typeStyle = {
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
export const returnAllTypeStyles = () => 
// return a new, main promise
new Promise((resolve) => {
    // set up container
    const typeStyles = {};
    //
    foundation.device.widths.tokens.forEach((deviceWidth) => {
        typeStyles[deviceWidth] = {};
        foundation.type.size.tokens.forEach((typeSize) => {
            typeStyles[deviceWidth][typeSize] = {};
            foundation.type.weight.tokens
                .forEach((typeWeight) => {
                typeStyles[deviceWidth][typeSize][typeWeight] = {};
                foundation.type.slant.tokens
                    .forEach((typeSlant) => {
                    typeStyles[deviceWidth][typeSize][typeWeight][typeSlant] = {};
                    foundation.type.lineHeight.tokens
                        .forEach((typeLineHeight) => {
                        typeStyles[deviceWidth][typeSize][typeWeight][typeSlant][typeLineHeight] =
                            returnTypeStyle({
                                'deviceWidth': deviceWidth,
                                'type': {
                                    'size': typeSize,
                                    'weight': typeWeight,
                                    'slant': typeSlant,
                                    'lineHeight': typeLineHeight,
                                },
                            });
                    });
                });
            });
        });
    });
    resolve(typeStyles);
});
export const returnAllShadows = () => 
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
            .filter((figmaPage) => figmaPage.name === foundation
            .extraction.figma.pageTitles.shadow);
        // extract the StyleObjects frame in the page
        const shadowsStyleObjectsFrame = shadowsFigmaPage[0].children[0].children.filter((child) => child.name === 'StyleObjects');
        // extract the style objects from the frame
        const styleObjects = shadowsStyleObjectsFrame[0].children;
        // for each style object
        styleObjects.forEach((styleObject) => {
            const thisShadowSet = [];
            styleObject.effects.forEach((effect) => {
                if (effect.type === 'DROP_SHADOW') {
                    const thisColorHSL = returnHSLValuesFromRBGPercents({
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
                        'offset-x': effect.offset.x / foundation.gridBase,
                        'offset-y': effect.offset.y / foundation.gridBase,
                        'blur-radius': effect.radius / foundation.gridBase,
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
export const buildStyleSet = ({ tokenSet }) => 
// return a new, main promise
new Promise((resolve, reject) => {
    let styleSetFunction;
    if (tokenSet === 'color') {
        styleSetFunction = returnAllColors;
    }
    else if (tokenSet === 'type') {
        styleSetFunction = returnAllTypeStyles;
    }
    else if (tokenSet === 'shadow') {
        styleSetFunction = returnAllShadows;
    }
    if (styleSetFunction) {
        // get a promise to retrieve the shadow styles
        styleSetFunction()
            // if the retrieval promise is resolved with a result
            .then((result) => {
            // set data and location here for debugging convenience
            const styleString = `export const ${tokenSet} = ${JSON.stringify(result)};`;
            const styleLocation = foundation.extraction.definitions.path +
                foundation.extraction.definitions.names[tokenSet];
            // write data to file
            fs.writeFileSync(styleLocation, styleString);
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
    }
    else {
        reject(new Error('buildStyleSet - could not find appropriate function'));
    }
});
export const cloneFoundation = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    const foundationClone = returnCopyOfObjectWithStringKeys({
        'incoming': foundation,
    });
    delete foundationClone.extraction;
    const foundationString = `export const foundation = ${JSON.stringify(foundationClone)};`;
    const styleLocation = foundation.extraction.definitions.path +
        foundation.extraction.definitions.names.foundation;
    // write data to file
    fs.writeFile(styleLocation, foundationString, (error) => {
        if (error) {
            reject(new Error(`cloneFoundation: could not write file - \
					${JSON.stringify(error)}`));
        }
        else {
            resolve({
                'error': false,
            });
        }
    });
});
export const cloneStore = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    const here = fileURLToPath(import.meta.url);
    const source = path.join(here, '../../../../style-service/src/store');
    const destination = path.join(here, '../../../../style-service/dist/store');
    fsextra.ensureDirSync(destination);
    fsextra.copy(source, destination)
        // if the  promise is resolved with a result
        .then(() => {
        // then resolve the main promise with the result
        resolve({ 'error': false });
    })
        // if the  promise is rejected with an error
        .catch((error) => {
        // reject the main promise with the error
        reject(error);
    });
});
export const buildAllStyleSets = () => 
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
export const buildStyleServiceStore = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get promises to write files to style service store
    Promise.all([
        buildAllStyleSets(),
        cloneFoundation(),
    ])
        // if the write promises are resolved
        .then(() => {
        // then resolve the main promise with a message
        resolve({ 'error': false });
    })
        // if 1+ write promises were rejected with an error
        .catch((error) => {
        // reject the main promise with the first error
        reject(error);
    });
});
//# sourceMappingURL=calculation.js.map