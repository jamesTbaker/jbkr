import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
// import { ArticleHeader } from './ArticleHeader';
import { ArticleBody } from './ArticleBody';


const ArticleContainer = styled.article`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		width: 100%;
		max-width: 180rem;
		margin: 14rem auto 0;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})``;
const ArticleHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-top: 15rem;
		text-align: center;
		${
			({ $headImages }) => `background-image: url('${$headImages.large.url}');`
		}
	}
`;
const ArticleHeaderConstrainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 100%;
		max-width: 160rem;
		margin: 0 auto;
		border-radius: .375rem .375rem 0 0;
		background-image:
			linear-gradient(
				to bottom,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 34,
					'alpha': .9,
					'format': 'string'
				})},
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 37,
					'format': 'string'
				})}
			);
	}
`;
const ArticleHeaderContentConstrainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 100%;
		max-width: 150rem;
		margin: 0 auto;
		padding-top: 9rem;
		text-align: left;
		display: grid;
		grid-template-columns: 65fr 35fr;
		grid-template-areas: "main meta";
	}
`;
const ArticleHeaderMain = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: main;
		padding: 0 4rem 4rem 0;
	}
`;
const ArticleHeaderMeta = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: meta;
		padding: 0 0 4rem 9rem;
		border-left: solid 1px aquamarine;
	}
`;
const ArticleBodyContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		width: 100%;
		text-align: center;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const ArticleBodyConstrainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 100%;
		max-width: 150rem;
		margin: 0 auto;
		padding-top: 6rem;
		text-align: left;
		display: grid;
		grid-template-columns: 65fr 35fr;
		grid-template-areas: "main tableOfContents";
	}
`;
const ArticleBodyMain = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: main;
		padding: 0 4rem 0 0;
	}
`;
const ArticleBodyAside = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: tableOfContents;
		padding: 0 0 0 9rem;
		border-left: solid 1px aquamarine;
	}
`;
const TableOfContentsContainer = styled.div`
		position: sticky;
		top: 20rem;
`;
const Sample = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
export const Article = ({
	title,
	frontMatter,
	mainContent,
}) => (
	<ArticleContainer>
		<MainContentContainer>
			<ArticleHeader
				$headImages={frontMatter.headImages}
			>
				<ArticleHeaderConstrainer>
					<ArticleHeaderContentConstrainer>
						<ArticleHeaderMain>
							Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main
						</ArticleHeaderMain>
						<ArticleHeaderMeta>
							Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta Meta
						</ArticleHeaderMeta>
					</ArticleHeaderContentConstrainer>
				</ArticleHeaderConstrainer>
				{
					/*
						{
							headImage && headImage.credit &&
							<Copy
								kind="small"
								htmlContent={headImage.credit}
							/>
						}
						<Copy
							kind="h1"
							htmlContent={title}
						/>
						{
							updateDate &&
							<Copy kind="body--standard">
								{`Updated: ${updateDate}`}
							</Copy>
						}
						<Copy kind="body--standard">
							{`Published: ${publicationDate}`}
						</Copy>
						<Copy kind="body--standard">
							{stats}
						</Copy>
						{
							tagline &&
							<Copy
								kind="body--standard"
								htmlContent={tagline}
							/>
						}
					*/
				}
			</ArticleHeader>



			{/*
				<ArticleHeader
					headImages={frontMatter.headImages}
					title={title}
					updateDate={frontMatter.updateDate}
					publicationDate={frontMatter.publicationDate}
					stats={frontMatter.stats}
					tagline={frontMatter.tagline}
				/>
				<ArticleBody
					bodyContent={mainContent}
					tableOfContents={frontMatter.tableOfContents}
				/>
			*/}


			<ArticleBodyContainer>
				<ArticleBodyConstrainer>
					<ArticleBodyMain>
						Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main
					</ArticleBodyMain>
					<ArticleBodyAside>
						<TableOfContentsContainer>
							Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside Aside
						</TableOfContentsContainer>
					</ArticleBodyAside>
				</ArticleBodyConstrainer>
			</ArticleBodyContainer>
		</MainContentContainer>
	</ArticleContainer>
);
