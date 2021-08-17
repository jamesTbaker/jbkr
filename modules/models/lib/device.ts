/**
 * The fundamental elements.
 */
export type DeviceWidthToken = 's' | 'm' | 'l';
export interface DeviceWidthTokens {
	tokens: DeviceWidthToken[];
}
export interface DeviceWidthSpec {
	minimum: number | undefined;
	maximum: number | undefined;
}
export interface DeviceWidthsSpecsObject {
	s: DeviceWidthSpec;
	m: DeviceWidthSpec;
	l: DeviceWidthSpec;
}
export interface DeviceWidthsQueries {
	's-only': string;
	'm-only': string;
	'l-only': string;
	'not-large': string;
	'not-small': string;
}
export interface DeviceWidths {
	tokens: string;
	// DeviceWidthToken[];
	// specs: DeviceWidthsSpecsObject;
	// queries: DeviceWidthsQueries;
}
export interface Device {
	widths: string;
}
