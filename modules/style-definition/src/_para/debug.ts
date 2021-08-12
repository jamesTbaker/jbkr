/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	getFigmaStylePages,
	storeFigmaStylePages,
	returnStoredFigmaStylePages,
} from '../lib/extraction.js';
import {
	returnAllColors,
	returnBaseTypeSize,
	returnScaledTypeSize,
	returnTypeWeight,
	returnTypeLineHeight,
	returnTypeSpacing,
	returnTypeStyle,
	cloneFoundation,
	buildAllStyleSets,
	buildStyleServiceStore,
} from '../lib/calculation.js';

buildStyleServiceStore();
