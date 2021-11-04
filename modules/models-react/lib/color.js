import { string, exact, oneOfType, arrayOf, oneOf } from 'prop-types';


export const KindKeys = ['Neutral', 'Brand', 'Accent', 'State', 'Light'];
export const NeutralKeys = ['Base', 'Finch', 'Sky', 'Spruce', 'Seafoam'];
export const BrandToneKeys = ['Peony', 'Finch', 'Spruce'];
export const AccentToneKeys = [
	'Peacock', 'Seafoam', 'Finch', 'Iris', 'Tiger', 'Sunshine',
	'Flamingo', 'Spruce',
];
export const StateToneKeys = ['Positive', 'Warning', 'Negative', 'Neutral'];
export const LightToneKeys = ['OnLight', 'OnDark'];
export const AllToneKeys = [
	...BrandToneKeys,
	...AccentToneKeys,
	...StateToneKeys,
	...LightToneKeys,
];
export const LevelKeys = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
	31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
];
export const ContextColorKeys = LightToneKeys;

export const Color = oneOfType([
	string,
	exact({
		'kind': oneOf(KindKeys).isRequired,
		'tone': oneOf(AllToneKeys).isRequired,
		'level': oneOf(LevelKeys).isRequired,
		'alpha': string,
	}),
]);
export const Gradient = exact({
	'colors': arrayOf(exact({
		'kind': oneOf(KindKeys).isRequired,
		'tone': oneOf(AllToneKeys).isRequired,
		'level': oneOf(LevelKeys).isRequired,
		'alpha': string,
	})),
	'fallbackColor': exact({
		'kind': oneOf(KindKeys).isRequired,
		'tone': oneOf(AllToneKeys).isRequired,
		'level': oneOf(LevelKeys).isRequired,
		'alpha': string,
	}),
});
export const ContextColorKey = oneOf(ContextColorKeys);
