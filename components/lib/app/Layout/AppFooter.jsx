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
		padding: 2rem 0;
		text-align: left;

		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "footerLeft footerRight";
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		margin: 5rem 2rem 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 5rem auto 0;
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

export const AppFooter = ({ content }) => (
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
				htmlContent={content}
			/>
		</CopyrightContainer>
	</AppFooterContainer>
);
AppFooter.propTypes = {
	/** Copyright statment. */
	'content': PropTypes.string,
};
