import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
} from '@jbkr/style-service';


const ProfileSkillRatingContainer = styled.div`
	${
		({ $size }) => {
			if ($size === 'large') {
				return `
					padding: .5rem 0 3rem;
				`;
			} else {
				return `
					padding: .5rem 0 1rem;
				`;
			}
		}
	}
`;
const ProfileSkillRatingIndicator = styled.div`
	${
		({ $order, $percentageExpertise }) => {
			const fillBasis = $percentageExpertise - ($order * 20);
			let fillStyle = 'empty';
			if (fillBasis === 10) {
				fillStyle = 'half';
			}
			if (fillBasis > 10) {
				fillStyle = 'full';
			}
			if ($size === 'large') {
				return `
					padding: .5rem 0 3rem;
				`;
			} else {
				return `
					padding: .5rem 0 1rem;
				`;
			}
		}
	}
`;

export const ProfileSkillRating = ({ size, percentageExpertise }) => {
	<ProfileSkillRatingContainer
		$size={size}
	>
		<ProfileSkillRatingIndicator
			$order={1}
			$percentageExpertise={percentageExpertise}
			$size={size}
		/>
		<ProfileSkillRatingIndicator
			$order={2}
			$percentageExpertise={percentageExpertise}
			$size={size}
		/>
		<ProfileSkillRatingIndicator
			$order={3}
			$percentageExpertise={percentageExpertise}
			$size={size}
		/>
		<ProfileSkillRatingIndicator
			$order={4}
			$percentageExpertise={percentageExpertise}
			$size={size}
		/>
		<ProfileSkillRatingIndicator
			$order={5}
			$percentageExpertise={percentageExpertise}
			$size={size}
		/>
	</ProfileSkillRatingContainer>
};
Copy.propTypes = {
	/**
	 * Size.
	 */
	'size': PropTypes.oneOf(['small', 'large']),
	/**
	 * Token indicating kind of copy.
	 */
	'percentageExpertise': PropTypes.oneOf([
		'10',
		'20',
		'30',
		'40',
		'50',
		'60',
		'70',
		'80',
		'90',
		'100',
	]),
};
