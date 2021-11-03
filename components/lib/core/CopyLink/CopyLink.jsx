import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon, IconNames } from '../../primitive/Icon/Icon';
import { deviceWidthQuery, color } from '@jbkr/style-service';

const CopyLinkComplexAnchor = React.forwardRef(({ href, htmlContent }, ref) => (
	<a
		href={href}
		ref={ref}
		dangerouslySetInnerHTML={{
			'__html': htmlContent,
		}}
	/>
));
const CopyLinkContainer = styled.span`
	${
		({ $inline, $primaryColor, $secondaryColor, $contextColor }) => {
			const primaryColor = $primaryColor ?
				color({
					'kind': $primaryColor.kind,
					'tone': $primaryColor.tone,
					'level': $primaryColor.level,
					'alpha': $primaryColor.alpha,
					'format': 'string'
				}) :
				color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 3,
					'format': 'string'
				});
			const secondaryColor = $secondaryColor ?
				color({
					'kind': $secondaryColor.kind,
					'tone': $secondaryColor.tone,
					'level': $secondaryColor.level,
					'alpha': $secondaryColor.alpha,
					'format': 'string'
				}) :
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'format': 'string'
				});
			const contrastColor = $contextColor === 'onDark' ?
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'format': 'string'
				}) :
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 7,
					'format': 'string'
				});
			const colorFocusRing = $contextColor === 'onLight' ?
				color({
					'kind': 'Accent',
					'tone': 'Finch',
					'level': 2,
					'format': 'string'
				}) :
				color({
					'kind': 'Accent',
					'tone': 'Finch',
					'level': 1,
					'format': 'string'
					});
			const colorFocusRingSeparator = $contextColor === 'onLight' ?
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 1,
					'format': 'string'
				}) :
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'format': 'string'
				});
			if ($inline) {
				return `
					a {
						color: inherit;
						text-decoration: none;
						transition: background 250ms ease;

						background-position-y: 10%;
						background-image: linear-gradient(
							${secondaryColor} 50%,
							${primaryColor} 50%
						);
						background-size: auto 200%;
						&:hover {
							color: ${contrastColor};
							background-position-y: 100%;
							border-radius: .25rem;
						}
						&:focus {
							padding: 0 .5rem;
							margin: 0 .25rem;
							border-radius: .25rem;
							outline: none;
							box-shadow: 0 0 0 .25rem ${colorFocusRingSeparator}, 0 0 0 .5rem ${colorFocusRing};
						}
					}
				`;
			} else {
				return `
					a {
						display: block;
						color: ${primaryColor};
						text-decoration: none;
						transition: background 250ms ease;
						border-radius: .375rem;
						&:hover {
							background-color: ${secondaryColor};
						}
						&:focus {
							padding: 0 .5rem;
							margin-right: 0 .25rem;
							outline: none;
							box-shadow: 0 0 0 .25rem ${colorFocusRingSeparator}, 0 0 0 .5rem ${colorFocusRing};
						}
					}
				`;
			}
		}
	}
`;
/**
 * Copy link. Likely use cases include a link in the running text of a paragraph
 * and lists of links. Anchor text is always required. May include an icon
 * after the text, most likely in the case of list items. Most styles are
 * expected to be inherited. If an icon is used, then `size` must be specified.
 * If size or color should differ from the default / inherited size and color,
 * then they may be specified as well. Size will always be applied to both the
 * anchor text and the icon. If `url` starts with 'http', then it is assumed
 * that the link is to an external resource and, thus, the Next.js `Link`
 * component will not be used (so content will not be preloaded) and the
 * anchor tag will receive `rel` attributes of `noopener` and `noreferrer`.
 */
export const CopyLink = ({
	url,
	children,
	htmlContent,
	inline,
	contextColor,
	primaryColor,
	secondaryColor,
	clickHandler,
}) => (
	<CopyLinkContainer
		$inline={inline}
		$primaryColor={primaryColor}
		$secondaryColor={secondaryColor}
		$contextColor={contextColor}
	>
		{
			!htmlContent && url.startsWith('http') &&
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		}
		{
			htmlContent && url.startsWith('http') &&
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				dangerouslySetInnerHTML={{
					'__html': htmlContent,
				}}
			></a>
		}
		{
			!htmlContent && !url.startsWith('http') && !url.startsWith('#') &&
			<Link
				href={url}
			>
				{children}
			</Link>
		}
		{
			htmlContent && !url.startsWith('http') && !url.startsWith('#') &&
			<Link
				href={url}
				passHref
			>
				<CopyLinkComplexAnchor
					htmlContent={htmlContent}
				/>
			</Link>
		}
		{
			!htmlContent && !url.startsWith('http') && url.startsWith('#') &&
			<a
				href={url}
				onClick={clickHandler}
			>
				{children}
			</a>
		}
		{
			htmlContent && !url.startsWith('http') && url.startsWith('#') &&
			<a
				href={url}
				onClick={clickHandler}
				dangerouslySetInnerHTML={{
					'__html': htmlContent,
				}}
			></a>
		}
	</CopyLinkContainer>
);

CopyLink.propTypes = {
	/**
	 * The URL to which to navigate.
	 */
	'url': PropTypes.string.isRequired,
	/**
	 * The text characters to serve as the link's anchor.
	 */
	'children': PropTypes.string.isRequired,
	/**
	 * The text characters to serve as the link's anchor, marked up with
	 * HTML tags. If `htmlContent` is supplied, then `children` will be ignored.
	 */
	'htmlContent': PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.array
	]),
	/**
	 * Whether or not the link exists inside running copy.
	 */
	'inline': PropTypes.bool,
	/**
	 * Whether the button appears on a light or dark background.
	 */
	'contextColor': PropTypes.oneOf(['onDark', 'onLight']),
	/**
	 * [Learn about color props](/?path=/story/props-color--page).
	 */
	'primaryColor': PropTypes.exact({
		'kind': PropTypes.string.isRequired,
		'tone': PropTypes.string.isRequired,
		'level': PropTypes.number.isRequired,
		'alpha': PropTypes.string,
	}),
	/**
	 * [Learn about color props](/?path=/story/props-color--page).
	 */
	'secondaryColor': PropTypes.exact({
		'kind': PropTypes.string.isRequired,
		'tone': PropTypes.string.isRequired,
		'level': PropTypes.number.isRequired,
		'alpha': PropTypes.string,
	}),
};
CopyLink.defaultProps = {
	url: '/',
	children: 'This is a link.',
	inline: true,
	contextColor: 'onDark'
};
