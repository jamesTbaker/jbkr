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
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	z-index: ${zIndexNumber().articleSummaryContainer};
	position: relative;
	text-decoration: none;
	border-radius: .375rem;
	overflow: hidden;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		margin-top: 4rem;
		${
			({ $type, $images }) => {
				let returnValue = '';
				if ($type !== 'tertiary') {
					returnValue += `
						background-image: url('${$images.small.url}');
						background-size: cover;
						background-repeat: no-repeat;
					`;
				}
				if ($type === 'featured') {
					returnValue += `
						max-width: 96rem;
						padding: 16rem 2rem 0 0;
					`;
				}
				if ($type === 'primary' || $type === 'secondary') {
					returnValue += `
						max-width: 82rem;
						padding: 8rem 2rem 0 0;˜
					`;
				}
				if ($type === 'tertiary') {
					returnValue += `
						max-width: 82rem;
						padding: 7rem 0 0 0;
						margin-top: 4rem;
					`;
				}
				return returnValue;
			}
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ $type, $images }) => {
				let returnValue = '';
				if ($type !== 'tertiary') {
					returnValue += `
						background-image: url('${$images.large.url}');
						background-size: cover;
						background-repeat: no-repeat;
					`;
				}
				if ($type === 'featured') {
					returnValue += `
						height: 100%;
						padding: 20rem 6rem 0 0;
					`;
				}
				if ($type === 'primary') {
					returnValue += `
						height: calc(50% - 4rem);
						margin-top: 4rem;
						padding: 14rem 24rem 0 0;
					`;
				}
				if ($type === 'secondary') {
					returnValue += `
						padding: 7rem 3rem 0 0;
					`;
				}
				if ($type === 'tertiary') {
					returnValue += `
						width: calc(50% - 2rem);
						padding: 7rem 0 0 0;
						margin-top: 4rem;
					`;
				}
				return returnValue;
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
		object-position: center top;
		object-fit: cover;
		z-index: ${zIndexNumber().articleSummaryBackgroundVideo};
	}
	@media (prefers-reduced-motion: reduce) {
		display: none;
	}
`;
const TertiaryBackgroundImage = styled.span`
	display: block;
	position: absolute;
	top: 0;
	border-radius: .375rem;
	background-size: cover;
	background-repeat: no-repeat;
	${deviceWidthQuery.not({ 'width': 'l' })} {
		${
			({ $images }) => `
				width: 15rem;
				height: 15rem;
				background-image: url('${$images.small.url}');
			`
		}
	}
	${deviceWidthQuery.only({ 'width': 'l' })} {
		${
			({ $images }) => `
				width: 20rem;
				height: 20rem;
				background-image: url('${$images.large.url}');
			`
		}
	}
`;
const TitleContainer = styled.div.attrs(() => {
	return {
		'className': `title-container`,
	};
})`
	${deviceWidthQuery.not({ 'width': 'l' })} {
		${
			({ $type }) => {
				if ($type !== 'tertiary') {
					return `
						padding: 0 0 3rem 2rem;
					`;
				}
				if ($type === 'tertiary') {
					return `
						width: 80%;
						padding: 0 0 1rem 6rem;
					`;
				}
			}
		}
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
						width: 80%;
						padding: 0 0 1rem 6rem;
					`;
				}
			}
		}
	}
	z-index: ${zIndexNumber().articleSummaryContent};

	> span {
		${
			({ $type }) => {
				if ($type !== 'tertiary') {
					return `
						${deviceWidthQuery.only({ 'width': 's' })} {
							line-height: 4rem;
						}
						${deviceWidthQuery.only({ 'width': 'm' })} {
							line-height: 5rem;
						}
						${deviceWidthQuery.only({ 'width': 'l' })} {
							line-height: 5rem;
						}
					`;
				}
				if ($type === 'tertiary') {
					return `
						${deviceWidthQuery.only({ 'width': 's' })} {
							line-height: 3rem;
						}
						${deviceWidthQuery.only({ 'width': 'm' })} {
							line-height: 4rem;
						}
						${deviceWidthQuery.only({ 'width': 'l' })} {
							line-height: 4rem;
						}
					`;
				}
			}
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

		${
			({ $type }) => {
				if ($type !== 'tertiary') {
					return `
						padding: 2rem;
					`;
				}
				if ($type === 'tertiary') {
					return `
						padding: 0 0 0 17rem;
					`;
				}
			}
		}
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
						padding: 0 0 0 22rem;
					`;
				}
			}
		}
	}
`;
const DescriptionContainer = styled.div`
	${
		({ $type }) => {
			if ($type === 'tertiary') {
				return `
					p {
						margin-bottom: 1rem;
					}
				`;
			}
		}
	}
`;
const MetaItemContainer = styled.div`
	max-width: 15rem;
	border-top: solid .125rem ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
		'level': 33,
		'format': 'string',
	})};
	${
		({ $type }) => {
			if ($type !== 'tertiary') {
				return `
					padding: 2rem 0;
				`;
			}
			if ($type === 'tertiary') {
				return `
					padding: 1rem 0 2rem;
				`;
			}
		}
	}
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
		{
			type === 'tertiary' &&
			<TertiaryBackgroundImage
				$images={teaserImages}
			/>
		}
		<TitleContainer
			$type={type}
		>
			<Copy
				kind={
					type === 'tertiary' ? 'article-summary--title-anchor' :
						'article-summary--title-anchor--enlarged'
				}
			>
				{title}
			</Copy>
		</TitleContainer>
		<DescriptionAndMetaItemContainer
			$type={type}
		>
			{
				teaserDescription &&
				<DescriptionContainer
					$type={type}
				>
					<Copy
						kind="copy-container--standard"
						htmlContent={teaserDescription}
					/>
				</DescriptionContainer>
			}
			<MetaItemContainer
				$type={type}
			>
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
