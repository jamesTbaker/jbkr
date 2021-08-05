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
