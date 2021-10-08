import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deviceWidthQuery, color } from '@jbkr/style-service';

/* const CopyLinkContainer = styled.span`
`; */

/**
 * SVG Icon
 */
export const CopyLink = ({
	url,
	children,
	internal,
}) => {
	if (internal) {
		return (
			<Link
				href={url}
			>
				{children}
			</Link>
		)
	} else {
		return (
			<a
				href={url}
				target="_blank"
				rel="noopener"
				rel="noreferrer"
			>
				{children}
			</a>
		);
	}
};
CopyLink.propTypes = {
	/**
	 * The URL to which to navigate.
	 */
	'url': PropTypes.string,
	/**
	 * The text characters to serve as the link's anchor.
	 */
	'children': PropTypes.string.isRequired,
	/**
	 * True if the url points to a resource that is part of jbkr.me.
	 */
	'internal': PropTypes.bool,
};
CopyLink.defaultProps = {
	url: 'https://www.theintercept.com',
	children: 'This is a link.',
	internal: false,
};
