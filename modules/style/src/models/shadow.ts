import { HSLAColor } from "./color";

export type ShadowLevel = '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15' | '16'
export interface Shadow {
	'offset-x': number;
	'offset-y': number;
	'blur-radius': number;
	color: HSLAColor;
};
export type ShadowSet = Shadow[];
export interface ShadowTokenObject {
	[key: string]: ShadowSet;
};
