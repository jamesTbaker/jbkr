/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { Copy } from '../../core/Copy/Copy';
import { ArticleBriefStatement } from './ArticleBriefStatement';
import { ArticleSubsection } from './ArticleSubsection';
import {
	deviceWidthQuery, color, hiddenBlock, zIndexNumber, hiddenInline
} from '@jbkr/style-service';

const ReturnContainerHasColumnsOnLargeWidthDevices = ({ subsections }) =>
	subsections.length === 1 ? true : false;

const ReturnContainerHasHorizontalGridOnLargeWidthDevices = ({ subsections }) => {
	let hasColumns = false;
	subsections.forEach((subsection) => {
		if (
			subsection.subsectionGravity &&
			(
				subsection.subsectionGravity === 'left' ||
				subsection.subsectionGravity === 'right'
			)
		) {
			hasColumns = true;
		}
	});
	return hasColumns;
};
const ArticleSectionContainer = styled.div`
	margin-top: 1rem;
	padding-top: 4rem;
	border-top: solid .125rem ${color({
		'kind': 'Accent',
		'tone': 'Sunshine',
		'level': 1,
		'format': 'string',


		// 'kind': 'Neutral',
		// 'tone': 'Finch',
		// 'level': 20,
		// 'format': 'string',
	})};

	/* &:not(:first-child) {
		margin-top: 4rem;
		padding-top: 4rem;
		border-top: solid .125rem ${color({
			'kind': 'Accent',
			'tone': 'Peacock',
			'level': 2,
			'format': 'string',
		})};
	} */
`;
const SectionBriefStatementsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		column-count: 4;
		column-gap: 3rem;
		padding-bottom: 2rem;
	}
`;
const SectionBriefStatementContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-bottom: 2rem;
		break-inside: avoid;
		page-break-inside: avoid;
	}
`;
const SectionBriefStatement = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		padding-left: 1rem;
		border-left: solid .125rem ${color({
			'kind': 'Accent',
			'tone': 'Finch',
			'level': 2,
			'format': 'string',

			// 'kind': 'Accent',
			// 'tone': 'Finch',
			// 'level': 1,
			// 'format': 'string',

			// 'kind': 'Neutral',
			// 'tone': 'Finch',
			// 'level': 24,
			// 'format': 'string',
		})};
	}
`;
const SubsectionsContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ horizontalGrid }) => horizontalGrid && `
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 3rem;
				grid-template-areas: "left right";
			`
		}
		${
			({ columns }) => columns && `
				column-count: 2;
				column-gap: 4rem;
				margin-bottom: 4rem;
				p {
					break-inside: avoid;
					page-break-inside: avoid;
				}
			`
		}
	}
`;
/* const SubsectionMediaContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const SubsectionTextContainer = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`;
const Sample = styled.div`
	${deviceWidthQuery.not({ 'width': 'l' })} {
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
	}
`; */

export const ArticleSection = ({ section }) => (
	<ArticleSectionContainer>
		{
			section.sectionTitle &&
			<div
				dangerouslySetInnerHTML={{'__html': section.sectionTitle}}
			/>
		}
		{
			/* section.sectionBriefStatements && section.sectionBriefStatements[0] &&

			<SectionBriefStatementsContainer>
				{
					section.sectionBriefStatements.map((briefStatement) =>
						<SectionBriefStatementContainer
							key={briefStatement.key}
						>
							<SectionBriefStatement>
								<Copy
									kind="article--brief-statement"
									htmlContent={briefStatement.content}
								/>
							</SectionBriefStatement>
						</SectionBriefStatementContainer>,
					)
				}
			</SectionBriefStatementsContainer> */
		}
		{
			/* section.sectionPreface &&
			<div
				dangerouslySetInnerHTML={{'__html': section.sectionPreface}}
			/> */
		}
		{
			section.subsections &&
			<SubsectionsContainer
				columns={ReturnContainerHasColumnsOnLargeWidthDevices({
					'subsections': section.subsections,
				})}
				horizontalGrid={ReturnContainerHasHorizontalGridOnLargeWidthDevices({
					'subsections': section.subsections,
				})}
			>
				{
					section.subsections.map((subsection) =>
						<ArticleSubsection
							key={subsection.subsectionID}
							subsection={subsection}
						/>,
					)
				}
			</SubsectionsContainer>
		}
		{
			/* section.sectionQuote &&
			<div
				dangerouslySetInnerHTML={{'__html': section.sectionQuote}}
			/> */
		}
		{
			section.sectionFooter &&
			<div
				dangerouslySetInnerHTML={{'__html': section.sectionFooter}}
			/>
		}
	</ArticleSectionContainer>
);
