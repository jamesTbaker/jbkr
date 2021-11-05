import { string, bool, shape, arrayOf } from 'prop-types';

export const Meta = shape({
	'slug': string.isRequired,
	'metaTitle': string.isRequired,
	'metaDescription': string.isRequired,
	'socialDescription': string.isRequired,
	'openGraphType': string.isRequired,
	'metaImage': shape({
		'url': string.isRequired,
		'alternativeText': string.isRequired,
		'type': string.isRequired,
	}),
	'metaOther': arrayOf(shape({
		'key': string.isRequired,
		'property': string.isRequired,
		'content': string.isRequired,
	})),
});
export const Header = shape({
	'links': shape({
		'primary': arrayOf(
			shape({
				'key': string.isRequired,
				'anchorText': string.isRequired,
				'anchorIconBefore': string,
				'url': string.isRequired,
				'forThisScreen': bool,
			}),
		),
		'secondary': arrayOf(
			shape({
				'key': string.isRequired,
				'anchorText': string.isRequired,
				'anchorIconBefore': string,
				'url': string.isRequired,
			}),
		),
	}),
	'announcement': shape({
		'bodyAnchor': string.isRequired,
		'bodyURL': string.isRequired,
		'preface': string.isRequired,
	}),
});
export const Footer = shape({
	'content': string,
});
