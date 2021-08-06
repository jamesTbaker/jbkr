export declare type TypeSizeToken = '3xs' | '2xs' | '1xs' | 's' | 'm' | 'l' | '1xl' | '2xl' | '3xl' | '4xl' | '5xl';
export declare type TypeSizeValue = number;
export declare type TypeWeightToken = 'regular' | 'bold';
export declare type TypeWeightValue = number;
export declare type TypeLineHeightToken = 'display' | 'body';
export declare type TypeLineHeightValue = number;
export declare type TypeSlantToken = 'normal' | 'italic';
export declare type TypeSlantValue = TypeSlantToken;
export declare type TypeSpacingValue = number;
export interface TypeStyleToken {
    size: TypeSizeValue;
    style: TypeSlantToken;
    weight: TypeWeightValue;
    height: TypeLineHeightValue;
    spacing: TypeSpacingValue;
}
export interface TypeLineHeightTokenSet {
    display: TypeStyleToken;
    body: TypeStyleToken;
}
export interface TypeSlantTokenSet {
    normal: TypeLineHeightTokenSet;
    italic: TypeLineHeightTokenSet;
}
export interface TypeWeightTokenSet {
    regular: TypeSlantTokenSet;
    bold: TypeSlantTokenSet;
}
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
export declare type TypeStylesTokenSet = TypeDeviceWidthTokenSet;
