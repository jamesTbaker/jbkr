import styled from 'styled-components';
import { ProfessionalExperience } from '@jbkr/models-react';
import {
	deviceWidthQuery, color, hiddenBlock, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';


const JobContainer = styled.div`
	border-top: .125rem solid ${color({
		'kind': 'Accent',
		'tone': 'Finch',
		'level': 1,
		'format': 'string',
	})};
	padding: 2.875rem 0 4rem;
	${deviceWidthQuery.not({ 'width': 's' })} {
		display: grid;
		grid-template-areas:"jobMeta jobBody";
		grid-template-rows: auto;
		grid-template-columns: 2fr 3fr;
		grid-gap: 3rem;
	}
`;
const JobMetaContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 's' })} {
		grid-area: jobMeta;
	}
`;
const JobMetaList = styled.ul`
	margin: 0;
	padding: 0;
`;
const JobMetaListItem = styled.li`
	list-style: none;
`;
const JobMetaListItemLabel = styled.span`
	${hiddenInline}
`;
const JobDescriptionLabel = styled.h4`
	${hiddenBlock}
`;
const JobDescription = styled.div`
	margin: 1rem 0 0;
	${deviceWidthQuery.not({ 'width': 's' })} {
		grid-area: jobBody;
	}
`;
export const ProfileProfessionalExperience = ({
	professionalExperience,
}) => (
	<JobContainer>
		<JobMetaContainer>
			<Copy
				kind="profile--experience--job-title"
			>
				{professionalExperience.title}
			</Copy>
			<JobMetaList>
				<JobMetaListItem>
					<JobMetaListItemLabel>Employer: </JobMetaListItemLabel>
					<Copy
						kind="profile--experience--job-employer"
					>
						{professionalExperience.employer}
					</Copy>
				</JobMetaListItem>
				<JobMetaListItem>
					<JobMetaListItemLabel>Dates: </JobMetaListItemLabel>
					<Copy
						kind="profile--experience--job-dates"
					>
						{professionalExperience.startDate} &mdash; {professionalExperience.endDate}
					</Copy>
				</JobMetaListItem>
			</JobMetaList>
		</JobMetaContainer>
		<JobDescriptionLabel>Responsibilities and Achievements</JobDescriptionLabel>
		<JobDescription>
			<Copy
				kind="copy-container--standard"
				htmlContent={professionalExperience.description}
			/>
		</JobDescription>
	</JobContainer>
);

ProfileProfessionalExperience.propTypes = {
	'professionalExperience': ProfessionalExperience,
}
