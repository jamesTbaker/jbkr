/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { Line } from '../../..';

const ArticleSummaryContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	border-radius: .375rem;
	background-size: cover;
	background-repeat: no-repeat;
	padding: 7rem 6rem 0 0;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		${
			({ $images }) => `background-image: url("${$images.small.url}");`
		}
		margin-top: 4rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ $images }) => `background-image: url("${$images.large.url}");`
		}
		${
			({ $type }) => {
				if ($type === 'top') {
					return `
						margin-top: 4rem;
					`;
				}
				if ($type === 'featured') {
					return `
						height: 100%;
					`;
				}
				if ($type === 'standard') {
					return `
					`;
				}
			}
		}
	}
`;
const ContentContainer = styled.div`
	padding: 8rem 6rem 2rem 2rem;
	background-image:
		linear-gradient(
			to bottom,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 34,
				'alpha': .8,
				'format': 'string'
			})},
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 39,
				'alpha': 1,
				'format': 'string'
			})}
		);
	border-radius: .375rem;
`;
const TitleContainer = styled.div`
	padding-bottom: 3rem;
`;
const DescriptionContainer = styled.div`
	padding: 2rem 0 2rem;
`;
const MetaItemContainer = styled.div`
	padding-bottom: 1rem;
`;
export const ArticleSummary = ({
	title,
	tagline,
	slug,
	publicationDate,
	updateDate,
	teaserDescription,
	teaserImages,
	type,
}) => (
	<ArticleSummaryContainer
		$type={type}
		$images={teaserImages}
	>
		<ContentContainer>
			<TitleContainer>
				<Copy
					kind="article-summary--title-anchor"
				>
					<CopyLink
						url={`/library/${slug}`}
						inline={false}
					>
						{title}
					</CopyLink>
				</Copy>
			</TitleContainer>
			<Line
				width={
					type === 'standard' ? 33 :
						type === 'top' ? 25 : 50
				}
				height="2xl"
				alignment="center"
				color={
					type === 'standard' || type === 'top' ? {
						'kind': 'Brand',
						'tone': 'Spruce',
						'level': 1,
						'format': 'string'
					} : {
						'kind': 'Accent',
						'tone': 'Peacock',
						'level': 2,
						'format': 'string'
					}
				}
			/>
			{
				teaserDescription &&
				<DescriptionContainer>
					<Copy
						kind="article-summary--teaser"
						tagOverride={
							teaserDescription.startsWith('\n<li>') ?
							'ul' : undefined
						}
						htmlContent={teaserDescription}
					/>
				</DescriptionContainer>
			}
			<MetaItemContainer>
				{
					updateDate &&
					<>
						<Copy
							kind="article-summary--meta-item--label"
						>
							Updated
						</Copy>
						<Copy
							kind="article-summary--meta-item--value"
						>
							{updateDate}
						</Copy>
					</>
				}
				{
					!updateDate &&
					<>
						<Copy
							kind="article-summary--meta-item--label"
						>
							Published
						</Copy>
						<Copy
							kind="article-summary--meta-item--value"
						>
							{publicationDate}
						</Copy>
					</>
				}
			</MetaItemContainer>
		</ContentContainer>
	</ArticleSummaryContainer>
);
