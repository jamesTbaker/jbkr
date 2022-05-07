import axios from 'axios';
import { format } from 'date-fns';


export const returnAllTweets = async ({ tweetsIDs }) => {
	if (tweetsIDs && tweetsIDs.length === 0) {
		return [];
	}
	const urlSearchParamaters = new URLSearchParams({
		'ids': tweetsIDs.join(','),
		'tweet.fields': 'attachments,author_id,public_metrics,created_at,' +
			'id,text',
		'expansions': 'author_id,attachments.media_keys',
		'media.fields': 'height,media_key,preview_image_url,type,url,' +
			'width,alt_text,variants',
		'user.fields': 'id,name,profile_image_url,' +
			'username,verified',
	});
	try {
		const response = await axios({
			'method': 'get',
			'url': `https://api.twitter.com/2/tweets?${urlSearchParamaters}`,
			'timeout': 10000,
			'headers': {
				'Authorization': `Bearer ${process.env.twitterBearerToken}`,
			},
		});
		const tweetsRaw = response.data;
		const returnOneTweetMediaItem = ({ mediaKey }) => {
			const tweetMediaItemRaw = tweetsRaw.includes.media.find(
				(mediaItemRaw) => mediaItemRaw.media_key === mediaKey,
			);
			let tweetMediaItemFormatted = {};
			if (tweetMediaItemRaw.type === 'photo') {
				tweetMediaItemFormatted = {
					'type': tweetMediaItemRaw.type,
					'id': tweetMediaItemRaw.media_key,
					'url': tweetMediaItemRaw.url,
					'width': tweetMediaItemRaw.width,
					'height': tweetMediaItemRaw.height,
				};
				if (tweetMediaItemRaw.alt_text) {
					tweetMediaItemFormatted.alternativeText =
						tweetMediaItemRaw.alt_text;
				}
			} else if (tweetMediaItemRaw.type === 'video') {
				const videoRaw = tweetMediaItemRaw.variants.find(
					(variant) => variant.bit_rate === 1280000,
				);
				tweetMediaItemFormatted = {
					'type': tweetMediaItemRaw.type,
					'id': tweetMediaItemRaw.media_key,
					'url': videoRaw.url,
					'mimeTye': videoRaw.content_type,
					'posterImage': tweetMediaItemRaw.preview_image_url,
					'width': tweetMediaItemRaw.width,
					'height': tweetMediaItemRaw.height,
				};
			} else if (tweetMediaItemRaw.type === 'animated_gif') {
				tweetMediaItemFormatted = {
					'type': tweetMediaItemRaw.type,
					'id': tweetMediaItemRaw.media_key,
					'url': tweetMediaItemRaw.variants[0].url,
					'mimeTye': tweetMediaItemRaw.variants[0].content_type,
					'posterImage': tweetMediaItemRaw.preview_image_url,
					'width': tweetMediaItemRaw.width,
					'height': tweetMediaItemRaw.height,
				};
			}
			return tweetMediaItemFormatted;
		};
		const returnAllTweetMedia = ({ mediaKeys }) => {
			const allTweetMedia = [];
			mediaKeys.forEach((mediaKey) => {
				allTweetMedia.push(returnOneTweetMediaItem({ mediaKey }));
			});
			return allTweetMedia;
		};
		const returnTweetAuthor = ({ authorID }) => {
			const authorRaw = tweetsRaw.includes.users.find(
				(user) => user.id === authorID,
			);
			const authorformatted = {
				'name': authorRaw.name,
				'pic': authorRaw.profile_image_url.replace(
					'_normal.jpg',
					'_x96.jpg',
				),
				'username': authorRaw.username,
				'url': `https://twitter.com/${authorRaw.username}`,
			};
			if (authorRaw.verified) {
				authorformatted.verified = true;
			}
			return authorformatted;
		};
		const returnTweetFormattedDate = ({ dateRaw }) => {
			return format(new Date(dateRaw), 'MMM d, y');
		};
		const returnTweetFormattedTime = ({ dateRaw }) => {
			return format(new Date(dateRaw), 'h:mm a');
		};
		const returnOneTweet = ({ tweetRaw }) => {
			const formattedTweet = {
				'id': tweetRaw.id,
				'createdDate': returnTweetFormattedDate({
					'dateRaw': tweetRaw.created_at,
				}),
				'createdTime': returnTweetFormattedTime({
					'dateRaw': tweetRaw.created_at,
				}),
				'author': returnTweetAuthor({
					'authorID': tweetRaw.author_id,
				}),
				'stats': {
					'counts': {
						'likes': tweetRaw.public_metrics.like_count,
						'replies': tweetRaw.public_metrics.reply_count,
						'retweets': tweetRaw.public_metrics.retweet_count,
					},
					'urls': {
						'likes': `https://twitter.com/intent/like?tweet_id=${tweetRaw.id}`,
						'replies': `https://twitter.com/intent/tweet?in_reply_to=${tweetRaw.id}`,
						'retweets': `https://twitter.com/intent/retweet?tweet_id=${tweetRaw.id}`,
					},
				},
				'text': tweetRaw.text
					.replace(/https:\/\/[\n\S]+/g, '')
					.replace('\n', '<br />'),
			};
			formattedTweet.url = `https://twitter.com/${formattedTweet.author.username}/status/${tweetRaw.id}`;
			if (
				tweetRaw.attachments?.media_keys
			) {
				formattedTweet.media = returnAllTweetMedia({
					'mediaKeys': tweetRaw.attachments.media_keys,
				});
			}
			return formattedTweet;
		};
		const allTweetsFormatted = [];
		tweetsRaw.data.forEach((tweetRaw) => {
			allTweetsFormatted.push(
				returnOneTweet({ tweetRaw }),
			);
		});
		return allTweetsFormatted;
	} catch (error) {
		// return the error
		return { 'error': JSON.stringify(error) };
	}
};
