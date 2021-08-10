/**
 * The fundamental element.
 */
export interface Color {
    h: number;
    s: number;
    l: number;
    a: number;
}
/**
 * Object keys.
 */
export declare type NeutralHuesKey = 'Finch' | 'Sky' | 'Spruce' | 'Seafoam';
export declare type AccentOnDarkPrimaryHuesKey = 'Peacock' | 'Seafoam' | 'Finch';
export declare type AccentOnDarkSecondaryHuesKey = 'Iris';
export declare type AccentOnDarkTertiaryHuesKey = 'Tiger' | 'Sunshine';
export declare type AccentOnDarkQuarternaryHuesKey = 'Flamingo' | 'Spruce';
export declare type AccentOnMediumPrimaryHuesKey = 'Peacock' | 'Seafoam';
export declare type AccentOnMediumTertiaryHuesKey = 'Sunshine';
export declare type AccentOnMediumQuarternaryHuesKey = 'Spruce';
export declare type AccentOnLightPrimaryHuesKey = 'Finch';
export declare type AccentOnLightSecondaryHuesKey = 'Iris';
export declare type AccentOnLightQuarternaryHuesKey = 'Flamingo';
export declare type StateToneKey = 'Positive' | 'Warning' | 'Negative' | 'Neutral';
export declare type LightSurfaceKey = 'OnLight' | 'OnDark';
export declare type LightnessLevelKeyOf1 = '01';
export declare type LightnessLevelKeyOf3 = '01' | '02' | '03';
export declare type LightnessLevelKeyOf5 = '01' | '02' | '03' | '04' | '05';
export declare type LightnessLevelKeyOf9 = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09';
export declare type LightnessLevelKeyOf41 = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41';
/**
 * Subsets.
 */
export interface LightnessLevelSubset {
    [level: string]: Color;
}
export interface NeutralSubset {
    Finch: LightnessLevelSubset;
    Sky: LightnessLevelSubset;
    Spruce: LightnessLevelSubset;
    Seafoam: LightnessLevelSubset;
}
export interface BrandSubset {
    Finch: LightnessLevelSubset;
    Spruce: LightnessLevelSubset;
    Peony: LightnessLevelSubset;
}
export interface AccentSubset {
    OnDark: {
        Primary: LightnessLevelSubset;
        Secondary: LightnessLevelSubset;
        Tertiary: LightnessLevelSubset;
        Quarternary: LightnessLevelSubset;
    };
    OnMedium: {
        Primary: LightnessLevelSubset;
        Tertiary: LightnessLevelSubset;
        Quarternary: LightnessLevelSubset;
    };
    OnLight: {
        Primary: LightnessLevelSubset;
        Secondary: LightnessLevelSubset;
        Quarternary: LightnessLevelSubset;
    };
}
export interface StateSubset {
    Positive: LightnessLevelSubset;
    Warning: LightnessLevelSubset;
    Negative: LightnessLevelSubset;
    Neutral: LightnessLevelSubset;
}
export interface LightSubset {
    OnLight: LightnessLevelSubset;
    OnDark: LightnessLevelSubset;
}
/**
 * The parent set.
 */
export interface AllColors {
    Neutral: NeutralSubset;
    Brand: BrandSubset;
    Accent: AccentSubset;
    State: StateSubset;
    Light: LightSubset;
}