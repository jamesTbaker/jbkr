import { Scaffold } from '../Layout/Scaffold';
import { MainContent } from '../Layout/MainContent';
import { Aside } from '../Layout/Aside';
import { ArticleTableOfContents } from '../Articles/ArticleTableOfContents';
import { ArticleDetail } from '../Articles/ArticleDetail';

export const ArticleScreen = ({
	meta,
	header,
	main,
	footer,
}) => (
	<Scaffold
		meta={meta}
		header={header}
		footer={footer}
		hasTableOfContents={
			main.article.frontMatter.tableOfContents ? true : false
		}
	>
		<MainContent>
			<ArticleDetail
				title={main.title}
				frontMatter={main.article.frontMatter}
				mainContent={main.article.mainContent}
			/>
		</MainContent>
		<Aside>
			{
				main.article.frontMatter.tableOfContents &&
				<ArticleTableOfContents
					contents={main.article.frontMatter.tableOfContents}
				/>
			}
		</Aside>
	</Scaffold>
);
