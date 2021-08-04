import { ColorTokenObject } from '../models/color';
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
export declare const buildColorTokens: () => Promise<{
    error: boolean;
}>;
