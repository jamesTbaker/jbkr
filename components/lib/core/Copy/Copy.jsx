import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Color, Gradient } from '@jbkr/models-react';
import { Text } from '../../primitive/Text/Text';
import {
	deviceWidthQuery, color, typeStyle, hiddenInline
} from '@jbkr/style-service';


const propsSpecifications = {
	'landmark-title': {
		'tag': 'h1',
		'size': '5xl',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'landmark-title--preface': {
		'tag': 'span',
		'size': 'm',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 18,
		},
	},
	'h1': {
		'tag': 'h1',
		'size': '2xl',
		'weight': 'bold',
		'usage': 'display',
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
		'spacedTopAndBottom': true,
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
		'spacedTopAndBottom': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 4,
		},
	},
	'h4': {
		'tag': 'h4',
		'size': 'm',
		'weight': 'bold',
		'usage': 'display',
		'spacedTopAndBottom': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 4,
		},
	},
	'h5': {
		'tag': 'h5',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'spacedTopAndBottom': true,
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
		'spacedBottom': true,
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
		'spacedBottom': true,
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
		'spacedBottom': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'small-bold': {
		'tag': 'small',
		'size': '2xs',
		'weight': 'bold',
		'usage': 'body',
		'spacedBottom': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'tooltip': {
		'tag': 'span',
		'size': '1xs',
		'weight': 'bold',
		'usage': 'body',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 41,
		},
	},
	'button-label--horizontal--standard': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
	},
	'button-label--horizontal--small': {
		'tag': 'span',
		'size': '1xs',
		'weight': 'regular',
		'usage': 'display',
	},
	'announcement--preface': {
		'tag': 'div',
		'size': '2xs',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'twitter--account-name': {
		'tag': 'div',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
		},
	},
	'twitter--account-username': {
		'tag': 'div',
		'size': '1xs',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 5,
		},
	},
	'twitter--body-text': {
		'tag': 'div',
		'size': 'm',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'twitter--date-time': {
		'tag': 'div',
		'size': '1xs',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 12,
		},
	},
	'announcement--body': {
		'tag': 'div',
		'size': '2xs',
		'weight': 'regular',
		'usage': 'display',
	},
	'profile--section-title--preface': {
		'tag': 'span',
		'size': 'm',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'profile--section-title--main': {
		'tag': 'span',
		'size': '2xl',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
		},
	},
	'profile--skill-name--featured': {
		'tag': 'span',
		'size': 'm',
		'weight': 'regular',
		'usage': 'display',
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
		'spacedBottom': true,
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--experience--job-employer': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 3,
		},
	},
	'profile--experience--job-dates': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'slant': 'italic',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 6,
		},
	},
	'profile--education-certification--title': {
		'tag': 'h3',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--education-certification--tagline': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 3,
		},
	},
	'profile--education-certification--dates': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 6,
		},
	},
	'profile--experience--volunteer-title': {
		'tag': 'h3',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'profile--experience--volunteer-for-whom': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 3,
		},
	},
	'profile--experience--volunteer-dates': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'slant': 'italic',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 6,
		},
	},
	'profile--experience--volunteer-description': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 8,
		},
	},
	'profile--table-of-contents-item--anchor--large-device': {
		'tag': 'span',
		'size': 'm',
		'weight': 'regular',
		'usage': 'display',
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
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
		},
	},
	'article-summary--title-anchor--enlarged': {
		'tag': 'span',
		'size': 'l',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'article-summary--title-anchor': {
		'tag': 'span',
		'size': 'm',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'article-summary--meta-item--label': {
		'tag': 'div',
		'size': '1xs',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'article-summary--meta-item--value': {
		'tag': 'div',
		'size': '1xs',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 11,
		},
	},
	'article--title': {
		'tag': 'div',
		'size': '2xl',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 39,
		},
	},
	'article--tagline': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'body',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'article--faux-subheader': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'body',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 27,
		},
	},
	'article--meta-item--not-large-device--date--primary': {
		'tag': 'span',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'article--meta-item--not-large-device--date--secondary': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 5,
		},
	},
	'article--meta-item--not-large-device--stats': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 10,
		},
	},
	'article--meta-item--large-device--label': {
		'tag': 'div',
		'size': 's',
		'weight': 'bold',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'article--meta-item--large-device--value': {
		'tag': 'div',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 10,
		},
	},
	'article--brief-statement': {
		'tag': 'span',
		'size': '2xs',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'article--expanded-table-of-contents': {
		'tag': 'div',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
		'color': {
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 3,
		},
	},
	'article--compressed-table-of-contents': {
		'tag': 'span',
		'size': 's',
		'weight': 'regular',
		'usage': 'display',
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
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'four-oh-four--secondary-header': {
		'tag': 'p',
		'size': '1xl',
		'weight': 'bold',
		'usage': 'body',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
		},
	},
	'four-oh-four--paragraph': {
		'tag': 'p',
		'size': 'm',
		'weight': 'regular',
		'usage': 'body',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 7,
		},
	},
	'footer--copyright': {
		'tag': 'p',
		'size': '2xs',
		'weight': 'regular',
		'usage': 'body',
		'color': {
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 17,
		},
	},
	'hidden-block': {
		'tag': 'span',
		'size': '2xs',
		'more': `display: block;
			width: 0;
			height: 0;
			padding: 0;
			margin: 0;
			text-indent: 100%;
			white-space: nowrap;
			overflow: hidden;`,
	},
};
const copyKinds = [
	'copy-container--standard',
	'copy-container--enlarged',
	'landmark-title',
	'landmark-title--preface',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'body--standard',
	'body--enlarged',
	'small',
	'small-bold',
	'tooltip',
	'button-label--horizontal--standard',
	'button-label--horizontal--small',
	'announcement--preface',
	'announcement--body',
	'twitter--account-name',
	'twitter--account-username',
	'twitter--body-text',
	'twitter--date-time',
	'profile--value-proposition--one',
	'profile--value-proposition--two--extra-small-to-large',
	'profile--value-proposition--two--extra-small-to-small--smaller',
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
	'article-summary--title-anchor',
	'article-summary--title-anchor--enlarged',
	'article-summary--meta-item--label',
	'article-summary--meta-item--value',
	'article--title',
	'article--tagline',
	'article--faux-subheader',
	'article--meta-item--not-large-device--date--primary',
	'article--meta-item--not-large-device--date--secondary',
	'article--meta-item--not-large-device--stats',
	'article--meta-item--large-device--label',
	'article--meta-item--large-device--value',
	'copy-container--article--header--image-credit',
	'copy-container--article--body--image-caption',
	'article--brief-statement',
	'article--expanded-table-of-contents',
	'article--compressed-table-of-contents',
	'article--blockquote--large-device',
	'contact--brand-tagline',
	'contact--section-header',
	'four-oh-four--secondary-header',
	'four-oh-four--paragraph',
	'footer--copyright',
	'hidden-block',
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
const StandardCopyContainer = styled.div`
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
		${returnStylesFromSpecifications({ 'specs': propsSpecifications['body--standard'] })}
	}
	ul ul,
	ol ol {
		padding: 0;
		margin: 0;
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
		text-decoration: none;
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		})};
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
		background-position-y: 10%;
		transition: all 250ms ease;
		&:hover {
			color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 41,
				'format': 'string'
			})};
			background-position-y: 100%;
			border-radius: .25rem;
		}
		&:focus {
			outline: none;
			padding: 0 .5rem;
			margin: 0 .25rem;
			border-radius: .25rem;
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
		padding: 1.5rem 0;
		h1[id],
		h2[id],
		h3[id],
		h4[id],
		h5[id] {
			display: inline;
			margin: 0 1rem 0 0;
		}
		a.header-anchor[href] {
			padding: 0 2rem;
			opacity: 0;
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
		${deviceWidthQuery.not({ 'width': 'l' })} {
			a.header-anchor {
				display: none;
			}
		}
	}
	div.header-container.level-1 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h1 })}
		margin: 0;
	}
	div.header-container.level-2 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h2 })}
		margin: 0;
	}
	div.header-container.level-3 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h3 })}
		margin: 0;
	}
	div.header-container.level-4 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h4 })}
		margin: 0;
	}
	div.header-container.level-5 a.header-anchor {
		${returnStylesFromSpecifications({ 'specs': propsSpecifications.h5 })}
		margin: 0;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		div.header-container.level-2,
		div.header-container.level-3 {
			padding: 2.5rem 0;
		}
		div.header-container.level-4 {
			padding: 2rem 0;
		}
		div.header-container.level-5 {
			padding: 1.5rem 0;
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		div.header-container.level-2 {
			padding: 3rem 0;
		}
		div.header-container.level-3,
		div.header-container.level-4 {
			padding: 2rem 0;
		}
		div.header-container.level-5 {
			padding: 1.5rem 0;
		}
	}
`;
const ProfileValuePropositionOneContainer = styled.span`
	span.word-container {
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 34,
			'format': 'string'
		})};
		${deviceWidthQuery.only({ 'width': 's' })} {
			${typeStyle({
				'deviceWidth': 's',
				'size': '2xl',
				'weight': 'regular',
				'usage': 'display',
			})}
		}
		${deviceWidthQuery.only({ 'width': 'm' })} {
			${typeStyle({
				'deviceWidth': 'm',
				'size': '2xl',
				'weight': 'regular',
				'usage': 'display',
			})}
		}
		${deviceWidthQuery.only({ 'width': 'l' })} {
			${typeStyle({
				'deviceWidth': 'l',
				'size': '2xl',
				'weight': 'regular',
				'usage': 'display',
			})}
		}
		em {
			color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 41,
				'format': 'string'
			})};
			${deviceWidthQuery.only({ 'width': 's' })} {
				${typeStyle({
					'deviceWidth': 's',
					'size': '2xl',
					'weight': 'bold',
					'usage': 'display',
				})}
			}
			${deviceWidthQuery.only({ 'width': 'm' })} {
				${typeStyle({
					'deviceWidth': 'm',
					'size': '2xl',
					'weight': 'bold',
					'usage': 'display',
				})}
			}
			${deviceWidthQuery.only({ 'width': 'l' })} {
				${typeStyle({
					'deviceWidth': 'l',
					'size': '2xl',
					'weight': 'bold',
					'usage': 'display',
				})}
			}
		}
	}
`;
const ProfileValuePropositionTwoExtraSmallToSmallerContainer = styled.span`
	color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 7,
		'format': 'string'
	})};
	${deviceWidthQuery.only({ 'width': 's' })} {
		${typeStyle({
			'deviceWidth': 's',
			'size': 's',
			'weight': 'regular',
			'usage': 'display',
		})}
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		${typeStyle({
			'deviceWidth': 'm',
			'size': 's',
			'weight': 'regular',
			'usage': 'display',
		})}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${typeStyle({
			'deviceWidth': 'l',
			'size': 's',
			'weight': 'regular',
			'usage': 'display',
		})}
	}
	em {
		color: ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		})};
		${deviceWidthQuery.only({ 'width': 's' })} {
			${typeStyle({
				'deviceWidth': 's',
				'size': 's',
				'weight': 'bold',
				'usage': 'display',
			})}
		}
		${deviceWidthQuery.only({ 'width': 'm' })} {
			${typeStyle({
				'deviceWidth': 'm',
				'size': 's',
				'weight': 'bold',
				'usage': 'display',
			})}
		}
		${deviceWidthQuery.only({ 'width': 'l' })} {
			${typeStyle({
				'deviceWidth': 'l',
				'size': 's',
				'weight': 'bold',
				'usage': 'display',
			})}
		}
	}
`;
const ProfileValuePropositionTwoExtraSmallToLargeContainer = styled.span`
	color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 7,
		'format': 'string'
	})};
	${deviceWidthQuery.only({ 'width': 's' })} {
		${typeStyle({
			'deviceWidth': 's',
			'size': 'm',
			'weight': 'regular',
			'usage': 'body',
		})}
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		${typeStyle({
			'deviceWidth': 'm',
			'size': 'm',
			'weight': 'regular',
			'usage': 'body',
		})}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${typeStyle({
			'deviceWidth': 'l',
			'size': 'm',
			'weight': 'regular',
			'usage': 'body',
		})}
	}
	em {
		color: ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		})};
		${deviceWidthQuery.only({ 'width': 's' })} {
			${typeStyle({
				'deviceWidth': 's',
				'size': 'm',
				'weight': 'bold',
				'usage': 'body',
			})}
		}
		${deviceWidthQuery.only({ 'width': 'm' })} {
			${typeStyle({
				'deviceWidth': 'm',
				'size': 'm',
				'weight': 'bold',
				'usage': 'body',
			})}
		}
		${deviceWidthQuery.only({ 'width': 'l' })} {
			${typeStyle({
				'deviceWidth': 'l',
				'size': 'm',
				'weight': 'bold',
				'usage': 'body',
			})}
		}
	}
`;
const EnlargedCopyContainer = styled.div`
	color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 7,
		'format': 'string'
	})};
	p, ul, ol {
		margin: 0;
		padding: 0;
		${returnStylesFromSpecifications({ 'specs': propsSpecifications['body--standard'] })}
	}
	ul ul,
	ol ol {
		padding: 0;
		margin: 0;
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
		text-decoration: none;
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		})};
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
		background-position-y: 10%;
		transition: all 250ms ease;
		&:hover {
			color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 41,
				'format': 'string'
			})};
			background-position-y: 100%;
			border-radius: .25rem;
		}
		&:focus {
			outline: none;
			padding: 0 .5rem;
			margin: 0 .25rem;
			border-radius: .25rem;
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
`;
const TweetBodyTextContainer = styled.div`
	${returnStylesFromSpecifications({ 'specs': propsSpecifications['twitter--body-text'] })}
	p, ul, ol {
		margin: 0;
		padding: 0;
	}
	ul ul,
	ol ol {
		padding: 0;
		margin: 0;
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
	a,
	a:visited {
		text-decoration: none;
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		})};
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
		background-position-y: 10%;
		transition: all 250ms ease;
		&:hover {
			color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 41,
				'format': 'string'
			})};
			background-position-y: 100%;
			border-radius: .25rem;
		}
		&:focus {
			outline: none;
			padding: 0 .5rem;
			margin: 0 .25rem;
			border-radius: .25rem;
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
`;

const ArticleHeaderImageCreditContainer = styled.div`
	${returnStylesFromSpecifications({ 'specs': propsSpecifications['small-bold'] })}
	color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 7,
		'format': 'string'
	})};
	a,
	a:visited {
		text-decoration: none;
		color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 1,
			'format': 'string'
		})};
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
		background-position-y: 10%;
		transition: all 250ms ease;
		&:hover {
			color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 41,
				'format': 'string'
			})};
			background-position-y: 100%;
			border-radius: .25rem;
		}
		&:focus {
			outline: none;
			padding: 0 .5rem;
			margin: 0 .25rem;
			border-radius: .25rem;
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
	tagOverride,
}) => {
	if (
		kind !== 'twitter--body-text' &&
		kind !== 'copy-container--standard' &&
		kind !== 'copy-container--enlarged' &&
		kind !== 'copy-container--article--header--image-credit' &&
		kind !== 'copy-container--article--body--image-caption'  &&
		kind !== 'profile--value-proposition--one'  &&
		kind !== 'profile--value-proposition--two--extra-small-to-large'  &&
		kind !== 'profile--value-proposition--two--extra-small-to-small--smaller'
	) {
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
			if (tagOverride) {
				tagThisCopy = tagOverride;
			}
			if (!htmlContent && children) {
				return(
					<Text
						tag={tagThisCopy}
						{...propsThisCopy}
					>
						{children}
					</Text>
				);
			}
			if (htmlContent) {
				return(
					<Text
						tag={tagThisCopy}
						{...propsThisCopy}
					/>
				);
			}
		} else {
			return (null);
		}
	}
	if (kind === 'twitter--body-text') {
		if (!htmlContent && children) {
			return(
				<TweetBodyTextContainer>
					{children}
				</TweetBodyTextContainer>
			);
		}
		if (htmlContent) {
			return(
				<TweetBodyTextContainer
					dangerouslySetInnerHTML={{ '__html': htmlContent }}
				/>
			);
		}
	}
	if (kind === 'copy-container--standard') {
		if (!htmlContent && children) {
			return(
				<StandardCopyContainer>
					{children}
				</StandardCopyContainer>
			);
		}
		if (htmlContent) {
			return(
				<StandardCopyContainer
					dangerouslySetInnerHTML={{ '__html': htmlContent }}
				/>
			);
		}
	}
	if (kind === 'copy-container--enlarged') {
		if (!htmlContent && children) {
			return(
				<EnlargedCopyContainer>
					{children}
				</EnlargedCopyContainer>
			);
		}
		if (htmlContent) {
			return(
				<EnlargedCopyContainer
					dangerouslySetInnerHTML={{ '__html': htmlContent }}
				/>
			);
		}
	}
	if (
		kind === 'copy-container--article--header--image-credit' ||
		kind === 'copy-container--article--body--image-caption'
	) {
		if (htmlContent) {
			return(
				<ArticleHeaderImageCreditContainer
					dangerouslySetInnerHTML={{ '__html': htmlContent }}
				/>
			);
		} else {
			return (
				<ArticleHeaderImageCreditContainer>
					{children}
				</ArticleHeaderImageCreditContainer>
			);
		}
	}
	if (kind === 'profile--value-proposition--one') {
		if (!htmlContent && children) {
			return(
				<ProfileValuePropositionOneContainer>
					{children}
				</ProfileValuePropositionOneContainer>
			);
		}
		if (htmlContent) {
			return(
				<ProfileValuePropositionOneContainer
					dangerouslySetInnerHTML={{ '__html': htmlContent }}
				/>
			);
		}
	}
	if (kind === 'profile--value-proposition--two--extra-small-to-small--smaller') {
		if (!htmlContent && children) {
			return(
				<ProfileValuePropositionTwoExtraSmallToSmallerContainer>
					{children}
				</ProfileValuePropositionTwoExtraSmallToSmallerContainer>
			);
		}
		if (htmlContent) {
			return(
				<ProfileValuePropositionTwoExtraSmallToSmallerContainer
					dangerouslySetInnerHTML={{ '__html': htmlContent }}
				/>
			);
		}
	}
	if (kind === 'profile--value-proposition--two--extra-small-to-large') {
		if (!htmlContent && children) {
			return(
				<ProfileValuePropositionTwoExtraSmallToLargeContainer>
					{children}
				</ProfileValuePropositionTwoExtraSmallToLargeContainer>
			);
		}
		if (htmlContent) {
			return(
				<ProfileValuePropositionTwoExtraSmallToLargeContainer
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
	'color': Color,
	/**
	 * Color props used to construct a gradient, and a fallback color.
	 * [Learn about color props](/?path=/story/props-color--page).
	 */
	'gradient': Gradient,
	/**
	 * HTML tag used instead of that specified.
	 */
	'tagOverride': PropTypes.string,
};
