import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContextColorKey } from '@jbkr/models-react';
import Link from 'next/link';
import { color } from '@jbkr/style-service';

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
		({ $inline, $contextColor }) => {
			const colors = {
				'content': {},
				'background': {},
				'focusRing': {},
				'focusRingSeparator': {},
			};
			if ($inline) {
				colors.content.default = $contextColor === 'onDark' ?
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
				colors.content.hover = $contextColor === 'onDark' ?
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 41,
						/**
						 * @todo alpha should not be required
						 */
						'alpha': 1,
						'format': 'string'
					}) :
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 1,
						'format': 'string'
					});
				colors.content.focus = colors.content.hover;
				colors.background.default = $contextColor === 'onDark' ?
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 33,
						'format': 'string'
					}) :
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 1,
						'format': 'string'
					});
				colors.background.hover = $contextColor === 'onDark' ?
					color({
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 3,
						'format': 'string'
					}) :
					color({
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 7,
						'format': 'string'
					});
				colors.background.focus = colors.background.hover;
			} else {
				colors.content.default = $contextColor === 'onDark' ?
					color({
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 4,
						'format': 'string'
					}) :
					color({
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 7,
						'format': 'string'
					});
				colors.content.hover = $contextColor === 'onDark' ?
					color({
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 2,
						'format': 'string'
					}) :
					color({
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 8,
						'format': 'string'
					});
				colors.content.focus = colors.content.hover;
				colors.background.default = 'transparent';
				colors.background.hover = $contextColor === 'onDark' ?
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 35,
						'format': 'string'
					}) :
					color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 1,
						'format': 'string'
					});
				colors.background.focus = colors.background.hover;

			}
			colors.focusRing = $contextColor === 'onDark' ?
				color({
					'kind': 'Accent',
					'tone': 'Finch',
					'level': 1,
					'format': 'string'
				}) :
				color({
					'kind': 'Accent',
					'tone': 'Finch',
					'level': 2,
					'format': 'string'
					});
			colors.focusRingSeparator = $contextColor === 'onDark' ?
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 41,
					'format': 'string'
				}) :
				color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 1,
					'format': 'string'
				});
			if ($inline) {
				return `
					a {
						color: ${colors.content.default};
						text-decoration: none;
						transition: all 250ms ease;
						background-position-y: 10%;
						background-image: linear-gradient(
							${colors.background.default} 50%,
							${colors.background.hover} 50%
						);
						background-size: auto 200%;
						&:hover {
							color: ${colors.content.hover};
							background-position-y: 100%;
							border-radius: .25rem;
						}
						&:focus {
							padding: 0 .5rem;
							margin: 0 .25rem;
							border-radius: .25rem;
							outline: none;
							box-shadow: 0 0 0 .25rem ${colors.focusRingSeparator}, 0 0 0 .5rem ${colors.focusRing};
						}
					}
				`;
			} else {
				return `
					a {
						display: block;
						color: ${colors.content.default};
						text-decoration: none;
						transition: background 250ms ease;
						border-radius: .375rem;
						&:hover {
							color: ${colors.content.hover};
							background-color: ${colors.background.hover};
						}
						&:focus {
							padding: 0 .5rem;
							margin-right: 0 .25rem;
							outline: none;
							box-shadow: 0 0 0 .25rem ${colors.focusRingSeparator}, 0 0 0 .5rem ${colors.focusRing};
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
	// primaryColor,
	// secondaryColor,
	clickHandler,
}) => (
	<CopyLinkContainer
		$inline={inline}
		// $primaryColor={primaryColor}
		// $secondaryColor={secondaryColor}
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
	'contextColor': ContextColorKey,
};
CopyLink.defaultProps = {
	url: '/',
	children: 'This is a link.',
	inline: true,
	contextColor: 'onDark'
};
