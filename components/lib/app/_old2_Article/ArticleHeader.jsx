import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';

const ArticleHeaderContainer = styled.div`
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
const Sample = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
export const ArticleHeader = ({
	headImages,
	title,
	updateDate,
	publicationDate,
	stats,
	tagline,
}) => (
	<ArticleHeaderContainer
		$headImages={headImages}
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
		{/* {
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
		} */}
	</ArticleHeaderContainer>
);
