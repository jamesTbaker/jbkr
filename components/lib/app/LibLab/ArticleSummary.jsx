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
	${
		({ $type }) => {
			if (
				$type === 'featured' ||
				$type === 'primary' ||
				$type === 'secondary'
			) {
				return `
					display: block;
					border-radius: .375rem;
					background-size: cover;
					background-repeat: no-repeat;
					text-decoration: none;
					overflow: hidden;
				`;
			}
			if ($type === 'tertiary') {

			}
		}
	}












	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 4rem;
		${
			({ $images }) => `background-image: url('${$images.small.url}');`
		}
		${
			({ $type }) => {
				if ($type === 'featured') {
					return `
						max-width: 96rem;
						padding: 16rem 2rem 0 0;
					`;
				}
				if ($type === 'primary' || $type === 'secondary') {
					return `
						max-width: 82rem;
						padding: 8rem 2rem 0 0;
					`;
				}
				if ($type === 'tertiary') {
					return `
						max-width: 82rem;
					`;
				}
			}
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: relative;
		z-index: ${zIndexNumber().articleSummaryContainer};
		${
			({ $images }) => `background-image: url('${$images.large.url}');`
		}
		${
			({ $type }) => {
				if ($type === 'featured') {
					return `
						height: 100%;
						padding: 20rem 6rem 0 0;
					`;
				}
				if ($type === 'primary') {
					return `
						height: calc(50% - 4rem);
						margin-top: 4rem;
						padding: 14rem 24rem 0 0;
					`;
				}
				if ($type === 'secondary') {
					return `
						padding: 7rem 3rem 0 0;
					`;
				}
				if ($type === 'tertiary') {
					return `
						padding: 7rem 0 0 0;
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
const VideoLargeDevice = styled.video.attrs(() => {
	return {
		'autoPlay': true,
		'muted': true,
		'loop': true,
		'playsInline': true,
		'tabIndex': '-1',
		'aria-hidden': true,
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		display: none;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		/* height: 100%; */
		object-position: center top;
		object-fit: cover;
		z-index: ${zIndexNumber().articleSummaryBackgroundVideo};
	}
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;
const DescriptionAndMetaItemContainer = styled.div`
	z-index: ${zIndexNumber().articleSummaryContent};
	${
		({ $type }) => {
			if (
				$type === 'featured' ||
				$type === 'primary' ||
				$type === 'secondary'
			) {
				return `
					border-radius: .375rem .375rem .375rem 0;
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
				`;
			}
		}
	}
	${deviceWidthQuery.not({ 'width': 'l' })} {
		padding: 2rem;
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ $type }) => {
				if ($type === 'featured') {
					return `
						padding: 4rem 6rem 1rem 6rem;
					`;
				}
				if ($type === 'primary') {
					return `
						padding: 4rem 10rem 1rem 6rem;
					`;
				}
				if ($type === 'secondary') {
					return `
						padding: 4rem 5rem 1rem 6rem;
					`;
				}
				if ($type === 'tertiary') {
					return `
						padding: 0 0 0 8rem;
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
				if ($type === 'featured') {
					return `
						padding: 0 0 3rem 6rem;
					`;
				}
				if ($type === 'primary') {
					return `
						padding: 0 0 3rem 6rem;
					`;
				}
				if ($type === 'secondary') {
					return `
						padding: 0 0 3rem 6rem;
					`;
				}
				if ($type === 'tertiary') {
					return `

					`;
				}
			}
		}
	}
	padding-bottom: 3rem;
	z-index: ${zIndexNumber().articleSummaryContent};

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
				'level': 35,
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
const DescriptionContainer = styled.div``;
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
	featuredTeaserVideo,
	type,
}) => (
	<ArticleSummaryContainer
		$type={type}
		$images={teaserImages}
		$slug={slug}
	>
		{
			type === 'featured' &&
			<VideoLargeDevice
				poster={teaserImages.large.url}
			>
				<source src={featuredTeaserVideo.url} type="video/mp4" />
			</VideoLargeDevice>
		}
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
						kind="copy-container--standard"
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
		</DescriptionAndMetaItemContainer>
	</ArticleSummaryContainer>
);
