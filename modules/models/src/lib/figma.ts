export interface FigmaDocument {
	// file
	document: {
		name: string;
		// pages
		children: FigmaPage[]
	}
}
export interface FigmaPage {
	name: string;
	// DocBoard (frame)
	children: [
		{
			name: string;
			children: [
				// StyleObjects (frame)
				{
					name: string;
					// array of style objects (vectors)
					children: FigmaStyleObject[]
				},
			]
		},
	]
}
export interface FigmaStyleObject {
	name: string;
	effects: [
		{
			type: string;
			color: FigmaColor;
			offset: {
				x: number;
				y: number;
			}
			radius: number;
		},
	]
	fills: [
		{
			color: FigmaColor;
		},
	]
}
export interface FigmaColor {
	a: number;
	b: number;
	g: number;
	r: number;
}
