import { HSLAColor } from "./color";
export interface Shadow {
    'offset-x': number;
    'offset-y': number;
    'blur-radius': number;
    color: HSLAColor;
}
export declare type ShadowSet = Shadow[];
export interface ShadowTokenObject {
    [key: string]: ShadowSet;
}
