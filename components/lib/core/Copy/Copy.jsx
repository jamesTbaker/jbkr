import PropTypes from 'prop-types';
import { Text } from '../../primitive/Text/Text';


const propsSpecifications = {
	'h1': {
		'tag': 'h1',
		'size': '2xl',
		'weight': 'bold',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'h2': {
		'tag': 'h2',
		'size': '1xl',
		'weight': 'bold',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'h3': {
		'tag': 'h3',
		'size': 'l',
		'weight': 'bold',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'h4': {
		'tag': 'h4',
		'size': 'm',
		'weight': 'bold',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'h5': {
		'tag': 'h5',
		'size': 's',
		'weight': 'bold',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'body--standard': {
		'tag': 'p',
		'size': 's',
		'weight': 'regular',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'body-container--standard': {
		'tag': 'div',
		'size': 's',
		'weight': 'regular',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'body--enlarged': {
		'tag': 'p',
		'size': 'm',
		'weight': 'regular',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'body-container--enlarged': {
		'tag': 'div',
		'size': 'm',
		'weight': 'regular',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'small': {
		'tag': 'small',
		'size': '2xs',
		'weight': 'regular',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'button-label--horizontal': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'button-label--vertical': {
		'tag': 'span',
		'size': '3xs',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
};

/**
 * Wherever copy (text) appears on a screen, it should use this component.
 */
export const Copy = ({
	kind = 'body--standard',
	htmlContent,
	children,
	id,
}) => {
	const tagThisCopy = propsSpecifications[kind].tag;
	const propsThisCopy = propsSpecifications[kind];
	if (htmlContent) {
		propsThisCopy.htmlContent = htmlContent;
	}
	if (id) {
		propsThisCopy.id = id;
	}
	return (
		<Text
			tag={tagThisCopy}
			{...propsThisCopy}
		>
			{children}
		</Text>
	);
};
Copy.propTypes = {
	/**
	 * DOM Element ID.
	 */
	'id': PropTypes.string,
	/**
	 * Token indicating kind of copy.
	 */
	'kind': PropTypes.oneOf(Object.keys(propsSpecifications)).isRequired,
	/**
	 * The text characters marked up with HTML tags. If `htmlContent` is
	 * supplied, then `children` will be ignored.
	 */
	'htmlContent': PropTypes.string,
	/**
	 * The text characters. If `htmlContent` is
	 * supplied, then `children` will be ignored.
	 */
	'children': PropTypes.string,
};