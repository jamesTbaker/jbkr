const axios = require('axios');
const moment = require('moment');

module.exports = {

	ReturnMOSProductsSchedulesRequestConfig: (date) => ({
		uri: `https://0iyhvjnmbd.execute-api.us-east-1.amazonaws.com/dev/productsSchedules/date?onlyDate=${date}&groupProductsByTime=true&summarizeVenues=Special Exhibits,Drop-In Activities,Butterfly Garden`,
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
	ReturnMOSVenuesRequestConfig: () => ({
		uri: 'https://www.mos.org/api-config/venues',
		options: {
			timeout: 5000,
		},
	}),
	ReturnDailyScheduleData: (dateSelected) =>
		// return a new promise
		new Promise((resolve, reject) => {
			// set up default vars
			const todayMoment = moment();
			let dateSelectedMoment = todayMoment;
			let dateSelectedString = todayMoment.format('YYYY-MM-DD');
			// if date selected is truthy
			if (dateSelected) {
				// reset date selected moment
				dateSelectedMoment = dateSelected;
				dateSelectedString = dateSelected.format('YYYY-MM-DD');
			}
			// get request config
			const productsSchedulesConfig =
				module.exports.ReturnMOSProductsSchedulesRequestConfig(dateSelectedString);
			const svgConfig =
				module.exports.ReturnMOSSVGRequestConfig();
			const venuesConfig =
				module.exports.ReturnMOSVenuesRequestConfig();
			// get promises to get the data from the APIs
			Promise.all([
				axios.get(productsSchedulesConfig.uri, productsSchedulesConfig.options),
				axios.get(svgConfig.uri, svgConfig.options),
				axios.get(venuesConfig.uri, venuesConfig.options),
			])
				// if the promise is resolved with a result
				.then((result) => {
					// extract data from result for convenience
					const daysWithProductsAll = result[0].data.payload;
					const svgsAll = result[1].data;
					const venues = result[2].data.items;
					// set up container for set of modified venues
					const venuesFormatted = [];
					// for each venue
					venues.forEach((venue) => {
						// clone param
						const venueClone = { ...venue };
						// for each svg
						svgsAll.forEach((svg) => {
							// if this svg's id matches this venue's id
							if (svg.id === venueClone['icon-svg-id']) {
								// set this venue's icon content property
								// 		to this SVG's token property
								venueClone['icon-content'] = svg.token;
							}
						});
						// whether we found an icon for this venue or not,
						// 		push the venue to the container
						venuesFormatted.push(venueClone);
					});
					// then resolve this promise with a custom object
					resolve({
						dates: {
							today: todayMoment,
							dateUsed: dateSelectedMoment,
							dateString: dateSelectedString,
							dateUsedIsToday: dateSelectedMoment.isSame(todayMoment, 'day'),
						},
						content: {
							daysWithProductsAll,
							svgsAll,
							venues: venuesFormatted,
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
