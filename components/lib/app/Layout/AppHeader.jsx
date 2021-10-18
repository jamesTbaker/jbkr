import { useState } from 'react';
import styled from 'styled-components';
import { deviceWidthQuery, color, zIndexNumber, hiddenInline, verticalAlignMiddle } from '@jbkr/style-service';
import { Brand } from '../../primitive/Brand/Brand';
import { Line } from '../../primitive/Line/Line';
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
	display: grid;
	${deviceWidthQuery.only({ 'width': 's' })} {
		height: 12rem;
		grid-template-rows: 7rem 5rem;
		grid-template-areas: 	"announcement"
								"brandAndNav"
	}
`;
const Announcement = styled.aside`
	grid-area: announcement;
	display: grid;
	border-bottom: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 28,
		'format': 'string',
	})};
	${deviceWidthQuery.only({ 'width': 's' })} {
		grid-template-columns: 12rem auto;
		grid-column-gap: 1rem;
		grid-template-areas: "announcementPreface announcementBody";
		margin: 2rem 2rem 0;
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
	grid-area: brandAndNav;
	display: grid;
	${deviceWidthQuery.only({ 'width': 's' })} {
		grid-template-columns: 3rem auto 8rem;
		grid-template-areas: "hamburger headerGap brand";
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
const PrimaryNavigationLinkContainer = styled.span`
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: block;
		border-bottom: solid .125rem ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 34,
			'format': 'string',
		})};
	}
`;
const SecondaryNavigationContainer = styled.nav`
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: grid;
		grid-template-columns: 4rem 4rem 4rem;
		grid-template-areas: 	"secondaryLink0 secondaryLink1 secondaryLink2"
								"secondaryLink3 secondaryLink4 secondaryLink5"
								"secondaryLink6 secondaryLink7 secondaryLink8"
								"secondaryLink9 secondaryLink10 secondaryLink11"
								"meta nada nada";
		padding-top: 6rem;
	}
`;
const SecondaryNavigationLinkContainer = styled.span`
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: block;
		${
			({ gridArea }) => `grid-area: ${gridArea};`
		}
		a[href="/meta"] {
			> span {
				padding-left: 0;
			}
		}
	}
`;
/*

{
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 34,
}
const LinkContainer = styled.span`
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
	] = useState(true);
	// const [
	// 	smallContentsVisible,
	// 	setSmallContentsVisible,
	// ] = useState(false);
	const handleHamburgerClick = () => {
		setSmallNavVisible(!smallNavVisible);
	};
	// const handleContentsButtonClick = () => {
	// 	setSmallContentsVisible(!smallContentsVisible);
	// };
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
							ariaLabel="Primary Navigation"
							role="navigation"
						>
							{
								content.links.primary.map((link) =>
									<PrimaryNavigationLinkContainer
										key={link.key}
									>
										<Button
											text={link.anchorText}
											url={link.url}
											size="standard"
											surfaceStyle="transparent"
											contextColor="onDark"
										/>
									</PrimaryNavigationLinkContainer>
								)
							}
						</PrimaryNavigationContainer>
						<SecondaryNavigationContainer>
							{
								content.links.secondary.map((link, linkIndex) =>
									<SecondaryNavigationLinkContainer
										key={link.key}
										gridArea={returnSecondaryLinkGridArea({
											linkIndex,
											'anchorText': link.anchorText
										})}
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
									</SecondaryNavigationLinkContainer>
								)
							}
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
