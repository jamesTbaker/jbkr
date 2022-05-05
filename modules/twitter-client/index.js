import axios from 'axios';
import { format } from 'date-fns';


export const returnAllTweets = async ({ tweetsIDs }) => {
	if (tweetsIDs.length === 0) {
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
				'pic': authorRaw.profile_image_url,
				'username': authorRaw.username,
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
					'likes': tweetRaw.public_metrics.like_count,
					'quotes': tweetRaw.public_metrics.quote_count,
					'retweets': tweetRaw.public_metrics.retweet_count,
				},
				'text': tweetRaw.text,
			};
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
