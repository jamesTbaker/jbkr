export const returnNumberRoundedUpToMultiple =
	({ number, multiple}: { number: number, multiple: number}): number =>
		Math.ceil(number / multiple) * multiple;

export const returnHSLValuesFromRBGPercents =
	({ r, g, b }:{
		r: number,
		g: number,
		b: number,
	}):{
		h: number,
		s: number,
		l: number,
	} => {
		const max = Math.max(r, g, b);
		const min = Math.min(r, g, b);
		let h; let s; const
			l = (max + min) / 2;
		if (max === min) {
			h = 0; // achromatic
			s = 0; // achromatic
		} else {
			const d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
				default:
					h = (r - g) / d + 4;
					break;
			}
			h /= 6;
		}
		return {
			'h': Math.round(h * 360),
			's': Math.round(s * 100),
			'l': Math.round(l * 100),
		};
	};

export const returnCopyOfObjectWithStringKeys = (
	{ incoming }:
	{ incoming: { [key: string]: unknown} },
): { [key: string]: unknown} => {
	// try...
	try {
		// ...to get a parsed object
		const result = JSON.parse(JSON.stringify(incoming));
		// Parsing a boolean or a number will not throw an error, so we
		// must check that type is object. However, null is also of type
		// object, so we must also test for truthiness.
		// if value is truthy
		if (result) {
			// if type is object
			if (typeof result === 'object') {
				// return it
				return result;
			// if type is not object
			} else {
				// throw custom error
				throw '> > > JBKR: returnCopyOfObjectWithStringKeys - \
					result not object';
			}
		// if value is not truthy
		} else {
			// throw custom error
			throw '> > > JBKR: returnCopyOfObjectWithStringKeys - \
				result not truthy';
		}
	// if attempt to get an object resulted in an error
	} catch (error) {
		// return the error
		return error;
	}
};
