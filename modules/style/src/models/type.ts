/**
 * The fundamental member.
 */
export interface TypeStyle {
	size: number;
	style: TypeSlantKey;
	weight: number;
	height: number;
	spacing: number;
};
/**
 * Object keys.
 */

export type TypeSizeKey = '3xs' | '2xs' | '1xs' | 's' | 'm' | 'l' |
	'1xl' | '2xl' | '3xl' | '4xl' | '5xl';
export type TypeWeightKey = 'regular' | 'bold';
export type TypeLineHeightKey = 'display' | 'body';
export type TypeSlantKey = 'normal' | 'italic';
/**
 * Subsets.
 */
export interface TypeLineHeightSubset {
	display: TypeStyle;
	body: TypeStyle;
};
export interface TypeSlantSubset {
	normal: TypeLineHeightSubset;
	italic: TypeLineHeightSubset;
};
export interface TypeWeightSubset {
	regular: TypeSlantSubset;
	bold: TypeSlantSubset;
};
export interface TypeSizeSubset {
	'3xs': TypeWeightSubset;
	'2xs': TypeWeightSubset;
	'1xs': TypeWeightSubset;
	's': TypeWeightSubset;
	'm': TypeWeightSubset;
	'l': TypeWeightSubset;
	'1xl': TypeWeightSubset;
	'2xl': TypeWeightSubset;
	'3xl': TypeWeightSubset;
	'4xl': TypeWeightSubset;
	'5xl': TypeWeightSubset;
}
/**
 * The parent set.
 */
export interface AllTypeStyles {
	's': TypeSizeSubset;
	'm': TypeSizeSubset;
	'l': TypeSizeSubset;
}
