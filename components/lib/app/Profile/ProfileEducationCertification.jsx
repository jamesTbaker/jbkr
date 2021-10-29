import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';


const EducationAndCertificationsContainer = styled.div`
	border-top: .125rem solid ${color({
		'kind': 'Accent',
		'tone': 'Finch',
		'level': 1,
		'format': 'string',
	})};
	padding: 2.875rem 0 4rem;
`;
export const ProfileEducationCertification = ({
	educationCertification,
}) => {
	const details =
		educationCertification.details.startsWith('<li>') ||
		educationCertification.details.startsWith('\n<li>') ?
		`<ul>${educationCertification.details}<ul>` :
		educationCertification.details;
	return (
		<EducationAndCertificationsContainer>
			<Copy kind="profile--education-certification--title">
				{educationCertification.header}
			</Copy>
			<Copy kind="profile--education-certification--tagline">
				{educationCertification.tagline}
			</Copy>
			{
				educationCertification.endYear && educationCertification.startYear &&
				<Copy
					kind="profile--education-certification--dates"
					htmlContent={`${educationCertification.startYear} &mdash; ${educationCertification.endYear}`}
				/>
			}
			{
				educationCertification.endYear && !educationCertification.startYear &&
				<Copy
					kind="profile--education-certification--dates"
					htmlContent={`${educationCertification.endYear}`}
				/>
			}
			{
				educationCertification.details &&
				<Copy
					kind="copy-container--standard"
					htmlContent={details}
				/>
			}
		</EducationAndCertificationsContainer>
	);
};
