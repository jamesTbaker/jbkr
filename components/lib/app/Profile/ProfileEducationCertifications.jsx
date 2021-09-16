import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ProfileEducationCertification } from './ProfileEducationCertification';

export const ProfileEducationCertifications = ({
	educationCertification,
}) => (
	<>
		<Copy kind="h2">Education and Certifications</Copy>
		{
			educationCertification.map((educationCertificationItem) =>
				<ProfileEducationCertification
					key={educationCertificationItem.key}
					educationCertification={educationCertificationItem}
				/>
			)
		}
	</>
);
