/**
 * @name Primary Navigation - Brand
 * @component
 * @category Navigation
 * @smart
 * @description Brand that is linked to main home screen.
 */

import React from 'react';
import styled from 'styled-components';
import Brand from '../../../Core/Brand/Brand';
import Style from '../../../../services/styles';

const PrimaryNavBrandContainer = styled.h1`
	grid-area: primaryNavBrand;
	margin-bottom: 0;
`;

const InvisibleTextContainer = styled.span`
	${Style.InlineHidden()}
`;

const PrimaryNavBrand = ({
	device,
}) => (
	<PrimaryNavBrandContainer>
		<a href="/">
			{
				(
					device.screen.width === 'xs' ||
					device.screen.width === 's' ||
					device.screen.width === 'm'
				) && (
					<Brand
						height={4}
						hideText
					/>
				)
			}
			{
				(
					device.screen.width === 'l' ||
					device.screen.width === 'xl'
				) && (
					<Brand
						height={4}
						textColor="black"
					/>
				)
			}
			<InvisibleTextContainer>
				Museum of Science
			</InvisibleTextContainer>
		</a>
	</PrimaryNavBrandContainer>
);

export default PrimaryNavBrand;
