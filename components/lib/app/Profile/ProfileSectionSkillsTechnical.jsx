import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProfileSection } from './ProfileSection';
import { ProfileSectionHeader } from './ProfileSectionHeader';
import { ProfileSkillVisualization } from './ProfileSkillVisualization';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../..';


const FeaturedVisualizedSkillsContainer = styled.ul`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin: 0 0 3rem 0;
		padding: 0;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0;
		padding: 0;
	}
`;
const StandardVisualizedSkillsContainer = styled.ul`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin: 0;
		padding: 0;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0;
		padding: 0;
	}
`;
export const ProfileSectionSkillsTechnical = ({
	videoLargeScreen,
	videoNotLargeScreen,
	imageLargeScreen,
	imageNotLargeScreen,
	sectionHeaderContent,
	skills,
}) => (
	<ProfileSection
		videoLargeScreen={videoLargeScreen}
		videoNotLargeScreen={videoNotLargeScreen}
		imageLargeScreen={imageLargeScreen}
		imageNotLargeScreen={imageNotLargeScreen}
	>
		<ProfileSectionHeader
			content={sectionHeaderContent}
		/>
		{
			skills.featured && skills.featured[0] &&

			<>
				<Copy
					kind="hidden-block"
					tagOverride="h3"
				>
					Featured
				</Copy>
				<FeaturedVisualizedSkillsContainer>
					{
						skills.featured.map((skill) =>
							<ProfileSkillVisualization
								key={skill.key}
								skill={skill}
								featured
							/>
						)
					}
				</FeaturedVisualizedSkillsContainer>
			</>
		}
		{
			skills.standard && skills.standard[0] &&

			<>
				<Copy
					kind="hidden-block"
					tagOverride="h3"
				>
					Standard
				</Copy>
				<StandardVisualizedSkillsContainer>
					{
						skills.standard.map((skill) =>
							<ProfileSkillVisualization
								key={skill.key}
								skill={skill}
							/>
						)
					}
				</StandardVisualizedSkillsContainer>
			</>
		}
	</ProfileSection>
);

/* ProfileSectionSkillsTechnical.propTypes = {
} */
