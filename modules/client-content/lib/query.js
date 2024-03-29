import { ObjectID } from 'bson';
import { returnDatabaseConnection } from '@jbkr/db-client';
import { returnAllTweets } from '@jbkr/twitter-client';

export const returnDefaultValuesFromDB = async () => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// assign query result to constant
		const result =
			await dbConnection.collection('default_values').aggregate([
				// look up the meta image for this screen
				{
					'$lookup':
					{
						'from': 'components_content_default_values',
						'localField': 'DefaultValue.ref',
						'foreignField': '_id',
						'as': 'DefaultValues',
					},
				},
				// specify which fields to return
				{
					'$project': {
						'_id': 0,
						'DefaultValues.Key': 1,
						'DefaultValues.Value': 1,
					},
				},
			]).toArray();
		// return results, serialized and deserialized to convert BSON to JSON
		return JSON.parse(JSON.stringify(result))[0].DefaultValues;
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
export const returnOneScreenFromDB = async ({ screenID }) => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// assign query results to constants
		const mains =
			await dbConnection.collection('screens').aggregate([
				// match the document whose slug was received
				{ '$match': { 'ScreenID': screenID } },
				// look up the text content items for this screen
				{
					'$lookup':
					{
						'from': 'components_content_screen_content_items',
						'localField': 'UniqueContentItems.ref',
						'foreignField': '_id',
						'as': 'TextContentItems',
					},
				},
				// look up the data content items for this screen
				{
					'$lookup':
					{
						'from': 'components_content_screen_data_content_items',
						'localField': 'UniqueDataContentItems.ref',
						'foreignField': '_id',
						'as': 'DataContentItems',
					},
				},
				// look up the media content item IDs for this screen
				{
					'$lookup':
					{
						'from': 'components_content_screen_media_content_items',
						'localField': 'UniqueMediaContentItems.ref',
						'foreignField': '_id',
						'as': 'MediaContentItemIDs',
					},
				},
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
						'TextContentItems.Key': 1,
						'TextContentItems.Value': 1,
						'TextContentItems.PreserveMarkdown': 1,
						'DataContentItems.Key': 1,
						'DataContentItems.Value': 1,
						'MediaContentItemIDs.Key': 1,
						'MediaContentItemIDs.Value': 1,
					},
				},
			]).toArray();
		const mediaContentItemIDs = [];
		if (
			mains &&
			mains[0] &&
			mains[0].MediaContentItemIDs &&
			mains[0].MediaContentItemIDs[0]
		) {
			mains[0].MediaContentItemIDs.forEach((mediaIDObject) => {
				mediaContentItemIDs.push(new ObjectID(mediaIDObject.Value));
			});
		}
		const mainsMedia = await dbConnection
			.collection('upload_file').aggregate([
				// match the documents whose IDs are in the
				// collection of IDs
				{ '$match': { '_id': { '$in': mediaContentItemIDs } } },
				// specify which fields to return
				{
					'$project': {
						// '_id': 0,
						'alternativeText': 1,
						'width': 1,
						'height': 1,
						'ext': 1,
						'hash': 1,
						'mime': 1,
						'url': 1,
						'caption': 1,
					},
				},
			]).toArray();
		const headerMain =
			await dbConnection.collection('headers').aggregate([
				// look up the meta image for this screen
				{
					'$lookup':
					{
						'from': 'components_header_footer_header' +
							'_footer_link_primaries',
						'localField': 'Link.ref',
						'foreignField': '_id',
						'as': 'Links',
					},
				},
				// specify which fields to return
				{
					'$project': {
						'_id': 0,
						'AnnouncementBodyAnchor': 1,
						'AnnouncementBodySlug': 1,
						'AnnouncementPreface': 1,
						'Links._id': 1,
						'Links.Category': 1,
						'Links.OrderInSet': 1,
						'Links.AnchorText': 1,
						'Links.AnchorIconBefore': 1,
						'Links.URL': 1,
						'Links.NewTab': 1,
						'Links.ScreenIDs': 1,
						'Links.Disabled': 1,
					},
				},
			]).toArray();
		const headerArticle = await dbConnection.collection('articles')
			.find({}, {
				'projection': {
					'_id': 0,
					'Title': 1,
					'Subtitle': 1,
					'Slug': 1,
				},
			}).sort({ 'PublicationDate': -1 }).limit(1).toArray();
		const footer = await dbConnection.collection('footers')
			.findOne({}, {
				'projection': {
					'_id': 0,
					'Copy': 1,
				},
			});
		// return results, serialized and deserialized to convert BSON to JSON
		return {
			'headerMain': JSON.parse(JSON.stringify(headerMain))[0],
			'headerArticle': JSON.parse(JSON.stringify(headerArticle))[0],
			'main': JSON.parse(JSON.stringify(mains))[0],
			'mainMedia': JSON.parse(JSON.stringify(mainsMedia)),
			'footer': footer,
		};
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
export const returnAllAuthorsFromDB = async () => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// assign query result to constant
		const result =
			await dbConnection.collection('authors').find({}).toArray();
		// return result, serialized and deserialized to convert BSON to JSON
		return JSON.parse(JSON.stringify(result));
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
export const returnAllSkillsFromDB = async () => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// assign query result to constant
		const result =
			await dbConnection.collection('skills').find({}, {
				'projection': {
					'PercentageExpertise': 1,
					'Category': 1,
					'Featured': 1,
					'SkillName': 1,
				},
			}).toArray();
		// return result, serialized and deserialized to convert BSON to JSON
		return JSON.parse(JSON.stringify(result));
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
export const returnAllProfessionalExperiencesFromDB = async () => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// assign query result to constant
		const result = await dbConnection.collection('professional_experiences')
			.find({}, {
				'projection': {
					'Title': 1,
					'StartDate': 1,
					'EndDate': 1,
					'Description': 1,
					'Employer': 1,
				},
			}).sort({ 'EndDate': -1 }).toArray();
		// return result, serialized and deserialized to convert BSON to JSON
		return JSON.parse(JSON.stringify(result));
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
export const returnAllEducationCertificationFromDB = async () => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// assign query result to constant
		const result = await dbConnection.collection('education_certifications')
			.find({}, {
				'projection': {
					'OrderInSet': 1,
					'StartYear': 1,
					'Header': 1,
					'Tagline': 1,
					'EndYear': 1,
					'Details': 1,
					'Type': 1,
				},
			}).sort({ 'OrderInSet': 1 }).toArray();
		// return result, serialized and deserialized to convert BSON to JSON
		return JSON.parse(JSON.stringify(result));
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
export const returnAllVolunteerExperiencesFromDB = async () => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// assign query result to constant
		const result = await dbConnection.collection('volunteer_experiences')
			.find({}, {
				'projection': {
					'Title': 1,
					'ForWhom': 1,
					'StartYear': 1,
					'Description': 1,
					'EndYear': 1,
				},
			}).sort({ 'EndYear': -1 }).toArray();
		// return result, serialized and deserialized to convert BSON to JSON
		return JSON.parse(JSON.stringify(result));
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
export const returnAllPublishedArticlesFromDB = async () => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// construct string representation of today's date
		const todaysDateObject = new Date();
		let todaysDateDateString = todaysDateObject.getDate().toString();
		if (todaysDateDateString.length === 1) {
			todaysDateDateString = '0' + todaysDateDateString;
		}
		let todaysDateMonthString = todaysDateObject.getMonth();
		todaysDateMonthString = (todaysDateMonthString + 1).toString();
		if (todaysDateMonthString.length === 1) {
			todaysDateMonthString = '0' + todaysDateMonthString;
		}

		const todaysDateString = todaysDateObject.getFullYear() + '-' +
			todaysDateMonthString + '-' + todaysDateDateString;
		console.log(todaysDateString);
		// assign query result to constant
		let result =
			await dbConnection.collection('articles').aggregate([
				// match the documents whose PublicationDate is today or earlier
				{
					'$match': {
						'PublicationDate': { '$lte': todaysDateString },
					},
				},
				// look up the teaser image for this article
				{
					'$lookup':
					{
						'from': 'upload_file',
						'localField': 'Image',
						'foreignField': '_id',
						'as': 'Images',
					},
				},
				// look up the intro video for this article
				{
					'$lookup':
					{
						'from': 'upload_file',
						'localField': 'FeaturedArticleLargeTeaserVideo',
						'foreignField': '_id',
						'as': 'FeaturedTeaserVideos',
					},
				},
				// specify which field to sort on and in which direction
				{ '$sort': { 'PublicationDate': -1 } },
				// specify which fields to return
				{
					'$project': {
						'Featured': 1,
						'PublicationDate': 1,
						'UpdateDate': 1,
						'Slug': 1,
						'Title': 1,
						'Subtitle': 1,
						'TeaserDescription': 1,
						'Tagline': 1,
						'Images.alternativeText': 1,
						'Images.width': 1,
						'Images.height': 1,
						'Images.ext': 1,
						'Images.hash': 1,
						'Images.mime': 1,
						'FeaturedTeaserVideos.url': 1,
						'FeaturedTeaserVideos.mime': 1,
						'FeaturedTeaserVideos.alternativeText': 1,
						'FeaturedTeaserVideos.caption': 1,
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
};
export const returnOneArticleFromDB = async ({ slug }) => {
	// attempt to get the data
	try {
		// get a database connection
		const dbConnection = await returnDatabaseConnection({
			'dbName': process.env.mongoDbDbName,
		});
		// get the raw data for this article from the database
		let articleMainRaw = await dbConnection
			.collection('articles').aggregate([
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
						'localField': 'Image',
						'foreignField': '_id',
						'as': 'Images',
					},
				},
				// look up the intro video poster image for this article
				{
					'$lookup':
					{
						'from': 'upload_file',
						'localField': 'IntroVideoPoster',
						'foreignField': '_id',
						'as': 'IntroVideoPosters',
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
				// look up the unified body texts for this article
				{
					'$lookup':
					{
						'from': 'components_content_aub_texts',
						'localField': 'UnifiedBody.ref',
						'foreignField': '_id',
						'as': 'UnifiedBodyTexts',
					},
				},
				// look up the unified body media items for this article
				{
					'$lookup':
					{
						'from': 'components_content_aub_media_sets',
						'localField': 'UnifiedBody.ref',
						'foreignField': '_id',
						'as': 'UnifiedBodyMediaSets',
					},
				},
				// look up the brief statements for this article
				{
					'$lookup':
					{
						'from': 'internal_tags',
						'localField': 'InternalTags',
						'foreignField': '_id',
						'as': 'InternalTags',
					},
				},
				// look up the brief statements for this article
				{
					'$lookup':
					{
						'from': 'twitter_hashtags',
						'localField': 'TwitterHashtags',
						'foreignField': '_id',
						'as': 'TwitterHashtags',
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
						'Images.alternativeText': 1,
						'Images.width': 1,
						'Images.height': 1,
						'Images.ext': 1,
						'Images.hash': 1,
						'Images.mime': 1,
						'Images.caption': 1,
						'BriefStatements._id': 1,
						'BriefStatements.Statement': 1,
						'IntroText': 1,
						'IntroVideos.url': 1,
						'IntroVideos.mime': 1,
						'IntroVideos.alternativeText': 1,
						'IntroVideos.caption': 1,
						'IntroVideoPosters.alternativeText': 1,
						'IntroVideoPosters.width': 1,
						'IntroVideoPosters.height': 1,
						'IntroVideoPosters.ext': 1,
						'IntroVideoPosters.hash': 1,
						'IntroVideoPosters.mime': 1,
						'IntroVideoPosters.caption': 1,
						'Section': 1,
						'UnifiedBody': 1,
						'UnifiedBodyTexts': 1,
						'UnifiedBodyMediaSets': 1,
						// 'UnifiedBodyCodeEmbeds': 1,
						'InternalTags.HashtagText': 1,
						'TwitterHashtags.HashtagText': 1,
					},
				},
			]).toArray();
		// serialize and deserialize returned data, converting BSON to JSON
		articleMainRaw = JSON.parse(JSON.stringify(articleMainRaw))[0];
		// get the IDs of any sections in this article
		const articleSectionIDs = [];
		if (
			articleMainRaw &&
			articleMainRaw.Section &&
			articleMainRaw.Section[0]
		) {
			articleMainRaw.Section.forEach((sectionObject) => {
				articleSectionIDs.push(new ObjectID(sectionObject.ref));
			});
		}
		// get the raw data for this article's sections from the database
		let articleSectionsRaw = await dbConnection
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
						// '_id': 0,
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
		articleSectionsRaw = JSON.parse(JSON.stringify(articleSectionsRaw));


		const articleUnifiedBodyMediaSetItemIDs = [];
		articleMainRaw.UnifiedBodyMediaSets.forEach((mediaSet) => {
			mediaSet.Item.forEach((mediaSetItem) => {
				articleUnifiedBodyMediaSetItemIDs.push(
					new ObjectID(mediaSetItem.ref),
				);
			});
		});

		let articleUnifiedBodyMediaSetItemsRaw =
			await dbConnection.collection('components_content_aub_media_items')
				.find(
					// find the documents whose IDs are in the collection of IDs
					{ '_id': { '$in': articleUnifiedBodyMediaSetItemIDs } },
					// specify which fields to return
					{
						'_id': 0,
						'Type': 1,
						'EmbedURLFragment': 1,
						'EmbedCodeFile': 1,
						'EmbedAccessibilityTitle': 1,
						'EmbedCaption': 1,
						'Upload': 1,
						'UploadVideoPosterImage': 1,
					},
				).toArray();
		// serialize and deserialize returned data, converting BSON to JSON
		articleUnifiedBodyMediaSetItemsRaw = JSON.parse(
			JSON.stringify(articleUnifiedBodyMediaSetItemsRaw),
		);
		// set up containers for media item IDs
		const articleMediaIDs = [];
		const articleTweetIDs = [];
		// get the IDs of any uploaded media items in this
		//		article's sections' subsections
		articleSectionsRaw.forEach((sectionObject) => {
			sectionObject.Subsections.forEach((subsectionObject) => {
				subsectionObject.SubsectionMedia
					.forEach((articleMediaIDString) => {
						articleMediaIDs.push(
							new ObjectID(articleMediaIDString),
						);
					});
			});
		});

		// get the IDs of any uploaded media items in this
		//		article's unified body
		articleUnifiedBodyMediaSetItemsRaw.forEach((mediaItemRaw) => {
			if (
				mediaItemRaw.Type === 'UploadedImage' ||
				mediaItemRaw.Type === 'UploadedVideo'
			) {
				articleMediaIDs.push(
					new ObjectID(mediaItemRaw.Upload),
				);
				if (mediaItemRaw.UploadVideoPosterImage) {
					articleMediaIDs.push(
						new ObjectID(mediaItemRaw.UploadVideoPosterImage),
					);
				}
			}
			if (
				mediaItemRaw.Type === 'YouTube' &&
				mediaItemRaw.UploadVideoPosterImage
			) {
				articleMediaIDs.push(
					new ObjectID(mediaItemRaw.UploadVideoPosterImage),
				);
			}
			if (mediaItemRaw.Type === 'Twitter') {
				articleTweetIDs.push(mediaItemRaw.EmbedURLFragment);
			}
		});
		// get the raw data for this article's sections's
		// subsection media items from the database
		let articleMediaRaw = await dbConnection.collection('upload_file')
			.find(
				// find the documents whose IDs are in the collection of IDs
				{ '_id': { '$in': articleMediaIDs } },
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
		articleMediaRaw = JSON.parse(JSON.stringify(articleMediaRaw));
		let articleTweetsRaw = await returnAllTweets({
			'tweetsIDs': articleTweetIDs,
		});
		// return result all 3 results
		return {
			articleMainRaw,
			articleSectionsRaw,
			articleUnifiedBodyMediaSetItemsRaw,
			articleMediaRaw,
			articleTweetsRaw,
		};
		// if an error occurred
	} catch (error) {
		// return it
		return error;
	}
};
