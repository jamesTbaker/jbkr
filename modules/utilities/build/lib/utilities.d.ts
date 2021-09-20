import { Color } from '@jbkr/models';
export declare const returnHSLAStringFromHSLAObject: ({ hslaObject }: {
    hslaObject: Color;
}) => string;
export declare const returnNumberRoundedUpToMultiple: ({ number, multiple }: {
    number: number;
    multiple: number;
}) => number;
export declare const returnHSLValuesFromRBGPercents: ({ r, g, b }: {
    r: number;
    g: number;
    b: number;
}) => {
    h: number;
    s: number;
    l: number;
};
export declare const returnCopyOfObjectWithStringKeys: ({ incoming }: {
    incoming: {
        [key: string]: unknown;
    };
}) => {
    [key: string]: unknown;
};
export declare const returnValueIsJSONParsableString: ({ incomingValue }: {
    incomingValue: string;
}) => boolean;
