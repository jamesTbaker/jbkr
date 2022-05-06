import styled from 'styled-components';
import { color } from '@jbkr/style-service';
import Image from 'next/image';
import PropTypes from 'prop-types';

const TwitterItemContainer = styled.div`
	border-radius: .375rem;
	overflow: hidden;
	background-color: ${color({
		'kind': 'Neutral',
		'tone': 'Finch',
        'level': 30,
        // 'alpha': .5,
        'format': 'string'
	})};
`;
export const TwitterItem = ({
	id,
	// title,
	author,
	createdDate,
	createdTime,
	stats,
	text,
	media,
}) => {
	// const authorUrl = `https://twitter.com/${author.username}`;
	// const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
	// const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
	// const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
	// const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;
	// const formattedText = text.replace(/https:\/\/[\n\S]+/g, '');
	return (
		<TwitterItemContainer>
			{author.name}
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
		'verified': PropTypes.string,
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
	'text': PropTypes.string.isRequired,
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
Icon.defaultProps = {
	content: 'arrow-up',
	size: 's',
	color: {
		'kind': 'Accent',
		'tone': 'Sunshine',
		'level': 1,
	},
};
