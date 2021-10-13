import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon, IconNames } from '../../primitive/Icon/Icon';
import { deviceWidthQuery, color } from '@jbkr/style-service';

const CopyLinkContainer = styled.span`
	a {
		display: inline-block;
		text-decoration: none;
		line-height: 1.3;
		border-radius: 0;
		border-bottom: solid .125rem;
		transition: all 250ms;
		${
			({ $primaryColor, $secondaryColor }) => {
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
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 3,
						'alpha': .2,
						'format': 'string'
					});
				return `
				border-color: ${primaryColor};
				color: ${primaryColor};
				&:hover {
					border-color: ${primaryColor};
					color: ${primaryColor};
					background-color: ${secondaryColor};
				}
				&:focus {
					padding: 0 .5rem;
					margin-right: .25rem;
					outline: none;
					border-bottom: none;
					border-radius: .375rem;
					box-shadow: 0 0 0 .125rem ${primaryColor};
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
	// size,
	primaryColor,
	secondaryColor,
	// iconAfter,
}) => (
	<CopyLinkContainer
		// $size={size}
		$primaryColor={primaryColor}
		$secondaryColor={secondaryColor}
		// $iconAfter={iconAfter}
	>
		{
			url.startsWith('http') &&
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		}
		{
			!url.startsWith('http') &&
			<Link
				href={url}
			>
				{children}
			</Link>
		}
		{
			/* iconAfter &&
			<Icon
				content={iconAfter}
				size={size}
				color={color}
			/> */
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
	// /**
	//  * Token indicating size of type.
	//  */
	// 'size': PropTypes.oneOf([
	// 	'3xs', '2xs', '1xs', 's', 'm', 'l', '1xl', '2xl', '3xl', '4xl', '5xl',
	// ]),
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
	// /**
	//  * The icon to position adjacent to the link's anchor.
	//  */
	// 'iconAfter': PropTypes.oneOf(IconNames),
};
CopyLink.defaultProps = {
	url: '/',
	children: 'This is a link.',
	// size: 's',
	color: {
		'kind': 'Brand',
		'tone': 'Peony',
		'level': 3,
	},
	// iconAfter: 'arrow-right',
};
