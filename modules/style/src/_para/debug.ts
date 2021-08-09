import {
	getFigmaStylePages,
	storeFigmaStylePages,
	returnStoredFigmaStylePages
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
} from '../lib/calculation.js';
import { style } from '../lib/api.js';

// style.type.style({
// 	deviceWidth: 's',
// 	size: 's',
// });
// style.position.shadow('08');
buildAllStyleSets();
