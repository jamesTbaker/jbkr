import { Color } from './color.js';
/**
 * The fundamental element.
 */
export interface Shadow {
    'offset-x': number;
    'offset-y': number;
    'blur-radius': number;
    color: Color;
}
/**
 * Object keys.
 */
export declare type ShadowLevelKeyOf17 = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16';
/**
 * Subsets.
 */
export declare type ShadowSubset = Shadow[];
/**
 * The parent set.
 */
export interface AllShadows {
    [key: string]: ShadowSubset;
}
