/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	getFigmaStylePages,
	storeFigmaStylePages,
	returnStoredFigmaStylePages,
// eslint-disable-next-line import/no-unresolved
} from '../lib/extraction.js';
import {
	returnAllColors,
	returnBaseTypeSize,
	returnScaledTypeSize,
	returnTypeWeight,
	returnTypeLineHeight,
	returnTypeSpacing,
	returnTypeStyle,
	buildAllStyleSets,
// eslint-disable-next-line import/no-unresolved
} from '../lib/calculation.js';
// eslint-disable-next-line import/no-unresolved
import { style } from '../lib/api.js';

// style.type.style({
// 	deviceWidth: 's',
// 	size: 's',
// });
// style.position.shadow('08');
buildAllStyleSets();
