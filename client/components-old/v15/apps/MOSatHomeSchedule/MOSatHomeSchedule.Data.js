const axios = require('axios');
const moment = require('moment');

module.exports = {

	ReturnScheduleBoundaryDates: () => ({
		startDateWeek1: moment().startOf('week').format('YYYY-MM-DD'),
		endDateWeek1: moment().endOf('week').format('YYYY-MM-DD'),
		startDateWeek2: moment().startOf('week').add(1, 'week').format('YYYY-MM-DD'),
		endDateWeek2: moment().endOf('week').add(1, 'week').format('YYYY-MM-DD'),
	}),
	ReturnMOSProductsSchedulesRequestConfig: (boundaryDates) => ({
		uri: `https://0iyhvjnmbd.execute-api.us-east-1.amazonaws.com/dev/productsSchedules/date?firstDate=${boundaryDates.startDateWeek1}&lastDate=${boundaryDates.endDateWeek2}&omitProductType=onsite&omitHours=true&groupProductsByTime=true`,
		options: {
			headers: {
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoibHVzY2lvdXMga2l0dGVucyJ9.jGLud9MRGpHpI1GuGTBfYfyOlq57P0u8eXBpCLS0fLk',
			},
			timeout: 5000,
		},
	}),
	ReturnMOSSVGRequestConfig: () => ({
		uri: 'https://www.mos.org/api/v1/svgs',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMOSChannelsRequestConfig: () => ({
		uri: 'https://www.mos.org/api-config/channels',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMOSatHomeScheduleData: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			const boundaryDates =
				module.exports.ReturnScheduleBoundaryDates();
			// get request config
			const productsSchedulesConfig =
				module.exports.ReturnMOSProductsSchedulesRequestConfig(boundaryDates);
			const svgConfig =
				module.exports.ReturnMOSSVGRequestConfig();
			const channelsConfig =
				module.exports.ReturnMOSChannelsRequestConfig();
			// get promises to get the data from the APIs
			Promise.all([
				axios.get(productsSchedulesConfig.uri, productsSchedulesConfig.options),
				axios.get(svgConfig.uri, svgConfig.options),
				axios.get(channelsConfig.uri, channelsConfig.options),
			])
				// if the promise is resolved with a result
				.then((result) => {
					// extract data from result for convenience
					const rawDaysWithProductsAll = result[0].data.payload;
					const svgsAll = result[1].data;
					const channels = result[2].data.items;
					// set up container for set of modified channels
					const channelsFormatted = [];
					// for each channel
					channels.forEach((channel) => {
						// clone param
						const channelClone = { ...channel };
						// for each svg
						svgsAll.forEach((svg) => {
							// if this svg's id matches this channel's id
							if (svg.id === channelClone['icon-svg-id']) {
								// set this channel's icon content property
								// 		to this SVG's token property
								channelClone['icon-content'] = svg.token;
							}
						});
						// whether we found an icon for this channel or not,
						// 		push the channel to the container
						channelsFormatted.push(channelClone);
					});
					// extract days with online products only for convenience
					// set up container
					const daysWithProductsAll = [];
					// for each day returned
					rawDaysWithProductsAll.forEach((dayWithProducts) => {
						// if there are no online products
						if (
							dayWithProducts &&
							(
								!dayWithProducts.products ||
								!dayWithProducts.products.online
							)
						) {
							// push to container a day with just a date string
							daysWithProductsAll.push({
								dateString: dayWithProducts.dateString,
							});
						// otherwise, if there are online products
						} else if (
							dayWithProducts &&
							dayWithProducts.products &&
							dayWithProducts.products.online
						) {
							// push to container a day with a date string and products
							daysWithProductsAll.push({
								dateString: dayWithProducts.dateString,
								products: dayWithProducts.products.online,
							});
						}
					});
					// for this application's use case, we sometimes need to show dates
					// 		as far back as the start of week 1, even if they are in the
					// 		past and have no products; so, we'll insert the missing dates
					// get the date of the first day in the result
					const firstDateReturned = moment(daysWithProductsAll[0].dateString, 'YYYY-MM-DD');
					// get the first date to test for insertion, which will be the start of week 1
					const dateToTestForInsertion = moment(boundaryDates.startDateWeek1);
					// while the date to test for insertion is before the first date returned
					while (dateToTestForInsertion.isBefore(firstDateReturned)) {
						// insert a date object for this date
						daysWithProductsAll.push({
							dateString: dateToTestForInsertion.format('YYYY-MM-DD'),
						});
						// add a day to the date to test for insertion
						dateToTestForInsertion.add(1, 'day');
					}
					// sort days with products by date string
					daysWithProductsAll.sort((a, b) => a.dateString - b.dateString);
					// then resolve this promise with a custom object
					resolve({
						dates: boundaryDates,
						content: {
							daysWithProductsAll,
							svgsAll,
							channels: channelsFormatted,
						},
					});
				})
				// if the promise is rejected with an error
				.catch((error) => {
					// reject this promise with the error
					reject(error);
				});
		}),
};
module.exports.ReturnMOSatHomeScheduleData();
