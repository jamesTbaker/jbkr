/**
 * Scan code and produce markdown pages of documentation.
 * @module @jbkr/generate-docs
 */

const { generateAll, generateAuto } = require('./lib/generate.js');

/**
 * @description Given the location of the documentation system to which
 * we'll write and the config that tells us what to scan and where to write
 * the results, generate and write pages in a mix of YAML, HTML,
 * and markdown.
 *
 * @param {string} docBasePath - Absolute path of the documentation system.
 */
module.exports.generateAll = generateAll;
module.exports.generateAuto = generateAuto;
