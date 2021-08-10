import { AllColors } from '../models/color';
import { DeviceWidthToken } from '../models/device';
import { TypeSizeKey, TypeWeightKey, TypeLineHeightKey, TypeSlantKey, TypeStyle, AllTypeStyles } from '../models/type';
import { AllShadows } from '../models/shadow';
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
export declare const returnAllColors: () => Promise<AllColors>;
export declare const returnBaseTypeSize: ({ deviceWidth }: {
    deviceWidth: DeviceWidthToken;
}) => number;
export declare const returnScaledTypeSize: ({ deviceWidth, baseTypeSize, scalingSteps, }: {
    deviceWidth: DeviceWidthToken;
    baseTypeSize: number;
    scalingSteps: number;
}) => number;
export declare const returnTypeWeight: ({ baseTypeSize, scalingSteps, weight, }: {
    baseTypeSize: number;
    scalingSteps: number;
    weight: TypeWeightKey;
}) => number;
export declare const returnTypeLineHeight: ({ size, lineHeight }: {
    size: number;
    lineHeight: TypeLineHeightKey;
}) => number;
export declare const returnTypeSpacing: ({ size }: {
    size: number;
}) => number;
export declare const returnTypeStyle: ({ deviceWidth, "type": { size, weight, slant, lineHeight, }, }: {
    deviceWidth: DeviceWidthToken;
    type: {
        size: TypeSizeKey;
        weight: TypeWeightKey;
        slant: TypeSlantKey;
        lineHeight: TypeLineHeightKey;
    };
}) => TypeStyle;
export declare const returnAllTypeStyles: () => Promise<AllTypeStyles>;
export declare const returnAllShadows: () => Promise<AllShadows>;
export declare const buildStyleSet: ({ tokenSet }: {
    tokenSet: 'color' | 'type' | 'shadow';
}) => Promise<{
    error: boolean;
}>;
export declare const buildAllStyleSets: () => Promise<{
    error: boolean;
}>;
