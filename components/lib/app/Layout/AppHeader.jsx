import { useState } from 'react';
import styled from 'styled-components';
import { deviceWidthQuery, color, zIndexNumber, hiddenInline } from '@jbkr/style-service';
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
const AppHeaderContainer = styled.div`
	position: fixed;
	top: 0rem;
	width: 100%;
	display: grid;
	${deviceWidthQuery.only({ 'width': 's' })} {
		height: 21rem;
		grid-template-rows: 7rem 5rem auto;
		grid-template-areas: 	"announcement"
								"brandAndNav"
								"tableOfContents";
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
	span:first-child
	{
		transform-origin: 0% 0%;
	}

	span:nth-last-child(2)
	{
		transform-origin: 0% 100%;
	}
`;
const HamburgerLayer = styled.span`
	display: block;
	width: 2rem;
	height: .25rem;
	margin-bottom: .375rem;
	position: relative;

	background: #cdcdcd;
	border-radius: 1.5px;

	z-index: 1;

	transform-origin: .5rem 0;

	transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
			background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
			opacity 0.55s ease;
`;
const HamburgerLabel = styled.span`
	${hiddenInline}
`;
		// <HamburgerLabel>Toggle site navigation</HamburgerLabel>
const Hamburger = ({ onClick, $smallNavVisible }) => (
	<HamburgerButton
		onClick={onClick}
	>
		<HamburgerLayer
			order={1}
			$smallNavVisible={$smallNavVisible}
		/>
		<HamburgerLayer />
		<HamburgerLayer />
	</HamburgerButton>
);
const NavigationContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 's' })} {
		position: fixed;
		top: 21rem;
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
const PrimaryNavigationContainer = styled.nav`
	border-top: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 34,
		'format': 'string',
	})};
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
const SecondaryNavigationContainer = styled.nav``;
const SecondaryNavigationLinkContainer = styled.span`
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: block;
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
	const [
		smallContentsVisible,
		setSmallContentsVisible,
	] = useState(false);
	const handleHamburgerClick = () => {
		setSmallNavVisible(!smallNavVisible);
	};
	const handleContentsButtonClick = () => {
		setSmallContentsVisible(!smallContentsVisible);
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
							content.links.secondary.map((link) =>
								<SecondaryNavigationLinkContainer
									key={link.key}
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
