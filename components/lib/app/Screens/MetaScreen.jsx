import { AppScaffold } from '../Common/AppScaffold';
import { Meta } from '../Meta/Meta';

export const MetaScreen = ({
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
		<Meta
			title={main.title}
			mainContent={main.textContentItems.main}
		/>
	</AppScaffold>
);
