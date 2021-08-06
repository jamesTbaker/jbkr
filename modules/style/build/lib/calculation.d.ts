import { ColorTokenObject } from '../models/color';
import { DeviceWidthToken } from '../models/device';
import { TypeSizeToken, TypeSizeValue, TypeWeightToken, TypeWeightValue, TypeLineHeightToken, TypeSlantToken, TypeStyleToken, TypeStylesTokenSet } from '../models/type';
import { ShadowTokenObject } from '../models/shadow';
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
export declare const returnColors: () => Promise<ColorTokenObject>;
export declare const returnBaseTypeSize: ({ deviceWidth }: {
    deviceWidth: DeviceWidthToken;
}) => TypeSizeValue;
export declare const returnScaledTypeSize: ({ deviceWidth, baseTypeSize, scalingSteps, }: {
    deviceWidth: DeviceWidthToken;
    baseTypeSize: number;
    scalingSteps: number;
}) => number;
export declare const returnTypeWeight: ({ baseTypeSize, scalingSteps, weight, }: {
    baseTypeSize: TypeSizeValue;
    scalingSteps: number;
    weight: TypeWeightToken;
}) => TypeWeightValue;
export declare const returnTypeLineHeight: ({ size, lineHeight }: {
    size: TypeSizeValue;
    lineHeight: TypeLineHeightToken;
}) => number;
export declare const returnTypeSpacing: ({ size }: {
    size: TypeSizeValue;
}) => number;
export declare const returnTypeStyle: ({ deviceWidth, type: { size, weight, slant, lineHeight, }, }: {
    deviceWidth: DeviceWidthToken;
    type: {
        size: TypeSizeToken;
        weight: TypeWeightToken;
        slant: TypeSlantToken;
        lineHeight: TypeLineHeightToken;
    };
}) => TypeStyleToken;
export declare const returnTypeStyles: () => Promise<TypeStylesTokenSet>;
export declare const returnShadowStyles: () => Promise<ShadowTokenObject>;
export declare const buildTokenSet: ({ tokenSet }: {
    tokenSet: 'color' | 'type' | 'shadow';
}) => Promise<{
    error: boolean;
}>;
export declare const buildAllTokenSets: () => Promise<{
    error: boolean;
}>;
