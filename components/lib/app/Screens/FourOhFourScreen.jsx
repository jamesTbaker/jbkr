import PropTypes from 'prop-types';
import { Meta, Header, Footer } from '@jbkr/models-react';
import { AppScaffold } from '../Layout/AppScaffold';
import { FourOhFour } from '../FourOhFour/FourOhFour';

export const FourOhFourScreen = ({
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
		<FourOhFour
			title={main.title}
			media={main.mediaContentItems}
			text={main.textContentItems}
			links={header.links.primary.filter(
				link =>
				link.url !== '/contact'
			)}
		/>
	</AppScaffold>
);
