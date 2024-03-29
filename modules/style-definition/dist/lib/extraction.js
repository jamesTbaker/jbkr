/**
 * @module Style Definition
 */
import axios from 'axios';
import * as fs from 'fs';
import { foundation } from './foundation.js';
/**
 * Get the specified file from the Figma API. Extract and return only
 * the pages specified in {@link foundation | `foundation`}.
 *
 * @remarks
 * Figma file ID and api access token are environment variables.
 *
 * @returns An array of Figma page objects, or an `Error`.
 *
 * @internal
 */
export const getFigmaStylePages = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    // get a promise to retrieve file from the Figma API
    axios({
        'method': 'get',
        'url': `https://api.figma.com/v1/files/${process.env.figmaFileID}`,
        'timeout': 10000,
        'headers': {
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
                .filter((page) => Object.values(foundation.extraction.figma.pageTitles).includes(page.name));
            // if the array contains 1+ page objects
            if (figmaStylePages.length > 0) {
                // then resolve the main promise with the array
                resolve(figmaStylePages);
                // if the array doesn't contain 1+ page objects
            }
            else {
                // throw custom error
                throw '> > > JBKR: getFigmaStylePages: \
							figmaStylePages contains no objects';
            }
        }
        else {
            // throw custom error
            throw '> > > JBKR: getFigmaStylePages: \
						API result does not conform to \
						expected architecture';
        }
    })
        // if the retrieval promise is rejected with an error
        .catch((error) => {
        // reject the main promise with a custom error
        reject(new Error(`> > > JBKR: getFigmaStylePages: \
						Axios - Figma  - ${JSON.stringify(error)}`));
    });
});
/**
 * Get Figma data using [[`getFigmaStylePages`]] and write it to the
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
    getFigmaStylePages()
        .then((result) => {
        // set data and location here for debugging convenience
        const pagesString = JSON.stringify(result);
        const pagesLocation = foundation.extraction.figma.storage.path +
            foundation.extraction.figma.storage.name;
        try {
            // write data to file
            fs.writeFileSync(pagesLocation, pagesString);
            // then resolve this promise with the result
            resolve({
                'error': false,
            });
        }
        catch (error) {
            // throw custom error
            reject(new Error(`storeFigmaStylePages: could not write file - \
						${JSON.stringify(error)}`));
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
    // set data and location here for debugging convenience
    const pagesLocation = foundation.extraction.figma.storage.path +
        foundation.extraction.figma.storage.name;
    fs.readFile(pagesLocation, 'utf8', (error, jsonString) => {
        if (error) {
            reject(error);
        }
        resolve(JSON.parse(jsonString));
    });
});
//# sourceMappingURL=extraction.js.map