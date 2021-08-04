/**
 * Extract styles data from Figma and store it locally.
 *
 * @internal
 */
import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';
import * as fs from 'fs';
import { styleDefinition } from './definition.js';
// get environment vars
dotenvConfig();
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
export const fetchFigmaStylePages = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to retrieve file from the Figma API
    axios({
        method: 'get',
        url: `https://api.figma.com/v1/files/${process.env.figmaFileID}`,
        timeout: 10000,
        headers: {
            'X-Figma-Token': process.env.figmaAccessToken,
        },
    })
        // if the retrieval promise is resolved with a result
        .then((result) => {
        // if the returned object has the expected architecture
        if (result &&
            result.data &&
            result.data.document &&
            result.data.document.children) {
            // create a new array and attempt to populate it
            // with the Figma pages whose names are
            // specified in definition
            const figmaStylePages = result.data.document.children
                .filter((page) => Object.values(styleDefinition.figma.pageTitles).includes(page.name));
            // if the array contains 1+ page objects
            if (figmaStylePages.length > 0) {
                // then resolve the main promise with the array
                resolve(figmaStylePages);
                // if the array doesn't contain 1+ page objects
            }
            else {
                // reject the main promise with a custom error
                reject(new Error('fetchFigmaStylePages: Array figmaStylePages contains no objects'));
            }
        }
        else {
            // reject the main promise with a custom error
            reject(new Error('fetchFigmaStylePages: API result does not conform to expected architecture'));
        }
    })
        // if the retrieval promise is rejected with an error
        .catch((error) => {
        // reject the main promise with a custom error
        reject(new Error(`fetchFigmaStylePages: Axios - Figma  - ${JSON.stringify(error)}`));
    });
});
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
export const storeFigmaStylePages = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to return the styles objects
    fetchFigmaStylePages()
        .then((result) => {
        // extract and format the objects data for convenience
        const objectsData = JSON.stringify(result);
        try {
            // write data to file
            fs.writeFileSync(`${styleDefinition.storage.path}${styleDefinition.storage.names.figma}`, objectsData);
            // then resolve this promise with the result
            resolve({
                error: false,
            });
        }
        catch (error) {
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
export const returnStoredFigmaStylePages = () => 
// return a new promise
new Promise((resolve, reject) => {
    fs.readFile(`${styleDefinition.storage.path}${styleDefinition.storage.names.figma}`, 'utf8', (error, jsonString) => {
        if (error) {
            reject(error);
        }
        const storedFigmaStylePages = JSON.parse(jsonString);
        resolve(storedFigmaStylePages);
    });
});
//# sourceMappingURL=extraction.js.map