import PropTypes from 'prop-types';
import { Text } from '../../primitive/Text/Text';


const propsSpecifications = {
	'h1': {
		'tag': 'h1',
		'size': '2xl',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h2': {
		'tag': 'h2',
		'size': '1xl',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h3': {
		'tag': 'h3',
		'size': 'l',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h4': {
		'tag': 'h4',
		'size': 'm',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h5': {
		'tag': 'h5',
		'size': 's',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'body--standard': {
		'tag': 'p',
		'size': 's',
		'weight': 'regular',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': '07',
		},
	},
	'body--enlarged': {
		'tag': 'p',
		'size': 'm',
		'weight': 'regular',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': '07',
		},
	},
	'small': {
		'tag': 'small',
		'size': '2xs',
		'weight': 'regular',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'button-label--horizontal': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': '07',
		},
	},
	'button-label--vertical': {
		'tag': 'span',
		'size': '3xs',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': '07',
		},
	},
};

/**
 * Wherever copy (text) appears on a screen, it should use this component.
 */
export const Copy = ({
	kind = 'body--standard',
	children,
	propOverrides,
}) => {
	const tagThisCopy = propsSpecifications[kind].tag;
	const propsThisCopy = propsSpecifications[kind];
	delete propsThisCopy.tag;
	/* if (propOverrides) {
		propOverrides.forEach(element => {
			propsThisCopy[element.key] = element.value;
		});
	} */
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
	 * Token indicating kind of copy.
	 */
	'kind': PropTypes.oneOf(Object.keys(propsSpecifications)).isRequired,
	/**
	 * The text characters.
	 */
	'children': PropTypes.string.isRequired,
	// /**
	//  * Override 1+ props, e.g., color, weight, slant, etc.
	//  *
	//  * Go to [Color](/?path=/story/props-color--page) to learn more about
	//  * color props.
	//  *
	//  * @todo Update links in this description.
	//  */
	// 'propOverrides': PropTypes.arrayOf({
	// 	'key': PropTypes.string.isRequired,
	// 	'value': PropTypes.any.isRequired,
	// }),
};
