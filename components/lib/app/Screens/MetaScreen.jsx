import { AppScaffold } from '../Common/AppScaffold';
import { MainContent } from '../Common/MainContent';

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
		<MainContent>
			{/* <h1>{main.title}</h1>
			<p
				dangerouslySetInnerHTML={{ '__html': main.contentItems.main }}
			/> */}
		</MainContent>
	</AppScaffold>
);
