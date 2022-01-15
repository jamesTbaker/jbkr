import PropTypes from 'prop-types';
import { Meta, Header, Footer } from '@jbkr/models-react';
import { AppScaffold } from '../Layout/AppScaffold';
import { Contact } from '../Contact/Contact';

export const ContactScreen = ({
	meta,
	header,
	main,
	footer,
}) => (
	<AppScaffold
		meta={meta}
		header={header}
		footer={footer}
	>
		<Contact
			title={main.title}
			media={main.mediaContentItems}
			text={main.textContentItems}
			channels={header.links.secondary.filter(
				channel =>
				channel.url.startsWith('http')
			)}
		/>
	</AppScaffold>
);
ContactScreen.propTypes = {
	/** Data for the app's `<head>`. */
	'meta': Meta,
	/** Data for AppHeader */
	'header': Header,
	/** Data for child(ren) of `<MainContent>`. */
	'main': PropTypes.object,
	/** Data for AppFooter */
	'footer': Footer,
};
