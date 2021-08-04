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
    OnDark: {
        Primary: {
            [hue: string]: HSLAColor;
        };
        Secondary: {
            [hue: string]: HSLAColor;
        };
        Tertiary: {
            [hue: string]: HSLAColor;
        };
        Quarternary: {
            [hue: string]: HSLAColor;
        };
    };
    OnMedium: {
        Primary: {
            [hue: string]: HSLAColor;
        };
        Tertiary: {
            [hue: string]: HSLAColor;
        };
        Quarternary: {
            [hue: string]: HSLAColor;
        };
    };
    OnLight: {
        Primary: {
            [hue: string]: HSLAColor;
        };
        Secondary: {
            [hue: string]: HSLAColor;
        };
        Quarternary: {
            [hue: string]: HSLAColor;
        };
    };
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
export interface ColorTokenObject {
    Neutral: NeutralColors;
    Brand: BrandColors;
    Accents: AccentColors;
    State: StateColors;
    Light: LightColors;
}
