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
export type KindKey = 'Neutral' | 'Brand' | 'Accent' | 'State' | 'Light';
export type NeutralToneKey = 'Base' | 'Finch' | 'Sky' | 'Spruce' | 'Seafoam';
export type BrandToneKey = 'Peony' | 'Finch' | 'Spruce';
export type AccentToneKey = 'Peacock' | 'Seafoam' | 'Finch' | 'Iris' |
	'Tiger' | 'Sunshine' | 'Flamingo' | 'Spruce';
export type StateToneKey = 'Positive' | 'Warning' | 'Negative' | 'Neutral';
export type LightToneKey = 'OnLight' | 'OnDark';
export type AllToneKey = NeutralToneKey & BrandToneKey & AccentToneKey &
	StateToneKey & LightToneKey
/* export type LightnessLevelKeyOf1 = '01';
export type LightnessLevelKeyOf3 = '01' | '02' | '03';
export type LightnessLevelKeyOf5 = '01' | '02' | '03' | '04' | '05';
export type LightnessLevelKeyOf9 = '01' | '02' | '03' | '04' | '05' | '06' |
	'07' | '08' | '09';
export type LightnessLevelKeyOf41 =
	'01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' |
	'11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' |
	'21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' |
	'31' | '32' | '33' | '34' | '35' | '36' | '37' | '38' | '39' | '40' | '41'; */
/**
 * Subsets.
 */
export interface LightnessLevelSubset {
	[level: number]: Color;
}
export interface NeutralSubset {
	Base: LightnessLevelSubset;
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
	Peacock: LightnessLevelSubset;
	Seafoam: LightnessLevelSubset;
	Finch: LightnessLevelSubset;
	Iris: LightnessLevelSubset;
	Tiger: LightnessLevelSubset;
	Sunshine: LightnessLevelSubset;
	Flamingo: LightnessLevelSubset;
	Spruce: LightnessLevelSubset;
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
