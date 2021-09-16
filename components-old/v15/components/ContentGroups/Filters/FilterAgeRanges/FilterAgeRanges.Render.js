
import React from 'react';
import { v4 as uuid } from 'uuid';
import ToggleSwitch from '../../../Core/ToggleSwitch/ToggleSwitch';

const ReturnAgeTextForToggle = (availableAgeRange) => {
	let productAgeRangeFormatted = '';
	// if we're displaying prefix only
	if (availableAgeRange['prefix-only'] === '1') {
		// add the age range prefix to display string and be done
		productAgeRangeFormatted = availableAgeRange.prefix;
	// if we are not displaying prefix only
	} else {
		// begin display string with prefix
		productAgeRangeFormatted = availableAgeRange.prefix;
		// add lower and upper ages to display string
		productAgeRangeFormatted +=
			` ${availableAgeRange['lower-age']} &ndash; ${availableAgeRange['upper-age']} (`;
		availableAgeRange.suffixes.split(';')
			.forEach((suffixValue, suffixIndex) => {
				// if this is not the first element in the array
				if (suffixIndex !== 0) {
					// add separator before this suffix
					productAgeRangeFormatted += ' / ';
				}
				// add this suffix to this display string
				productAgeRangeFormatted += suffixValue;
			});
		// finish out display string
		productAgeRangeFormatted += ')';
	}
	return productAgeRangeFormatted;
};

const FilterControlAgeRanges = ({options}) => (
	<div>
		{
			options.available.map(availableAgeRange => (
				<ToggleSwitch
					checked={options.selected.includes(availableAgeRange)}
					machineValue={availableAgeRange.id}
					label={ReturnAgeTextForToggle(availableAgeRange)}
					handler={options.filterHandler}
					key={uuid()}
				/>
			))
		}
	</div>
);

export default FilterControlAgeRanges;
