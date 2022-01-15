import PropTypes from 'prop-types';
import { Meta, Header, Footer } from '@jbkr/models-react';
import { AppScaffold } from '../Common/AppScaffold';
import { Profile } from '../Profile/Profile';

export const ProfileScreen = ({
	meta,
	header,
	main,
	footer,
}) => (
	<AppScaffold
		meta={meta}
		header={header}
		footer={footer}
		hasTableOfContents={true}
	>
		<Profile
			title={main.title}
			skills={main.skills}
			professionalExperiences={main.professionalExperiences}
			educationCertifications={main.educationCertifications}
			volunteerExperiences={main.volunteerExperiences}
			sectionProperties={main.dataContentItems.sectionProperties}
			media={main.mediaContentItems}
		/>
	</AppScaffold>
);
ProfileScreen.propTypes = {
	/** Data for the app's `<head>`. */
	'meta': Meta,
	/** Data for AppHeader */
	'header': Header,
	/** Data for child(ren) of `<MainContent>`. */
	'main': PropTypes.object,
	/** Data for AppFooter */
	'footer': Footer,
};
