import { returnHSLAStringFromHSLAObject } from '@jbkr/utilities';
import { foundation } from '../store/foundation.js';
import { color } from '../store/color.js';
import { type } from '../store/type.js';
import { shadow } from '../store/shadow.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const style = {
    'gridBase': () => foundation.gridBase,
    'device': () => foundation.device,
    'deviceWidthQuery': {
        'only': ({ width }) => {
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
        'not': ({ width }) => {
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
    'color': ({ kind, tone, level, alpha, format, }) => {
        let colorObject = {
            'h': 0,
            's': 0,
            'l': 0,
            'a': 1,
        };
        if (color[kind] &&
            color[kind][tone] &&
            color[kind][tone][level]) {
            colorObject = color[kind][tone][level];
        }
        /**
         * @todo sometimes, alpha is undefined and colorObject.a gets set to 0
         */
        if (typeof (alpha) === 'number') {
            colorObject.a = alpha;
        }
        if (format === 'string') {
            return returnHSLAStringFromHSLAObject({ 'hslaObject': colorObject });
        }
        else {
            return colorObject;
        }
    },
    'colors': () => color,
    'type': {
        'fontFilesImport': () => foundation.type.fontFilesImport,
        'fontPrimaryName': () => foundation.type.fontPrimaryName,
        'fontFallbacksNames': () => foundation.type.fontFallbacksNames,
        /**
         * @todo create and use type foundation interface
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // 'foundation': (): { [key: string]: any} => foundation.type,
        'style': ({ deviceWidth, size, weight, slant, usage, spaced, }) => {
            const paramsClone = {
                deviceWidth,
                size,
                'weight': weight || 'regular',
                'slant': slant || 'normal',
                'usage': usage || 'body',
            };
            const typeObject = type[paramsClone.deviceWidth][paramsClone.size][paramsClone.weight][paramsClone.slant][paramsClone.usage];
            let typeString = `
				font-size: ${typeObject.size}rem;
				font-weight: ${typeObject.weight};
				font-style: ${typeObject.style};
				line-height: ${typeObject.height}rem;
				letter-spacing: ${typeObject.spacing}rem;
			`;
            if (spaced) {
                typeString += `margin: 0 0 ${typeObject.height}rem 0;`;
            }
            return typeString;
        },
    },
    'icon': {
        'size': ({ deviceWidth, size, }) => type[deviceWidth][size].regular.normal.display.size,
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