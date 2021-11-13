import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Brand } from '../../..';
import { Button } from '../../core/Button/Button';
import { LibLabItem } from './LibLabItem';


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
		padding: 0 2rem 8rem 2rem;
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
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-color: pink;
		display: grid;
		grid-template-columns: calc(62% - 2rem) calc(38% - 2rem);
		grid-column-gap: 4rem;
	}
`;
const TopArticleSummariesContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-color: yellow;
		padding-top: 4rem;
	}
`;
const FeaturedArticleSummaryContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-color: #5f5f52;
	}
`;
const StandardArticleSummariesContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-color: orange;
		display: grid;
		grid-gap: 4rem;
		grid-template-columns: repeat(auto-fill, calc((100% - 8rem) / 3));
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
									<LibLabItem
										type="top"
										content={articleSummary}
									/>
								)
							}
						</TopArticleSummariesContainer>
						<FeaturedArticleSummaryContainer>
							<LibLabItem
								type="featured"
								content={articles.featured[0]}
							/>
						</FeaturedArticleSummaryContainer>
					</TopAndFeaturedArticleSummariesContainer>
					<StandardArticleSummariesContainer>
						{
							articles.standard.filter(
								(articleSummary, articleSummaryIndex) =>
									articleSummaryIndex >= 2
							).map((articleSummary) =>
								<LibLabItem
									type="standard"
									content={articleSummary}
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
