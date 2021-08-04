/**
 * Extract styles data from Figma and store it locally.
 *
 * @internal
 */
import { FigmaPage } from '../models/figma';
/**
 * Get the specified file from the Figma API. Extract and return only
 * the pages specified in [[`definition`]].
 *
 * @remarks
 * Figma file ID and api access token are environment variables.
 *
 * @returns An array of Figma page objects, or an `Error`.
 *
 * @internal
 */
export declare const fetchFigmaStylePages: () => Promise<FigmaPage[]>;
/**
 * Get Figma data using [[`fetchFigmaStylePages`]] and write it to the
 * local file system.
 *
 * @remarks
 * File write location is set in [[`definition`]].
 *
 * @returns An object with `error` property set to `false`, or an `Error`.
 *
 * @internal
 */
export declare const storeFigmaStylePages: () => Promise<{
    error: boolean;
}>;
/**
 * Read Figma data from the local file system and return it.
 *
 * @remarks
 * File read location is set in [[`definition`]].
 *
 * @returns An array of Figma page objects, or an `Error`.
 *
 * @internal
 */
export declare const returnStoredFigmaStylePages: () => Promise<FigmaPage[]>;
