import { oneOf } from 'prop-types';

export const TypeSizeKeys = [
	'3xs', '2xs', '1xs', 's', 'm', 'l',
	'1xl', '2xl', '3xl', '4xl', '5xl',
];
export const TypeWeightKeys = ['regular', 'bold'];
export const TypeSlantKeys = ['normal', 'italic'];
export const TypeUsageKeys = ['display', 'body'];

export const TypeSizeKey = oneOf(TypeSizeKeys);
export const TypeWeightKey = oneOf(TypeWeightKeys);
export const TypeSlantKey = oneOf(TypeSlantKeys);
export const TypeUsageKey = oneOf(TypeUsageKeys);
