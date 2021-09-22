/* module.exports = {
	'Accent': {
		'Iris': 'hsla(270, 100%, 70%, 1)',
		'Flamingo': 'hsla(325, 100%, 60%, 1)',
		'Tiger': 'hsla(30, 100%, 50%, 1)',
		'Sunshine': 'hsla(50, 100%, 50%, 1)',
		'Kiwi': 'hsla(75, 100%, 50%, 1)',
		'Spruce': 'hsla(190, 100%, 60%, 1)',
		'Finch': 'hsla(225, 100%, 70%, 1)',
	},
	'Neutral': {
		// eslint-disable-next-line quote-props
		1: 'hsla(225, 25%, 98%, 1)',
		// eslint-disable-next-line quote-props
		2: 'hsla(225, 25%, 81%, 1)',
		// eslint-disable-next-line quote-props
		3: 'hsla(225, 25%, 60%, 1)',
		// eslint-disable-next-line quote-props
		4: 'hsla(225, 25%, 26%, 1)',
		// eslint-disable-next-line quote-props
		5: 'hsla(225, 25%, 2%, 1)',
	},
}; */

/**
 * @description Centrally define accent colors for use elsewhere in this module.
 * @returns {Object} Object containing `Accent` and `Neutral` properties, each
 * containing named CSS statements of HSLA-format color definitions.
 */
module.exports.Accent = {
	'Iris': 'hsla(270, 100%, 70%, 1)',
	'Flamingo': 'hsla(325, 100%, 60%, 1)',
	'Tiger': 'hsla(30, 100%, 50%, 1)',
	'Sunshine': 'hsla(50, 100%, 50%, 1)',
	'Kiwi': 'hsla(75, 100%, 50%, 1)',
	'Spruce': 'hsla(190, 100%, 60%, 1)',
	'Finch': 'hsla(225, 100%, 70%, 1)',
};
module.exports.Neutral = {
	// eslint-disable-next-line quote-props
	1: 'hsla(225, 25%, 98%, 1)',
	// eslint-disable-next-line quote-props
	2: 'hsla(225, 25%, 81%, 1)',
	// eslint-disable-next-line quote-props
	3: 'hsla(225, 25%, 60%, 1)',
	// eslint-disable-next-line quote-props
	4: 'hsla(225, 25%, 26%, 1)',
	// eslint-disable-next-line quote-props
	5: 'hsla(225, 25%, 2%, 1)',
};
