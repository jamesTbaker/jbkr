import { FigmaDocument, FigmaPage, FigmaStyleObject }
	from '../models/figma';
import {
	HSLAColor, LevelKeys1, LevelKeys3, LevelKeys9, LevelKeys41,
	AccentOnDarkPrimaryHuesKeys, AccentOnDarkSecondaryHuesKeys,
	AccentOnDarkTertiaryHuesKeys, AccentOnDarkQuarternaryHuesKeys
} from '../models/color';
import { DeviceWidthToken, DeviceWidthTokens, DeviceTokenObject }
	from '../models/device';
import { TypeSizeToken, TypeSizeValue, TypeWeightToken,
	TypeWeightValue, TypeLineHeightToken, TypeSlantToken,
	TypeStyleToken, TypeStylesTokenSet
} from '../models/type';
import { Shadow, ShadowLevel, ShadowSet, ShadowTokenObject } from '../models/shadow';
// lib predecessors
import { styleDefinition } from './definition.js';
// storage
import { color } from '../store/color.js';
import { type } from '../store/type.js';
import { shadow } from '../store/shadow.js';



export { buildTokenSet, buildAllTokenSets } from './calculation.js';

const returnHSLAStringFromHSLAObject = ({ hslaObject }:{hslaObject: HSLAColor}) =>
			`hsla(${hslaObject.h}, ${hslaObject.s}%, ${hslaObject.l}%, ${hslaObject.a})`;

/* const returnColorLevelFromRange = (
	{ level, range }:
	{ level: string, range: RangeOfColorLevels }
):HSLAColor => {

}; */

export const style: {[key:string]: any} = {
	gridBase: () => styleDefinition.gridBase as number,
	device: () => styleDefinition.device as DeviceTokenObject,
	color: {
		neutral: {
			finch: (
				{ level }:
				{ level: LevelKeys41 }
			):string => (
				color
				&& 'Neutral' in color
				&& 'Finch' in color.Neutral
				&& level in color.Neutral.Finch ?
				returnHSLAStringFromHSLAObject(
					{ hslaObject: color.Neutral.Finch[level] }
				) : ''
			),
			sky: (
				{ level }:
				{ level: LevelKeys9 }
			):string => (
				color
				&& 'Neutral' in color
				&& 'Sky' in color.Neutral
				&& level in color.Neutral.Sky ?
				returnHSLAStringFromHSLAObject(
					{ hslaObject: color.Neutral.Sky[level] }
				) : ''
			),
			spruce: (
				{ level }:
				{ level: LevelKeys9 }
			):string => (
				color
				&& 'Neutral' in color
				&& 'Spruce' in color.Neutral
				&& level in color.Neutral.Spruce ?
				returnHSLAStringFromHSLAObject(
					{ hslaObject: color.Neutral.Spruce[level] }
				) : ''
			),
			seafoam: (
				{ level }:
				{ level: LevelKeys9 }
			):string => (
				color
				&& 'Neutral' in color
				&& 'Seafoam' in color.Neutral
				&& level in color.Neutral.Seafoam ?
				returnHSLAStringFromHSLAObject(
					{ hslaObject: color.Neutral.Seafoam[level] }
				) : ''
			),
		},
		brand: {
			finch: (
				{ level }:
				{ level: LevelKeys3 }
			):string => (
				color
				&& 'Brand' in color
				&& 'Finch' in color.Brand
				&& level in color.Brand.Finch ?
				returnHSLAStringFromHSLAObject(
					{ hslaObject: color.Brand.Finch[level] }
				) : ''
			),
			spruce: (
				{ level }:
				{ level: LevelKeys1 }
			):string => (
				color
				&& 'Brand' in color
				&& 'Spruce' in color.Brand
				&& level in color.Brand.Spruce ?
				returnHSLAStringFromHSLAObject(
					{ hslaObject: color.Brand.Spruce[level] }
				) : ''
			),
			peony: (
				{ level }:
				{ level: LevelKeys3 }
			):string => (
				color
				&& 'Brand' in color
				&& 'Peony' in color.Brand
				&& level in color.Brand.Peony ?
				returnHSLAStringFromHSLAObject(
					{ hslaObject: color.Brand.Peony[level] }
				) : ''
			),
		},
		accent: {
			onDark: {
				primary: (
					{ hue }:
					{ hue: AccentOnDarkPrimaryHuesKeys }
				):string => (
					color
					&& 'Accent' in color
					&& 'OnDark' in color.Accent
					&& 'Primary' in color.Accent.OnDark
					&& hue in color.Accent.OnDark.Primary ?
					returnHSLAStringFromHSLAObject(
						{ hslaObject: color.Accent.OnDark.Primary[hue] }
					) : ''
				),
				secondary: (
					{ hue }:
					{ hue: AccentOnDarkSecondaryHuesKeys }
				):string => (
					color
					&& 'Accent' in color
					&& 'OnDark' in color.Accent
					&& 'Secondary' in color.Accent.OnDark
					&& hue in color.Accent.OnDark.Secondary ?
					returnHSLAStringFromHSLAObject(
						{ hslaObject: color.Accent.OnDark.Secondary[hue] }
					) : ''
				),
				tertiary: (
					{ hue }:
					{ hue: AccentOnDarkTertiaryHuesKeys }
				):string => (
					color
					&& 'Accent' in color
					&& 'OnDark' in color.Accent
					&& 'Tertiary' in color.Accent.OnDark
					&& hue in color.Accent.OnDark.Tertiary ?
					returnHSLAStringFromHSLAObject(
						{ hslaObject: color.Accent.OnDark.Tertiary[hue] }
					) : ''
				),
			}
		}
	},
	type: {
		family: () => styleDefinition.type.family as string,
		style: ({
			deviceWidth,
			size,
			weight,
			slant,
			usage,
		}:{
			deviceWidth: DeviceWidthToken,
			size: TypeSizeToken,
			weight?: TypeWeightToken,
			slant?: TypeSlantToken,
			usage?: TypeLineHeightToken,
		}) => {
			const paramsClone = {
				deviceWidth,
				size,
				weight: weight || 'regular',
				slant: slant || 'normal',
				usage: usage || 'body',
			};
			const typeObject = type[paramsClone.deviceWidth][
				paramsClone.size][paramsClone.weight][paramsClone.slant][
				paramsClone.usage];
			return `
				font-size: ${typeObject.size}rem;
				font-weight: ${typeObject.weight};
				font-style: ${typeObject.style};
				line-height: ${typeObject.height}rem;
				letter-spacing: ${typeObject.spacing}rem;
			`;
		}
	},
	position: {
		verticalAlignMiddle: () => styleDefinition
			.position.verticalAlignMiddle,
		zIndexNumber: () => styleDefinition
			.position.zIndexes,
		shadow: ({ level = '06' }: { level?: ShadowLevel }) => {
			const shadowObject = shadow[level];
			return `box-shadow:
				${shadowObject[0]['offset-x']}rem ${shadowObject[0]['offset-y']}rem ${shadowObject[0]['blur-radius']}rem hsla(${shadowObject[0].color.h}, ${shadowObject[0].color.s}%, ${shadowObject[0].color.l}%, ${shadowObject[0].color.a}),
				${shadowObject[1]['offset-x']}rem ${shadowObject[1]['offset-y']}rem ${shadowObject[1]['blur-radius']}rem hsla(${shadowObject[1].color.h}, ${shadowObject[1].color.s}%, ${shadowObject[1].color.l}%, ${shadowObject[1].color.a});`;
		},
	},
	visibility: {
		hiddenBlock: () => styleDefinition.visibility.blockHidden,
		overrideHidingBlock: () => styleDefinition
			.visibility.overrideBlockHidden,
		hiddenInline: () => styleDefinition
			.visibility.inlineHidden,
		hiddenTableColumn: () => styleDefinition
			.visibility.tableColumnHidden,
	},
	shape: {
		standardCorners: () => styleDefinition.shape.standardCorners,
		straightCorners: () => styleDefinition.shape.straightCorners,
		circular: () => styleDefinition.shape.circular,
	},
	motion: {
		standardTime: styleDefinition.motion.standardTime,
	},
};
