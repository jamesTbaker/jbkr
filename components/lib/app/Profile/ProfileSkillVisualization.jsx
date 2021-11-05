import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Skill } from '@jbkr/models-react';
import {
	deviceWidthQuery, color, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { ProfileSkillRating } from './ProfileSkillRating';

const ProfileSkillVisualizationContainer = styled.li`
	list-style: none;
	break-inside: avoid;
	margin-bottom: 2rem;
	${
		({ $featured }) => {
			if ($featured) {
				return `
					${deviceWidthQuery.only({ 'width': 'm' })} {
						width: calc(50% - 1rem);
					}
					${deviceWidthQuery.only({ 'width': 'l' })} {
						width: calc(33% - 1.125rem);
						height: 15rem;height: 15rem;
					}
					height: 11rem;
					padding: 2.5rem 2rem 0 2rem;
					border-radius: .375rem;
					border-top: solid .5rem ${color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string',
					})};
					background-color: ${color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 35,
						'format': 'string',
					})};
				`;
			}
			if (!$featured) {
				return `
					${deviceWidthQuery.only({ 'width': 'm' })} {
						width: calc(33% - 1rem);
					}
					${deviceWidthQuery.only({ 'width': 'l' })} {
						width: calc(25% - 1.125rem);
						height: 10rem;
					}
					height: 8rem;
					padding: 1.875rem 0 0 0;
					border-top: solid .125rem ${color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string',
					})};
				`;
			}
		}
	}
`;
const ProfileSkillRatingText = styled.span`
	${hiddenInline}
	color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 1,
		'format': 'string',
	})};
`;
export const ProfileSkillVisualization = ({
	skill,
	featured
}) => (
	<ProfileSkillVisualizationContainer
		$featured={featured}
	>
		{
			featured &&
			<>
				<Copy
					kind="profile--skill-name--featured"
					htmlContent={skill.name}
				/>
				<ProfileSkillRatingText>
					: {skill.percentageExpertise}% expertise
				</ProfileSkillRatingText>
				<ProfileSkillRating
					size="large"
					percentageExpertise={skill.percentageExpertise}
				/>
			</>
		}
		{
			!featured &&
			<>
				<Copy
					kind="profile--skill-name--standard"
					htmlContent={skill.name}
				/>
				<ProfileSkillRatingText>
					: {skill.percentageExpertise}% expertise
				</ProfileSkillRatingText>
				<ProfileSkillRating
					size="small"
					percentageExpertise={skill.percentageExpertise}
				/>
			</>
		}
	</ProfileSkillVisualizationContainer>
);

ProfileSkillVisualization.propTypes = {
	'featured': PropTypes.bool,
	'skill': Skill,
}
