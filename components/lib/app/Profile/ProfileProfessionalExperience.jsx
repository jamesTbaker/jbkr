import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
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
const JobDescription = styled.div`
	margin: 1rem 0 0;
	${deviceWidthQuery.not({ 'width': 's' })} {
		grid-area: jobBody;
	}
`;
export const ProfileProfessionalExperience = ({
	professionalExperience,
}) => {
	const description =
		professionalExperience.description.startsWith('<li>') ||
		professionalExperience.description.startsWith('\n<li>') ?
		`<ul>${professionalExperience.description}<ul>` :
		professionalExperience.description;
	return (
		<JobContainer>
			<JobMetaContainer>
				<Copy
					kind="profile--experience--job-title"
				>
					{professionalExperience.title}
				</Copy>
				<Copy
					kind="profile--experience--job-employer"
				>
					{professionalExperience.employer}
				</Copy>
				<Copy
					kind="profile--experience--job-dates"
				>
					{professionalExperience.startDate} &mdash; {professionalExperience.endDate}
				</Copy>
			</JobMetaContainer>
			<JobDescription>
				<Copy
					kind="copy-container--standard"
					htmlContent={`${description}`}
				/>
			</JobDescription>
		</JobContainer>
	);
};
