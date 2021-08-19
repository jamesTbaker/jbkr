/* LightnessLevelKeyOf1, LightnessLevelKeyOf3,
	LightnessLevelKeyOf5, LightnessLevelKeyOf9,
	LightnessLevelKeyOf41, StateToneKey, LightSurfaceKey,
	AccentOnDarkPrimaryHuesKey, AccentOnDarkSecondaryHuesKey,
	AccentOnDarkTertiaryHuesKey, AccentOnDarkQuarternaryHuesKey,
	AccentOnMediumPrimaryHuesKey, AccentOnMediumTertiaryHuesKey,
	AccentOnMediumQuarternaryHuesKey, AccentOnLightPrimaryHuesKey,
	AccentOnLightSecondaryHuesKey, AccentOnLightQuarternaryHuesKey, */
import {
	Color, AllColors,
	TypeSizeKey, TypeWeightKey, TypeLineHeightKey, TypeSlantKey,
	DeviceWidthToken, Device, ShadowLevelKeyOf17,
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
	/* 'color': {
		'neutral': {
			'finch': (
				{ level }:
				{ level: LightnessLevelKeyOf41 },
			):string => (
				color
				&& 'Neutral' in color
				&& 'Finch' in color.Neutral
				&& level in color.Neutral.Finch
					? returnHSLAStringFromHSLAObject(
						{ 'hslaObject': color.Neutral.Finch[level] },
					) : ''
			),
			'sky': (
				{ level }:
				{ level: LightnessLevelKeyOf9 },
			):string => (
				color
				&& 'Neutral' in color
				&& 'Sky' in color.Neutral
				&& level in color.Neutral.Sky
					? returnHSLAStringFromHSLAObject(
						{ 'hslaObject': color.Neutral.Sky[level] },
					) : ''
			),
			'spruce': (
				{ level }:
				{ level: LightnessLevelKeyOf9 },
			):string => (
				color
				&& 'Neutral' in color
				&& 'Spruce' in color.Neutral
				&& level in color.Neutral.Spruce
					? returnHSLAStringFromHSLAObject(
						{ 'hslaObject': color.Neutral.Spruce[level] },
					) : ''
			),
			'seafoam': (
				{ level }:
				{ level: LightnessLevelKeyOf9 },
			):string => (
				color
				&& 'Neutral' in color
				&& 'Seafoam' in color.Neutral
				&& level in color.Neutral.Seafoam
					? returnHSLAStringFromHSLAObject(
						{ 'hslaObject': color.Neutral.Seafoam[level] },
					) : ''
			),
		},
		'brand': {
			'finch': (
				{ level }:
				{ level: LightnessLevelKeyOf3 },
			):string => (
				color
				&& 'Brand' in color
				&& 'Finch' in color.Brand
				&& level in color.Brand.Finch
					? returnHSLAStringFromHSLAObject(
						{ 'hslaObject': color.Brand.Finch[level] },
					) : ''
			),
			'spruce': (
				{ level }:
				{ level: LightnessLevelKeyOf1 },
			):string => (
				color
				&& 'Brand' in color
				&& 'Spruce' in color.Brand
				&& level in color.Brand.Spruce
					? returnHSLAStringFromHSLAObject(
						{ 'hslaObject': color.Brand.Spruce[level] },
					) : ''
			),
			'peony': (
				{ level }:
				{ level: LightnessLevelKeyOf3 },
			):string => (
				color
				&& 'Brand' in color
				&& 'Peony' in color.Brand
				&& level in color.Brand.Peony
					? returnHSLAStringFromHSLAObject(
						{ 'hslaObject': color.Brand.Peony[level] },
					) : ''
			),
		},
		'accent': {
			'onDark': {
				'primary': (
					{ hue }:
					{ hue: AccentOnDarkPrimaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnDark' in color.Accent
					&& 'Primary' in color.Accent.OnDark
					&& hue in color.Accent.OnDark.Primary
						? returnHSLAStringFromHSLAObject(
							{ 'hslaObject': color.Accent.OnDark.Primary[hue] },
						) : ''
				),
				'secondary': (
					{ hue }:
					{ hue: AccentOnDarkSecondaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnDark' in color.Accent
					&& 'Secondary' in color.Accent.OnDark
					&& hue in color.Accent.OnDark.Secondary
						? returnHSLAStringFromHSLAObject(
							{
								'hslaObject':
									color.Accent.OnDark.Secondary[hue],
							},
						) : ''
				),
				'tertiary': (
					{ hue }:
					{ hue: AccentOnDarkTertiaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnDark' in color.Accent
					&& 'Tertiary' in color.Accent.OnDark
					&& hue in color.Accent.OnDark.Tertiary
						? returnHSLAStringFromHSLAObject(
							{ 'hslaObject': color.Accent.OnDark.Tertiary[hue] },
						) : ''
				),
				'quarternary': (
					{ hue }:
					{ hue: AccentOnDarkQuarternaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnDark' in color.Accent
					&& 'Quarternary' in color.Accent.OnDark
					&& hue in color.Accent.OnDark.Quarternary
						? returnHSLAStringFromHSLAObject(
							{
								'hslaObject':
									color.Accent.OnDark.Quarternary[hue],
							},
						) : ''
				),
			},
			'onMedium': {
				'primary': (
					{ hue }:
					{ hue: AccentOnMediumPrimaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnMedium' in color.Accent
					&& 'Primary' in color.Accent.OnMedium
					&& hue in color.Accent.OnMedium.Primary
						? returnHSLAStringFromHSLAObject(
							{
								'hslaObject':
									color.Accent.OnMedium.Primary[hue],
							},
						) : ''
				),
				'tertiary': (
					{ hue }:
					{ hue: AccentOnMediumTertiaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnMedium' in color.Accent
					&& 'Tertiary' in color.Accent.OnMedium
					&& hue in color.Accent.OnMedium.Tertiary
						? returnHSLAStringFromHSLAObject(
							{
								'hslaObject':
									color.Accent.OnMedium.Tertiary[hue],
							},
						) : ''
				),
				'quarternary': (
					{ hue }:
					{ hue: AccentOnMediumQuarternaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnMedium' in color.Accent
					&& 'Quarternary' in color.Accent.OnMedium
					&& hue in color.Accent.OnMedium.Quarternary
						? returnHSLAStringFromHSLAObject(
							{
								'hslaObject':
									color.Accent.OnMedium.Quarternary[hue],
							},
						) : ''
				),
			},
			'onLight': {
				'primary': (
					{ hue }:
					{ hue: AccentOnLightPrimaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnLight' in color.Accent
					&& 'Primary' in color.Accent.OnLight
					&& hue in color.Accent.OnLight.Primary
						? returnHSLAStringFromHSLAObject(
							{ 'hslaObject': color.Accent.OnLight.Primary[hue] },
						) : ''
				),
				'secondary': (
					{ hue }:
					{ hue: AccentOnLightSecondaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnLight' in color.Accent
					&& 'Secondary' in color.Accent.OnLight
					&& hue in color.Accent.OnLight.Secondary
						? returnHSLAStringFromHSLAObject(
							{
								'hslaObject':
									color.Accent.OnLight.Secondary[hue],
							},
						) : ''
				),
				'quarternary': (
					{ hue }:
					{ hue: AccentOnLightQuarternaryHuesKey },
				):string => (
					color
					&& 'Accent' in color
					&& 'OnLight' in color.Accent
					&& 'Quarternary' in color.Accent.OnLight
					&& hue in color.Accent.OnLight.Quarternary
						? returnHSLAStringFromHSLAObject(
							{
								'hslaObject':
									color.Accent.OnLight.Quarternary[hue],
							},
						) : ''
				),
			},
		},
		'state': (
			{ tone, level }:
				{ tone: StateToneKey, level: LightnessLevelKeyOf5 },
		):string => (
			color
				&& 'State' in color
				&& tone in color.State
				&& level in color.State[tone]
				? returnHSLAStringFromHSLAObject(
					{ 'hslaObject': color.State[tone][level] },
				) : ''
		),
		'light': (
			{ surface, level }:
			{ surface: LightSurfaceKey, level: LightnessLevelKeyOf5 },
		):string => (
			color
				&& 'Light' in color
				&& surface in color.Light
				&& level in color.Light[surface]
				? returnHSLAStringFromHSLAObject(
					{ 'hslaObject': color.Light[surface][level] },
				) : ''
		),
	}, */
	'color': {
		'props': (): AllColors => color,
		'override': (
			{
				color, hue, saturation, lightness, alpha,
			}:{
				color: Color,
				hue?: number,
				saturation?: number,
				lightness?: number,
				alpha?: number,

			},
		): Color => {
			const colorClone = { ...color };
			if (hue) {
				colorClone.h = hue;
			}
			if (saturation) {
				colorClone.s = saturation;
			}
			if (lightness) {
				colorClone.l = lightness;
			}
			if (alpha) {
				colorClone.a = alpha;
			}
			return colorClone as Color;
		},
		'string':
			({ color }:{ color: Color }): string =>
				returnHSLAStringFromHSLAObject(
					{ 'hslaObject': color },
				),
	},
	'type': {
		'family': (): string => foundation.type.family,
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
			console.log(' >>> API ');
			console.log(deviceWidth);
			console.log(size);
			console.log(weight);
			console.log(slant);
			console.log(usage);
			console.log(' >>> API ');
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
