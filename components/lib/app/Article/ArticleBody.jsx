import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';


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
export const ArticleBody = ({
	bodyContent,
	tableOfContents,
}) => (
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
);
