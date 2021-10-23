import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hiddenBlock } from '@jbkr/style-service';
import { Banner } from '../Layout/Banner';
import { AppHeader } from '../Layout/AppHeader';
import { Footer } from '../Layout/Footer';

const SkipLinksContainer = styled.div`
	${hiddenBlock}
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
				{
					hasTableOfContents &&
					<ul>
						<li>
							<a href="#table-of-contents">
								Skip to table of contents
							</a>
						</li>
						<li>
							<a href="#main-content">
								Skip to main content
							</a>
						</li>
					</ul>
				}
				{
					!hasTableOfContents &&
					<a href="#main-content">Skip to main content</a>
				}
			</SkipLinksContainer>
			{/* <AppHeader
				content={header}
			/> */}
			<AppHeader
				content={{
					'links': {
						'primary': [
							{
								'key': '6140be5a78cc2e3969ebbc5c',
								'anchorText': 'Profile',
								'url': '/',
								'category': 'primary',
								'forThisScreen': true,
							}, {
								'key': '6140bebd78cc2e3969ebbc5e',
								'anchorText': 'Lib / Lab',
								'url': '/library',
								'category': 'primary',
							}, {
								'key': '6140bebd78cc2e3969ebbc5f',
								'anchorText': 'Contact',
								'url': '/contact',
								'category': 'primary',
							},
						],
						'secondary': [
							{
								'key': 'asdf1',
								'anchorText': 'Twitter',
								'anchorIcon': 'twitter',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': 'asdf2',
								'anchorText': 'YouTube',
								'anchorIcon': 'youtube',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': 'asdf3',
								'anchorText': 'LinkedIn',
								'anchorIcon': 'linkedin',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': 'asdf4',
								'anchorText': 'Dribbble',
								'anchorIcon': 'dribbble',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': 'asdf5',
								'anchorText': 'Behance',
								'anchorIcon': 'behance',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': 'asdf6',
								'anchorText': 'CodeSandbox',
								'anchorIcon': 'code-sandbox',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': 'asdf7',
								'anchorText': 'CodePen',
								'anchorIcon': 'codepen',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': 'asdf8',
								'anchorText': 'Medium',
								'anchorIcon': 'medium',
								'url': '/',
								'category': 'secondary',
							}, {
								'key': '6140bebd78cc2e3969ebbc60',
								'anchorText': 'Meta',
								'url': '/meta',
								'category': 'primary',
							},
						],
					},
					'liblabItem': {
						'anchorText':
							'Beef Shankle Chislic Meatloaf, Kielbasa in Swine for Pork: Digital Transformation for Museum of Science, Boston',
						// 'anchorText':
						// 	'The Hub',
						'url': '/',
					},
				}}
			/>
			{children}
			<Footer
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
					'url': PropTypes.string.isRequired,
					'forThisScreen': PropTypes.bool,
				})
			),
			'secondary': PropTypes.arrayOf(
				PropTypes.shape({
					'key': PropTypes.string.isRequired,
					'anchorText': PropTypes.string.isRequired,
					'anchorIcon': PropTypes.string.isRequired,
					'url': PropTypes.string.isRequired,
				})
			),
		}),
		'liblabItem': PropTypes.shape({
			'anchorText': PropTypes.string.isRequired,
			'url': PropTypes.string.isRequired,
		}),
	}),
	/** Data for AppFooter */
	'footer': PropTypes.shape({
		'content': PropTypes.string,
	}),
	/** Screen element that implements `<main>`. */
	'children': PropTypes.element,
};
