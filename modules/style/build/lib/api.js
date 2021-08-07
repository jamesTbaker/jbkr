// lib predecessors
import { styleDefinition } from './definition.js';
// storage
import { color } from '../store/color.js';
import { type } from '../store/type.js';
import { shadow } from '../store/shadow.js';
export { buildTokenSet, buildAllTokenSets } from './calculation.js';
const returnHSLAStringFromHSLAObject = ({ hslaObject }) => `hsla(${hslaObject.h}, ${hslaObject.s}%, ${hslaObject.l}%, ${hslaObject.a})`;
export const style = {
    gridBase: () => styleDefinition.gridBase,
    device: () => styleDefinition.device,
    type: {
        family: () => styleDefinition.type.family,
        style: ({ deviceWidth, size, weight, slant, usage, }) => {
            const paramsClone = {
                deviceWidth,
                size,
                weight: weight || 'regular',
                slant: slant || 'normal',
                usage: usage || 'body',
            };
            const typeObject = type[paramsClone.deviceWidth][paramsClone.size][paramsClone.weight][paramsClone.slant][paramsClone.usage];
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
        shadow: ({ level = '06' }) => {
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
        neutral: ({ hue, level }) => {
            let hslaObject;
            if (hue in color.Neutral) {
                if (level in color.Neutral[hue]) {
                    hslaObject = color.Neutral[hue][level];
                }
            }
            // const hslaString = returnHSLAStringFromHSLAObject({ hslaObject });
            // return hslaString;
            // color && color.Neutral && color.Neutral[hue]
            // 	&& color.Neutral[hue][level] ?
            // returnHSLAStringFromHSLAObject({
            // 	colorObject: color.Neutral[hue][level],
            // })
            //  :
            // ''
            return {
                h: 1,
                s: 1,
                l: 1,
                a: 1,
            };
        },
    },
};
//# sourceMappingURL=api.js.map