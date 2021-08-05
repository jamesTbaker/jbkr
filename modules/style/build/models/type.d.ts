export declare type TypeSizeToken = '3xs' | '2xs' | '1xs' | 's' | 'm' | 'l' | '1xl' | '2xl' | '3xl' | '4xl' | '5xl';
export declare type TypeSizeTokenArrays = TypeSizeToken[];
export declare type TypeSizeValue = number;
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
}
export declare type TypeWeightToken = 'regular' | 'bold';
export declare type TypeWeightValue = number;
export declare type TypeUsageToken = 'display' | 'body';
export declare type TypeLineheightValue = number;
export declare type TypeSlantToken = 'normal' | 'italic';
export declare type TypeSpacingValue = number;
export interface TypeStyleToken {
    size: TypeSizeValue;
    style: TypeSlantToken;
    weight: TypeWeightValue;
    height: TypeLineheightValue;
    spacing: TypeSpacingValue;
}
