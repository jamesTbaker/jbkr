import styled from 'styled-components';
import { color, verticalAlignMiddle } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Icon } from '../../primitive/Icon/Icon';
import { Button } from '../../core/Button/Button';
import { MediaItem } from '../../app/Common/MediaItem';
import PropTypes from 'prop-types';

const TwitterItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 3rem;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
        'level': 39,
        'format': 'string'
	})};
	border-radius: .375rem;
	overflow: hidden;
`;
const Header = styled.div`
	display: flex;
	margin-bottom: 3rem;
`;
const AvatarLinkContainer = styled.div`
	margin-right: 1.5rem;
	border-radius: 50%;
	overflow: hidden;
	img {
		display: flex;
	}
`;
const AccountTextLinkContainer = styled.div`
`;
const AccountTextLink = styled.a`
	text-decoration: none;
`;
const AccountNameContainer = styled.div`
	display: flex;
`;
const AccountVerifiedIconContainer = styled.div`
	height: 2rem;
	margin-left: .5rem;
	margin-top: .5rem;
`;
const TwitterLinkContainer = styled.div`
	margin-left: auto;
	a {
		${verticalAlignMiddle()};
	}
`;
const Body = styled.div``;
const FullSizeImageContainer = styled.a`
	display: block;
	margin-top: 1.5rem;
	border-radius: .325rem;
	overflow: hidden;
	padding-bottom: 56.25%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	${
		({ images}) => {
			if (images.length === 1) {
				return `
					background-image: url("${images[0].url}");
				`;
			}
		}
	}
`;
const MultipleImagesContainer = styled.a`
	display: block;
	margin-top: 1.5rem;
	position: relative;
	padding-bottom: 56.25%;
	margin-top: 1.5rem;
	border-radius: .325rem;
	overflow: hidden;
`;
const ImageHalfSize = styled.div`
	position: absolute;
	top: 0;
	width: 49.8%;
	height: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	${
		({ image, horizontalPosition }) => {
			return `
				${horizontalPosition}: 0;
				background-image: url("${image.url}");
			`;
		}
	}
`;
const ImageQuarterSize = styled.div`
	position: absolute;
	width: 49.8%;
	height: 49.6%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	${
		({ image, horizontalPosition, verticalPosition }) => {
			return `
				${horizontalPosition}: 0;
				${verticalPosition}: 0;
				background-image: url("${image.url}");
			`;
		}
	}
`;
const VideoContainer = styled.div`
	margin-top: 1.5rem;
	max-width: 70rem;
	border-radius: .325rem;
	overflow: hidden;
`;
const GIFContainer = styled.a`
	display: block;
	width: min-content;
	margin-top: 1.5rem;
	border-radius: .325rem;
	overflow: hidden;
`;
const Footer = styled.div`
	margin-top: 2rem;
`;
const StatsContainer = styled.div`
	display: flex;
	margin-top: .5rem;
	a {
		margin-right: 2rem;
	}
	a > span > span,
	a:hover > span > span {
		padding-left: 0;
		padding-right: 0;
		border-width: 0rem;
		transition: all .5s;
	}
	a:focus > span > span {
		padding-left: 1.875rem;
		padding-right: 1.875rem;
		border-width: .125rem;
	}
`;
export const TwitterItem = ({
	id,
	author,
	createdDate,
	createdTime,
	stats,
	text,
	media,
}) => {
	const authorURL = `https://twitter.com/${author.username}`;
	const likeURL = `https://twitter.com/intent/like?tweet_id=${id}`;
	const retweetURL = `https://twitter.com/intent/retweet?tweet_id=${id}`;
	const tweetURL = `https://twitter.com/${author.username}/status/${id}`;
	const formattedText = text
		.replace(/https:\/\/[\n\S]+/g, '')
		.replace('\n', '<br />');
	return (
		<TwitterItemContainer>
			<Header>
				<AvatarLinkContainer>
					<a
						href={authorURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							alt={author.username}
							height={48}
							width={48}
							src={author.pic}
						/>
					</a>
				</AvatarLinkContainer>
				<AccountTextLinkContainer>
					<AccountTextLink
						href={authorURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<AccountNameContainer>
							<Copy
								kind="twitter--account-name"
							>
								{author.name}
							</Copy>
							{
								author.verified &&
								<AccountVerifiedIconContainer>
									<Icon
										size="s"
										content="twitter-verified"
										color={color({
											'kind': 'Brand',
											'tone': 'Peony',
											'level': 3,
											'format': 'string',
										})}
										aria-label="Verified account"
									/>
								</AccountVerifiedIconContainer>
							}
						</AccountNameContainer>
						<Copy
							kind="twitter--account-username"
						>
							@{author.username}
						</Copy>
					</AccountTextLink>
				</AccountTextLinkContainer>
				<TwitterLinkContainer>
					<Button
						text="View on Twitter"
						url={tweetURL}
						surfaceStyle="transparent"
						iconBefore="twitter"
						textHidden
					/>
				</TwitterLinkContainer>
			</Header>
			<Body>
				{
					text &&
					<Copy
						kind="twitter--body-text"
						htmlContent={formattedText}
					/>
				}
				{
					media && media.length === 1 &&
					media[0].type === 'photo' &&
					<FullSizeImageContainer
						images={media}
						href={tweetURL}
						target="_blank"
						rel="noopener noreferrer"
					/>
				}
				{
					media && media.length === 2 &&
					<MultipleImagesContainer
						href={tweetURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ImageHalfSize
							image={media[0]}
							horizontalPosition="left"
						/>
						<ImageHalfSize
							image={media[1]}
							horizontalPosition="right"
						/>
					</MultipleImagesContainer>
				}
				{
					media && media.length === 3 &&
					<MultipleImagesContainer
						href={tweetURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ImageHalfSize
							image={media[0]}
							horizontalPosition="left"
						/>
						<ImageQuarterSize
							image={media[1]}
							horizontalPosition="right"
							verticalPosition="top"
						/>
						<ImageQuarterSize
							image={media[2]}
							horizontalPosition="right"
							verticalPosition="bottom"
						/>
					</MultipleImagesContainer>
				}
				{
					media && media.length === 4 &&
					<MultipleImagesContainer
						href={tweetURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ImageQuarterSize
							image={media[0]}
							horizontalPosition="left"
							verticalPosition="top"
						/>
						<ImageQuarterSize
							image={media[1]}
							horizontalPosition="left"
							verticalPosition="bottom"
						/>
						<ImageQuarterSize
							image={media[2]}
							horizontalPosition="right"
							verticalPosition="top"
						/>
						<ImageQuarterSize
							image={media[3]}
							horizontalPosition="right"
							verticalPosition="bottom"
						/>
					</MultipleImagesContainer>
				}
				{
					media && media.length === 1 &&
					media[0].type === 'video' &&
					<VideoContainer>
						<MediaItem
							category="video"
							specs={{
								'video': {
									'url': media[0].url,
									'type': media[0].mimeTye.replace('video/', ''),
								},
								'poster': {
									'url': media[0].posterImage,
								}
							}}
						/>
					</VideoContainer>
				}
				{
					media && media.length === 1 &&
					media[0].type === 'animated_gif' &&
					<GIFContainer
						href={tweetURL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<video
							autoplay="true"
							muted="true"
							disablepictureinpicture="true"
							loop="true"
							preload="auto"
							playsinline="true"
							src={media[0].url}
							poster={media[0].posterImage}
							type={media[0].mimeTye}
						></video>
					</GIFContainer>
				}
			</Body>
			<Footer>
				<Copy
					kind="twitter--date-time"
				>
					{createdDate} &bull; {createdTime}
				</Copy>
				<StatsContainer>
					<Button
						text={stats.retweets}
						url={retweetURL}
						surfaceStyle="transparent"
						iconBefore="twitter-retweet"
						size="small"
					/>
					<Button
						text={stats.likes}
						url={likeURL}
						surfaceStyle="transparent"
						iconBefore="twitter-like"
						size="small"
					/>
				</StatsContainer>
			</Footer>
		</TwitterItemContainer>
	);
};
TwitterItem.propTypes = {
	/**
	 * Tweet's ID.
	 */
	'id': PropTypes.string.isRequired,
	/**
	 * Tweet's author.
	 */
	'author': PropTypes.shape({
		'name': PropTypes.string.isRequired,
		'pic': PropTypes.string.isRequired,
		'username': PropTypes.string.isRequired,
		'verified': PropTypes.bool,
	}).isRequired,
	/**
	 * Formatted text representing the Tweet's creation date.
	 */
	'createdDate': PropTypes.string.isRequired,
	/**
	 * Formatted text representing the Tweet's creation time.
	 */
	'createdTime': PropTypes.string.isRequired,
	/**
	 * Tweet's stats.
	 */
	'stats': PropTypes.shape({
		'likes': PropTypes.number.isRequired,
		'quotes': PropTypes.number.isRequired,
		'retweets': PropTypes.number.isRequired,
	}).isRequired,
	/**
	 * The Tweet's text.
	 */
	'text': PropTypes.string,
	/**
	 * Tweet's media.
	 */
	'media': PropTypes.arrayOf(PropTypes.shape({
		'id': PropTypes.string,
		'mimeTye': PropTypes.string,
		'posterImage': PropTypes.string,
		'type': PropTypes.string,
		'url': PropTypes.string,
		'width': PropTypes.number,
		'height': PropTypes.number,
	})),
};
