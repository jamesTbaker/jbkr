import styled from 'styled-components';
import { deviceWidthQuery, color } from '@jbkr/style-service';
import { TwitterItem } from '@jbkr/components';


const BodyEmulation = styled.div`
	/* ${deviceWidthQuery.only({ 'width': 's' })} {
		height: 812px;
	}
	${deviceWidthQuery.not({ 'width': 's' })} {
		text-align: center;
		height: 1024px;
	} */
	padding: 4rem;
	background-color: ${color({
	'kind': 'Neutral',
	'tone': 'Finch',
	'level': 37,
	'format': 'string',
})
	};
`;
export default {
	'title': 'App / TwitterItem',
	'component': TwitterItem,
	'parameters': {
		'layout': 'fullscreen',
	},
};
const Template = (args) => (
	<BodyEmulation>
		<TwitterItem
			{...args}
		/>
	</BodyEmulation>
);
export const TextOnly = Template.bind({});
TextOnly.args = {
	'id': '1521611729095983104',
	'url': 'https://twitter.com/DanRather/status/1521611729095983104',
	'createdDate': 'May 3, 2022',
	'createdTime': '10:04 PM',
	'author': {
		'name': 'Dan Rather',
		'pic': 'https://pbs.twimg.com/profile_images/649334374278807552/' +
			'sUX0LOaE_x96.jpg',
		'username': 'DanRather',
		'url': 'https://twitter.com/DanRather',
		'verified': true,
	},
	'stats': {
		'counts': {
			'likes': 79959,
			'replies': 3231,
			'retweets': 18623,
		},
		'urls': {
			'likes': 'https://twitter.com/intent/like?tweet_id=1521611729095983104',
			'replies': 'https://twitter.com/intent/tweet?in_reply_to=1521611729095983104',
			'retweets': 'https://twitter.com/intent/retweet?tweet_id=1521611729095983104',
		},
	},
	'text': 'It is no coincidence that the same people who overturn Roe also ' +
		'prevent voting rights and encourage partisan gerrymandering. They ' +
		'fear the will of the majority. In other words, democracy.',
};
export const OneImage = Template.bind({});
OneImage.args = {
	'id': '1521791056085680128',
	'url': 'https://twitter.com/Humanforscale_/status/1521791056085680128',
	'createdDate': 'May 4, 2022',
	'createdTime': '9:57 AM',
	'author': {
		'name': 'Human for Scale',
		'pic': 'https://pbs.twimg.com/profile_images/1514235025335943169/' +
			'7P7DBsOr_x96.jpg',
		'username': 'Humanforscale_',
		'url': 'https://twitter.com/Humanforscale_',
	},
	'stats': {
		'counts': {
			'likes': 24403,
			'replies': 171,
			'retweets': 2393,
		},
		'urls': {
			'likes': 'https://twitter.com/intent/like?tweet_id=1521791056085680128',
			'replies': 'https://twitter.com/intent/tweet?in_reply_to=1521791056085680128',
			'retweets': 'https://twitter.com/intent/retweet?tweet_id=1521791056085680128',
		},
	},
	'text': 'The aircraft carrier USS Gerald R Ford in drydock ' +
		'https://t.co/GlTz0RvvI9',
	'media': [
		{
			'type': 'photo',
			'id': '3_1521790876477181952',
			'url': 'https://pbs.twimg.com/media/FR58vUbaUAATJbl.jpg',
			'width': 1064,
			'height': 1600,
		},
	],
};
export const TwoImages = Template.bind({});
TwoImages.args = {
	'id': '1521854203483860992',
	'url': 'https://twitter.com/ewarren/status/1521854203483860992',
	'createdDate': 'May 4, 2022',
	'createdTime': '2:08 PM',
	'author': {
		'name': 'Elizabeth Warren',
		'pic': 'https://pbs.twimg.com/profile_images/1296929570231390209/' +
			'hNsDkcQg_x96.jpg',
		'username': 'ewarren',
		'url': 'https://twitter.com/ewarren',
		'verified': true,
	},
	'stats': {
		'counts': {
			'likes': 30480,
			'replies': 1525,
			'retweets': 2139,
		},
		'urls': {
			'likes': 'https://twitter.com/intent/like?tweet_id=1521854203483860992',
			'replies': 'https://twitter.com/intent/tweet?in_reply_to=1521854203483860992',
			'retweets': 'https://twitter.com/intent/retweet?tweet_id=1521854203483860992',
		},
	},
	'text': 'I joined activists on the steps of the Supreme Court yesterday ' +
		'to say we are not going back. We are in this fight all the way for ' +
		'abortion rights. https://t.co/V4NnEakwYx',
	'media': [
		{
			'type': 'photo',
			'id': '3_1521854200451321856',
			'url': 'https://pbs.twimg.com/media/FR62VQnWUAACgZH.jpg',
			'width': 900,
			'height': 1200,
		},
		{
			'type': 'photo',
			'id': '3_1521854200430407680',
			'url': 'https://pbs.twimg.com/media/FR62VQiXMAA4P3J.jpg',
			'width': 900,
			'height': 1200,
		},
	],
};
export const ThreeImages = Template.bind({});
ThreeImages.args = {
	'id': '1522831096181837824',
	'url': 'https://twitter.com/LandsknechtPike/status/1522831096181837824',
	'createdDate': 'May 7, 2022',
	'createdTime': '6:50 AM',
	'author': {
		'name': 'Aristocratic Fury',
		'pic': 'https://pbs.twimg.com/profile_images/1399065730209955840/' +
			'LrFdOqLU_x96.jpg',
		'username': 'LandsknechtPike',
		'url': 'https://twitter.com/LandsknechtPike',
	},
	'stats': {
		'counts': {
			'likes': 129,
			'replies': 4,
			'retweets': 12,
		},
		'urls': {
			'likes': 'https://twitter.com/intent/like?tweet_id=1522831096181837824',
			'replies': 'https://twitter.com/intent/tweet?in_reply_to=1522831096181837824',
			'retweets': 'https://twitter.com/intent/retweet?tweet_id=1522831096181837824',
		},
	},
	'text': 'The ancient castle of Wartburg!\n\nThis Thuringian castle was ' +
		'first mentioned in 1080. It hosted many famous people through its ' +
		'long history. Most famously, Wolfram von Eschenbach who wrote part ' +
		'of his Parzival in this castle in 1203 and Martin Luther who took ' +
		'refuge here in 1521. https://t.co/76WiX0CJlc',
	'media': [
		{
			'type': 'photo',
			'id': '3_1522829329352245248',
			'url': 'https://pbs.twimg.com/media/FSItNO2WQAA2KFE.jpg',
			'width': 4096,
			'height': 2318,
		},
		{
			'type': 'photo',
			'id': '3_1522829426022666241',
			'url': 'https://pbs.twimg.com/media/FSItS2-X0AEwqUA.jpg',
			'width': 4096,
			'height': 2304,
		},
		{
			'type': 'photo',
			'id': '3_1522829654004015104',
			'url': 'https://pbs.twimg.com/media/FSItgIRXIAATqAm.jpg',
			'width': 1200,
			'height': 797,
		},
	],
};
export const FourImages = Template.bind({});
FourImages.args = {
	'id': '1522641878155468800',
	'url': 'https://twitter.com/kenklippenstein/status/1522641878155468800',
	'createdDate': 'May 6, 2022',
	'createdTime': '6:18 PM',
	'author': {
		'name': 'Ken Klippenstein',
		'pic': 'https://pbs.twimg.com/profile_images/1402483999558279169/' +
			'U_xKM-E1_x96.jpg',
		'username': 'kenklippenstein',
		'url': 'https://twitter.com/kenklippenstein',
		'verified': true,
	},
	'stats': {
		'counts': {
			'likes': 29453,
			'replies': 201,
			'retweets': 9403,
		},
		'urls': {
			'likes': 'https://twitter.com/intent/like?tweet_id=1522641878155468800',
			'replies': 'https://twitter.com/intent/tweet?in_reply_to=1522641878155468800',
			'retweets': 'https://twitter.com/intent/retweet?tweet_id=1522641878155468800',
		},
	},
	'text': 'Starbucks is running a scorched earth union busting campaign ' +
		'all over the country, feel like this should be a bigger story ' +
		'https://t.co/k9g7mKCdpc',
	'media': [
		{
			'type': 'photo',
			'id': '3_1522641875378835456',
			'url': 'https://pbs.twimg.com/media/FSGCt-YXEAAPSkw.jpg',
			'width': 1169,
			'height': 760,
		},
		{
			'type': 'photo',
			'id': '3_1522641875362099201',
			'url': 'https://pbs.twimg.com/media/FSGCt-UXsAE2UE1.jpg',
			'width': 1169,
			'height': 698,
		},
		{
			'type': 'photo',
			'id': '3_1522641875970183168',
			'url': 'https://pbs.twimg.com/media/FSGCuAlWUAA3AZO.jpg',
			'width': 1169,
			'height': 883,
		},
		{
			'type': 'photo',
			'id': '3_1522641876008026115',
			'url': 'https://pbs.twimg.com/media/FSGCuAuXwAMtjaQ.jpg',
			'width': 1024,
			'height': 694,
		},
	],
};
export const Video = Template.bind({});
Video.args = {
	'id': '1522860333853036544',
	'url': 'https://twitter.com/buitengebieden/status/1522860333853036544',
	'createdDate': 'May 7, 2022',
	'createdTime': '8:46 AM',
	'author': {
		'name': 'Buitengebieden',
		'pic': 'https://pbs.twimg.com/profile_images/1130022182971760640/' +
			'FlbICzEn_x96.jpg',
		'username': 'buitengebieden',
		'url': 'https://twitter.com/buitengebieden',
	},
	'stats': {
		'counts': {
			'likes': 27802,
			'replies': 150,
			'retweets': 3556,
		},
		'urls': {
			'likes': 'https://twitter.com/intent/like?tweet_id=1522860333853036544',
			'replies': 'https://twitter.com/intent/tweet?in_reply_to=1522860333853036544',
			'retweets': 'https://twitter.com/intent/retweet?tweet_id=1522860333853036544',
		},
	},
	'text': 'Kitten realizing it has paws.. 😅\n\n#Caturday',
	'media': [
		{
			'type': 'video',
			'id': '7_1522860312269107201',
			'url': 'https://video.twimg.com/ext_tw_video/1522860312269107201' +
				'/pu/vid/720x720/VZc18X3v4nM7cq6J.mp4?tag=12',
			'mimeTye': 'video/mp4',
			'posterImage': 'https://pbs.twimg.com/ext_tw_video_thumb/' +
				'1522860312269107201/pu/img/tAMXR4TgnWiQvydf.jpg',
			'width': 720,
			'height': 720,
		},
	],
};
export const GIF = Template.bind({});
GIF.args = {
	'id': '1521748566338940933',
	'url': 'https://twitter.com/MissMacGuffin/status/1521748566338940933',
	'createdDate': 'May 4, 2022',
	'createdTime': '7:08 AM',
	'author': {
		'name': 'Marina Such',
		'pic': 'https://pbs.twimg.com/profile_images/1171672302548860928/' +
			'Lrgmnbfc_x96.jpg',
		'username': 'MissMacGuffin',
		'url': 'https://twitter.com/MissMacGuffin',
	},
	'stats': {
		'counts': {
			'likes': 24,
			'replies': 1,
			'retweets': 4,
		},
		'urls': {
			'likes': 'https://twitter.com/intent/like?tweet_id=1521748566338940933',
			'replies': 'https://twitter.com/intent/tweet?in_reply_to=1521748566338940933',
			'retweets': 'https://twitter.com/intent/retweet?tweet_id=1521748566338940933',
		},
	},
	'text': 'A veces, se nos puede olvidar que todos estos memes que ' +
		'compartimos vienen de algún lado y tienen protagonistas que existen ' +
		'de verdad. Este famoso es del reality "Toddlers &amp; Tiaras", la ' +
		'niña se llamaba Kailia y murió hace unos días con 16 años. Te ' +
		'quedas... 🙁 ',
	'media': [
		{
			'type': 'animated_gif',
			'id': '16_1521748558969507841',
			'url': 'https://video.twimg.com/tweet_video/FR5WQHbXEAEAtMv.mp4',
			'mimeTye': 'video/mp4',
			'posterImage': 'https://pbs.twimg.com/tweet_video_thumb/' +
				'FR5WQHbXEAEAtMv.jpg',
			'width': 460,
			'height': 242,
		},
	],
};
