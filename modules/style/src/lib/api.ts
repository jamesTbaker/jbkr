import { FigmaDocument, FigmaPage, FigmaStyleObject }
	from '../models/figma';
import {
	HSLAColor, RangeOfColorLevels, NeutralColors, BrandColors,
	AccentColors, StateColors, LightColors, JBKRColorSet, LightColorSet, ColorTokenObject, NeutralColorsKeys, NeutralColorsLevels
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


export const style: {[key:string]: any} = {
	gridBase: () => styleDefinition.gridBase as number,
	device: () => styleDefinition.device as DeviceTokenObject,
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
	color: {
		neutral: ({ hue, level }:{ hue: string, level: NeutralColorsLevels }) => {
			const colorObject = color.Neutral[hue][level];
			// color && color.Neutral && color.Neutral[hue]
			// 	&& color.Neutral[hue][level] ?
				returnHSLAStringFromHSLAObject({
					colorObject: color.Neutral[hue][level],
				})
				//  :
				// ''
			},
	}
};
