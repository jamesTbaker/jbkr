import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';

const ProfileSkillVisualizationContainer = styled.div`
	background-color: #223;
	${
		({ $featured }) => {
			if ($featured) {
				return `
					border-top: solid .5rem ${color({
						'kind': 'Accent',
						'tone': 'Finch',
						'level': 1,
						'format': 'string',
					})};
					padding: 2.5rem 2rem 3rem 2rem;
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
					padding: 1.875rem 0 2rem 0;
				`;
			}
		}
	}
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
			<Copy
				kind="profile--skill-name--featured"
				htmlContent={`${skill.percentageExpertise}% &mdash; ${skill.name}`}
			/>
		}
		{
			!featured &&
			<Copy
				kind="profile--skill-name--standard"
				htmlContent={`${skill.percentageExpertise}% &mdash; ${skill.name}`}
			/>
		}
	</ProfileSkillVisualizationContainer>
);
