/**
 * Extract styles data from Figma and store it locally.
 *
 * @internal
 */
import * as fs from 'fs';
import utilities from 'utilities';
import { styleDefinition } from './definition.js';
import { returnStoredFigmaStylePages } from './extraction.js';
import { FigmaDocument, FigmaPage, FigmaStyleObject } from '../models/figma';

export const ReturnJBKRColorsFromStoredObjects = ():Promise<object> =>
	// return a new, main promise
	new Promise((resolve, reject) => {
		// get a promise to get the figma style pages
		returnStoredFigmaStylePages()
			// if the  promise is resolved with a result
			.then((figmaPages:FigmaPage[]) => {
				// then resolve the main promise with the result
				resolve({});
			})
			// if the  promise is rejected with an error
			.catch((error) => {
				// reject the main promise with the error
				reject(error);
			});
	});
