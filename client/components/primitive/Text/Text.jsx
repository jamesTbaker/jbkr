import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, typeStyle, color } from '@jbkr/style-service';

const TextContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		${({
		size,
		weight,
		slant,
		spaced,
		usage,
	}) => typeStyle({
		'deviceWidth': 's',
		size,
		weight,
		slant,
		spaced,
		usage,
	})}
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		${({
		size,
		weight,
		slant,
		spaced,
		usage,
	}) => typeStyle({
		'deviceWidth': 'm',
		size,
		weight,
		slant,
		spaced,
		usage,
	})}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${({
		size,
		weight,
		slant,
		spaced,
		usage,
	}) => typeStyle({
		'deviceWidth': 'l',
		size,
		weight,
		slant,
		spaced,
		usage,
	})}
	}
	color: ${({ '$color': { kind, tone, level, alpha } }) =>
		color({kind, tone, level, alpha, 'format': 'string'})};
`;
/**
 * `Text` creates a `div` that can contain a string with any color and type
 * style specs.
 *
 * This primitive component should not be used directly.
 * If you're looking for a component to add some semantically tagged
 * and styled text (a.k.a., copy) to a screen, then you're probably looking for
 * [the `Copy` component](https://jbkr.me)).
 *
 * @todo Update links in this description.
 */
export const Text = ({
	tag,
	size = 's',
	weight,
	slant,
	usage,
	spaced,
	color = {
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 21,
	},
	children,
}) => (
	<TextContainer
		as={tag}
		size={size}
		weight={weight}
		slant={slant}
		usage={usage}
		spaced={spaced}
		$color={color}
	>
		{children}
	</TextContainer>
);
Text.propTypes = {
	/**
	 * The HTML tag that should be used for this text item.
	 */
	'tag': PropTypes.string,
	/**
	 * Token indicating size of type.
	 */
	'size': PropTypes.oneOf([
		'3xs', '2xs', '1xs', 's', 'm', 'l', '1xl', '2xl', '3xl', '4xl', '5xl',
	]).isRequired,
	/**
	 * Token indicating weight of type.
	 */
	'weight': PropTypes.oneOf(['regular', 'bold']),
	/**
	 * Token indicating slant of type.
	 */
	'slant': PropTypes.oneOf(['normal', 'italic']),
	/**
	 * Token indicating usage of type. Check out [this article on Wikipedia
	 * ](https://en.wikipedia.org/wiki/Display_typeface) to learn
	 * about the distinction.
	 */
	'usage': PropTypes.oneOf(['display', 'body']),
	/**
	 * Token indicating the inclusion of spacing around the text (e.g., margin).
	 */
	'spaced': PropTypes.bool,
	/**
	 * Go to [Color](/?path=/story/props-color--page) to learn more about
	 * color props.
	 *
	 * @todo Update links in this description.
	 */
	'color': PropTypes.exact({
		'kind': PropTypes.string.isRequired,
		'tone': PropTypes.string.isRequired,
		'level': PropTypes.string.isRequired,
		'alpha': PropTypes.string,
	}),
	/**
	 * The text characters.
	 */
	'children': PropTypes.string.isRequired,
};
