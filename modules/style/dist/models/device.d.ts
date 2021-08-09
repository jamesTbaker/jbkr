export declare type DeviceWidthToken = 's' | 'm' | 'l';
export interface DeviceWidthTokens {
    tokens: DeviceWidthToken[];
}
export interface DeviceWidthSpec {
    minimum: number | undefined;
    maximum: number | undefined;
}
export interface DeviceWidthsTokenObject {
    s: DeviceWidthSpec;
    m: DeviceWidthSpec;
    l: DeviceWidthSpec;
}
export interface DeviceTokenObject {
    widths: DeviceWidthsTokenObject;
}
