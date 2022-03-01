import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deviceWidthQuery, color, zIndexNumber } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Button } from '../../core/Button/Button';
import { Line } from '../../primitive/Line/Line';
import { Collapsible } from '../../core/Collapsible/Collapsible';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { MediaItem } from '../Common/MediaItem';
import { ScreenTitleSecondary } from '../Common/ScreenTitleSecondary';
import { ArticleSections } from './ArticleSections';
import { ArticleUnifiedBody } from './ArticleUnifiedBody';


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
		transform: translateY(6rem);
		opacity: 0;
		transition: all 1.5s .5s;
		&.animation-state--final {
			transform: translateY(0);
			opacity: 1;
		}
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
const ExpandedTableOfContentsListContainerTwo = ({
	contentVisible,
	clickHandler,
	sectionProperties,
}) => (
	<ExpandedTableOfContentsList>
		{
			sectionProperties.map(item =>
				<ExpandedTableOfContentsListItemWithChildren
					item={item}
					key={item.ID}
				/>
			)
		}
	</ExpandedTableOfContentsList>
);
const ExpandedTableOfContentsList = styled.ol``;
const ExpandedTableOfContentsListItemWithChildren = ({ item }) => {
	let children = null;
	if (item.children && item.children.length) {
		children = (
			<ol>
				{
					item.children.map(i => (
						<ExpandedTableOfContentsListItemWithChildren item={i} key={i.ID} />
					))
				}
			</ol>
		);
	}
	return (
		<ExpandedTableOfContentsListItemElement>
			<CopyLink
				url={`#${item.ID}`}
				inline={false}
			>
				{item.content}
			</CopyLink>
			{children}
		</ExpandedTableOfContentsListItemElement>
	);
}
const ExpandedTableOfContentsListItemElement = styled.li``;
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
			'alpha': 1,
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
const CompressedTableOfContentsListItem = ({ item, clickHandler }) => {
	return (
		<CompressedTableOfContentsListItemElement>
			<CopyLink
				url={`#${item.ID}`}
				inline={false}
				clickHandler={clickHandler}
			>
				{item.content}
			</CopyLink>
		</CompressedTableOfContentsListItemElement>
	);
}
const CompressedTableOfContentsListContainer = ({
	contentVisible,
	clickHandler,
	sectionProperties,
}) => (
	<CompressedTableOfContentsList
		contentVisible={contentVisible}
	>
		{
			sectionProperties.map(i =>
				<CompressedTableOfContentsListItem
					item={i}
					clickHandler={clickHandler}
					key={i.ID}
				/>
			)
		}
	</CompressedTableOfContentsList>
);
const CompressedTableOfContentsList = styled.ol`
	position: fixed;
	top: 23rem;
	left: 0;
	width: 100%;
	height: 0;
	overflow: hidden;
	margin: 0;
	padding: 0 2rem;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 37,
		'format': 'string',
	})};
	transition: height .5s, padding .5s;
	z-index: ${zIndexNumber().compressedTableOfContentsContainer};
	${
		({ contentVisible}) => {
			if (contentVisible) {
				return `
					height: 100%;
					padding: 2rem;
					li {
						margin-top: 0;
						margin-left: 0;
						opacity: 1;
					}
				`;
			}
		}
	}
`;
const CompressedTableOfContentsListItemElement = styled.li`
	list-style-type: none;
	margin-top: -1rem;
	margin-left: -1rem;
	opacity: 0;
	transition-property: opacity, margin-left, margin-top;
	transition-duration: .5s;
	&:nth-child(1) {
		transition-delay: .2s;
	}
	&:nth-child(2) {
		transition-delay: .225s;
	}
	&:nth-child(3) {
		transition-delay: .25s;
	}
	&:nth-child(4) {
		transition-delay: .275s;
	}
	&:nth-child(5) {
		transition-delay: .3s;
	}
	&:nth-child(6) {
		transition-delay: .325s;
	}
	&:nth-child(7) {
		transition-delay: .35s;
	}
	&:nth-child(8) {
		transition-delay: .375s;
	}
	&:nth-child(9) {
		transition-delay: .4s;
	}
	a {
		padding: 1rem 0 2rem;
		:focus {
			padding: 1rem .5rem;
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
				'level': 26,
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
	${deviceWidthQuery.only({ 'width': 's' })} {
		background-size: 100% auto;
	}
	${deviceWidthQuery.only({ 'width': 'm' })} {
		background-size: 67% auto;
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
const ArticleTaglineAndMetaContainer = styled.div`
	transform: translateY(6rem);
	opacity: 0;

	&.animation-state--final {
		transform: translateY(0);
		opacity: 1;
	}
	${deviceWidthQuery.not({ 'width': 'l' })} {
		width: calc(100% - 2rem);
		max-width: 82rem;
		margin: 0 2rem 0 0;
		padding: 3rem 3rem 3rem 2rem;
		border-radius: 0 .375rem 0 0;
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
		transition: all 1.5s .5s;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 50%;
		padding-right: 4rem;
		transition: all 1.5s 1s;
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
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 26,
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
			scroll-margin-top: 27rem;
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-top: 6rem;
		h2,
		h3,
		h4,
		h5,
		h6 {
			scroll-margin-top: 18rem;
		}
	}
	figure.cbs-embed-container {
		${deviceWidthQuery.only({ 'width': 's' })} {
			display: none;
		}
		${deviceWidthQuery.not({ 'width': 's' })} {
			margin: 0 0 3rem;
			iframe.cbs-embed {
				margin-bottom: 1rem;
			}
			figcaption {
				font-size: 1.375rem;
			}
		}
	}
`;
const ArticleIntroVideoContainer = styled.div`
	padding: 4rem 0 3rem;
	border-top: solid .125rem ${color({
		'kind': 'Accent',
		'tone': 'Finch',
		'level': 1,
		'format': 'string',
	})};
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;

const SimpleBody = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		max-width: 78rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		width: 75%;
	}
`;
export const Article = ({
	title,
	frontMatter,
	mainContent,
}) => {
	const articleTaglineAndMetaContainerRef = useRef();
	const expandedTableOfContentsContainerRef = useRef();
	useEffect(() => {
		articleTaglineAndMetaContainerRef
			.current.classList.add('animation-state--final');
		expandedTableOfContentsContainerRef
			.current.classList.add('animation-state--final');
	});
	return (
		<ArticleContainer>
			<MainContentContainer>
				<ArticleHeader
					$backgroundImage={frontMatter.headImage.url}
				>
					<ArticleTitleConstrainer>
						<ScreenTitleSecondary
							use="articleTitle"
							title={{
								'main': title,
							}}
						/>
					</ArticleTitleConstrainer>
					<ArticleTaglineAndMetaContainer
						ref={articleTaglineAndMetaContainerRef}
					>
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
													'kind': 'Neutral',
													'tone': 'Finch',
													'level': 30,
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
										Published {frontMatter.publicationDate}
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
						frontMatter.introVideo && frontMatter.introVideoPoster &&
						<ArticleIntroVideoContainer>
							<MediaItem
								category="video"
								specs={{
									'video': frontMatter.introVideo,
									'poster': frontMatter.introVideoPoster,
								}}
							/>
						</ArticleIntroVideoContainer>
					}
					{
						mainContent.unifiedBody &&
						<UnifiedBody
							parts={mainContent.unifiedBody}
						/>
					}
					{
						mainContent.sections &&
						<ArticleSections
							sections={mainContent.sections}
						/>
					}
				</ArticleBody>
			</MainContentContainer>
			{
				frontMatter.tableOfContents && frontMatter.tableOfContents[0] &&
				<CompressedTableOfContentsContainer>
					<CompressedTableOfContentsCollapsibleContainer>
						<Collapsible
							button={{
								'size': 'small',
								'surfaceStyle': 'outlined',
								'contextColor': 'onDark',
								'text': 'Contents'
							}}
							internalID="v3Wd49fpFK6x2jNkZ6qbmmDC"
							copyKind="article--compressed-table-of-contents"
						>
							<CompressedTableOfContentsListContainer
								sectionProperties={frontMatter.tableOfContents}
							/>
						</Collapsible>
					</CompressedTableOfContentsCollapsibleContainer>
				</CompressedTableOfContentsContainer>
			}
			<ExpandedTableOfContentsContainer
				ref={expandedTableOfContentsContainerRef}
			>
				{
					frontMatter.tableOfContents && frontMatter.tableOfContents[0] &&
					<ExpandedTableOfContentsListContainer>
						<Copy
							kind="article--faux-subheader"
						>
							<ArticleTableOfContentsFauxHeader />
						</Copy>
						<ExpandedTableOfContentsListContainerTwo
							sectionProperties={frontMatter.tableOfContents}
						/>

					</ExpandedTableOfContentsListContainer>
				}
			</ExpandedTableOfContentsContainer>
		</ArticleContainer>
	);
};
