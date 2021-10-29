import PropTypes from 'prop-types';
import { AppScaffold } from '../Layout/AppScaffold';
import { MainContent } from '../Layout/MainContent';
import { Aside } from '../Layout/Aside';
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
		/>
	</AppScaffold>
);
ProfileScreen.propTypes = {
	/** Data for the app's `<head>`. */
	'meta': PropTypes.shape({
		'slug': PropTypes.string.isRequired,
		'metaTitle': PropTypes.string.isRequired,
		'metaDescription': PropTypes.string.isRequired,
		'socialDescription': PropTypes.string.isRequired,
		'openGraphType': PropTypes.string.isRequired,
		'metaImage': PropTypes.shape({
			'url': PropTypes.string.isRequired,
			'alternativeText': PropTypes.string.isRequired,
			'type': PropTypes.string.isRequired,
		}),
		'metaOther': PropTypes.arrayOf(PropTypes.shape({
			'key': PropTypes.string.isRequired,
			'property': PropTypes.string.isRequired,
			'content': PropTypes.string.isRequired,
		}))
	}),
	/** Data for AppHeader */
	'header': PropTypes.shape({
		'links': PropTypes.shape({
			'primary': PropTypes.arrayOf(
				PropTypes.shape({
					'key': PropTypes.string.isRequired,
					'anchorText': PropTypes.string.isRequired,
					'anchorIconBefore': PropTypes.string,
					'url': PropTypes.string.isRequired,
					'forThisScreen': PropTypes.bool,
				})
			),
			'secondary': PropTypes.arrayOf(
				PropTypes.shape({
					'key': PropTypes.string.isRequired,
					'anchorText': PropTypes.string.isRequired,
					'anchorIconBefore': PropTypes.string,
					'url': PropTypes.string.isRequired,
				})
			),
		}),
		'announcement': PropTypes.shape({
			'bodyAnchor': PropTypes.string.isRequired,
			'bodyURL': PropTypes.string.isRequired,
			'preface': PropTypes.string.isRequired,
		}),
	}),
	/** Data for AppFooter */
	'footer': PropTypes.shape({
		'content': PropTypes.string,
	}),
	/** Data for child(ren) of `<MainContent>`. */
	'main': PropTypes.object,
};
