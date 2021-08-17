import { pathExistsSync, mkdirSync, copy } from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
export const cloneStore = () => 
// return a new, main promise
new Promise((resolve, reject) => {
    const here = fileURLToPath(import.meta.url);
    const source = path.join(here, '../../../src/store');
    const destination = path.join(here, '../../store/');
    if (!pathExistsSync(destination)) {
        mkdirSync(destination);
    }
    copy(source, destination)
        // if the  promise is resolved with a result
        .then(() => {
        // then resolve the main promise with the result
        resolve({ 'error': false });
    })
        // if the  promise is rejected with an error
        .catch((error) => {
        // reject the main promise with the error
        reject(error);
    });
});
cloneStore();
//# sourceMappingURL=build.js.map