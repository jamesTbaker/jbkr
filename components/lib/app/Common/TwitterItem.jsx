import styled from 'styled-components';
import { color, verticalAlignMiddle } from '@jbkr/style-service';
import { Copy } from '../../core/Copy/Copy';
import { Button } from '../../core/Button/Button';
import { CopyLink } from '../../core/CopyLink/CopyLink';
import { MediaItem } from '../../app/Common/MediaItem';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

const TwitterItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem 3rem;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
        'level': 41,
        'format': 'string'
	})};
	/* background-color: yellow; */
	border-radius: .375rem;
	overflow: hidden;
`;
const Header = styled.div`
	display: flex;
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
const TwitterLinkContainer = styled.div`
	margin-left: auto;
	a {
		${verticalAlignMiddle()};
	}
`;
const Body = styled.div`
	margin-top: 1.5rem;
`;
const MediaItemsContainer = styled.div`
	margin-top: 1.5rem;
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
	const replyURL = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
	const tweetURL = `https://twitter.com/${author.username}/status/${id}`;
	const formattedText = text.replace(/https:\/\/[\n\S]+/g, '');
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
							<Copy
								kind="twitter--account-name"
							>
								{author.name}
							</Copy>
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
						url={authorURL}
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
					>
						{text}
					</Copy>
				}
				{
					media && media.length > 0 &&
					<MediaItemsContainer>
						{
							media[0].type === 'photo' &&
							<img
								alt="Image from Twitter"
								height={media[0].height}
								width={media[0].width}
								src={media[0].url}
							/>
						}
					</MediaItemsContainer>
				}
			</Body>
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
