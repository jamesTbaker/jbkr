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
	&:hover {
		div.title-container span {
			color: ${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 41,
				/**
				 * @todo alpha should not be required
				 */
				'alpha': 1,
				'format': 'string'
			})};
			background-position-y: 100%;
			border-radius: .25rem;
		}
	}
	&:focus {
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
	@media (max-width: 1304px) {
		&:focus {
			margin-left: .5rem;
			margin-right: .5rem;
		}
	}
`;
const DescriptionAndMetaItemContainer = styled.div`
	border-radius: .375rem;
	background-image:
		linear-gradient(
			to bottom,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 34,
				'alpha': .85,
				'format': 'string'
			})} 0,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 37,
				'alpha': .95,
				'format': 'string'
			})} 25%,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 39,
				'alpha': 1,
				'format': 'string'
			})}
		);
	${deviceWidthQuery.only({ 'width': 's' })} {
		padding: 2rem;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		${
			({ $type }) => {
				if ($type === 'top') {
					return `
						padding: 4rem 10rem 1rem 6rem;
					`;
				}
				if ($type === 'featured') {
					return `
						padding: 4rem 6rem 1rem 6rem;
					`;
				}
				if ($type === 'standard') {
					return `
						padding: 4rem 5rem 1rem 6rem;
					`;
				}
			}
		}
	}
`;
const TitleContainer = styled.div.attrs(() => {
	return {
		'className': `title-container`,
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding-left: 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ $type }) => {
				if ($type === 'top') {
					return `
						padding: 0 0 3rem 6rem;
					`;
				}
				if ($type === 'featured') {
					return `
						padding: 0 0 3rem 6rem;
					`;
				}
				if ($type === 'standard') {
					return `
						padding: 0 0 3rem 6rem;
					`;
				}
			}
		}
	}
	padding-bottom: 3rem;

	> span {
		${deviceWidthQuery.only({ 'width': 's' })} {
			line-height: 4rem;
		}
		${deviceWidthQuery.only({ 'width': 'm' })} {
			line-height: 5rem;
		}
		${deviceWidthQuery.only({ 'width': 'l' })} {
			line-height: 5rem;
		}
		transition: all 250ms ease;
		background-position-y: 10%;
		background-image: linear-gradient(
			to bottom,
			${color({
				'kind': 'Neutral',
				'tone': 'Finch',
				'level': 33,
				'format': 'string'
			})} 50%,
			${color({
				'kind': 'Brand',
				'tone': 'Peony',
				'level': 3,
				'format': 'string'
			})} 50%
		);
		background-size: auto 200%;
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
		<TitleContainer
			$type={type}
		>
			<Copy
				kind="article-summary--title-anchor"
			>
				{title}
			</Copy>
		</TitleContainer>
		<DescriptionAndMetaItemContainer
			$type={type}
		>
			{
				teaserDescription &&
				<DescriptionContainer>
					<Copy
						kind="article-summary--teaser"
						tagOverride={
							teaserDescription.trim().startsWith('<li>') ?
							'ul' : undefined
						}
						htmlContent={teaserDescription.trim()}
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
		</DescriptionAndMetaItemContainer>
	</ArticleSummaryContainer>
);
