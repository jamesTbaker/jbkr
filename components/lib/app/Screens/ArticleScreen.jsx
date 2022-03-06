import { AppScaffold } from '../Common/AppScaffold';
import { Article } from '../Article/Article';
export const ArticleScreen = ({
	meta,
	header,
	main,
	footer,
}) => (
	<AppScaffold
		meta={meta}
		header={header}
		footer={footer}
		hasTableOfContents={
			main.article.frontMatter.tableOfContents ? true : false
		}
	>
		<Article
			meta={{
				'slug': meta.slug,
				'metaDescription': meta.metaDescription,
			}}
			frontMatter={{
				'title': main.title,
				...main.article.frontMatter,
			}}
			mainContent={main.article.mainContent}
		/>
	</AppScaffold>
);
