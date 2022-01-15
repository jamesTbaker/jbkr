import { AppScaffold } from '../Common/AppScaffold';

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
		{/* <h1>{main.title}</h1>
		<p
			dangerouslySetInnerHTML={{ '__html': main.contentItems.main }}
		/> */}
	</AppScaffold>
);
