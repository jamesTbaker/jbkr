/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../Text/Text';


const propsSpecifications = {
	'h1': {
		'size': '2xl',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h2': {
		'size': '1xl',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h3': {
		'size': 'l',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h4': {
		'size': 'm',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'h5': {
		'size': 's',
		'weight': 'bold',
		'color': {
			'kind': 'Neutral',
			'tone': 'Base',
			'level': '01',
		},
	},
	'body-standard': {
		'size': 's',
		'weight': 'regular',
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
	deviceWidth='s',
	kind = 'body-standard',
	children,
	color,
}) => {
	let tag = kind;
	if (
		kind === 'body-standard'
	) {
		tag = 'p';
	}
	return (
		<Text
			as={tag}
			deviceWidth="s"
			{...propsSpecifications[kind]}
			// color={color}
		>
			{children}
		</Text>
	);
};
