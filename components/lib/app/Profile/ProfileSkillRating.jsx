import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
} from '@jbkr/style-service';


const ProfileSkillRatingContainer = styled.div`
	display: flex;
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
		({ $size, $order, $percentageExpertise }) => {
			const fillBasis = $percentageExpertise - ($order * 20);
			let fillStyle = 'empty';
			if (fillBasis === 10) {
				fillStyle = 'half';
			}
			if (fillBasis > 10) {
				fillStyle = 'full';
			}
			const marginStatement = $order === 1 ?
				'' :
				'margin-left: .5rem;';
			;
			const sizesStatements = $size === 'large' ?
				'width: 1.5rem; height: 1.5rem; border-radius: .75rem;' :
				'width: 1rem; height: 1rem; border-radius: .5rem;';
			let backgroundStatement = `background-color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 28,
				'format': 'string',
			})};`;
			if (fillStyle === 'full') {
				backgroundStatement = `background-color: ${color({
					'kind': 'Accent',
					'tone': 'Iris',
					'level': 2,
					'format': 'string',
				})};`;
			}
			if (fillStyle === 'half') {
				backgroundStatement = `background-image: linear-gradient(
					to right,
					${color({
						'kind': 'Accent',
						'tone': 'Iris',
						'level': 2,
						'format': 'string',
					})} 0,
					${color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 28,
						'format': 'string',
					})} 50%
				);`;
			}
			return `
				${marginStatement}
				${sizesStatements}
				${backgroundStatement}
			`;
		}
	}
`;

export const ProfileSkillRating = ({ size, percentageExpertise }) => (
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
);
ProfileSkillRating.propTypes = {
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
