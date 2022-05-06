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
export const General = Template.bind({});
General.args = {
	// 'title': '1521854203483860992',
	'id': '1521854203483860992',
	'author': {
		'name': 'Elizabeth Warren',
		'pic': 'https://pbs.twimg.com/profile_images/' +
			'1296929570231390209/hNsDkcQg_normal.jpg',
		'username': 'ewarren',
		'verified': true,
	},
	'createdDate': 'May 4, 2022',
	'createdTime': '2:08 PM',
	'stats': {
		'likes': 30329,
		'quotes': 228,
		'retweets': 2132,
	},
	'text': 'I joined activists on the steps of the Supreme Court yesterday ' +
		'to say we are not going back. We are in this fight all the way ' +
		'for abortion rights. https://t.co/V4NnEakwYx',
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
