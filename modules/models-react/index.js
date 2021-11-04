import { number, string, exact, oneOfType } from 'prop-types';


export const typeColor = oneOfType([
	string,
	exact({
		'kind': string.isRequired,
		'tone': string.isRequired,
		'level': number.isRequired,
		'alpha': string,
	}),
]);
