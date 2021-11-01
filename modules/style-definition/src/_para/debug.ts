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
	cloneStore,
} from '../lib/calculation.js';

// buildStyleServiceStore();
returnTypeWeight({
	'baseTypeSize': 16,
	'scalingSteps': 5,
	'weight': 'bold',
});
