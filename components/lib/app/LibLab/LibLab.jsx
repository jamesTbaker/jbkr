import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Brand } from '../../..';
import { Button } from '../../core/Button/Button';
import { ArticleSummary } from './ArticleSummary';


const LibLabContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: relative;
		width: 100%;
		max-width: 180rem;
		margin: 14rem auto 0;
		text-align: center;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})``;
const LibLabHeader = styled.header`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 0 2rem 4rem 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: calc(100% - 4rem);
		max-width: 150rem;
		margin: 0 auto;
		padding: 15rem 0 0 0;
		text-align: left;
	}
`;
const LibLabBody = styled.div`
	width: 100%;
	text-align: center;
`;
const LibLabBodyConstrainer = styled.div`
	max-width: 162rem;
	margin: 0 auto;
	text-align: left;
`;
const TopAndFeaturedArticleSummariesContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-columns: calc(62% - 2rem) calc(38% - 2rem);
		grid-column-gap: 4rem;
	}
`;
const TopArticleSummariesContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-top: 4rem;
	}
`;
const FeaturedArticleSummaryContainer = styled.div``;
const StandardArticleSummariesContainer = styled.div`
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-columns: repeat(auto-fill, calc((100% - 8rem) / 3));
		grid-gap: 4rem;
		padding-top: 4rem;
	}
`;
export const LibLab = ({
	title,
	articles,
}) => (
	<LibLabContainer>
		<MainContentContainer>
			<LibLabHeader>
				<Copy
					kind="landmark-title"
				>
					{title}
				</Copy>
			</LibLabHeader>
			<LibLabBody>
				<LibLabBodyConstrainer>
					<TopAndFeaturedArticleSummariesContainer>
						<TopArticleSummariesContainer>
							{
								articles.standard.filter(
									(articleSummary, articleSummaryIndex) =>
										articleSummaryIndex < 2
								).map((articleSummary) =>
									<ArticleSummary
										title={articleSummary.title}
										tagline={articleSummary.tagline}
										slug={articleSummary.slug}
										publicationDate={articleSummary.publicationDate}
										updateDate={articleSummary.updateDate}
										teaserDescription={articleSummary.teaserDescription}
										teaserImages={articleSummary.teaserImages}
										type="top"
										key={articleSummary.key}
									/>
								)
							}
						</TopArticleSummariesContainer>
						{
							articles.featured && articles.featured[0] &&
							<FeaturedArticleSummaryContainer>
								<ArticleSummary
									title={articles.featured[0].title}
									tagline={articles.featured[0].tagline}
									slug={articles.featured[0].slug}
									publicationDate={articles.featured[0].publicationDate}
									updateDate={articles.featured[0].updateDate}
									teaserDescription={articles.featured[0].teaserDescription}
									teaserImages={articles.featured[0].teaserImages}
									featuredTeaserVideo={articles.featured[0].featuredTeaserVideo}
									type="featured"
									key={articles.featured[0].key}
								/>
							</FeaturedArticleSummaryContainer>
						}
					</TopAndFeaturedArticleSummariesContainer>
					<StandardArticleSummariesContainer>
						{
							articles.standard.filter(
								(articleSummary, articleSummaryIndex) =>
									articleSummaryIndex >= 2
							).map((articleSummary) =>
								<ArticleSummary
									title={articleSummary.title}
									tagline={articleSummary.tagline}
									slug={articleSummary.slug}
									publicationDate={articleSummary.publicationDate}
									updateDate={articleSummary.updateDate}
									teaserDescription={articleSummary.teaserDescription}
									teaserImages={articleSummary.teaserImages}
									type="standard"
									key={articleSummary.key}
								/>
							)
						}
					</StandardArticleSummariesContainer>
				</LibLabBodyConstrainer>
			</LibLabBody>
		</MainContentContainer>
	</LibLabContainer>
);

LibLab.propTypes = {
	'title': PropTypes.string,
}
