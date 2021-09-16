import { Scaffold } from '../Layout/Scaffold';
import { MainContent } from '../Layout/MainContent';
import { Profile } from '../Profile/Profile';

export const ProfileScreen = ({
	meta,
	header,
	main,
	footer,
}) => (
	<Scaffold
		meta={meta}
		header={header}
		footer={footer}
	>
		<MainContent>
			<Profile
				title={main.title}
				skills={main.skills}
				professionalExperiences={main.professionalExperiences}
				educationCertification={main.educationCertification}
				volunteerExperiences={main.volunteerExperiences}
			/>
		</MainContent>
	</Scaffold>
);
