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
        /**
         * @todo create and use type foundation interface
         */
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