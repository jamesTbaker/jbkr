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
export type NeutralHuesKey = 'Finch' | 'Sky' | 'Spruce' | 'Seafoam';
export type AccentOnDarkPrimaryHuesKey = 'Peacock' | 'Seafoam' | 'Finch';
export type AccentOnDarkSecondaryHuesKey = 'Iris';
export type AccentOnDarkTertiaryHuesKey = 'Tiger' | 'Sunshine';
export type AccentOnDarkQuarternaryHuesKey = 'Flamingo' | 'Spruce';
export type AccentOnMediumPrimaryHuesKey = 'Peacock' | 'Seafoam';
export type AccentOnMediumTertiaryHuesKey = 'Sunshine';
export type AccentOnMediumQuarternaryHuesKey = 'Spruce';
export type AccentOnLightPrimaryHuesKey = 'Finch';
export type AccentOnLightSecondaryHuesKey = 'Iris';
export type AccentOnLightQuarternaryHuesKey = 'Flamingo';
export type StateToneKey = 'Positive' | 'Warning' | 'Negative' | 'Neutral';
export type LightSurfaceKey = 'OnLight' | 'OnDark';
export type LightnessLevelKeyOf1 = '01';
export type LightnessLevelKeyOf3 = '01' | '02' | '03';
export type LightnessLevelKeyOf5 = '01' | '02' | '03' | '04' | '05';
export type LightnessLevelKeyOf9 = '01' | '02' | '03' | '04' | '05' | '06' |
	'07' | '08' | '09';
export type LightnessLevelKeyOf41 =
'01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' |
'11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' |
'21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' |
'31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41';
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
	}
	OnMedium: {
		Primary: LightnessLevelSubset;
		Tertiary: LightnessLevelSubset;
		Quarternary: LightnessLevelSubset;
	}
	OnLight: {
		Primary: LightnessLevelSubset;
		Secondary: LightnessLevelSubset;
		Quarternary: LightnessLevelSubset;
	}
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
