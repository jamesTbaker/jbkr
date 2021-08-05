import {
	fetchFigmaStylePages,
	storeFigmaStylePages,
	returnStoredFigmaStylePages
} from '../lib/extraction.js';
import {
	returnColors,
	buildColorTokens,
	returnBaseTypeSize,
	returnScaledTypeSize,
	returnTypeWeight,
	returnTypeLineHeight,
	returnTypeSpacing,
	returnTypeStyle,
	buildTypeTokens,
} from '../lib/calculation.js';

buildTypeTokens();
