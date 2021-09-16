import { Scaffold } from '../Layout/Scaffold';
import { MainContent } from '../Layout/MainContent';
import { ArticleSummaries } from '../Articles/ArticleSummaries';


export const LibLabScreen = ({
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
			<ArticleSummaries
				title={main.title}
				articles={main.articles}
			/>
		</MainContent>
	</Scaffold>
);
