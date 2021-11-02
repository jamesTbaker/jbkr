import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { ProfileSkillRating } from './ProfileSkillRating';

const ProfileSkillVisualizationContainer = styled.li`
	break-inside: avoid;
	margin-bottom: 2rem;
	list-style: none;
	${
		({ $featured }) => {
			if ($featured) {
				return `
					border-radius: .375rem;
					border-top: solid .5rem ${color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string',
					})};
					padding: 2.5rem 2rem 0 2rem;
					height: 11rem;
					background-color: ${color({
						'kind': 'Neutral',
						'tone': 'Finch',
						'level': 35,
						'format': 'string',
					})};
					${deviceWidthQuery.only({ 'width': 'm' })} {
						width: calc(50% - 1rem);
					}
					${deviceWidthQuery.only({ 'width': 'l' })} {
						width: calc(33% - 1.125rem);
						height: 15rem;height: 15rem;
					}
				`;
			}
			if (!$featured) {
				return `
					border-top: solid .125rem ${color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string',
					})};
					padding: 1.875rem 0 0 0;
					height: 8rem;
					${deviceWidthQuery.only({ 'width': 'm' })} {
						width: calc(33% - 1rem);
					}
					${deviceWidthQuery.only({ 'width': 'l' })} {
						width: calc(25% - 1.125rem);
						height: 10rem;
					}
				`;
			}
		}
	}
`;
const ProfileSkillRatingText = styled.span`
	${hiddenInline}
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
