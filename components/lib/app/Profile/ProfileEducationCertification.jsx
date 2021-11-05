import styled from 'styled-components';
import PropTypes from 'prop-types';
import { EducationCertification } from '@jbkr/models-react';
import {
	deviceWidthQuery, color, hiddenBlock, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';


const EducationAndCertificationsContainer = styled.div`
	border-top: .125rem solid ${color({
		'kind': 'Accent',
		'tone': 'Finch',
		'level': 1,
		'format': 'string',
	})};
	margin-bottom: 4rem;
	padding: 2.875rem 0 0;
`;
const EducationAndCertificationMetaList = styled.ul`
	margin: 0;
	padding: 0;
`;
const EducationAndCertificationMetaListItem = styled.li`
	list-style: none;
`;
const EducationAndCertificationMetaListItemLabel = styled.span`
	${hiddenInline}
`;
const EducationAndCertificationDetailsLabel = styled.h4`
	${hiddenBlock}
`;
export const ProfileEducationCertification = ({
	educationCertification,
}) => (
	<EducationAndCertificationsContainer>
		<Copy kind="profile--education-certification--title">
			{educationCertification.header}
		</Copy>
		<EducationAndCertificationMetaList>
			<EducationAndCertificationMetaListItem>
				<EducationAndCertificationMetaListItemLabel>
					{educationCertification.type === 'certification' ? 'Organization: ' : 'Objective: '}
				</EducationAndCertificationMetaListItemLabel>
				<Copy kind="profile--education-certification--tagline">
					{educationCertification.tagline}
				</Copy>
			</EducationAndCertificationMetaListItem>
			{
				educationCertification.endYear && educationCertification.startYear &&
				<EducationAndCertificationMetaListItem>
					<EducationAndCertificationMetaListItemLabel>
						Dates:&nbsp;
					</EducationAndCertificationMetaListItemLabel>
					<Copy
						kind="profile--education-certification--dates"
						htmlContent={`${educationCertification.startYear} &mdash; ${educationCertification.endYear}`}
					/>
				</EducationAndCertificationMetaListItem>
			}
			{
				educationCertification.endYear && !educationCertification.startYear &&
				<EducationAndCertificationMetaListItem>
					<EducationAndCertificationMetaListItemLabel>
						Dates:&nbsp;
					</EducationAndCertificationMetaListItemLabel>
					<Copy
						kind="profile--education-certification--dates"
						htmlContent={`${educationCertification.endYear}`}
					/>
				</EducationAndCertificationMetaListItem>
			}
		</EducationAndCertificationMetaList>
		{
			educationCertification.details &&
			<>
				<EducationAndCertificationDetailsLabel>
					More Details
				</EducationAndCertificationDetailsLabel>
				<Copy
					kind="copy-container--standard"
					htmlContent={educationCertification.details}
				/>
			</>
		}
	</EducationAndCertificationsContainer>
);

ProfileEducationCertification.propTypes = {
	'educationCertification': EducationCertification,
}
