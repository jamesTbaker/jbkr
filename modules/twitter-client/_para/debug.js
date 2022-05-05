/* eslint-disable no-unused-vars */
import { returnAllTweets } from '../index.js';

const result = await returnAllTweets({
	'tweetsIDs': [
		'1521748566338940933',
		'1522218306123436036',
		'1521791056085680128',
		'1521611729095983104',
		'1521854203483860992',
		'1521892058327228416',
	],
});

console.log(result);
