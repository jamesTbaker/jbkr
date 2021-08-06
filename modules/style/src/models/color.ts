export interface HSLAColor {
	h: number;
	s: number;
	l: number;
	a: number;
}
export interface RangeOfColorLevels {
	[level: string]: HSLAColor;
}
export type NeutralColorsKeys = 'Finch' |  'Sky' |  'Spruce' |  'Seafoam';
export type NeutralColorsLevels = '01' |  '02' |  '03' |  '04';

export interface NeutralColors {
	Finch: {
		[level: string]: HSLAColor
	};
	Sky: {
		[level: string]: HSLAColor
	};
	Spruce: {
		[level: string]: HSLAColor
	};
	Seafoam: {
		[level: string]: HSLAColor
	};
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
export interface ColorTokenObject {
	Neutral: NeutralColors;
	Brand: BrandColors;
	Accent: AccentColors;
	State: StateColors;
	Light: LightColors;
}
