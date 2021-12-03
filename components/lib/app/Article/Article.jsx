import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';
import { Copy } from '../../..';
import { Button } from '../../..';
import { Line } from '../../..';
import { ArticleSections } from './ArticleSections';


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
const CompressedTableOfContentsContainer = styled.aside.attrs(() => {
	return {
		'aria-label': 'Page Complimentary Information',
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		position: fixed;
		top: 13rem;
		width: 100%;
		padding: 3rem 2rem;
		background-color: ${color({
			'kind': 'Neutral',
			'tone': 'Finch',
			'level': 37,
			'format': 'string',
		})};
		z-index: ${zIndexNumber().compressedTableOfContentsContainer};
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const CompressedTableOfContentsCollapsibleContainer = styled.nav.attrs(() => {
	return {
		'id': 'compressed-table-of-contents',
		'aria-label': 'Page Table of Contents',
	};
})``;
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
				'kind': 'Accent',
				'tone': 'Sunshine',
				'level': 1,
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
		width: calc(100% - 4rem);
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
	${
		({ $backgroundImage }) => `background-image: url('${$backgroundImage}');`
	}
	background-position: top 0 right 0;
	background-repeat: no-repeat;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		background-size: 100% auto;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		background-size: 50% auto;
	}
`;
const ArticleTitleConstrainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 14rem 2rem 3rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 75%;
		padding: 15rem 0 3rem;
	}
`;
const ArticleTitle = styled.div`
	h1 {
		display: inline;
		border-radius: .375rem 0 .375rem 0;
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
		${deviceWidthQuery.only({ 'width': 's' })} {
			line-height: 6rem;
		}
		${deviceWidthQuery.only({ 'width': 'm' })} {
			line-height: 8rem;
		}
		${deviceWidthQuery.only({ 'width': 'l' })} {
			line-height: 10rem;
		}
	}
`;
const ArticleTaglineAndMetaContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		width: calc(100% - 2rem);
		margin: 0 2rem 0 0;
		padding: 3rem 3rem 3rem 2rem;
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
					'alpha': 1,
					'format': 'string'
				})}
			);
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 50%;
		padding-right: 4rem;
	}
`;
const ArticleTagline = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding-bottom: 3rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 0 6rem 3rem 0;
	}
`;
const ArticleBriefStatements = styled.ul`
	margin: 0;
	padding: 0 0 3rem;
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const ArticleBriefStatement = styled.li`
	list-style-type: none;
	padding: 1rem 0;
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
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
				'kind': 'Accent',
				'tone': 'Sunshine',
				'level': 1,
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
		/* grid-template-rows: 8rem 8rem; */
		grid-template-areas:	"topLeft topRight"
								"bottomLeft bottomRight";
	}
`;
const DateOrStatLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${({ $gridArea }) => `grid-area: ${$gridArea};` }
		padding-top: 2rem;
	}
`;
const DatesAndStatsNotLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: none;
	}
`;
const DateOrStatNotLargeDevice = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const SharingOptions = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	column-gap: 2rem;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 3rem 0 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding: 3rem 0;
	}
`;
const ArticleBody = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 4rem 2rem 0;
		h2,
		h3,
		h4,
		h5,
		h6 {
			scroll-margin-top: 23rem;
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-top: 6rem;
		h2,
		h3,
		h4,
		h5,
		h6 {
			scroll-margin-top: 14rem;
		}
	}
`;
const SimpleBody = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 75%;
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
									<div
										key={briefStatement.key}
									>
									{
										briefStatementIndex !== 0 &&
										<Line
											width={10}
											height="s"
											color={{
												'kind': 'Accent',
												'tone': 'Finch',
												'level': 2,
												'format': 'string',
											}}
										/>
									}
									<ArticleBriefStatement>
										<Copy
											kind="article--tagline"
											htmlContent={briefStatement.content}
										/>
									</ArticleBriefStatement>
									</div>
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
									<Copy
										kind="article--meta-item--large-device--label"
									>
										Updated
									</Copy>
									<Copy
										kind="article--meta-item--large-device--value"
									>
										{frontMatter.updateDate}
									</Copy>
								</DateOrStatLargeDevice>
							}
							<DateOrStatLargeDevice
								$gridArea={frontMatter.updateDate ? 'topRight' : 'topLeft'}
							>
								<Copy
									kind="article--meta-item--large-device--label"
								>
									Published
								</Copy>
								<Copy
									kind="article--meta-item--large-device--value"
								>
									{frontMatter.publicationDate}
								</Copy>
							</DateOrStatLargeDevice>
							<DateOrStatLargeDevice
								$gridArea="bottomLeft"
							>
								<Copy
									kind="article--meta-item--large-device--label"
								>
									Length
								</Copy>
								<Copy
									kind="article--meta-item--large-device--value"
								>
									~{frontMatter.stats.words} words
								</Copy>
							</DateOrStatLargeDevice>
							<DateOrStatLargeDevice
								$gridArea="bottomRight"
							>
								<Copy
									kind="article--meta-item--large-device--label"
								>
									Time
								</Copy>
								<Copy
									kind="article--meta-item--large-device--value"
								>
									~{frontMatter.stats.minutes} minutes
								</Copy>
							</DateOrStatLargeDevice>
						</DatesAndStatsLargeDevice>
						<DatesAndStatsNotLargeDevice>
							{
								frontMatter.updateDate &&
								<DateOrStatNotLargeDevice>
									<Copy
										kind="article--meta-item--not-large-device--date--primary"
									>
										Updated {frontMatter.updateDate}
									</Copy>
								</DateOrStatNotLargeDevice>
							}
							<DateOrStatNotLargeDevice>
								<Copy
									kind={
										frontMatter.updateDate ?
										'article--meta-item--not-large-device--date--secondary' :
										'article--meta-item--not-large-device--date--primary'
									}
								>
									{frontMatter.publicationDate}
								</Copy>
							</DateOrStatNotLargeDevice>
							<DateOrStatNotLargeDevice>
								<Copy
									kind="article--meta-item--not-large-device--stats"
								>
									~{frontMatter.stats.words} words // ~{frontMatter.stats.minutes} minutes
								</Copy>
							</DateOrStatNotLargeDevice>
						</DatesAndStatsNotLargeDevice>
						<SharingOptions>
							<Button
								iconBefore="twitter"
								text="Share on Twitter"
								surfaceStyle="outlined"
								textHidden={true}
								url="https://google.com"
							/>
							<Button
								iconBefore="linkedin"
								text="Share on LinkedIn"
								surfaceStyle="outlined"
								textHidden={true}
								url="https://google.com"
							/>
							<Button
								iconBefore="link"
								text="Copy this URL"
								surfaceStyle="outlined"
								textHidden={true}
								url="https://google.com"
							/>
						</SharingOptions>
						<Copy
							kind="copy-container--article-image-credit"
							htmlContent={frontMatter.headImage.credit}
						/>
					</ArticleMetaContainer>
				</ArticleTaglineAndMetaContainer>
			</ArticleHeader>
			<ArticleBody>
				{
					mainContent.simpleBody &&
					<SimpleBody>
						<Copy
							kind="copy-container--standard"
							htmlContent={mainContent.simpleBody}
						/>
					</SimpleBody>
				}
				{
					mainContent.sections &&
					<ArticleSections
						sections={mainContent.sections}
					/>
				}
			</ArticleBody>
		</MainContentContainer>
		<CompressedTableOfContentsContainer>
			<CompressedTableOfContentsCollapsibleContainer>
				{/* <Collapsible
					button={{
						'size': 'small',
						'surfaceStyle': 'outlined',
						'contextColor': 'onDark',
						'text': 'Contents'
					}}
					internalID="v3Wd49fpFK6x2jNkZ6qbmmDC"
					copyKind="article--compressed-table-of-contents"
				>
					<div
						dangerouslySetInnerHTML={{'__html': frontMatter.tableOfContents}}
					/>
				</Collapsible> */}
			</CompressedTableOfContentsCollapsibleContainer>
		</CompressedTableOfContentsContainer>
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
