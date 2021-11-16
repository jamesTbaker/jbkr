import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../..';



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
		padding-left: 2rem;
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
			padding-left: 2rem;
			li {
				list-style-type: none;
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
			}
		}
`;
const ArticleTableOfContentsFauxHeader = styled.span`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: flex;
		height: 3rem;
		margin: 0 0 2rem 2rem;
		&:before {
			content: "TOC";
		}
		&:after {
			content: "";
			flex-grow: 1;
			margin-left: 1.5rem;
			margin-bottom: 1.5rem;
			border-bottom: solid 0.125rem ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 31,
				'format': 'string',
			})};
		}
	}
`;



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
	}
`;
const ArticleHeader = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ $backgroundImage }) => `background-image: url('${$backgroundImage}');`
		}
		background-size: 50% auto;
		background-position: top 0 right 0;
		background-repeat: no-repeat;
	}
`;
const ArticleTitleConstrainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 75%;
		padding: 15rem 0 3rem;
	}
`;
const ArticleTitle = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		h1 {
			display: inline;
			border-radius: .375rem;
			background-image: linear-gradient(
				to bottom,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 31,
					'format': 'string'
				})} 0%,
				${color({
					'kind': 'Neutral',
					'tone': 'Finch',
					'level': 31,
					'format': 'string'
				})} 100%
			);
		}
	}
`;
const ArticleTaglineAndMetaContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 50%;
		padding-right: 3rem;
	}
`;
const ArticleTagline = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 0 6rem 3rem 0;
	}
`;
const ArticleBriefStatements = styled.ul`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		margin: 0;
		padding: 0 0 3rem;
	}
`;
const ArticleBriefStatement = styled.li`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		list-style-type: none;
		padding: 1rem 0;
		/* background-size: auto calc(100% - .25rem);
		background-position-y: -10%;
		background-image: linear-gradient(
			transparent 100%,
			${color({
				'kind': 'Accent',
				'tone': 'Finch',
				'level': 1,
				'format': 'string'
			})} calc(100% + .25rem)
		); */
	}
`;
const ArticleMetaContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const ArticleMetaFauxHeader = styled.span`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: flex;
		height: 3rem;
		&:after {
			content: "META";
		}
		&:before {
			content: "";
			flex-grow: 1;
			margin-right: 1.5rem;
			margin-bottom: 1.5rem;
			border-bottom: solid 0.125rem ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 31,
				'format': 'string',
			})};
		}
	}
`;
const DatesAndStatsLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 6rem 6rem;
		grid-template-areas:	"topLeft topRight"
								"bottomLeft bottomRight";
	}
`;
const DateOrStatLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${({ $gridArea }) => `grid-area: ${$gridArea}` }
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
			<ArticleHeader
				$backgroundImage={frontMatter.headImage.url}
			>
				<ArticleTitleConstrainer>
					<ArticleTitle>
						<Copy
							kind="article--title"
							htmlContent={title}
						/>
					</ArticleTitle>
				</ArticleTitleConstrainer>
				<ArticleTaglineAndMetaContainer>
					{
						frontMatter.briefStatements &&
						frontMatter.briefStatements.length === 1 &&
						<ArticleTagline>
							<Copy
								kind="article--tagline"
								htmlContent={frontMatter.briefStatements[0].content}
							/>
						</ArticleTagline>
					}
					{
						frontMatter.briefStatements &&
						frontMatter.briefStatements.length > 1 &&
						<ArticleBriefStatements>
							{
								frontMatter.briefStatements.map((
									briefStatement,
									briefStatementIndex,
								) =>
									<ArticleBriefStatement
										key={briefStatement.key}
									>
										<Copy
											kind="article--tagline"
											htmlContent={briefStatement.content}
										/>
									</ArticleBriefStatement>,
								)
							}
						</ArticleBriefStatements>
					}
					<ArticleMetaContainer>
						<Copy
							kind="article--faux-subheader"
						>
							<ArticleMetaFauxHeader />
						</Copy>
						<DatesAndStatsLargeDevice>
							{
								frontMatter.updateDate &&
								<DateOrStatLargeDevice
									$gridArea="topLeft"
								>
									Updated: {frontMatter.updateDate}
								</DateOrStatLargeDevice>
							}
								<DateOrStatLargeDevice
									$gridArea={frontMatter.updateDate ? 'topRight' : 'topLeft'}
								>
									Published: {frontMatter.publicationDate}
								</DateOrStatLargeDevice>

						</DatesAndStatsLargeDevice>
					</ArticleMetaContainer>
				</ArticleTaglineAndMetaContainer>
			</ArticleHeader>
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
					kind="article--faux-subheader"
				>
					<ArticleTableOfContentsFauxHeader />
				</Copy>
				<Copy
					kind="article--expanded-table-of-contents"
					htmlContent={frontMatter.tableOfContents}
				/>
			</ExpandedTableOfContentsListContainer>
		</ExpandedTableOfContentsContainer>
	</ArticleContainer>
);
