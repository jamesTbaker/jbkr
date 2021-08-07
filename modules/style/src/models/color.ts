export interface HSLAColor {
	h: number;
	s: number;
	l: number;
	a: number;
}
export interface RangeOfColorLevels {
	[level: string]: HSLAColor;
}
export type NeutralHuesKeys = 'Finch' |  'Sky' |  'Spruce' |  'Seafoam';

export type AccentOnDarkPrimaryHuesKeys =
	'Peacock' |  'Seafoam' |  'Finch';
export type AccentOnDarkSecondaryHuesKeys =
	'Iris';
export type AccentOnDarkTertiaryHuesKeys =
	'Tiger' |  'Sunshine';
export type AccentOnDarkQuarternaryHuesKeys =
	'Flamingo' |  'Spruce';


export type AccentOnMediumPrimaryHuesKeys =
	'Peacock' |  'Seafoam';
export type AccentOnMediumTertiaryHuesKeys =
	'Sunshine';
export type AccentOnMediumQuarternaryHuesKeys =
	'Spruce';


export type AccentOnLightPrimaryHuesKeys =
	'Finch';
export type AccentOnLightSecondaryHuesKeys =
	'Iris';
export type AccentOnLightQuarternaryHuesKeys =
	'Flamingo';

export type StateToneKeys = 'Positive' |  'Warning' |  'Negative' |  'Neutral';

export type LightSurfaceKeys = 'OnLight' |  'OnDark';

export type LevelKeys1 = '01';
export type LevelKeys3 = '01' |  '02' |  '03';
export type LevelKeys5 = '01' |  '02' |  '03' |  '04' |  '05';
export type LevelKeys9 = '01' |  '02' |  '03' |  '04' |  '05' |  '06' |  '07' |  '08' |  '09';
export type LevelKeys17 = '01' |  '02' |  '03' |  '04' |  '05' |  '06' |  '07' |  '08' |  '09' |  '10' | '11' |  '12' |  '13' |  '14' |  '15' |  '16' |  '17';
export type LevelKeys41 =
'01' |  '02' |  '03' |  '04' |  '05' |  '06' |  '07' |  '08' |  '09' | '10'  |
'11' |  '12' |  '13' |  '14' |  '15' |  '16' |  '17' |  '18' |  '19' | '20' |
'21' |  '22' |  '23' |  '24' |  '25' |  '26' |  '27' |  '28' |  '29' | '30' |
'31' |  '32' |  '33' |  '34' |  '35' |  '36' |  '37' |  '38' |  '39' | '40' | '41';

export interface NeutralColors {
	Finch: RangeOfColorLevels;
	Sky: RangeOfColorLevels;
	Spruce: RangeOfColorLevels;
	Seafoam: RangeOfColorLevels;
}
export interface BrandColors {
	Finch: RangeOfColorLevels;
	Spruce: RangeOfColorLevels;
	Peony: RangeOfColorLevels;
}
export interface AccentColors {
	OnDark: {
		Primary: {
			[hue: string]: HSLAColor;
		}
		Secondary: {
			[hue: string]: HSLAColor;
		}
		Tertiary: {
			[hue: string]: HSLAColor;
		}
		Quarternary: {
			[hue: string]: HSLAColor;
		}
	}
	OnMedium: {
		Primary: {
			[hue: string]: HSLAColor;
		}
		Tertiary: {
			[hue: string]: HSLAColor;
		}
		Quarternary: {
			[hue: string]: HSLAColor;
		}
	}
	OnLight: {
		Primary: {
			[hue: string]: HSLAColor;
		}
		Secondary: {
			[hue: string]: HSLAColor;
		}
		Quarternary: {
			[hue: string]: HSLAColor;
		}
	}
}
export interface StateColors {
	Positive: RangeOfColorLevels;
	Warning: RangeOfColorLevels;
	Negative: RangeOfColorLevels;
	Neutral: RangeOfColorLevels;
}
export interface LightColors {
	OnLight: RangeOfColorLevels;
	OnDark: RangeOfColorLevels;
}
export interface JBKRColorSet {
	Neutral: NeutralColors;
	Brand: BrandColors;
	Accent: AccentColors;
	State: StateColors;
}
export interface LightColorSet {
	Light: LightColors;
}
/* export interface ColorTokenObject {
	Neutral: NeutralColors;
	Brand: BrandColors;
	Accent: AccentColors;
	State: StateColors;
	Light: LightColors;
} */
export interface ColorTokenObject {
	[key: string]: any;
}
