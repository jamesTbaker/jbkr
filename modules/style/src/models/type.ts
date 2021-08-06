import { DeviceWidthToken } from './device';


export type  TypeSizeToken = '3xs' | '2xs' | '1xs' |
	's' | 'm' | 'l' | '1xl' | '2xl' | '3xl' | '4xl' | '5xl';
export type TypeSizeValue = number;

export type TypeWeightToken = 'regular' | 'bold';
export type TypeWeightValue = number;

export type TypeLineHeightToken = 'display' | 'body';
export type TypeLineHeightValue = number;

export type TypeSlantToken = 'normal' | 'italic';
export type TypeSlantValue = TypeSlantToken;

export type TypeSpacingValue = number;

export interface TypeStyleToken {
	size: TypeSizeValue;
	style: TypeSlantToken;
	weight: TypeWeightValue;
	height: TypeLineHeightValue;
	spacing: TypeSpacingValue;
};
export interface TypeLineHeightTokenSet {
	display: TypeStyleToken;
	body: TypeStyleToken;
};
export interface TypeSlantTokenSet {
	normal: TypeLineHeightTokenSet;
	italic: TypeLineHeightTokenSet;
};
export interface TypeWeightTokenSet {
	regular: TypeSlantTokenSet;
	bold: TypeSlantTokenSet;
};
export interface TypeSizeTokenSet {
	'3xs': TypeWeightTokenSet;
	'2xs': TypeWeightTokenSet;
	'1xs': TypeWeightTokenSet;
	's': TypeWeightTokenSet;
	'm': TypeWeightTokenSet;
	'l': TypeWeightTokenSet;
	'1xl': TypeWeightTokenSet;
	'2xl': TypeWeightTokenSet;
	'3xl': TypeWeightTokenSet;
	'4xl': TypeWeightTokenSet;
	'5xl': TypeWeightTokenSet;
}
export interface TypeDeviceWidthTokenSet {
	's': TypeSizeTokenSet;
	'm': TypeSizeTokenSet;
	'l': TypeSizeTokenSet;
}
export type TypeStylesTokenSet = TypeDeviceWidthTokenSet;


/* export type TypeSizeTokenArrays = TypeSizeToken[];
export interface TypeSizeScalingSteps {
	'3xs': number;
	'2xs': number;
	'1xs': number;
	's': number;
	'm': number;
	'l': number;
	'1xl': number;
	'2xl': number;
	'3xl': number;
	'4xl': number;
	'5xl': number;
} */
