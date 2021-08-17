/**
 * The fundamental elements.
 */
export type DeviceWidthToken = 's' | 'm' | 'l';
export interface DeviceWidthSpec {
	minimum: number;
	maximum?: number;
}
export type QueryString = string;

/**
 * Subsets.
 */
export type DeviceWidthTokens = DeviceWidthToken[];
export interface DeviceWidthsSpecsObject {
	s: DeviceWidthSpec;
	m: DeviceWidthSpec;
	l: DeviceWidthSpec;
}
export interface DeviceWidthsQueries {
	's-only': QueryString;
	'm-only': QueryString;
	'l-only': QueryString;
	'not-large': QueryString;
	'not-small': QueryString;
}
/**
 * @todo Change `DeviceWidths` property `tokens` from `string[]` to
 * `DeviceWidthTokens`. Currently, causes error tsc2322 in api.ts. The values
 * fit `DeviceWidthTokens`, but tsc doesn't know that and type casting nested
 * properties in an programatically-generated object probably isn't valuable.
 */
export interface DeviceWidths {
	tokens: string[];
	specs: DeviceWidthsSpecsObject;
	queries: DeviceWidthsQueries;
}
export interface Device {
	widths: DeviceWidths;
}
