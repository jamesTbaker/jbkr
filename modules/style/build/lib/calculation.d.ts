import { JBKRColorSet, LightColorSet } from '../models/color';
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
export declare const returnColorSystem: (colorSet: 'jbkr' | 'light') => Promise<JBKRColorSet | LightColorSet>;
