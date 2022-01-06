import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, verticalAlignMiddle, hiddenInline
} from '@jbkr/style-service';
import { Brand } from '../../primitive/Brand/Brand';
import { Copy } from '../../core/Copy/Copy';
import { Button } from '../../core/Button/Button';



const AppFooterContainer = styled.footer`
	${deviceWidthQuery.only({ 'width': 's' })} {
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		${
			({ includeContactLink }) => includeContactLink && `
				display: grid;
				grid-template-areas: 	"contactLink"
										"persistentContent";
			`
		}
	}
	${deviceWidthQuery.only({ 'width': 's' })} {
		margin: 5rem 2rem 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		margin: 5rem 2rem 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		${
			({ includeContactLink }) => {
				if (includeContactLink) {
					return 'margin: 5rem auto 0;';
				} else {
					return 'margin: 0 auto;';
				}
			}
		}
	}
`;
const AppFooterPersistentContentContainer = styled.div`
	border-top: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 28,
		'format': 'string',
	})};
	${deviceWidthQuery.not({ 'width': 's' })} {
		padding: 2rem 0;
		text-align: left;
		${
			({ includeContactLink }) => includeContactLink && `
				grid-area: persistentContent;
			`
		}
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "footerLeft footerRight";
	}



	${deviceWidthQuery.only({ 'width': 's' })} {
		padding: 3rem 0;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {

	}
	${deviceWidthQuery.only({ 'width': 'l' })} {

	}
`;
const ContactLinkContainer = styled.div`
	grid-area: contactLink;
	padding: 3rem 0 3rem 3rem;
	border-radius: .375rem  .375rem 0 0;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 39,
		'format': 'string',
	})};
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
const BrandLink = styled.a.attrs(() => {
	return {
		'aria-label': 'jbkr Homepage',
	};
})`
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
				color: ${color({
					'kind': 'Brand',
					'tone': 'Peony',
					'level': 2,
					'format': 'string'
				})};
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

export const AppFooter = ({ content, includeContactLink }) => (
	<AppFooterContainer
		includeContactLink={includeContactLink}
	>
		{
			includeContactLink &&
			<ContactLinkContainer>
				<Button
					size="standard"
					surfaceStyle="transparent"
					contextColor="onDark"
					text="Let's create something beautiful together"
					iconAfter="arrow-right"
					url="/contact"
				/>
			</ContactLinkContainer>
		}
		<AppFooterPersistentContentContainer>
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
		</AppFooterPersistentContentContainer>
	</AppFooterContainer>
);
AppFooter.propTypes = {
	/** Copyright statment. */
	'content': PropTypes.string,
};
