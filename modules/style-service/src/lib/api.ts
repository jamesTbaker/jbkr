import {
	Color, KindKey, AllToneKey,
	TypeSizeKey, TypeWeightKey, TypeLineHeightKey, TypeSlantKey,
	DeviceWidthToken, Device, DeviceWidthQuery, ShadowLevelKeyOf17, AllColors,
} from '@jbkr/models';
import { foundation } from '../store/foundation.js';
import { color } from '../store/color.js';
import { type } from '../store/type.js';
import { shadow } from '../store/shadow.js';


const returnHSLAStringFromHSLAObject = (
	{ hslaObject }:
	{hslaObject: Color},
) => `hsla(${hslaObject.h}, ${hslaObject.s}%, \
	${hslaObject.l}%, ${hslaObject.a})`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const style: {[key:string]: any} = {
	'gridBase': (): number => foundation.gridBase,
	'device': (): Device => foundation.device,
	'deviceWidthQuery': {
		'only': ({ width }:{width: string}): DeviceWidthQuery => {
			if (width === 's') {
				return `@media (max-width: ${foundation.device
					.widths.specs.s.maximum}px)`;
			}
			if (width === 'm') {
				return `@media (min-width: ${foundation.device
					.widths.specs.m.minimum}px) and (max-width: ${foundation
					.device.widths.specs.m.maximum}px)`;
			}
			if (width === 'l') {
				return `@media (min-width: ${foundation.device
					.widths.specs.l.minimum}px)`;
			}
			throw new Error('deviceWidthQuery.only: width not found');
		},
		'not': ({ width }:{width: string}): DeviceWidthQuery => {
			if (width === 's') {
				return `@media (min-width: ${foundation.device
					.widths.specs.m.minimum}px)`;
			}
			if (width === 'l') {
				return `@media (max-width: ${foundation.device
					.widths.specs.m.maximum}px)`;
			}
			throw new Error('deviceWidthQuery.not: width not found');
		},
	},
	'color': (
		{
			kind, tone, level, alpha, format,
		}:{
			kind: KindKey,
			tone: AllToneKey,
			level: number,
			alpha?: number,
			format: string,
		},
	): Color | string => {
		let colorObject: Color = {
			'h': 0,
			's': 0,
			'l': 0,
			'a': 1,
		};
		if (
			color[kind] &&
			color[kind][tone] &&
			color[kind][tone][level]
		) {
			colorObject = color[kind][tone][level];
		}
		if (alpha) {
			colorObject.a = alpha;
		}
		if (format === 'string') {
			return returnHSLAStringFromHSLAObject(
				{ 'hslaObject': colorObject },
			);
		} else {
			return colorObject as Color;
		}
	},
	'colors': (): AllColors => color,
	'type': {
		'family': (): string => foundation.type.family,
		/**
		 * @todo create and use type foundation interface
		 */
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		// 'foundation': (): { [key: string]: any} => foundation.type,
		'style': ({
			deviceWidth,
			size,
			weight,
			slant,
			usage,
		}:{
			deviceWidth: DeviceWidthToken,
			size: TypeSizeKey,
			weight?: TypeWeightKey,
			slant?: TypeSlantKey,
			usage?: TypeLineHeightKey,
		}): string => {
			const paramsClone = {
				deviceWidth,
				size,
				'weight': weight || 'regular',
				'slant': slant || 'normal',
				'usage': usage || 'body',
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
		},
	},
	'position': {
		'verticalAlignMiddle': (): string => foundation
			.position.verticalAlignMiddle,
		'zIndexNumber': ():{ [key: string]: number } => foundation
			.position.zIndexes,
		'shadow': ({ level = '06' }: { level?: ShadowLevelKeyOf17 }) => {
			const shadowObject = shadow[level];
			return `box-shadow:
				${shadowObject[0]['offset-x']}rem \
				${shadowObject[0]['offset-y']}rem \
				${shadowObject[0]['blur-radius']}rem \
				hsla(\
					${shadowObject[0].color.h}, \
					${shadowObject[0].color.s}%, \
					${shadowObject[0].color.l}%, \
					${shadowObject[0].color.a}),\
				${shadowObject[1]['offset-x']}rem \
				${shadowObject[1]['offset-y']}rem \
				${shadowObject[1]['blur-radius']}rem \
				hsla(\
					${shadowObject[1].color.h}, \
					${shadowObject[1].color.s}%, \
					${shadowObject[1].color.l}%, \
					${shadowObject[1].color.a});`;
		},
	},
	'visibility': {
		'hiddenBlock': (): string => foundation.visibility.blockHidden,
		'overrideHidingBlock': (): string => foundation
			.visibility.overrideBlockHidden,
		'hiddenInline': (): string => foundation
			.visibility.inlineHidden,
		'hiddenTableColumn': (): string => foundation
			.visibility.tableColumnHidden,
	},
	'shape': {
		'standardCorners': (): string => foundation.shape.standardCorners,
		'straightCorners': (): string => foundation.shape.straightCorners,
		'circular': (): string => foundation.shape.circular,
	},
	'motion': {
		'standardTime': (): { 's': number, 'ms': number } =>
			foundation.motion.standardTime,
	},
};
