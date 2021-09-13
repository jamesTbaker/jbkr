import { DateTime } from 'luxon';

export const log = ({ incomingObject }) => {
	// construct a datetime string
	const datetimeString = DateTime.now().setZone('America/New_York')
		.toLocaleString(DateTime.DATETIME_FULL);
	// for each object property key
	Object.keys(incomingObject).forEach((key) => {
		// log the key and the property value
		// eslint-disable-next-line no-console
		console.log(
			` ----- ${datetimeString} -- ${key} -- ` +
			`${JSON.stringify(incomingObject[key])}`,
		);
	});
};
