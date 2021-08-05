import { HSLAColor } from "./color";

export interface Shadow {
	'offset-x': number;
	'offset-y': number;
	'blur-radius': number;
	color: HSLAColor;
};
