import styled from 'styled-components';
import PropTypes from 'prop-types';
import { returnNumberRoundedUpToMultiple } from '@jbkr/utilities';
import { color } from '@jbkr/style-service';

// define the heights of lines in rem by size tokens
const heightSpecifications = {
	's': .125,
	'm': .5,
	'l': .75,
	'1xl': 1.25,
	'2xl': 1.75,
	'3xl': 2.25,
	'4xl': 2.75,
};
const returnLineContainerPadding = ({ height, alignment }) => {
	const elementHeight = heightSpecifications[height];
	const containerHeight = returnNumberRoundedUpToMultiple({
		'number': elementHeight,
		'multiple': 1,
	});
	const totalPadding = containerHeight - elementHeight;
	let topPadding = 0;
	let bottomPadding = 0;
	if (alignment === 'top') {
		bottomPadding = totalPadding;
	}
	if (alignment === 'bottom') {
		topPadding = totalPadding;
	}
	if (alignment === 'center') {
		topPadding = totalPadding / 2;
		bottomPadding = totalPadding / 2;
	}
	return `${topPadding}rem 0 ${bottomPadding}rem`;
};
const returnLineBorderRadius = ({ height }) => {
	const rawCalculation = (heightSpecifications[height] * 1.9) / 8;
	const roundedCalculation = returnNumberRoundedUpToMultiple({
		'number': rawCalculation,
		'multiple': .125,
	});
	return roundedCalculation <= .375 ? rawCalculation : .375;
};
const LineContainer = styled.span`
	display: block;
	${
		({ $height }) =>
			`height: ${returnNumberRoundedUpToMultiple({
				'number': heightSpecifications[$height],
				'multiple': 1,
			})}rem;`
	}
	${
		({ $height, $alignment }) =>
			`padding: ${returnLineContainerPadding({
				'height': $height,
				'alignment': $alignment,
			})};`
	}
`;
const LineElement = styled.span`
	display: block;
	${
		({ $width }) => `width: ${$width}%;`
	}
	${
		({ $height }) => `height: ${heightSpecifications[$height]}rem;`
	}
	${
		({ $height }) => `border-radius: ${returnLineBorderRadius({ height: $height})}rem;`
	}
	${
		({ $color }) => `background-color: ${color({
			'kind': $color.kind,
			'tone': $color.tone,
			'level': $color.level,
			'alpha': $color.alpha,
			'format': 'string'
		})};`
	}
`;

/**
 * Horizontal line, used as dividers and anchor points of
 */
export const Line = ({
	width,
	height,
	alignment,
	color,
}) => {
	return (
		<LineContainer
			$height={height}
			$alignment={alignment}
		>
			<LineElement
				$width={width}
				$height={height}
				$color={color}
			/>
		</LineContainer>
	);
};
Line.propTypes = {
	/**
	 * Token indicating width of line as a percentage of its container, which,
	 * in turn, fills its container. Numbers over 100 will be reduced to 100.
	 */
	'width': PropTypes.number,
	/**
	 * Token indicating size of line and its container. To maintain alignment,
	 * a line always exists within a container whose height is a multiple of 8.
	 */
	'height': PropTypes.oneOf(Object.keys(heightSpecifications)),
	/**
	 * The alignment of the line to its container.
	 */
	'alignment': PropTypes.oneOf(['top', 'bottom', 'center']),
	/**
	 * [Learn about color props](/?path=/story/props-color--page).
	 *
	 * @todo Update links in this description.
	 */
	'color': PropTypes.exact({
		'kind': PropTypes.string.isRequired,
		'tone': PropTypes.string.isRequired,
		'level': PropTypes.number.isRequired,
		'alpha': PropTypes.string,
	}),
};
Line.defaultProps = {
	width: 50,
	height: 's',
	alignment: 'center',
	color: {
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 21,
	},
};
