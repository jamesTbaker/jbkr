import PropTypes from 'prop-types';
import { Text } from '../../primitive/Text/Text';


const propsSpecifications = {
	/* 'body-container--standard': {
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
	'button-label--vertical': {
		'tag': 'span',
		'size': '3xs',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	}, */
	'h1': {
		'tag': 'h1',
		'size': '2xl',
		'weight': 'bold',
		'usage': 'display',
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
		'usage': 'display',
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
		'usage': 'display',
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
		'usage': 'display',
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
		'usage': 'display',
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
		'usage': 'body',
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
		'usage': 'body',
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
		'usage': 'body',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'button-label--horizontal--standard': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		// 'color': {
		// 	'kind': 'Brand',
		// 	'tone': 'Peony',
		// 	'level': 3,
		// },
	},
	'button-label--horizontal--small': {
		'tag': 'span',
		'size': '1xs',
		'weight': 'regular',
		'usage': 'display',
		// 'color': {
		// 	'kind': 'Brand',
		// 	'tone': 'Peony',
		// 	'level': 3,
		// },
	},



	'announcement--label': {
		'tag': 'span',
		'size': '2xs',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 11,
		},
	},
	'announcement--anchor': {
		'tag': 'span',
		'size': '2xs',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
		},
	},
	'screen-title--standard': {
		'tag': 'h1',
		'size': '5xl',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'screen-title--article': {
		'tag': 'h1',
		'size': '2xl',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'gradient': {
			'colors': [
				{
					'kind': 'Brand',
					'tone': 'Spruce',
					'level': 1,
				},
				{
					'kind': 'Accent',
					'tone': 'Iris',
					'level': 1,
				},
			],
			'fallbackColor': {
				'kind': 'Neutral',
				'tone': 'Base',
				'level': 1,
			},
		},
	},
	'profile--section-title--preface': {
		'tag': 'span',
		'size': 'm',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--section-title--main': {
		'tag': 'span',
		'size': '4xl',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'gradient': {
			'colors': [
				{
					'kind': 'Brand',
					'tone': 'Spruce',
					'level': 1,
				},
				{
					'kind': 'Accent',
					'tone': 'Iris',
					'level': 1,
				},
			],
			'fallbackColor': {
				'kind': 'Neutral',
				'tone': 'Base',
				'level': 1,
			},
		},
	},
	'profile--skill-name--featured': {
		'tag': 'span',
		'size': 'm',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--skill-name--standard': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--skill-statement': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'body',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--table-of-contents-item--anchor': {
		'tag': 'span',
		'size': 'm',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
		},
	},
	'liblab-item--title-anchor': {
		'tag': 'span',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
		},
	},
	'liblab-item--meta-item--label': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'liblab-item--meta-item--value': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 5,
		},
	},
	'article--tagline': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'body',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'article--meta-item--small-device--date--primary': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'article--meta-item--small-device--date--secondary': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 5,
		},
	},
	'article--meta-item--small-device--stats': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 10,
		},
	},
	'article--meta-item--large-device--label': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'article--meta-item--large-device--value': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 10,
		},
	},
	'article--brief-statement': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'article--image-credit--main': {
		'tag': 'small',
		'size': '2xs',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'article--image-credit--anchor': {
		'tag': 'span',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'article--table-of-contents-item--anchor': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
		},
	},
	'article--blockquote--large-device': {
		'tag': 'span',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'contact--brand-tagline': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'contact--section-header': {
		'tag': 'h2',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'contact--item-anchor': {
		'tag': 'span',
		'size': 'm',
		'weight': 'regular',
		'usage': 'display',
		'spaced': true,
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
	color,
}) => {
	if (propsSpecifications[kind]) {
		const tagThisCopy = propsSpecifications[kind].tag;
		const propsThisCopy = propsSpecifications[kind];
		if (htmlContent) {
			propsThisCopy.htmlContent = htmlContent;
		}
		if (id) {
			propsThisCopy.id = id;
		}
		if (color) {
			propsThisCopy.color = color;
		}
		return (
			<Text
				tag={tagThisCopy}
				{...propsThisCopy}
			>
				{children}
			</Text>
		);
	} else {
		console.log(kind);
		return (<></>);
	}
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
	'htmlContent': PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.array
	]),
	/**
	 * The text characters. If `htmlContent` is
	 * supplied, then `children` will be ignored.
	 */
	'children': PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.array
	]),
	/**
	 * [Learn about color props](/?path=/story/props-color--page).
	 */
	'color': PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.exact({
			'kind': PropTypes.string.isRequired,
			'tone': PropTypes.string.isRequired,
			'level': PropTypes.number.isRequired,
			'alpha': PropTypes.string,
		}),
	]),
};
