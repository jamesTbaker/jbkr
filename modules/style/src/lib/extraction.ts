/**
 * @name Styles Extraction
 * @description Extract styles data from Figma and store it locally.
 */

import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';
import * as fs from 'fs';
import { styleDefinition } from './definition.js';
import * as Models from '../../../models/src/index.js';

// get environment vars
dotenvConfig();

export const fetchFigmaStyleObjects = () =>
	// return a new promise
	new Promise((resolve, reject) => {
		// get a promise to retrieve the Figma file
		axios({
			method: 'get',
			url: 'https://api.figma.com/v1/files/OHRLg3ooz9FCKPjF1xpShW',
			timeout: 10000,
			headers: {
				'X-Figma-Token': process.env.figmaAccessToken,
			},
		})
			// if the promise is resolved with a result
			.then((result) => {
				// if the returned value matches the expected object architecture
				if (
					result &&
					result.data &&
					result.data.document &&
					result.data.document.children
				) {
					// attempt to extract the style pages from the result
					const figmaStylePages = result.data.document.children
						.filter(
							(page) => Object.values(
								styleDefinition.figma.pageTitles,
							).includes(page.name),
						);
					// if we extracted an object with at least one property
					if (
						typeof (figmaStylePages) === 'object' &&
						Object.keys(figmaStylePages).length > 0

					) {
						// then resolve this promise with the result
						resolve({
							error: false,
							figmaStyleObjects: figmaStylePages,
						});
					} else {
						// reject this promise with the error
						reject({
							error: true,
							content: new Error('fetchFigmaStyleObjects: Did not extract property with at least one property'),
						});
					}
				} else {
					// reject this promise with the error
					reject({
						error: true,
						content: new Error('fetchFigmaStyleObjects: Returned value does not conform to expected architecture'),
					});
				}
			})
			// if the promise is rejected with an error
			.catch((error) => {
				// reject this promise with the error
				reject({
					error: true,
					content: new Error(`fetchFigmaStyleObjects: Axios - Figma  - ${JSON.stringify(error)}`),
				});
			});
	});
/* export const storeFigmaStyleObjects = () =>
	// return a new promise
	new Promise((resolve, reject) => {
		// get a promise to return the styles objects
		fetchFigmaStyleObjects()
			.then((result: FigmaStyleObjectsReturn) => {
				if ('figmaStylePages' in result) {
					// extract and format the objects data for convenience
					const objectsData = JSON.stringify(result.figmaStyleObjects);
					try {
						// write data to file
						fs.writeFileSync(
							`${styleDefinition.storage.path}${styleDefinition.storage.names.figma}`,
							objectsData,
						);
						// then resolve this promise with the result
						resolve({
							error: false,
						});
					} catch (error) {
						// reject this promise with the error
						reject({
							error: true,
							content: new Error('storeFigmaStyleObjects: could not write file'),
						});
					}
				} else {
					// reject this promise with the error
					reject({
						error: true,
						content: new Error('storeFigmaStyleObjects: figmaStylePages not found'),
					});
				}
			})
			// if the promise is rejected with an error
			.catch((error) => {
				// reject this promise with the error
				reject(error);
			});
	});
export const returnStoredFigmaStyleObjects = () =>
	// return a new promise
	new Promise((resolve, reject) => {
		fs.readFile(
			`${styleDefinition.storage.path}${styleDefinition.storage.names.figma}`,
			'utf8',
			(error, jsonString) => {
				if (error) {
					reject(error);
				}
				resolve({
					error: false,
					figmaStyleObjects: JSON.parse(jsonString),
				});
			},
		);
	}); */
