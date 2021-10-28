import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenInline,
	verticalAlignMiddle, zIndexNumber
} from '@jbkr/style-service';
import { Brand } from '../../primitive/Brand/Brand';
import { Button } from '../../core/Button/Button';
import { Copy } from '../../core/Copy/Copy';
import { CopyLink } from '../../core/CopyLink/CopyLink';


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
	position: fixed;
	top: 0rem;
	width: 100%;
	display: grid;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 37,
		'format': 'string',
	})};
	z-index: ${zIndexNumber().header};
	${deviceWidthQuery.not({ 'width': 'l' })} {
		grid-template-rows: 7rem 6rem;
		grid-template-areas: 	"aside"
								"header";
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-template-rows: 7rem 7rem;
		grid-template-areas: 	"aside"
								"header";
		text-align: center;
	}
`;
const Aside = styled.aside`
	grid-area: aside;
	border-bottom: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 28,
		'format': 'string',
	})};
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin: 2rem 2rem 0;
		padding-bottom: 1rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-areas: "announcement expandedSecondaryNav";
		grid-column-gap: 6rem;
		margin: 0 auto;
		text-align: left;
		width: calc(100% - 4rem);
		max-width: 150rem;
	}
`;
const Header = styled.header`
	grid-area: header;
	display: grid;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		grid-template-columns: 5rem auto 8.625rem;
		grid-template-areas: "compressedNavToggle _____ brand";
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-template-columns: auto 8.375rem;
		grid-template-areas: "expandedPrimaryNav brand";
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		text-align: left;
	}
`;
const AnnouncementContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1.5rem;
		align-items: center;
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
		&:last-child a > span {
			padding-left: 1.875rem;
			padding-right: 0;
			margin-left: 1rem;
		}
	}
`;
const CompressedNavigationToggleContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		grid-area: compressedNavToggle;
		margin: 1.5rem 0 1.5rem 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const CompressedNavigationToggleButton = styled.button`
	cursor: pointer;
	display: inline-block;
	min-width: 0px;
	padding: .75rem .5rem .75rem;
	border: none;
	background-color: transparent;
`;
const CompressedNavigationToggleLayer = styled.span`
	display: block;
	width: 2rem;
	height: .25rem;
	position: relative;

	background: ${color({
		'kind': 'Brand',
		'tone': 'Peony',
		'level': 5,
		'format': 'string',
	})};
	border-radius: .125rem;

	transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
			background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
			opacity 0.55s ease;
	${
		({ $order }) => {
			if ($order === 1) {
				return `
					transform-origin: top left;
					margin-bottom: .375rem;
				`;
			}
			if ($order === 2) {
				return `
					transform-origin: 0% 100%;
					margin-bottom: .375rem;
				`;
			}
			if ($order === 3) {
				return `transform-origin: bottom right;`;
			}
		}
	}
	${
		({ $order, $smallNavVisible }) => {
			if ($smallNavVisible === true) {
				if ($order === 1) {
					return `
						transform: rotate(45deg) scale(1.1, 1) translate(.125rem, -.25rem);
					`;
				}
				if ($order === 2) {
					return `
						opacity: 0;
						transform: rotate(0deg) scale(0.2, 0.2);
					`;
				}
				if ($order === 3) {
					return `
						transform: rotate(-45deg) scale(1.1, 1) translate(.75rem, -1.125rem);
					`;
				}
			}
		}
	}
`;
const CompressedNavigationToggle = ({ onClick, $smallNavVisible }) => (
	<CompressedNavigationToggleButton
		onClick={onClick}
		aria-label="Toggle site navigation"
	>
		<CompressedNavigationToggleLayer
			$order={1}
			$smallNavVisible={$smallNavVisible}
		/>
		<CompressedNavigationToggleLayer
			$order={2}
			$smallNavVisible={$smallNavVisible}
		/>
		<CompressedNavigationToggleLayer
			$order={3}
			$smallNavVisible={$smallNavVisible}
		/>
	</CompressedNavigationToggleButton>
);
const BrandContainer = styled.div`
	grid-area: brand;
	text-align: right;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		height: 4rem;
		margin: 1rem 2rem 1rem 0;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		height: 5rem;
		margin: 1.5rem 0 .5rem;
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
const ExpandedPrimaryNavigationContainer = styled.nav`
	grid-area: expandedPrimaryNav;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 2rem 0 1rem;
	}
`;
const ExpandedPrimaryNavigationList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 2rem;
	align-items: center;
	margin: 0;
	padding: 0;
`;
const ExpandedPrimaryNavigationListItem = styled.li`
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: inline;
		&:nth-child(1),
		&:nth-child(2) {
			a > span {
				padding-left: 0;
				border-left: none;
			}
		}
	}
`;
const CompressedNavigationContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		position: fixed;
		top: 12rem;
		left: 0;
		width: 100%;
		height: 0;
		overflow: hidden;
		transition: height .75s;
		background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 37,
			'format': 'string',
		})};
		z-index: ${zIndexNumber().compressedNavigationContainer};
		${({ $smallNavVisible }) => $smallNavVisible && `
			height: 100%;
		`}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const CompressedNavigationConstrainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		width: 67%;
		padding: 0 2rem;
		${verticalAlignMiddle}
	}
`;
const CompressedPrimaryNavigationContainer = styled.nav`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		border-top: solid .125rem ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 34,
			'format': 'string',
		})};
		a {
			width: 100%;
			> span {
				padding-left: 0;
				> span {
					font-size: 2.5rem;
				}
			}
		}
	}
`;
const CompressedPrimaryNavigationList = styled.ul`
	margin: 0;
	padding: 0;
`;
const CompressedPrimaryNavigationListItem = styled.li`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: block;
		border-bottom: solid .125rem ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 34,
			'format': 'string',
		})};
		margin-top: -2rem;
		margin-left: -2rem;
		opacity: 0;
		transition-property: opacity, margin-left, margin-top;
		transition-duration: .5s;
		&:nth-child(1) {
			transition-delay: .2s;
		}
		&:nth-child(2) {
			transition-delay: .25s;
		}
		&:nth-child(3) {
			transition-delay: .3s;
		}
		${({ $smallNavVisible }) => $smallNavVisible && `
			margin-top: 0;
			margin-left: 0;
			opacity: 1;
		`}
	}
`;
const CompressedSecondaryNavigationContainer = styled.nav``;
const CompressedSecondaryNavigationList = styled.ul`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: grid;
		grid-template-columns: 8rem 8rem 8rem;
		grid-template-rows: 8rem 8rem 10rem 8rem;
		grid-template-areas: 	"secondaryLink0 secondaryLink1 secondaryLink2"
								"secondaryLink3 secondaryLink4 secondaryLink5"
								"secondaryLink6 secondaryLink7 secondaryLink8"
								"meta nada nada";
		margin: 0;
		padding: 4rem 0 0 0;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-columns: 7rem 7rem 7rem 7rem 7rem 7rem 7rem 7rem 7rem;
		grid-template-areas: "secondaryLink0 secondaryLink1 secondaryLink2 secondaryLink3 secondaryLink4 secondaryLink5 secondaryLink6 secondaryLink7 meta";
		margin: 0;
		padding: 0;
	}
`;
const CompressedSecondaryNavigationListItem = styled.li`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: block;
		${
			({ $gridArea }) => `grid-area: ${$gridArea};`
		}
		margin-top: -2rem;
		margin-left: -2rem;
		opacity: 0;
		transition-property: opacity, margin-left, margin-top;
		transition-duration: .5s;
		&:nth-child(1) {
			transition-delay: .35s;
		}
		&:nth-child(2) {
			transition-delay: .375s;
		}
		&:nth-child(3) {
			transition-delay: .4s;
		}
		&:nth-child(4) {
			transition-delay: .425s;
		}
		&:nth-child(5) {
			transition-delay: .45s;
		}
		&:nth-child(6) {
			transition-delay: .475s;
		}
		&:nth-child(7) {
			transition-delay: .5s;
		}
		&:nth-child(8) {
			transition-delay: .525s;
		}
		&:nth-child(9) {
			transition-delay: .55s;
		}
		${({ $smallNavVisible }) => $smallNavVisible && `
			margin-top: 0;
			margin-left: 0;
			opacity: 1;
		`}
		a[href="/meta"] {
			> span {
				padding-left: 0;
			}
		}
		a:not([href="/meta"]) {
			> span {
				padding-left: 0;
				border-left: solid 0 transparent;
				> span > span {
					svg {
						height: 3rem;
					}
				}
			}
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: block;
		${
			({ $gridArea }) => `grid-area: ${$gridArea};`
		}
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
							{content.announcement.preface}
						</Copy>
					</AnnouncementPreface>
					<AnnouncementBody>
						<Copy
							kind="announcement--body"
						>
							<CopyLink
								url={content.announcement.bodyURL}
								htmlContent={
									returnLibLabItemAnchorText({
										'rawtext': content.announcement.bodyAnchor
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
										size={link.anchorIconBefore ? 'standard' : 'small'}
										surfaceStyle="transparent"
										contextColor="onDark"
										iconBefore={link.anchorIconBefore}
										textHidden={
											link.anchorIconBefore ?
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
					<CompressedNavigationToggle
						onClick={handleHamburgerClick}
						$smallNavVisible={smallNavVisible}
					/>
				</CompressedNavigationToggleContainer>
				<BrandContainer>
					<BrandLink
						href="/"
						$contextColor="onDark"
					>
						<Brand
							contextColor="onDark"
						/>
					</BrandLink>
				</BrandContainer>
				<ExpandedPrimaryNavigationContainer>
					<ExpandedPrimaryNavigationList>
						{
							content.links.primary.map((link) =>
								<ExpandedPrimaryNavigationListItem
									key={link.key}
								>
									<Button
										text={link.anchorText}
										url={link.url}
										size="small"
										surfaceStyle={
											link.anchorText === 'Contact' ?
											'outlined' : 'transparent'
										}
										contextColor="onDark"
									/>
								</ExpandedPrimaryNavigationListItem>
							)
						}
					</ExpandedPrimaryNavigationList>
				</ExpandedPrimaryNavigationContainer>
				<CompressedNavigationContainer
					$smallNavVisible={smallNavVisible}
				>
					<CompressedNavigationConstrainer>
						<CompressedPrimaryNavigationContainer
							aria-label="Primary Navigation"
						>
							<CompressedPrimaryNavigationList>
							{
								content.links.primary.map((link) =>
									<CompressedPrimaryNavigationListItem
										key={link.key}
										$smallNavVisible={smallNavVisible}
									>
										<Button
											text={link.anchorText}
											url={link.url}
											size="standard"
											surfaceStyle="transparent"
											contextColor="onDark"
										/>
									</CompressedPrimaryNavigationListItem>
								)
							}
							</CompressedPrimaryNavigationList>
						</CompressedPrimaryNavigationContainer>
						<CompressedSecondaryNavigationContainer
							aria-label="Secondary Navigation"
						>
							<CompressedSecondaryNavigationList>
							{
								content.links.secondary.map((link, linkIndex) =>
									<CompressedSecondaryNavigationListItem
										key={link.key}
										$gridArea={returnSecondaryLinkGridArea({
											linkIndex,
											'anchorText': link.anchorText
										})}
										$smallNavVisible={smallNavVisible}
									>
										<Button
											text={link.anchorText}
											url={link.url}
											size={link.anchorIconBefore ? 'standard' : 'small'}
											surfaceStyle="transparent"
											contextColor="onDark"
											iconBefore={link.anchorIconBefore}
											textHidden={link.anchorIconBefore ? true : false}
										/>
									</CompressedSecondaryNavigationListItem>
								)
							}
							</CompressedSecondaryNavigationList>
						</CompressedSecondaryNavigationContainer>
					</CompressedNavigationConstrainer>
				</CompressedNavigationContainer>
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
