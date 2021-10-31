import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '@jbkr/style-service';

const returnColors = ({ greyscale, contextColor }) => {
	const colors = {};
	if (greyscale && contextColor === 'onDark') {
		colors.logo = color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
			'format': 'string'
		});
		colors.wordmark = color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 1,
			'format': 'string'
		});
	}
	if (greyscale && contextColor === 'onLight') {
		colors.logo = color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 2,
			'format': 'string'
		});
		colors.wordmark = color({
			'kind': 'Neutral',
			'tone': 'Base',
			'level': 2,
			'format': 'string'
		});
	}
	if (!greyscale && contextColor === 'onDark') {
		colors.logo = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 5,
			'format': 'string'
		});
		colors.wordmark = color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 2,
			'format': 'string'
		});
	}
	if (!greyscale && contextColor === 'onLight') {
		colors.logo = color({
			'kind': 'Brand',
			'tone': 'Peony',
			'level': 5,
			'format': 'string'
		});
		colors.wordmark = color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 35,
			'format': 'string'
		});
	}
	return colors;
};
const BrandContainer = styled.span`
	display: block;
	height: 100%;
	svg {
		height: 100%;
		${
			({ $colors }) => `
				path.brand--logo {
					fill: ${$colors.logo};
				}
				path.brand--wordmark--character {
					fill: ${$colors.wordmark};
				}
			`
		}
	}
`;
/**
 * Horizontal line, used as dividers and anchor points of
 */
export const Brand = ({
	includeWordmark,
	greyscale,
	contextColor,
	height,
}) => (
	<BrandContainer
		$includeWordmark={includeWordmark}
		$height={height}
		$colors={returnColors({ greyscale, contextColor })}
	>
		{
			includeWordmark &&
			<svg viewBox="0 0 496 300">
				<path className="brand--wordmark--character" d="M121.381 45.2147C121.381 37.2002 128.293 30.73 136.822 30.73C145.277 30.73 152.189 37.2002 152.189 45.2147C152.189 53.1553 145.277 59.6255 136.822 59.6255C128.293 59.6255 121.381 53.1553 121.381 45.2147ZM150.203 75.6541V194.838C150.203 219.248 135.866 231.16 110.573 230.718C109.029 230.645 107.485 230.718 105.5 230.572V208.881C106.97 208.955 108 209.029 109.324 209.029C119.543 209.029 123.587 203.956 123.587 194.471V75.6541H150.203Z" />
				<path className="brand--wordmark--character" d="M231.377 168.736C248.95 168.736 258.214 153.296 258.214 132.121C258.214 111.093 249.097 96.0206 231.377 96.0206C214.246 96.0206 204.835 110.211 204.835 132.121C204.835 154.031 214.393 168.736 231.377 168.736ZM178.733 38.0087H205.349V94.3289H206.452C210.496 86.1682 218.804 74.1833 238.73 74.1833C264.831 74.1833 285.345 94.6236 285.345 132.269C285.345 169.472 265.419 190.574 238.803 190.574C219.393 190.574 210.643 179.031 206.452 170.796H204.908V188.588H178.733V38.0087Z" />
				<path className="brand--wordmark--character" d="M308.07 38.0091H334.686V121.019H336.524L377.11 75.6541H408.211L364.464 124.401L410.785 188.589H378.948L344.391 140.283L334.686 150.65V188.589H308.07V38.0091Z" />
				<path className="brand--wordmark--character" d="M425.863 75.6541H451.671V94.4766H452.847C456.965 81.3894 467.7 74.0364 480.713 74.0364C486.816 74.0364 491.889 75.6541 495.86 78.154L487.625 100.211C484.757 98.8878 481.449 97.8588 477.111 97.8588C463.214 97.8588 452.48 107.932 452.48 122.195V188.589H425.863V75.6541Z" />
				<path className="brand--logo" d="M23.2399 12.4566C23.9656 9.37006 28.3597 9.3728 29.0815 12.4603L67.8801 178.424C69.4597 185.181 69.4553 192.212 67.8671 198.967L47.0418 287.543C46.3161 290.63 41.922 290.627 41.2002 287.54L2.40159 121.576C0.821947 114.819 0.826396 107.788 2.41459 101.033L23.2399 12.4566Z" />
			</svg>
		}
		{
			!includeWordmark &&
			<svg viewBox="0 0 71 300">
				<path className="brand--logo" d="M23.2399 12.4566C23.9656 9.37006 28.3597 9.3728 29.0815 12.4603L67.8801 178.424C69.4597 185.181 69.4553 192.212 67.8671 198.967L47.0418 287.543C46.3161 290.63 41.922 290.627 41.2002 287.54L2.40159 121.576C0.821947 114.819 0.826396 107.788 2.41459 101.033L23.2399 12.4566Z"/>
			</svg>
		}
	</BrandContainer>
);
Brand.propTypes = {
	/**
	 * Whether or not to include the wordmark. If falsy, only the logo will be
	 * used.
	 */
	'includeWordmark': PropTypes.bool,
	/**
	 * Whether or not to make it greyscale. If falsy, it'll be multi-colored.
	 */
	'greyscale': PropTypes.bool,
	/**
	 * Whether the button appears on a light or dark background.
	 */
	'contextColor': PropTypes.oneOf(['onDark', 'onLight']),
	/**
	 * Token indicating size of line and its container. To maintain alignment,
	 * a line always exists within a container whose height is a multiple of 8.
	 */
	'height': PropTypes.number,
};
Brand.defaultProps = {
	includeWordmark: true,
	greyscale: false,
	contextColor: 'onDark',
	height: 20,
};
