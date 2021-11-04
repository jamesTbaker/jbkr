import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, typeStyle, color } from '@jbkr/style-service';

const TextContainer = styled.div`
	${
		({ $color }) => {
			if ($color) {
				if (typeof($color) === 'string') {
					return `color: ${$color};`;
				}
				if (typeof($color) === 'object') {
					return `color: ${color({
						'kind': $color.kind,
						'tone': $color.tone,
						'level': $color.level,
						'alpha': $color.alpha,
						'format': $color.format ? $color.format : 'string'
					})};`;
				}
			}
		}
	}
	${
		({ $gradient }) => {
			if (
				$gradient &&
				$gradient.colors &&
				$gradient.colors[0] &&
				$gradient.colors[1]
			) {
				return `
					@supports (background-clip: text) {
						color: transparent;
						background: linear-gradient(
							${color({
								'kind': $gradient.colors[0].kind,
								'tone': $gradient.colors[0].tone,
								'level': $gradient.colors[0].level,
								'alpha': $gradient.colors[0].alpha,
								'format': $gradient.colors[0].format ? $gradient.colors[0].format : 'string'
							})},
							${color({
								'kind': $gradient.colors[1].kind,
								'tone': $gradient.colors[1].tone,
								'level': $gradient.colors[1].level,
								'alpha': $gradient.colors[1].alpha,
								'format': $gradient.colors[1].format ? $gradient.colors[1].format : 'string'
							})}
						);
						background-clip: text;
						-webkit-background-clip: text;
					}
					@supports (-webkit-background-clip: text) {
						color: transparent;
						background: linear-gradient(
							${color({
								'kind': $gradient.colors[0].kind,
								'tone': $gradient.colors[0].tone,
								'level': $gradient.colors[0].level,
								'alpha': $gradient.colors[0].alpha,
								'format': $gradient.colors[0].format ? $gradient.colors[0].format : 'string'
							})},
							${color({
								'kind': $gradient.colors[1].kind,
								'tone': $gradient.colors[1].tone,
								'level': $gradient.colors[1].level,
								'alpha': $gradient.colors[1].alpha,
								'format': $gradient.colors[1].format ? $gradient.colors[1].format : 'string'
							})}
						);
						-webkit-background-clip: text;
					}
					@supports not (background-clip: text) and not (-webkit-background-clip: text) {
						color: ${color({
							'kind': $gradient.fallbackColor.kind,
							'tone': $gradient.fallbackColor.tone,
							'level': $gradient.fallbackColor.level,
							'alpha': $gradient.fallbackColor.alpha,
							'format': $gradient.fallbackColor.format ? $gradient.fallbackColor.format : 'string'
						})};
					}
				`;
			}
		}
	}
	${
		({
			size,
			weight,
			slant,
			spaced,
			usage,
		}) => {
			if (size) {
				return `
					${deviceWidthQuery.only({ 'width': 's' })} {
						${typeStyle({
							'deviceWidth': 's',
							size,
							weight,
							slant,
							spaced,
							usage,
						})}
					}
					${deviceWidthQuery.only({ 'width': 'm' })} {
						${typeStyle({
							'deviceWidth': 'm',
							size,
							weight,
							slant,
							spaced,
							usage,
						})}
					}
					${deviceWidthQuery.only({ 'width': 'l' })} {
						${typeStyle({
							'deviceWidth': 'l',
							size,
							weight,
							slant,
							spaced,
							usage,
						})}
					}
				`;
			}
		}
	}
	${
		({ spaced }) => !spaced && `margin: 0; padding: 0;`
	}
	${
		({ $more }) => `${$more}`
	}
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
	color,
	gradient,
	more,
	htmlContent,
	children,
	id,
}) => (
	<>
		{
			htmlContent && id &&
			<TextContainer
					as={tag}
					id={id}
					size={size}
					weight={weight}
					slant={slant}
					usage={usage}
					spaced={spaced}
					$color={color}
					$gradient={gradient}
					$more={more}
					dangerouslySetInnerHTML={{
						'__html': htmlContent,
					}}
				></TextContainer>
		}
		{
			htmlContent && !id &&
			<TextContainer
				as={tag}
				size={size}
				weight={weight}
				slant={slant}
				usage={usage}
				spaced={spaced}
				$color={color}
				$gradient={gradient}
				$more={more}
				dangerouslySetInnerHTML={{
					'__html': htmlContent,
				}}
			></TextContainer>
		}
		{
			!htmlContent && id &&
			<TextContainer
				as={tag}
				id={id}
				size={size}
				weight={weight}
				slant={slant}
				usage={usage}
				spaced={spaced}
				$color={color}
				$gradient={gradient}
				$more={more}
			>
				{children}
			</TextContainer>
		}
		{
			!htmlContent && !id &&
			<TextContainer
				as={tag}
				size={size}
				weight={weight}
				slant={slant}
				usage={usage}
				spaced={spaced}
				$color={color}
				$gradient={gradient}
				$more={more}
			>
				{children}
			</TextContainer>
		}
	</>
);
Text.propTypes = {
	/**
	 * DOM Element ID.
	 */
	'id': PropTypes.string,
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
		'colors': PropTypes.arrayOf(PropTypes.exact({
			'kind': PropTypes.string.isRequired,
			'tone': PropTypes.string.isRequired,
			'level': PropTypes.number.isRequired,
			'alpha': PropTypes.string,
		})),
		'fallbackColor': PropTypes.exact({
			'kind': PropTypes.string.isRequired,
			'tone': PropTypes.string.isRequired,
			'level': PropTypes.number.isRequired,
			'alpha': PropTypes.string,
		}),
	}),
	/**
	 * Additional CSS declarations.
	 */
	'more': PropTypes.string,
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
};
