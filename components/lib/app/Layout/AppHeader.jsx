import styled from 'styled-components';
import { deviceWidthQuery, color } from '@jbkr/style-service';
import { Brand } from '../../primitive/Brand/Brand';
import { Line } from '../../primitive/Line/Line';
import { Button } from '../../core/Button/Button';


const BrandContainer = styled.div`
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
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: none;
	}
`;
const NavigationContainer = styled.div``;
const PrimaryNavigationContainer = styled.nav`
	border-top: solid .125rem blue;
`;
const PrimaryNavigationLinkContainer = styled.span`
	${deviceWidthQuery.only({ 'width': 's' })} {
		display: block;
		border-bottom: solid .125rem blue;
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
export const AppHeader = ({ content }) => (
	<>
		<header>
			<BrandContainer>
				<Brand
					contextColor="onDark"
				/>
			</BrandContainer>
			<HamburgerContainer>
				<button>Hamburger</button>
			</HamburgerContainer>
			<NavigationContainer>
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
		</header>
	</>
);
