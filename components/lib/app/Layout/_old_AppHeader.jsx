import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, color, zIndexNumber, hiddenInline, verticalAlignMiddle } from '@jbkr/style-service';
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
	position: fixed;
	top: 0rem;
	width: 100%;
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: grid;
		height: 12rem;
		grid-template-rows: 7rem 5rem;
		grid-template-areas: 	"announcement"
								"brandAndNav";
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		position: relative;
		height: 12rem;
	}
`;
const Announcement = styled.aside`
	${deviceWidthQuery.only({ 'width': 's' })} {
		grid-area: announcement;
		display: grid;
		grid-template-columns: 12rem auto;
		grid-column-gap: 1rem;
		grid-template-areas: "announcementPreface announcementBody";
		margin: 2rem 2rem 0;
		border-bottom: solid .125rem ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 28,
			'format': 'string',
		})};
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;

		max-width: 150rem;
		margin: 0 auto;
		text-align: left;

		display: grid;
		grid-template-columns: 12rem auto 52rem;
		grid-column-gap: 1rem;
		grid-template-areas: "announcementPreface announcementBody _____";
		/* margin: 2rem 2rem 0; */
	}
`;
const AnnouncementPreface = styled.span`
	grid-area: announcementPreface;
`;
const AnnouncementBody = styled.span`
	grid-area: announcementBody;
	${deviceWidthQuery.only({ 'width': 's' })} {
		span.item-title-remainder {
			${hiddenInline}
		}
		span.item-title-remainder-placeholder::before {
			content: '...';
		}
	}
`;
const Header = styled.header`
	display: grid;
	${deviceWidthQuery.only({ 'width': 's' })} {
		grid-area: brandAndNav;
		grid-template-columns: 3rem auto 8rem;
		grid-template-areas: "hamburger headerGap brand";
		padding: 1rem 2rem 0;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		max-width: 150rem;
		margin: 0 auto;
		text-align: left;

		grid-area: appHeader;
		z-index: 2;
		grid-template-columns: auto 9rem;
		grid-template-areas:
			"_____ secondaryNavigation"
			"primaryNavigation brand";
		padding: 1rem 2rem 0;
	}
`;
const BrandContainer = styled.div`
	grid-area: brand;
	text-align: right;
	${deviceWidthQuery.only({ 'width': 's' })} {
		height: 4rem;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		height: 5rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		height: 5rem;
	}
`;
const HamburgerContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		grid-area: hamburger;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: none;
	}
`;
const HamburgerButton = styled.button`
	cursor: pointer;
	display: inline-block;
	min-width: 0px;
	padding: .75rem .5rem .75rem;
	margin-top: .5rem;
	border: none;
	background-color: transparent;
`;
const HamburgerLayer = styled.span`
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
const Hamburger = ({ onClick, $smallNavVisible }) => (
	<HamburgerButton
		onClick={onClick}
		aria-label="Toggle site navigation"
	>
		<HamburgerLayer
			$order={1}
			$smallNavVisible={$smallNavVisible}
		/>
		<HamburgerLayer
			$order={2}
			$smallNavVisible={$smallNavVisible}
		/>
		<HamburgerLayer
			$order={3}
			$smallNavVisible={$smallNavVisible}
		/>
	</HamburgerButton>
);
const NavigationContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
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
		z-index: ${zIndexNumber('modal')};

		${({ $smallNavVisible }) => $smallNavVisible && `
			height: 100%;
		`}
	}
`;
const NavigationConstrainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		width: 67%;
		padding: 0 2rem;
		${verticalAlignMiddle}
	}
`;
const PrimaryNavigationContainer = styled.nav`
	${deviceWidthQuery.only({ 'width': 's' })} {
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
const PrimaryNavigationList = styled.ul`
	margin: 0;
	padding: 0;
`;
const PrimaryNavigationListItem = styled.li`
	${deviceWidthQuery.only({ 'width': 's' })} {
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
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: block;
	}
`;
const SecondaryNavigationContainer = styled.nav``;
const SecondaryNavigationList = styled.ul`
	${deviceWidthQuery.only({ 'width': 's' })} {
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
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: grid;
		grid-template-columns: 7rem 7rem 7rem 7rem 7rem 7rem 7rem 7rem 7rem;
		grid-template-areas: "secondaryLink0 secondaryLink1 secondaryLink2 secondaryLink3 secondaryLink4 secondaryLink5 secondaryLink6 secondaryLink7 meta";
		margin: 0;
		padding: 0;
	}
`;
const SecondaryNavigationListItem = styled.li`
	${deviceWidthQuery.only({ 'width': 's' })} {
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
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: block;
		${
			({ $gridArea }) => `grid-area: ${$gridArea};`
		}
	}
`;
/* const LinkContainer = styled.span`
	a {
		${props => props.forThisScreen && `
			color: yellow;
		`}
		${props => !props.forThisScreen && `
			color: pink;
		`}
	}
`; */
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
			<Header>
				<BrandContainer>
					<Brand
						contextColor="onDark"
					/>
				</BrandContainer>
				<HamburgerContainer>
					<Hamburger
						onClick={handleHamburgerClick}
						$smallNavVisible={smallNavVisible}
					/>
				</HamburgerContainer>
				<NavigationContainer
					$smallNavVisible={smallNavVisible}
				>
					<NavigationConstrainer>
						<PrimaryNavigationContainer
							aria-label="Primary Navigation"
						>
							<PrimaryNavigationList>
							{
								content.links.primary.map((link) =>
									<PrimaryNavigationListItem
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
									</PrimaryNavigationListItem>
								)
							}
							</PrimaryNavigationList>
						</PrimaryNavigationContainer>
						<SecondaryNavigationContainer
							aria-label="Secondary Navigation"
						>
							<SecondaryNavigationList>
							{
								content.links.secondary.map((link, linkIndex) =>
									<SecondaryNavigationListItem
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
											size={link.anchorIcon ? 'standard' : 'small'}
											surfaceStyle="transparent"
											contextColor="onDark"
											iconBefore={link.anchorIcon}
											textHidden={link.anchorIcon ? true : false}
										/>
									</SecondaryNavigationListItem>
								)
							}
							</SecondaryNavigationList>
						</SecondaryNavigationContainer>
					</NavigationConstrainer>
				</NavigationContainer>
			</Header>
			<Announcement
				role="banner"
			>
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
						/>
					</Copy>
				</AnnouncementBody>
			</Announcement>
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
