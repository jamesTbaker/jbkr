import {
	handleGetProfileScreenContentRequest,
	handleGetLibLabScreenContentRequest,
	handleGetArticleScreenContentRequest,
	handleGetContactScreenContentRequest,
	handleGetMetaScreenContentRequest,
	handleGet404ScreenContentRequest,
} from '../handler.js';

handleGetProfileScreenContentRequest(
	{
		'source': 'local',
	},
	{},
);
/* handleGetLibLabScreenContentRequest(
	{
		'source': 'local',
	},
	{},
);
handleGetArticleScreenContentRequest(
	{
		'source': 'local',
		'pathParameters': {
			'slug': 'the-hub',
		},
	},
	{},
);
handleGetContactScreenContentRequest(
	{
		'source': 'local',
	},
	{},
);
handleGetMetaScreenContentRequest(
	{
		'source': 'local',
	},
	{},
);
handleGet404ScreenContentRequest(
	{
		'source': 'local',
	},
	{},
);
 */
