const { ObjectID } = require('bson');
const { DatabaseConnection } = require('@jbkr/db-client');

module.exports = {
	'ReturnOneScreenFromDB': async ({ slug }) => {
		// attempt to get the data
		try {
			// get a database connection
			const db = await DatabaseConnection({
				'dbName': process.env.mongoDbDbName,
			});
			// assign query result to constant
			const result =
				await db.collection('screens').aggregate([
					// match the document whose slug was received
					{ '$match': { 'Slug': slug } },
					// look up the meta image for this screen
					{
						'$lookup':
						{
							'from': 'upload_file',
							'localField': 'MetaImage',
							'foreignField': '_id',
							'as': 'MetaImages',
						},
					},
					// specify which fields to return
					{
						'$project': {
							'_id': 0,
							'Slug': 1,
							'OpenGraphType': 1,
							'Title': 1,
							'MetaTitle': 1,
							'MetaOther': 1,
							'MetaDescription': 1,
							'SocialDescription': 1,
							'MetaImages.alternativeText': 1,
							'MetaImages.ext': 1,
							'MetaImages.hash': 1,
							'MetaImages.mime': 1,
							'MetaImageGravity': 1,
						},
					},
				]).toArray();
			// return result
			return result;
			// if an error occurred
		} catch (error) {
			// return it
			return error;
		}
	},
	'ReturnAllAuthorsFromDB': async () => {
		// attempt to get the data
		try {
			// get a database connection
			const db = await DatabaseConnection({
				'dbName': process.env.mongoDbDbName,
			});
			// assign query result to constant
			const result =
				await db.collection('authors').find({}).toArray();
			// return result
			return result;
			// if an error occurred
		} catch (error) {
			// return it
			return error;
		}
	},
	'ReturnAllArticlesFromDB': async () => {
		// attempt to get the data
		try {
			// get a database connection
			const db = await DatabaseConnection({
				'dbName': process.env.mongoDbDbName,
			});
			// assign query result to constant
			let result =
				await db.collection('articles').aggregate([
					// look up the teaser image for this article
					{
						'$lookup':
						{
							'from': 'upload_file',
							'localField': 'TeaserImage',
							'foreignField': '_id',
							'as': 'TeaserImages',
						},
					},
					// specify which field to sort on and in which direction
					{ '$sort': { 'PublicationDate': -1 } },
					// specify which fields to return
					{
						'$project': {
							'Featured': 1,
							'PublicationDate': 1,
							'Slug': 1,
							'Title': 1,
							'Subtitle': 1,
							'TeaserDescription': 1,
							'Tagline': 1,
							'TeaserImages.alternativeText': 1,
							'TeaserImages.width': 1,
							'TeaserImages.height': 1,
							'TeaserImages.ext': 1,
							'TeaserImages.hash': 1,
							'TeaserImages.mime': 1,
						},
					},
				]).toArray();
			// serialize and deserialize result, converting BSON to JSON
			result = JSON.parse(JSON.stringify(result));
			// return result
			return result;
			// if an error occurred
		} catch (error) {
			// return it
			return error;
		}
	},
	'ReturnOneArticleFromDB': async ({ slug }) => {
		// attempt to get the data
		try {
			// get a database connection
			const db = await DatabaseConnection({
				'dbName': process.env.mongoDbDbName,
			});
			// get the raw data for this article from the database
			let articleDataRaw = await db.collection('articles').aggregate([
				// match the document whose slug matches the slug in context
				{ '$match': { 'Slug': slug } },
				// look up the brief statements for this article
				{
					'$lookup':
					{
						'from': 'components_content_article_brief_statements',
						'localField': 'BriefStatements.ref',
						'foreignField': '_id',
						'as': 'BriefStatements',
					},
				},
				// look up the meta image for this article
				{
					'$lookup':
					{
						'from': 'upload_file',
						'localField': 'MetaImage',
						'foreignField': '_id',
						'as': 'MetaImages',
					},
				},
				// look up the head image for this article
				{
					'$lookup':
					{
						'from': 'upload_file',
						'localField': 'HeadImage',
						'foreignField': '_id',
						'as': 'HeadImages',
					},
				},
				// look up the intro video for this article
				{
					'$lookup':
					{
						'from': 'upload_file',
						'localField': 'IntroVideo',
						'foreignField': '_id',
						'as': 'IntroVideos',
					},
				},
				// specify which fields to return
				{
					'$project': {
						'_id': 0,
						'Featured': 1,
						'PublicationDate': 1,
						'UpdateDate': 1,
						'Slug': 1,
						'Title': 1,
						'Subtitle': 1,
						'Tagline': 1,
						'MetaTitle': 1,
						'MetaDescription': 1,
						'SocialDescription': 1,
						'MetaImages.alternativeText': 1,
						'MetaImages.ext': 1,
						'MetaImages.hash': 1,
						'MetaImages.mime': 1,
						'HeadImages.alternativeText': 1,
						'HeadImages.width': 1,
						'HeadImages.height': 1,
						'HeadImages.ext': 1,
						'HeadImages.hash': 1,
						'HeadImages.mime': 1,
						'HeadImages.caption': 1,
						'MetaImageGravity': 1,
						'HeadImageCaption': 1,
						'BriefStatements._id': 1,
						'BriefStatements.Statement': 1,
						'IntroText': 1,
						'IntroVideos.url': 1,
						'IntroVideos.mime': 1,
						'IntroVideos.alternativeText': 1,
						'IntroVideos.caption': 1,
						'Section': 1,
						'SimpleBody': 1,
					},
				},
			]).toArray();
			// serialize and deserialize returned data, converting BSON to JSON
			articleDataRaw = JSON.parse(JSON.stringify(articleDataRaw))[0];
			// get the IDs of any sections in this article
			const articleSectionIDs = [];
			if (
				articleDataRaw &&
				articleDataRaw.Section &&
				articleDataRaw.Section[0]
			) {
				articleDataRaw.Section.forEach((sectionObject) => {
					articleSectionIDs.push(new ObjectID(sectionObject.ref));
				});
			}
			// get the raw data for this article's sections from the database
			let sectionDataRaw = await db
				.collection('components_content_article_sections').aggregate([
					// match the documents whose IDs are in the
					// collection of IDs
					{ '$match': { '_id': { '$in': articleSectionIDs } } },
					// look up the brief statements for this section
					{
						'$lookup':
						{
							'from':
								'components_content_article_brief_statements',
							'localField': 'BriefStatement.ref',
							'foreignField': '_id',
							'as': 'SectionBriefStatements',
						},
					},
					// look up the subsections for this section
					{
						'$lookup':
						{
							'from': 'components_content_article_subsections',
							'localField': 'Subsection.ref',
							'foreignField': '_id',
							'as': 'Subsections',
						},
					},
					// specify which fields to return
					{
						'$project': {
							'_id': 0,
							'SectionID': 1,
							'SectionTitle': 1,
							'SectionPreface': 1,
							'SectionBriefStatements._id': 1,
							'SectionBriefStatements.Statement': 1,
							'Subsections.SubsectionID': 1,
							'Subsections.SubsectionTitle': 1,
							'Subsections.SubsectionText': 1,
							'Subsections.SubsectionGravity': 1,
							'Subsections.SubsectionMediaComponents': 1,
							'Subsections.SubsectionMediaGravity': 1,
							'Subsections.SubsectionMedia': 1,
							'SectionQuote': 1,
						},
					},
				]).toArray();
			// serialize and deserialize returned data, converting BSON to JSON
			sectionDataRaw = JSON.parse(JSON.stringify(sectionDataRaw));
			// get the IDs of any media items in
			// this article's sections' subsections
			const mediaItemIDs = [];
			sectionDataRaw.forEach((sectionObject) => {
				sectionObject.Subsections.forEach((subsectionObject) => {
					subsectionObject.SubsectionMedia
						.forEach((mediaItemIDString) => {
							mediaItemIDs.push(new ObjectID(mediaItemIDString));
						});
				});
			});
			// get the raw data for this article's sections's
			// subsection media items from the database
			let mediaDataRaw = await db.collection('upload_file')
				.find(
					// find the documents whose IDs are in the collection of IDs
					{ '_id': { '$in': mediaItemIDs } },
					// specify which fields to return
					{
						'_id': 0,
						'ext': 1,
						'hash': 1,
						'url': 1,
						'mime': 1,
						'alternativeText': 1,
						'caption': 1,
						'width': 1,
						'height': 1,
					},
				).toArray();
			// serialize and deserialize returned data, converting BSON to JSON
			mediaDataRaw = JSON.parse(JSON.stringify(mediaDataRaw));
			// return result
			return articleDataRaw;
			// if an error occurred
		} catch (error) {
			// return it
			return error;
		}
	},
};
