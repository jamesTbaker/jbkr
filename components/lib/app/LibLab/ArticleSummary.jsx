import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
	deviceWidthQuery, color, zIndexNumber
} from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { Line } from '../../..';

const ArticleSummaryContainer = styled.a.attrs(({ $slug }) => {
	return {
		'href': `/library/${$slug}`,
	};
})`
	display: block;
	border-radius: .375rem;
	background-size: cover;
	background-repeat: no-repeat;
	text-decoration: none;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 4rem;
		${
			({ $images }) => `background-image: url('${$images.small.url}');`
		}
		${
			({ $type }) => {
				if ($type === 'top' || $type === 'standard') {
					return `
						max-width: 768px;
						padding: 8rem 2rem 0 0;
					`;
				}
				if ($type === 'featured') {
					return `
						max-width: 960px;
						padding: 12rem 2rem 0 0;
					`;
				}
			}
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		${
			({ $images }) => `background-image: url('${$images.large.url}');`
		}
		${
			({ $type }) => {
				if ($type === 'top') {
					return `
						height: calc(50% - 4rem);
						margin-top: 4rem;
						padding: 4rem 24rem 0 0;
					`;
				}
				if ($type === 'featured') {
					return `
						height: 100%;
						padding: 20rem 6rem 0 0;
					`;
				}
				if ($type === 'standard') {
					return `
						padding: 7rem 3rem 0 0;
					`;
				}
			}
		}
	}
`;
const ContentContainer = styled.div`
	/* border-radius: .375rem;
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
		); */
	${deviceWidthQuery.only({ 'width': 's' })} {
		${
			({ $type }) => {
				if ($type === 'top' || $type === 'standard') {
					return `
						padding: 8rem 2rem 2rem 2rem;
					`;
				}
				if ($type === 'featured') {
					return `
						padding: 8rem 2rem 2rem 2rem;
					`;
				}
			}
		}
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		${
			({ $type }) => {
				if ($type === 'top') {
					return `
						padding: 8rem 10rem 1rem 6rem;
					`;
				}
				if ($type === 'featured') {
					return `
						padding: 8rem 6rem 1rem 6rem;
					`;
				}
				if ($type === 'standard') {
					return `
						padding: 8rem 5rem 1rem 6rem;
					`;
				}
			}
		}
	}
`;
const TitleContainer = styled.div`
	padding-bottom: 3rem;
	> span {
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
		${deviceWidthQuery.only({ 'width': 's' })} {
			line-height: 4rem;
		}
		${deviceWidthQuery.only({ 'width': 'm' })} {
			line-height: 5rem;
		}
		${deviceWidthQuery.only({ 'width': 'l' })} {
			line-height: 5rem;
		}
	}
`;
const DescriptionContainer = styled.div`
	padding: 2rem 0 2rem;
`;
const MetaItemContainer = styled.div`
	max-width: 15rem;
	padding: 2rem 0;
	border-top: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 33,
		'format': 'string',
	})};
`;
export const ArticleSummary = ({
	title,
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
		$slug={slug}
	>
		<ContentContainer
			$type={type}
		>
			<TitleContainer>
				<Copy
					kind="article-summary--title-anchor"
				>
					{title}
					{/* <CopyLink
						url={`/library/${slug}`}
						inline={false}
					>

					</CopyLink> */}
				</Copy>
			</TitleContainer>
			{/* <Line
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
			/> */}
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
