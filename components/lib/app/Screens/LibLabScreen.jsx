import { AppScaffold } from '../Layout/AppScaffold';
import { MainContent } from '../Layout/MainContent';
import { ArticleSummaries } from '../Articles/ArticleSummaries';


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
		<MainContent>
			<ArticleSummaries
				title={main.title}
				articles={main.articles}
			/>
		</MainContent>
	</AppScaffold>
);
