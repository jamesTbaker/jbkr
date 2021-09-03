/* eslint-disable react/prefer-stateless-function */

// ----- IMPORTS

import * as React from 'react';
import { Link } from 'gatsby';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
// import Hamburger from './Hamburger';
import Brand from './Brand';
import StylePatterns from '../services/StylePatterns';
import ProfileBrief from '../pdf/Profile Brief - James T. Baker.pdf';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';

// ----- COMPONENT

const BrandLink = styled(Link)`
	border: 0;
	
	&:hover {
		border: 0;
	}
`;

const HamburgerContainer = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	padding-left: ${props => props.screenType === 'medium' ?
		'4rem' : '1rem' };
`;

const Hamburger = styled.button.attrs({
	type: 'button',
})`
	display: inline-block;
	min-width: 0;
	padding: 1.6rem 1rem;
	transition-property: background-color, filter;
	transition-duration: .15s;
	transition-timing-function: linear;
	font-size: 0;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
	cursor: pointer;
`;

const HamburgerBox = styled.span`
	display: inline-block;
	position: relative;
	width: 26px;
	height: 18px;
`;

const HamburgerInner = styled.span`
	display: block;
    position: absolute;
    width: 26px;
    height: 1px;
    background-color: ${StylePatterns.Color('interactive-on-dark-default')};
    transition-property: transform;
	transition-duration: .15s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

	${({ showSmallNav }) => showSmallNav && `
		top: 8px;
    	transform: rotate(45deg);
		transition-delay: .24s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	`}

	&::before {
		display: block;
		position: absolute;
		content: "";
		width: 26px;
		height: 1px;
		top: 8px;
		background-color: ${StylePatterns.Color('interactive-on-dark-default')};
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		transition: top .15s .24s ease, opacity .15s ease;

		${({ showSmallNav }) => showSmallNav && `
			opacity: 0;
			transition: top .15s ease, opacity .15s .24s ease;
		`}
	}

	&::after {
		display: block;
		position: absolute;
		content: "";
		width: 26px;
		height: 1px;
		top: 16px;
		background-color: ${StylePatterns.Color('interactive-on-dark-default')};
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		transition: top .15s .24s ease, transform .15s cubic-bezier(0.55, 0.055, 0.675, 0.19);

		${({ showSmallNav }) => showSmallNav && `
			top: 0px;
			transform: rotate(-90deg);
			transition: bottom .15s ease, transform .15s .24s cubic-bezier(0.215, 0.61, 0.355, 1);
		`}
	}
`;


const HeaderSmall = styled.div`
	display: grid;
	grid-template-rows: 5rem;
	grid-template-columns: 15rem auto 15rem;
	padding: 3rem 0;
	background-color: ${StylePatterns.Color('blue-1')};
`;
const BrandContainerSmall = styled.div`
	grid-area: 1 / 3 / 2 / 4;
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('l', 'medium')};
		padding-right: 5rem;
	`}
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('l', 'small')};
		padding-right: 2rem;
		padding-left: 5rem;
	`}

	div.sb-root--brand {
		height: 5rem;
		text-align: right;
	}
	div.sb-root--brand svg.brand {
		${StylePatterns.VerticalAlignMiddle()};
	}
`;
const NavSmall = styled.nav`
	position: fixed;
	top: 11rem;
	width: 100%;
	height: 0;
	overflow: hidden;
	transition: height .75s;
	background-color: ${StylePatterns.Color('blue-1')};
	z-index: ${StylePatterns.ZIndex('smallNav')};

	${({ showSmallNav }) => showSmallNav && `
		height: 100%;
	`}
`;
// top padding = viewport height - ul height, divided by 2 to get half, 
// 		minus height of hamburger and brand container 
const NavSmallList = styled.ul`
	padding: calc(((100vh - 25rem) / 2) - 5rem) 0 0 0;
	list-style: none;

	${props => props.screenType === 'small' && `
		margin-left: 2rem;
		margin-right: 2rem;
	`}
	${props => props.screenType === 'medium' && `
		margin-left: 5rem;
		margin-right: 5rem;
	`}	
`;
const NavSmallListItem = styled.li`
	list-style: none;
	margin-top: -2rem;
	margin-left: -2rem;
	opacity: 0;
	border-top: .2rem solid ${StylePatterns.Color('red-1')};
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

	&:nth-child(4) {
		transition-delay: .35s;
	}

	&:nth-child(5) {
		transition-delay: .4s;
	}

	&:nth-child(6) {
		transition-delay: .45s;
	}

	&:last-child {
		border-bottom: .2rem solid ${StylePatterns.Color('red-1')};
	}

	${({ showSmallNav }) => showSmallNav && `
		margin-top: 0;
		margin-left: 0;
		opacity: 1;
	`}
`;
const NavSmallLink = styled(Link)`
	display: block;
	width: 100%;
	padding-top: 1.4rem;
	padding-bottom: 1.4rem;
	font-size: ${StylePatterns.FontSize('xl', 'small')} !important;
	font-weight: ${StylePatterns.FontWeight('light')};
	border: 0;
	margin-left: 0;
	text-align: left;
	color: ${StylePatterns.Color('interactive-on-dark-default')};

	&:hover {
		border: 0;
		color: ${StylePatterns.Color('interactive-on-dark-active')};
	}

	&:visited {
		color: ${StylePatterns.Color('interactive-on-dark-default')};

		&:hover {
			color: ${StylePatterns.Color('interactive-on-dark-active')};
		}
	}
`;








const HeaderLarge = styled.div`
	position: fixed;
	left: 0;
	width: 20rem;
	height: 100%;
	z-index: 999;
	overflow-y: auto;
`;
const BrandContainerLarge = styled.div`
	padding: 4rem 5rem 1rem 2rem;
`;
const HeaderLargeTagline = styled.div`
	padding: 0 2rem .9rem;
	margin-bottom: 4rem;
	color: ${StylePatterns.Color('grey-15')};

	p {
		margin: 0;
		font-size: ${StylePatterns.FontSize('xs', 'medium')};
	}
	a {
		border: 0;
	}
`;


const NavLarge = styled.nav`
	padding: 2rem;
`;

const NavLargeList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
`;
const NavLargeListItem = styled.li`
	display: block;	
	list-style: none;
	position: relative;
	margin: 0;
	font-size: ${StylePatterns.FontSize('m', 'medium')};
	font-weight: ${StylePatterns.FontWeight('light')};
	border-top: .2rem solid ${StylePatterns.Color('red-1')};

	&:last-child {
		border-bottom: .2rem solid ${StylePatterns.Color('red-1')};
	}
`;
const NavLargeLink = styled(Link)`
	display: block;
	padding: 1.9rem 0 1.9rem;
	border-bottom: 0;


	&:hover {
		border-bottom: 0;
	}

`;

/* 

	color: ${StylePatterns.Color('interactive-on-dark-default')};

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 4.2rem;
		width: 10%;
		left: 0;
		border-top: .2rem solid ${StylePatterns.Color('red-5')};
		transition: width .25s, border-color .25s;
	}

	&:hover {
		border-bottom: 0;
		color: ${StylePatterns.Color('interactive-on-dark-active')};

		&::before {
			width: 8.6rem;
			border-color: ${StylePatterns.Color('interactive-on-dark-active')};
		}
	}

	&:visited {
		color: ${StylePatterns.Color('interactive-on-dark-default')};

		&:hover {
			border: 0;
			color: ${StylePatterns.Color('interactive-on-dark-active')};
		}
	}
	&[aria-current="page"]::before {
		border-color: ${StylePatterns.Color('grey-4')};
	}
	&[aria-current="page"]:hover::before {
		border-color: ${StylePatterns.Color('interactive-on-dark-default')};
		width: 0;
	}


*/

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSmallNav: false,
		};
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
	}
	handleHamburgerClick() {
		this.setState(prevState => ({
			showSmallNav: !prevState.showSmallNav,
		}));
	}
	render() {
		return (
			<header className="sb-root--brand-and-nav">
				{
					(this.props.screenType === 'small' || 
					this.props.screenType === 'medium') && 

					<Sticky enableTransforms={false} >
						<HeaderSmall
							screenType={this.props.screenType}
						>
							<HamburgerContainer
								screenType={this.props.screenType}
							>
								<Hamburger
									showSmallNav={this.state.showSmallNav}
									onClick={this.handleHamburgerClick}
								>
									<HamburgerBox>
										<HamburgerInner
											showSmallNav={this.state.showSmallNav}
										/>
									</HamburgerBox>
								</Hamburger>
							</HamburgerContainer>
							<BrandContainerSmall
								screenType={this.props.screenType}
							>
								<BrandLink
									to="/"
								>
									<Brand />
								</BrandLink>
							</BrandContainerSmall>
							<NavSmall
								showSmallNav={this.state.showSmallNav}
							>
								<NavSmallList
									screenType={this.props.screenType}
								>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<NavSmallLink 
											to="/"
										>
											Profile
										</NavSmallLink>
									</NavSmallListItem>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<NavSmallLink
											to="/work"
										>
											Work
										</NavSmallLink>
									</NavSmallListItem>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<NavSmallLink
											to="/contact"
										>
											Contact
										</NavSmallLink>
									</NavSmallListItem>
								</NavSmallList>
							</NavSmall>
						</HeaderSmall>
					</Sticky>
				}
				{
					this.props.screenType === 'large' && 

					<HeaderLarge>
						<BrandContainerLarge>
							<BrandLink
								to="/"
							>
								<Brand />
							</BrandLink>
						</BrandContainerLarge>
						<HeaderLargeTagline>
							<p>Greater Boston</p>
							<p>
								<a href={ProfileBrief}>
									Profile Brief
									<Icon
										iconPosition="after"
										iconContent="cloud-download"
										iconSize="1.5"
									/>
								</a>

							</p>
						</HeaderLargeTagline>
						<NavLarge>
							<NavLargeList>
								<NavLargeListItem><NavLargeLink to="/">Profile</NavLargeLink></NavLargeListItem>
								<NavLargeListItem><NavLargeLink to="/work">Work</NavLargeLink></NavLargeListItem>
								<NavLargeListItem><NavLargeLink to="/contact">Contact</NavLargeLink></NavLargeListItem>
							</NavLargeList>
						</NavLarge>
					</HeaderLarge>
				}
			</header>
		);
	}
}
