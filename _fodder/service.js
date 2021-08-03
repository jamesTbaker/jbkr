/**
 * @name Styles Config
 * @description Specify settings for generating styles.
 */

const StyleDefinitions = require('./definition');
const Color = require('./storage/color.json');
const Shadow = require('./storage/shadow.json');
const Type = require('./storage/type.json');

module.exports = {

	gridBase: () => StyleDefinitions.gridBase,
	device: () => StyleDefinitions.device,
	type: {
		family: () => StyleDefinitions.type.family,
		style: ({
			deviceWidth,
			size,
			weight, // optional
			slant, // optional
			usage, // optional
		}) => {
			const paramsClone = {
				deviceWidth,
				size,
				weight: weight || 'regular',
				slant: slant || 'normal',
				usage: usage || 'body',
			};
			const typeObject = Type[paramsClone.deviceWidth][
				paramsClone.size][paramsClone.weight][paramsClone.slant][
				paramsClone.usage];
			return `
				font-size: ${typeObject.size}rem;
				font-weight: ${typeObject.weight};
				font-style: ${typeObject.normal};
				line-height: ${typeObject.height}rem;
				letter-spacing: ${typeObject.spacing}rem;
			`;
		},
	},
	positions: {
		verticalAlignMiddle: () => StyleDefinitions
			.positions.verticalAlignMiddle,
		zIndexNumber: () => StyleDefinitions
			.positions.zIndexes,
		shadow: ({ level }) => {
			const levelClone = level || '06';
			const shadowObject = Shadow[levelClone];
			return `box-shadow:
				${shadowObject[0]['offset-x']}rem ${shadowObject[0]['offset-y']}rem ${shadowObject[0]['blur-radius']}rem hsla(${shadowObject[0].color.h}, ${shadowObject[0].color.s}%, ${shadowObject[0].color.l}%, ${shadowObject[0].color.a}),
				${shadowObject[1]['offset-x']}rem ${shadowObject[1]['offset-y']}rem ${shadowObject[1]['blur-radius']}rem hsla(${shadowObject[1].color.h}, ${shadowObject[1].color.s}%, ${shadowObject[1].color.l}%, ${shadowObject[1].color.a});`;
		},
	},
	visibility: {
		hiddenBlock: () => StyleDefinitions.visibility.blockHidden,
		overrideHidingBlock: () => StyleDefinitions
			.visibility.overrideBlockHidden,
		hiddenInline: () => StyleDefinitions
			.visibility.inlineHidden,
		hiddenTableColumn: () => StyleDefinitions
			.visibility.tableColumnHidden,
	},
	shape: {
		standardCorners: () => StyleDefinitions.shape.standardCorners,
		straightCorners: () => StyleDefinitions.shape.straightCorners,
		circular: () => StyleDefinitions.shape.circular,
	},
	motion: {
		standardTime: StyleDefinitions.motion.standardTime,
	},
	color: {
		neutral: ({ category, level }) => (
			Color && Color.Neutral && Color.Neutral[category]
				&& Color.Neutral[category][level] ?
				module.exports.color.returnHSLAFromObject({
					colorObject: Color.Neutral[category][level],
				}) :
				''
		),
		brand: ({ category, level }) => {
			let colorObject;
			if (Color && Color.Brand && Color.Brand[category] && Color.Brand[category][level]) {
				colorObject = Color.Brand[category][level];
			} else if (Color && Color.Brand && Color.Brand[category]) {
				colorObject = Color.Brand[category];
			}
			return colorObject ?
				module.exports.color.returnHSLAFromObject({ colorObject }) :
				'';
		},
		accent: ({ on, level, category }) => (
			Color && Color.Neutral && Color.Neutral[on]
				&& Color.Neutral[on][level]
				&& Color.Neutral[on][level][category] ?
				module.exports.color.returnHSLAFromObject({
					colorObject: Color.Neutral[on][level][category],
				}) :
				''
		),
		state: ({ category, level }) => (
			Color && Color.State && Color.State[category]
				&& Color.State[category][level] ?
				module.exports.color.returnHSLAFromObject({
					colorObject: Color.State[category][level],
				}) :
				''
		),
		returnHSLAFromObject: ({ colorObject }) =>
			`hsla(${colorObject.h}, ${colorObject.s}%, ${colorObject.l}%, ${colorObject.a})`,
	},
};
