export interface HSLAColor {
	h: number;
	s: number;
	l: number;
	a: number;
}
export interface RangeOfColorLevels {
	[level: string]: HSLAColor;
}
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
	[background: string]: {
		[rank: string]: {
			[hue: string]: HSLAColor;
		}
	}
}
export interface StateColors {
	[tone: string]: RangeOfColorLevels;
}
export interface LightColors {
	'On-Light': RangeOfColorLevels;
	'On-Dark': RangeOfColorLevels;
}
export interface ColorTokenObject {
	Neutral: NeutralColors;
	Brand: BrandColors;
	Accents: AccentColors;
	State: StateColors;
	Light: LightColors;
}
