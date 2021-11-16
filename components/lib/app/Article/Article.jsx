import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../..';


const ArticleContainer = styled.article`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 23rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-columns: 4fr 1fr;
		grid-template-areas: "main tableOfContents";
		width: 100%;
		max-width: 150rem;
		margin: 14rem auto 0;
	}
`;
const MainContentContainer = styled.main.attrs(() => {
	return {
		'id': 'main-content',
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: main;
		background-color: aquamarine;
	}
`;
const ExpandedTableOfContentsContainer = styled.aside.attrs(() => {
	return {
		'aria-label': 'Page Complimentary Information',
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		grid-area: tableOfContents;
		height: 100%;
		padding-left: 4rem;
	}
`;
const ExpandedTableOfContentsListContainer = styled.nav.attrs(() => {
	return {
		'id': 'expanded-table-of-contents',
		'aria-label': 'Page Table of Contents',
	};
})`
		position: sticky;
		top: 29rem;
		ol {
			margin: 0;
			padding: 0;
			li {
				list-style-type: none;
				margin-bottom: 2rem;
				a {
					display: block;
					text-decoration: none;
					margin-bottom: 2rem;
					color: ${color({
						'kind': 'Brand',
						'tone': 'Peony',
						'level': 4,
						'format': 'string'
					})};
					border-radius: .375rem;
					transition: background 250ms ease;
					&:hover {
						color: ${color({
							'kind': 'Brand',
							'tone': 'Peony',
							'level': 2,
							'format': 'string'
						})};
						background-color: ${color({
							'kind': 'Neutral',
							'tone': 'Finch',
							'level': 35,
							'format': 'string'
						})};
					}
					&:focus {
						padding: 0 .5rem;
						margin-right: 0 .25rem;
						outline: none;
						box-shadow: 0 0 0 .25rem ${color({
							'kind': 'Neutral',
							'tone': 'Finch',
							'level': 41,
							'format': 'string'
						})}, 0 0 0 .5rem ${color({
							'kind': 'Accent',
							'tone': 'Finch',
							'level': 1,
							'format': 'string'
						})};
					}
				}
				ol {
					padding-left: 2rem;
				}
			}
		}
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
			Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main Main
		</MainContentContainer>
		{/* <CompressedTableOfContentsContainer>
			<CompressedTableOfContentsCollapsibleContainer>
				<Collapsible
					button={{
						'size': 'small',
						'surfaceStyle': 'outlined',
						'contextColor': 'onDark',
						'text': 'Contents'
					}}
					internalID="&ARrHqR&QJJVMLnA&3@rdsZN"
					copyKind="profile--table-of-contents-item--anchor--not-large-device"
				>
					<CompressedTableOfContentsListContainer
						sectionProperties={sectionProperties}
					/>
				</Collapsible>
			</CompressedTableOfContentsCollapsibleContainer>
		</CompressedTableOfContentsContainer> */}
		<ExpandedTableOfContentsContainer>
			<ExpandedTableOfContentsListContainer>
				<Copy
					kind="article--expanded-table-of-contents"
					htmlContent={frontMatter.tableOfContents}
				/>
			</ExpandedTableOfContentsListContainer>
		</ExpandedTableOfContentsContainer>
	</ArticleContainer>
);
