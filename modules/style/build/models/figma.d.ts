export interface FigmaDocument {
    document: {
        name: string;
        children: FigmaPage[];
    };
}
export interface FigmaPage {
    name: string;
    children: [
        {
            name: string;
            children: [
                {
                    name: string;
                    children: FigmaStyleObject[];
                }
            ];
        }
    ];
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
            };
            radius: number;
        }
    ];
    fills: [
        {
            color: FigmaColor;
        }
    ];
}
export interface FigmaColor {
    a: number;
    b: number;
    g: number;
    r: number;
}
