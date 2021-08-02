export const ReturnNumberRoundedUpToMultiple =
	(number: number, multiple: number): number =>
		Math.ceil(number / multiple) * multiple;

export const ReturnHSLValuesFromRBGPercents =
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
			h: Math.round(h * 360),
			s: Math.round(s * 100),
			l: Math.round(l * 100),
		};
	};
