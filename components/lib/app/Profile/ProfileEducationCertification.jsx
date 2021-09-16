import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';

export const ProfileEducationCertification = ({
	educationCertification,
}) => (
	<>
		<Copy kind="h3">{educationCertification.header}</Copy>
		<div>
			{educationCertification.tagline}
		</div>
		{
			educationCertification.endYear && educationCertification.startYear &&
			<div
				dangerouslySetInnerHTML={{ '__html': `${educationCertification.startYear}&mdash;${educationCertification.endYear}` }}
			/>
		}
		{
			educationCertification.endYear && !educationCertification.startYear &&
			<div
				dangerouslySetInnerHTML={{ '__html': `${educationCertification.endYear}` }}
			/>
		}
		{
			educationCertification.details &&
			<div
				dangerouslySetInnerHTML={{ '__html': `${educationCertification.details}` }}
			/>
		}

	</>
);
