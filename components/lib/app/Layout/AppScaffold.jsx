import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery } from '@jbkr/style-service';
import { hiddenBlock } from '@jbkr/style-service';
import { Banner } from '../Layout/Banner';
import { AppHeader } from '../Layout/AppHeader';
import { AppFooter } from '../Layout/AppFooter';

const SkipLinksContainer = styled.div`
	${hiddenBlock}
`;
const SkipLinkListItemLargeDevice = styled.li`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const SkipLinkListItemNotLargeDevice = styled.li`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
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
	return(
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
				<ul>
					<SkipLinkListItemNotLargeDevice>
						<a href="#compressed-navigation-parent">
							Skip to site's navigation.
						</a>
					</SkipLinkListItemNotLargeDevice>
					<SkipLinkListItemLargeDevice>
						<a href="###############">
							Skip to site's primary navigation.
						</a>
					</SkipLinkListItemLargeDevice>
					<SkipLinkListItemLargeDevice>
						<a href="###############">
							Skip to site's secondary navigation.
						</a>
					</SkipLinkListItemLargeDevice>
					<li>
						<a href="#main-content">
							Skip to this page's main content.
						</a>
					</li>
					{
						hasTableOfContents &&
						<li>
							<a href="#table-of-contents">
								Skip to this page's table of contents.
							</a>
						</li>
					}
				</ul>
			</SkipLinksContainer>
			<AppHeader
				content={header}
			/>
			{children}
			<AppFooter
				content={footer.copy}
			/>
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
