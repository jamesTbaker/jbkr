import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '@jbkr/style-service';

const TextContainer = styled.span`
	${({
		deviceWidth,
		size,
		weight,
		slant,
		usage,
	}) => style.type.style({
		deviceWidth,
		size,
		weight,
		slant,
		usage,
	})}
	color: ${({ 'color': { kind, tone, level, alpha } }) =>
		style.color({kind, tone, level, alpha, 'format': 'string'})};
`;
/**
 * `Text` creates a `span` that can contain a string with any color and type
 * style specs.
 *
 * This component is somewhat like a primitive and it should not be used
 * directly. If you're looking for a component to add some semantically tagged
 * and styled text (a.k.a., copy) to a screen, then you're probably looking for
 * [the `Copy` component](https://jbkr.me)).
 *
 * @todo Update links in this description.
 */
export const Text = ({
	deviceWidth = 's',
	size = 's',
	weight,
	slant,
	usage,
	color = {
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': '21',
	},
	children,
}) => {
	console.log('deviceWidth', deviceWidth);
	console.log('size', size);
	console.log('children', children);
	return (
		<TextContainer
			deviceWidth={deviceWidth}
			size={size}
			weight={weight}
			slant={slant}
			usage={usage}
			color={color}
		>
			{children}
		</TextContainer>
	);};
/* }) => (
	<TextContainer
		deviceWidth={deviceWidth}
		size={size}
		weight={weight}
		slant={slant}
		usage={usage}
		color={color}
	>
		{children}
	</TextContainer>
); */
Text.propTypes = {
	/**
	 * Width of user's device's screen (viewport) in density-independent pixels.
	 */
	'deviceWidth': PropTypes.oneOf(['s', 'm', 'l']).isRequired,
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
