import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../primitive/Text/Text';
import { deviceWidthQuery, color, typeStyle, hiddenBlock, hiddenInline } from '@jbkr/style-service';

const propsSpecifications = {
	'landmark-title': {
		'tag': 'h1',
		'size': '5xl',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'h1': {
		'tag': 'h1',
		'size': '2xl',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
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
			'tone': 'Finch',
			'level': 4,
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
			'tone': 'Finch',
			'level': 14,
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
			'tone': 'Finch',
			'level': 16,
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
			'tone': 'Finch',
			'level': 4,
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
	'announcement--preface': {
		'tag': 'div',
		'size': '2xs',
		'weight': 'bold',
		'usage': 'display',
		// 'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 11,
		},
	},
	'announcement--body': {
		'tag': 'div',
		'size': '2xs',
		'weight': 'regular',
		'usage': 'display',
		// 'spaced': false,
		// 'color': {
		// 	'kind': 'Brand',
		// 	'tone': 'Peony',
		// 	'level': 3,
		// },
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
		'tag': 'div',
		'size': 'm',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--section-title--main': {
		'tag': 'div',
		'size': '3xl',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
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
		'more': 'padding-bottom: 2rem;',
	},
	'profile--skill-name--featured': {
		'tag': 'span',
		'size': 'm',
		'weight': 'regular',
		'usage': 'display',
		'spaced': false,
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
		'spaced': false,
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
	'profile--experience--job-title': {
		'tag': 'h3',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'spaced': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--experience--job-employer': {
		'tag': 'p',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--experience--job-dates': {
		'tag': 'p',
		'size': 's',
		'weight': 'regular',
		'slant': 'italic',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--education-certification--title': {
		'tag': 'h3',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--education-certification--tagline': {
		'tag': 'p',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--education-certification--dates': {
		'tag': 'p',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--experience--volunteer-title': {
		'tag': 'h3',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--experience--volunteer-for-whom': {
		'tag': 'p',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--experience--volunteer-dates': {
		'tag': 'p',
		'size': 's',
		'weight': 'regular',
		'slant': 'italic',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 15,
		},
	},
	'profile--experience--volunteer-description': {
		'tag': 'p',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'profile--table-of-contents-item--anchor--large-device': {
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
	'profile--table-of-contents-item--anchor--not-large-device': {
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
	'footer--copyright': {
		'tag': 'p',
		'size': '2xs',
		'weight': 'regular',
		'usage': 'body',
		'spaced': false,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 17,
		},
	},
};
const copyKinds = [
	'copy-container--standard',
	'landmark-title',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'body--standard',
	'body--enlarged',
	'small',
	'button-label--horizontal--standard',
	'button-label--horizontal--small',
	'announcement--preface',
	'announcement--body',
	'screen-title--standard',
	'screen-title--article',
	'profile--section-title--preface',
	'profile--section-title--main',
	'profile--skill-name--featured',
	'profile--skill-name--standard',
	'profile--skill-statement',
	'profile--experience--job-title',
	'profile--experience--job-employer',
	'profile--experience--job-dates',
	'profile--education-certification--title',
	'profile--education-certification--tagline',
	'profile--education-certification--dates',
	'profile--experience--volunteer-title',
	'profile--experience--volunteer-for-whom',
	'profile--experience--volunteer-dates',
	'profile--experience--volunteer-description',
	'profile--table-of-contents-item--anchor--large-device',
	'profile--table-of-contents-item--anchor--not-large-device',
	'liblab-item--title-anchor',
	'liblab-item--meta-item--label',
	'liblab-item--meta-item--value',
	'article--tagline',
	'article--meta-item--small-device--date--primary',
	'article--meta-item--small-device--date--secondary',
	'article--meta-item--small-device--stats',
	'article--meta-item--large-device--label',
	'article--meta-item--large-device--value',
	'article--brief-statement',
	'article--image-credit--main',
	'article--image-credit--anchor',
	'article--table-of-contents-item--anchor',
	'article--blockquote--large-device',
	'contact--brand-tagline',
	'contact--section-header',
	'contact--item-anchor',
	'footer--copyright'
];
const returnStylesFromSpecifications = ({ specs }) => `
		color: ${color({
			...specs.color,
			'format': 'string',
		})};
		${deviceWidthQuery.only({ 'width': 's' })} {
			${typeStyle({
				'deviceWidth': 's',
				...specs
			})}
		}
		${deviceWidthQuery.only({ 'width': 'm' })} {
			${typeStyle({
				'deviceWidth': 'm',
				...specs
			})}
		}
		${deviceWidthQuery.only({ 'width': 'l' })} {
			${typeStyle({
				'deviceWidth': 'l',
				...specs
			})}
		}
`;
const StandardBodyContainer = styled.div`
	font-weight: 320;
	color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 7,
		'format': 'string'
	})};
	h1 {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h1 })}
	}
	h2 {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h2 })}
	}
	h3 {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h3 })}
	}
	h4 {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h4 })}
	}
	h5 {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h5 })}
	}
	p, ul, ol {
		margin: 0;
		padding: 0;
	}
	p, ul, ol {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications['body--standard'] })}
	}
	ul ul,
	ol ol {
		margin: 0;
		padding: 0;
	}
	ul li,
	ol li {
		list-style-position: outside;
		vertical-align: text-top;
	}
	ol li {
		margin: 0 0 0 2rem;
	}
	ul li {
		margin: 0 0 0 2.2rem;
	}
	li::marker {
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 17,
		})};
	}
	ol li::marker {
		font-size: 80%;
	}
	b,
	strong {
		font-weight: 560;
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		})};
	}
	i,
	em,
	cite {
		font-style: italic;
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		})};
	}
	small {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.small })}
	}
	a,
	a:visited {
		color: inherit;
		text-decoration: none;
		transition: all 250ms ease;
		background-position-y: 10%;
		background-image: linear-gradient(
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 33,
				'format': 'string'
			})} 50%,
			${color({
				'kind': 'Brand',
				'tone': 'Peony',
				'level': 3,
				'format': 'string'
			})} 50%
		);
		background-size: auto 200%;
		&:hover {
			color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 37,
				'format': 'string'
			})};
			background-position-y: 100%;
			border-radius: .25rem;
		}
		&:focus {
			padding: 0 .5rem;
			margin: 0 .25rem;
			border-radius: .25rem;
			outline: none;
			box-shadow: 0 0 0 .25rem ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 41,
				'format': 'string'
			})}, 0 0 0 .5rem ${color({
				'kind': 'Accent',
				'tone': 'Finch',
				'level': 1,
				'format': 'string'
				})};
		}
	}
	div.header-container {
		h1[id],
		h2[id],
		h3[id],
		h4[id],
		h5[id] {
			display: inline-block;
			margin-right: 1rem;
		}
		a.header-anchor[href] {
			display: inline-block;
			opacity: 0;
			padding: 0 2rem;
			span.machines-only {
				${hiddenInline}
			}
		}
		&:hover {
			a.header-anchor {
				opacity: 1;
				&:hover {
					color: ${color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 37,
						'format': 'string'
					})};
				}
			}
		}
	}
	div.header-container.level-1 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h1 })}
	}
	div.header-container.level-2 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h2 })}
	}
	div.header-container.level-3 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h3 })}
	}
	div.header-container.level-4 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h4 })}
	}
	div.header-container.level-5 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h5 })}
	}
`;
/**
 * Wherever copy (text) appears on a screen, it should use this component.
 */
export const Copy = ({
	kind,
	htmlContent,
	children,
	id,
	color,
	gradient,
}) => {
	if (kind !== 'copy-container--standard') {
		if (propsSpecifications[kind]) {
			let tagThisCopy = propsSpecifications[kind].tag;
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
			if (gradient) {
				propsThisCopy.gradient = gradient;
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
			return (null);
		}
	}
	if (kind === 'copy-container--standard') {
		if (!htmlContent && children) {
			return(
				<StandardBodyContainer>
					{children}
				</StandardBodyContainer>
			);
		}
		if (htmlContent) {
			return(
				<StandardBodyContainer
					dangerouslySetInnerHTML={{ '__html': htmlContent }}
				/>
			);
		}
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
	'kind': PropTypes.oneOf([...copyKinds]),
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
	/**
	 * Color props used to construct a gradient, and a fallback color.
	 * [Learn about color props](/?path=/story/props-color--page).
	 */
	'gradient': PropTypes.exact({
		'colors': PropTypes.arrayOf({
			'kind': PropTypes.string.isRequired,
			'tone': PropTypes.string.isRequired,
			'level': PropTypes.number.isRequired,
			'alpha': PropTypes.string,
		}),
		'fallbackColor': PropTypes.exact({
			'kind': PropTypes.string.isRequired,
			'tone': PropTypes.string.isRequired,
			'level': PropTypes.number.isRequired,
			'alpha': PropTypes.string,
		}),
	}),
};
