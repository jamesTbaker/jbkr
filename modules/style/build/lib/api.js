// lib predecessors
import { styleDefinition } from './definition.js';
import { type } from '../store/type.js';
export { buildTokenSet, buildAllTokenSets } from './calculation.js';
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
    /* position: {
        verticalAlignMiddle: () => styleDefinition
            .position.verticalAlignMiddle,
        zIndexNumber: () => styleDefinition
            .position.zIndexes,
        shadow: ({ level }: { level?: number }) => {
            const levelClone = level ? level.toString() : '06';
            const shadowObject = shadow[10]// shadow[levelClone];
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
    }, */
};
//# sourceMappingURL=api.js.map