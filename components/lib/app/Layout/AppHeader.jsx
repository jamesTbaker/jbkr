import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber, hiddenInline, verticalAlignMiddle
} from '@jbkr/style-service';
import { Brand } from '../../primitive/Brand/Brand';
import { Button } from '../../core/Button/Button';
import { Copy } from '../../..';
import { CopyLink } from '../../..';


const returnLibLabItemAnchorText = ({ rawtext }) => {
	const breakPosition = rawtext.indexOf(':') > -1 ?
		rawtext.indexOf(':') : rawtext.indexOf(' ', 60);
	return `${rawtext.slice(0, breakPosition)}<span class="item-title-remainder-placeholder"></span><span class="item-title-remainder">${rawtext.slice(breakPosition)}</span>`;
};
const returnSecondaryLinkGridArea = ({
	linkIndex,
	anchorText,
}) => anchorText === 'Meta' ? 'meta' : `secondaryLink${linkIndex}`;
const AppHeaderContainer = styled.div`
	/* background-color: darkblue; */
	position: fixed;
	top: 0rem;
	width: 100%;
	display: grid;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		grid-template-rows: 7rem 5rem;
		grid-template-areas: 	"aside"
								"header";
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-template-rows: 7rem 8rem;
		grid-template-areas: 	"aside"
								"header";
		text-align: center;
	}
`;
const Aside = styled.aside`
	/* background-color: darkgreen; */
	grid-area: aside;
	text-align: left;
	border-bottom: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 28,
		'format': 'string',
	})};
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-areas: "announcement expandedSecondaryNav";
		grid-column-gap: 6rem;
		width: 100%;
		max-width: 150rem;
		margin: 0 auto;

	}
`;
const Header = styled.header`
	background-color: darkmagenta;
	grid-area: header;
	display: grid;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		/* grid-template-columns: 3rem auto 8rem; */
		grid-template-areas: "compressedNavToggle brand";
		grid-column-gap: 5rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-template-areas: "expandedPrimaryNav brand";
		grid-column-gap: 8rem;
		width: 100%;
		max-width: 150rem;
		margin: 0 auto;
		text-align: left;
	}
`;
const AnnouncementContainer = styled.div`
	/* background-color: darkviolet; */
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1.5rem;
		align-items: center;
		margin: 2rem 2rem 1rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: announcement;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1.5rem;
		align-items: center;
		margin: 2rem 0 1rem;
	}
`;
const AnnouncementPreface = styled.span`
	padding: 1rem 0;
	> div {
		width: max-content;
	}
`;
const AnnouncementBody = styled.span`
	${deviceWidthQuery.only({ 'width': 's' })} {
		span.item-title-remainder {
			${hiddenInline}
		}
		span.item-title-remainder-placeholder::before {
			content: '...';
		}
	}
`;
const ExpandedSecondaryNavigationContainer = styled.nav`
	/* background-color: darkcyan; */
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: expandedSecondaryNav;
		margin: 2rem 0 1rem;
	}
`;
const ExpandedSecondaryNavigationList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 2rem;
	align-items: center;
	height: 4rem;
	margin: 0;
	padding: 0;
`;
const ExpandedSecondaryNavigationListItem = styled.li`
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: inline;
	}
`;
const CompressedNavigationToggleContainer = styled.div`
	background-color: orange;
	grid-area: compressedNavToggle;
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const BrandContainer = styled.div`
	background-color: pink;
	grid-area: brand;
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const ExpandedPrimaryNavigationContainer = styled.nav`
	background-color: orange;
	grid-area: expandedPrimaryNav;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const CompressedNavigationContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const CompressedNavigationConstrainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const CompressedPrimaryNavigationContainer = styled.nav`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const CompressedSecondaryNavigationContainer = styled.nav`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;


export const AppHeader = ({ content }) => {
	const [
		smallNavVisible,
		setSmallNavVisible,
	] = useState(false);
	const handleHamburgerClick = () => {
		setSmallNavVisible(!smallNavVisible);
	};
	return (
		<AppHeaderContainer>
			<Aside
				role="banner"
			>
				<AnnouncementContainer>
					<AnnouncementPreface>
						<Copy
							kind="announcement--preface"
						>
							New in Lib / Lab
						</Copy>
					</AnnouncementPreface>
					<AnnouncementBody>
						<Copy
							kind="announcement--body"
						>
							<CopyLink
								url={content.liblabItem.url}
								htmlContent={
									returnLibLabItemAnchorText({
										'rawtext': content.liblabItem.anchorText
									})
								}
								inline={false}
							/>
						</Copy>
					</AnnouncementBody>
				</AnnouncementContainer>
				<ExpandedSecondaryNavigationContainer>
					<ExpandedSecondaryNavigationList>
						{
							content.links.secondary.map((link, linkIndex) =>
								<ExpandedSecondaryNavigationListItem
									key={link.key}
								>
									<Button
										text={link.anchorText}
										url={link.url}
										size={link.anchorIcon ? 'standard' : 'small'}
										surfaceStyle="transparent"
										contextColor="onDark"
										iconBefore={link.anchorIcon}
										textHidden={
											link.anchorIcon ?
											true : false
										}
									/>
								</ExpandedSecondaryNavigationListItem>
							)
						}
					</ExpandedSecondaryNavigationList>
				</ExpandedSecondaryNavigationContainer>
			</Aside>
			<Header>
				<CompressedNavigationToggleContainer>
					H
				</CompressedNavigationToggleContainer>
				<BrandContainer>
					Brand
				</BrandContainer>
				<ExpandedPrimaryNavigationContainer>
					Expanded Primary Nav
				</ExpandedPrimaryNavigationContainer>
			</Header>
		</AppHeaderContainer>
	);
};
AppHeader.propTypes = {
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
