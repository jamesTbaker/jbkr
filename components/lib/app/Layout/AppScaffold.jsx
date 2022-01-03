import { useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, verticalAlignMiddle } from '@jbkr/style-service';
import { color, hiddenBlock } from '@jbkr/style-service';
import { AppHeader } from '../Layout/AppHeader';
import { AppFooter } from '../Layout/AppFooter';
import { Spinner } from './Spinner';

const RouteChangingContainer = styled.div`
	height: 100vh;
	width: 100vw;
	text-align: center;
	> span {
		${verticalAlignMiddle}
	}
`;
const SkipLinksContainer = styled.ul`
	${hiddenBlock}
`;
const SkipLinkListItemLargeDevice = styled.li`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 0;
		a {
			color: ${color({
				'kind': 'Brand',
				'tone': 'Peony',
				'level': 2,
				'format': 'string'
			})};
		}
	}
`;
const SkipLinkListItemNotLargeDevice = styled.li`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		a {
			color: ${color({
				'kind': 'Brand',
				'tone': 'Peony',
				'level': 2,
				'format': 'string'
			})};
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const SkipLinkListItemAnyDevice = styled.li`
	padding: 0;
	a {
		color: ${color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 2,
			'format': 'string'
		})};
	}
`;
export const AppScaffold = ({
	'meta': {
		metaDescription,
		metaImage,
		metaOther,
		metaTitle,
		openGraphType,
		slug,
		socialDescription,
	},
	header,
	footer,
	hasTableOfContents,
	children,
}) => {
	const [
		routeChanging,
		setRouteChanging,
	] = useState(false);
	const router = useRouter();
	useEffect(() => {
		const handleStart = (url) => (url !== router.asPath) && setRouteChanging(true);
        const handleComplete = (url) => (url === router.asPath) && setRouteChanging(false);
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
	}, []);
	return (
		<>
			<Head>
				{
					slug &&
					<meta property="og:url"
						content={`https://jbkr.me${slug}`} />
				}
				{
					slug &&
					<meta property="twitter:url"
						content={`https://jbkr.me${slug}`} />
				}
				{
					metaTitle &&
					<title>{`${metaTitle}`} | jbkr</title>
				}
				{
					metaTitle &&
					<meta property="og:metaTitle"
						content={`${metaTitle}`} />
				}
				{
					metaTitle &&
					<meta name="twitter:metaTitle"
						content={`${metaTitle}`} />
				}
				{
					metaDescription &&
					<meta name="description" content={metaDescription} />
				}
				{
					socialDescription &&
					<meta property="og:description"
						content={socialDescription} />
				}
				{
					socialDescription &&
					<meta name="twitter:description"
						content={socialDescription} />
				}
				{
					openGraphType &&
					<meta property="og:type" content={openGraphType} />
				}
				{
					metaImage && metaImage.url &&
					<meta property="og:image" content={metaImage.url} />
				}
				{
					metaImage && metaImage.url &&
					<meta name="twitter:image" content={metaImage.url} />
				}
				{
					metaImage && metaImage.alternativeText &&
					<meta name="twitter:image:alt"
						content={metaImage.alternativeText} />
				}
				{
					metaOther && metaOther[0] &&
					metaOther.map((otherObject, otherObjectIndex) =>
						// key is in `otherObject`
						// eslint-disable-next-line react/jsx-key
						<meta
							{...otherObject}
						/>,
					)
				}
			</Head>
			<SkipLinksContainer>
				<SkipLinkListItemNotLargeDevice>
					<a href="#compressed-navigation-container">
						Skip to site's primary and secondary navigation.
					</a>
				</SkipLinkListItemNotLargeDevice>
				{
					hasTableOfContents &&
					<SkipLinkListItemNotLargeDevice>
						<a href="#compressed-table-of-contents">
							Skip to page's table of contents.
						</a>
					</SkipLinkListItemNotLargeDevice>
				}
				<SkipLinkListItemLargeDevice>
					<a href="#expanded-site-primary-navigation">
						Skip to site's primary navigation.
					</a>
				</SkipLinkListItemLargeDevice>
				<SkipLinkListItemLargeDevice>
					<a href="#expanded-site-secondary-navigation">
						Skip to site's secondary navigation.
					</a>
				</SkipLinkListItemLargeDevice>
				{
					hasTableOfContents &&
					<SkipLinkListItemLargeDevice>
						<a href="#expanded-table-of-contents">
							Skip to page's table of contents.
						</a>
					</SkipLinkListItemLargeDevice>
				}
				<SkipLinkListItemAnyDevice>
					<a href="#main-content">
						Skip to this page's main content.
					</a>
				</SkipLinkListItemAnyDevice>
			</SkipLinksContainer>
			<AppHeader
				content={header}
			/>
			{
				!routeChanging &&
				<>
					{children}
					<AppFooter
						content={footer.copy}
					/>
				</>
			}
			{
				routeChanging &&
				<RouteChangingContainer>
					<Spinner />
				</RouteChangingContainer>
			}
		</>
	);
};
AppScaffold.propTypes = {
	/** Data for the app's `<head>`. */
	'meta': PropTypes.shape({
		'slug': PropTypes.string.isRequired,
		'metaTitle': PropTypes.string.isRequired,
		'metaDescription': PropTypes.string.isRequired,
		'socialDescription': PropTypes.string.isRequired,
		'openGraphType': PropTypes.string.isRequired,
		'metaImage': PropTypes.shape({
			'url': PropTypes.string.isRequired,
			'alternativeText': PropTypes.string.isRequired,
			'type': PropTypes.string.isRequired,
		}),
		'metaOther': PropTypes.arrayOf(PropTypes.shape({
			'key': PropTypes.string.isRequired,
			'property': PropTypes.string.isRequired,
			'content': PropTypes.string.isRequired,
		}))
	}),
	/** Whether or not this screen has a table of contents */
	'hasTableOfContents': PropTypes.bool,
	/** Data for AppHeader */
	'header': PropTypes.shape({
		'links': PropTypes.shape({
			'primary': PropTypes.arrayOf(
				PropTypes.shape({
					'key': PropTypes.string.isRequired,
					'anchorText': PropTypes.string.isRequired,
					'anchorIconBefore': PropTypes.string,
					'url': PropTypes.string.isRequired,
					'forThisScreen': PropTypes.bool,
				})
			),
			'secondary': PropTypes.arrayOf(
				PropTypes.shape({
					'key': PropTypes.string.isRequired,
					'anchorText': PropTypes.string.isRequired,
					'anchorIconBefore': PropTypes.string,
					'url': PropTypes.string.isRequired,
				})
			),
		}),
		'announcement': PropTypes.shape({
			'bodyAnchor': PropTypes.string.isRequired,
			'bodyURL': PropTypes.string.isRequired,
			'preface': PropTypes.string.isRequired,
		}),
	}),
	/** Data for AppFooter */
	'footer': PropTypes.shape({
		'content': PropTypes.string,
	}),
	/** Screen element that implements `<main>`. */
	'children': PropTypes.element,
};
