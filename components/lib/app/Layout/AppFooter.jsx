import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber, hiddenInline, verticalAlignMiddle
} from '@jbkr/style-service';
import { Brand } from '../../primitive/Brand/Brand';
import { Copy } from '../../..';

const AppFooterContainer = styled.footer`
	border-top: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 28,
		'format': 'string',
	})};
	${deviceWidthQuery.only({ 'width': 's' })} {
		margin: 5rem 2rem 0 2rem;
		padding: 3rem 0;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		margin: 5rem auto 0;
		padding: 2rem 0;
		text-align: left;
		width: 100%;
		max-width: 150rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "footerLeft footerRight";
	}
`;
const BrandContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 's' })} {
		grid-area: footerRight;
		width: 7rem;
		height: 3rem;
		padding-left: 2rem;
		${verticalAlignMiddle}
	}
	svg {
		${deviceWidthQuery.only({ 'width': 's' })} {
			height: 2rem;
		}
		${deviceWidthQuery.not({ 'width': 's' })} {
			height: 3rem;
		}
	}
`;
const CopyrightContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 's' })} {
		grid-area: footerLeft;
		padding-right: 2rem;
		text-align: right;
	}
`;
const BrandLink = styled.a`
	${
		({ $contextColor }) => {
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
			return `
				&:focus {
					outline: none;
					> span {
						border-radius: .375rem;
						box-shadow: 0 0 0 .25rem ${colorFocusRingSeparator}, 0 0 0 .5rem ${colorFocusRing};
					}
				}
			`;
		}
	}
`;

export const AppFooter = ({ copy }) => (
	<AppFooterContainer>
		<BrandContainer>
			<BrandLink
				href="/"
				$contextColor="onDark"
			>
				<Brand />
			</BrandLink>
		</BrandContainer>
		<CopyrightContainer>
			<Copy
				kind="footer--copyright"
				htmlContent={copy}
			/>
		</CopyrightContainer>
	</AppFooterContainer>
);
AppFooter.propTypes = {
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
