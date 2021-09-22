/**
 * Custom dark theme for [Prism](https://prismjs.com/), used in Docusaurus
 * and on jbkr.
 * @module @jbkr/syntax-highlighting
 */

const prismReactRendererTheme = require('./lib/prism-react-renderer');
const prismCSS = require('./lib/prism-css');

module.exports = {
	prismReactRendererTheme,
	prismCSS,
};
