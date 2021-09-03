const axios = require('axios');
const moment = require('moment');
const Schedule = require('../../services/schedule');

module.exports = {

	ReturnMOSSVGRequestConfig: () => ({
		uri: 'https://dev.mos.org/api/v1/svgs',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMainAppHeaderRequestConfig: () => ({
		uri: 'https://dev.mos.org/api/v1/component-main-app-header',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMainAppHeaderPrimarySectionsRequestConfig: () => ({
		uri: 'https://dev.mos.org/api/v1/component-main-app-header-primary-sections',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMainAppHeaderPrimarySectionsPrincipalLinksRequestConfig: () => ({
		uri: 'https://dev.mos.org/api/v1/component-main-app-header-ps-principal-links',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMainAppHeaderPrimarySectionsAuxiliaryLinksRequestConfig: () => ({
		uri: 'https://dev.mos.org/api/v1/component-main-app-header-ps-auxiliary-links',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMainAppHeaderSecondaryLinksRequestConfig: () => ({
		uri: 'https://dev.mos.org/api/v1/component-main-app-header-secondary-links',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMainAppHeaderTertiaryLinksRequestConfig: () => ({
		uri: 'https://dev.mos.org/api/v1/component-main-app-header-tertiary-links',
		options: {
			timeout: 5000,
		},
	}),
	ReturnMainAppHeaderData: () =>
		// return a new promise
		new Promise((resolve, reject) => {
			// get request config
			const svgConfig =
				module.exports.ReturnMOSSVGRequestConfig();
			const mainAppHeaderConfig =
				module.exports.ReturnMainAppHeaderRequestConfig();
			const mainAppHeaderPrimarySectionsConfig =
				module.exports.ReturnMainAppHeaderPrimarySectionsRequestConfig();
			const mainAppHeaderPrimarySectionsPrincipalLinksConfig =
				module.exports
					.ReturnMainAppHeaderPrimarySectionsPrincipalLinksRequestConfig();
			const mainAppHeaderPrimarySectionsAuxiliaryLinksConfig =
				module.exports
					.ReturnMainAppHeaderPrimarySectionsPrincipalLinksRequestConfig();
			const mainAppHeaderSecondaryLinksConfig =
				module.exports
					.ReturnMainAppHeaderSecondaryLinksRequestConfig();
			const mainAppHeaderTertiaryLinksConfig =
				module.exports
					.ReturnMainAppHeaderTertiaryLinksRequestConfig();
			// get promises to get the data from the APIs
			Promise.all([
				axios.get(svgConfig.uri, svgConfig.options),
				axios.get(
					mainAppHeaderConfig.uri,
					mainAppHeaderConfig.options,
				),
				axios.get(
					mainAppHeaderPrimarySectionsConfig.uri,
					mainAppHeaderPrimarySectionsConfig.options,
				),
				axios.get(
					mainAppHeaderPrimarySectionsPrincipalLinksConfig.uri,
					mainAppHeaderPrimarySectionsPrincipalLinksConfig.options,
				),
				axios.get(
					mainAppHeaderPrimarySectionsAuxiliaryLinksConfig.uri,
					mainAppHeaderPrimarySectionsAuxiliaryLinksConfig.options,
				),
				axios.get(
					mainAppHeaderSecondaryLinksConfig.uri,
					mainAppHeaderSecondaryLinksConfig.options,
				),
				axios.get(
					mainAppHeaderTertiaryLinksConfig.uri,
					mainAppHeaderTertiaryLinksConfig.options,
				),
				Schedule.ReturnTodaysScheduleData(),
			])
				// if the promise is resolved with a result
				.then((result) => {
					// extract data from result for convenience
					const svgsAll = result[0].data;
					const mainAppHeader = result[1].data;
					const mainAppHeaderPrimarySections = result[2].data;
					const mainAppHeaderPrimarySectionsPrincipalLinks =
						result[3].data;
					const mainAppHeaderPrimarySectionsAuxiliaryLinks =
						result[4].data;
					const mainAppHeaderSecondaryLinks =
						result[5].data;
					const mainAppHeaderTertiaryLinks =
						result[6].data;
					const todaysScheduleData = result[7].result;
					// set up container for all data
					const allSections = {
						primarySections: [],
						secondaryLinks: mainAppHeaderSecondaryLinks,
						tertiaryLinks: mainAppHeaderTertiaryLinks,
					};
					// insert principal links into primary sections
					// for each primary section
					mainAppHeaderPrimarySections.forEach((primarySectionRawData) => {
						// set up primary section container
						const primarySection = {
							// id: primarySectionRawData.id,
							header: {
								text: primarySectionRawData['section-header-text'],
								url: primarySectionRawData['section-header-url'],
							},
							callToAction: {
								text: primarySectionRawData['section-cta-text'],
								url: primarySectionRawData['section-cta-url'],
								iconID: primarySectionRawData['section-cta-icon-id'].tid,
							},
							principalLinks: [],
							secondaryLinks: [],
						};
						// for each of this primary section's principal link IDs
						primarySectionRawData['principal-link-ids'].forEach((principalLinkID) => {
							// for each principal link
							mainAppHeaderPrimarySectionsPrincipalLinks.forEach((principalLink) => {
								// if we have an ID match
								if (principalLink.id === principalLinkID.value) {
									// add this principal link to this primary section
									primarySection.principalLinks.push(
										principalLink,
									);
								}
							});
						});
						// for each of this primary section's auxiliary link IDs
						primarySectionRawData['auxiliary-link-ids'].forEach((auxiliaryLinkID) => {
							// for each principal link
							mainAppHeaderPrimarySectionsAuxiliaryLinks.forEach((auxiliaryLink) => {
								// if we have an ID match
								if (auxiliaryLink.id === auxiliaryLinkID.value) {
									// add this principal link to this primary section
									primarySection.secondaryLinks.push(
										auxiliaryLink,
									);
								}
							});
						});
						// add this primary section to primary section container
						allSections.primarySections.push(
							primarySection,
						);
					});
					// then resolve this promise with a custom object
					resolve({
						svgsAll,
						allSections,
						hours: {
							open: todaysScheduleData.hours.open,
							openingTimeFormatted: todaysScheduleData
								.hours.openingTimeFormatted,
							closingTimeFormatted: todaysScheduleData
								.hours.closingTimeFormatted,
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
