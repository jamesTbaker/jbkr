const {
	HandleGetLibLabContentRequest,
	HandleGetArticleContentRequest,
} = require('../handler');

HandleGetArticleContentRequest(
	{
		'source': 'local',
		'pathParameters': {
			'slug': 'the-hub',
		},
	},
	{},
);
