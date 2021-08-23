import { foundation } from '../store/foundation.js';
import { color } from '../store/color.js';
import { type } from '../store/type.js';
import { shadow } from '../store/shadow.js';
const returnHSLAStringFromHSLAObject = ({ hslaObject }) => `hsla(${hslaObject.h}, ${hslaObject.s}%, \
	${hslaObject.l}%, ${hslaObject.a})`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const style = {
    'gridBase': () => foundation.gridBase,
    'device': () => foundation.device,
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
        'props': () => color,
        'override': ({ color, hue, saturation, lightness, alpha, }) => {
            const colorClone = Object.assign({}, color);
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
            return colorClone;
        },
        'string': ({ color }) => returnHSLAStringFromHSLAObject({ 'hslaObject': color }),
    },
    'type': {
        'family': () => foundation.type.family,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        'foundation': () => foundation.type,
        'style': ({ deviceWidth, size, weight, slant, usage, }) => {
            const paramsClone = {
                deviceWidth,
                size,
                'weight': weight || 'regular',
                'slant': slant || 'normal',
                'usage': usage || 'body',
            };
            const typeObject = type[paramsClone.deviceWidth][paramsClone.size][paramsClone.weight][paramsClone.slant][paramsClone.usage];
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
        'verticalAlignMiddle': () => foundation
            .position.verticalAlignMiddle,
        'zIndexNumber': () => foundation
            .position.zIndexes,
        'shadow': ({ level = '06' }) => {
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
        'hiddenBlock': () => foundation.visibility.blockHidden,
        'overrideHidingBlock': () => foundation
            .visibility.overrideBlockHidden,
        'hiddenInline': () => foundation
            .visibility.inlineHidden,
        'hiddenTableColumn': () => foundation
            .visibility.tableColumnHidden,
    },
    'shape': {
        'standardCorners': () => foundation.shape.standardCorners,
        'straightCorners': () => foundation.shape.straightCorners,
        'circular': () => foundation.shape.circular,
    },
    'motion': {
        'standardTime': () => foundation.motion.standardTime,
    },
};
//# sourceMappingURL=api.js.map