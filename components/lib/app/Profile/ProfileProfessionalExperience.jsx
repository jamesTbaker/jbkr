import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';

export const ProfileProfessionalExperience = ({
	professionalExperience,
}) => (
	<>
		<Copy kind="h3">{professionalExperience.title}</Copy>
		<Copy
			kind="small"
			htmlContent={`${professionalExperience.startDate}&mdash;${professionalExperience.endDate}`}
		/>
		<Copy
			kind="body--standard"
			htmlContent={`${professionalExperience.description}`}
		/>

	</>
);
