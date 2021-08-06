import {
	fetchFigmaStylePages,
	storeFigmaStylePages,
	returnStoredFigmaStylePages
} from '../lib/extraction.js';
import {
	returnColors,
	returnBaseTypeSize,
	returnScaledTypeSize,
	returnTypeWeight,
	returnTypeLineHeight,
	returnTypeSpacing,
	returnTypeStyle,
	buildAllTokenSets,
} from '../lib/calculation.js';
import { style } from '../lib/api.js';

// style.type.style({
// 	deviceWidth: 's',
// 	size: 's',
// });
// style.position.shadow('08');
buildAllTokenSets();
