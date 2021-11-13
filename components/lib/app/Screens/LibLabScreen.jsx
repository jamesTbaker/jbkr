import PropTypes from 'prop-types';
import { Meta, Header, Footer } from '@jbkr/models-react';
import { AppScaffold } from '../Layout/AppScaffold';
import { LibLab } from '../LibLab/LibLab';


export const LibLabScreen = ({
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
		<LibLab
			title={main.title}
			articles={main.articles}
		/>
	</AppScaffold>
);
LibLabScreen.propTypes = {
	/** Data for the app's `<head>`. */
	'meta': Meta,
	/** Data for AppHeader */
	'header': Header,
	/** Data for child(ren) of `<MainContent>`. */
	'main': PropTypes.object,
	/** Data for AppFooter */
	'footer': Footer,
};
