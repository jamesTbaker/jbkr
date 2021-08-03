/**
 * @name Styles Extraction
 * @description Extract styles data from Figma and store it locally.
 */

import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';
import * as fs from 'fs';
import { styleDefinition } from './definition.js';
import { FigmaDocument, FigmaPage, FigmaStyleObject } from '../models/figma';

// get environment vars
dotenvConfig();

export const fetchFigmaStylePages =
	():Promise<FigmaPage[]> =>
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
				.then((result:{
					data: FigmaDocument
				}) => {
					// if the returned object has the expected architecture
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
							resolve(figmaStylePages);
						} else {
							// reject this promise with the error
							reject(new Error('fetchFigmaStylePages: Did not extract object with at least one property'));
						}
					} else {
						// reject this promise with the error
						reject(new Error('fetchFigmaStylePages: Returned value does not conform to expected architecture'));
					}
				})
			// if the promise is rejected with an error
				.catch((error) => {
				// reject this promise with the error
					reject(new Error(`fetchFigmaStylePages: Axios - Figma  - ${JSON.stringify(error)}`));
				});
		});
export const storeFigmaStylePages = ():Promise<{ error: boolean }> =>
	// return a new promise
	new Promise((resolve, reject) => {
		// get a promise to return the styles objects
		fetchFigmaStylePages()
			.then((result: FigmaPage[]) => {
				// extract and format the objects data for convenience
				const objectsData = JSON.stringify(result);
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
					reject(new Error('storeFigmaStylePages: could not write file'));
				}
			})
			// if the promise is rejected with an error
			.catch((error) => {
				// reject this promise with the error
				reject(error);
			});
	});
export const returnStoredFigmaStylePages = ():Promise<FigmaPage[]> =>
	// return a new promise
	new Promise((resolve, reject) => {
		fs.readFile(
			`${styleDefinition.storage.path}${styleDefinition.storage.names.figma}`,
			'utf8',
			(error, jsonString) => {
				if (error) {
					reject(error);
				}
				const storedFigmaStylePages:FigmaPage[] = JSON.parse(jsonString);
				resolve(storedFigmaStylePages);
			},
		);
	});
