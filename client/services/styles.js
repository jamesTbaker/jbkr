/* eslint-disable max-len */
export const Style = {
	'FontSize': (token, screenType) => {
		if (screenType === 'small') {
			switch (token) {
				case 'xxxl':
					return `${2 * 2.488}`;
				case 'xxl':
					return `${2 * 2.074}`;
				case 'xl':
					return `${2 * 1.728}`;
				case 'l':
					return `${2 * 1.44}`;
				case 'm':
					return `${2 * 1.2}`;
				case 's':
				default:
					return `${2 * 1}`;
				case 'xs':
					return `${2 * 0.833}`;
				case 'xxs':
					return `${2 * 0.694}`;
			}
		} else if (screenType === 'medium') {
			switch (token) {
				case 'xxxl':
					return `${2 * 4.209}`;
				case 'xxl':
					return `${2 * 3.157}`;
				case 'xl':
					return `${2 * 2.369}`;
				case 'l':
					return `${2 * 1.777}`;
				case 'm':
					return `${2 * 1.333}`;
				case 's':
				default:
					return `${2 * 1}`;
				case 'xs':
					return `${2 * 0.833}`;
				case 'xxs':
					return `${2 * 0.694}`;
			}
		} else {
			switch (token) {
				case 'xxxl':
					return `${2 * 5.653}`;
				case 'xxl':
					return `${2 * 3.998}`;
				case 'xl':
					return `${2 * 2.827}`;
				case 'l':
					return `${2 * 1.999}`;
				case 'm':
					return `${2 * 1.414}`;
				case 's':
				default:
					return `${2 * 1}`;
				case 'xs':
					return `${2 * 0.833}`;
				case 'xxs':
					return `${2 * 0.694}`;
			}
		}
	},
};


/* module.exports = {

	// ------------------
	// TYPE
	// ------------------

	// small screens = minor third
	// medium screens = perfect fourth above 1
	// large screens = augmented fourth above 1
	'FontSize': (token, screenType) => {
		if (screenType === 'small') {
			switch (token) {
				case 'xxxl':
					return `${2 * 2.488}`;
				case 'xxl':
					return `${2 * 2.074}`;
				case 'xl':
					return `${2 * 1.728}`;
				case 'l':
					return `${2 * 1.44}`;
				case 'm':
					return `${2 * 1.2}`;
				case 's':
				default:
					return `${2 * 1}`;
				case 'xs':
					return `${2 * 0.833}`;
				case 'xxs':
					return `${2 * 0.694}`;
			}
		} else if (screenType === 'medium') {
			switch (token) {
				case 'xxxl':
					return `${2 * 4.209}`;
				case 'xxl':
					return `${2 * 3.157}`;
				case 'xl':
					return `${2 * 2.369}`;
				case 'l':
					return `${2 * 1.777}`;
				case 'm':
					return `${2 * 1.333}`;
				case 's':
				default:
					return `${2 * 1}`;
				case 'xs':
					return `${2 * 0.833}`;
				case 'xxs':
					return `${2 * 0.694}`;
			}
		} else {
			switch (token) {
				case 'xxxl':
					return `${2 * 5.653}`;
				case 'xxl':
					return `${2 * 3.998}`;
				case 'xl':
					return `${2 * 2.827}`;
				case 'l':
					return `${2 * 1.999}`;
				case 'm':
					return `${2 * 1.414}`;
				case 's':
				default:
					return `${2 * 1}`;
				case 'xs':
					return `${2 * 0.833}`;
				case 'xxs':
					return `${2 * 0.694}`;
			}
		}
	},
	'FontWeight': (token) => {
		switch (token) {
			case 'light':
				return '300';
			case 'regular':
			default:
				return '400';
			case 'semi-bold':
				return '500';
			case 'bold':
				return '700';
		}
	},
	'FontFamily': () => 'font-family: \'akzidenz-grotesk-pro\', -apple-system, BlinkMacSystemFont, \'Roboto\', \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, \'Liberation Sans\', Arial, \'Lucida Grande\', sans-serif;',
	'LineHeightImmediate': (token, screenType) => {
		const fontSize = module.exports.FontSize(token, screenType);
		return Math.ceil(fontSize);
	},

	// ------------------
	// TIME
	// ------------------

	'StandardTransitionTime': () => ({ 'stringSeconds': '.35s', 'milliseconds': 350 }),

	// ------------------
	// HIDDEN
	// ------------------

	'BlockHidden': () => `display: block;
		width: 0;
		height: 0;
		padding: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;`,
	'OverrideBlockHidden': () => `display: block;
		width: auto;
		height: auto;
		text-indent: 0;
		white-space: normal;
		overflow: visible;`,
	'InlineHidden': () => `display: inline-block;
		width: 0;
		height: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;`,
	'TableColumnHidden': () => `display: table-cell;
		width: 0;
		height: 0;
		text-indent: 100%;
		white-space: nowrap;
		overflow: hidden;`,

	// ------------------
	// LAYOUT
	// ------------------

	'VerticalAlignMiddle': () => `position: relative;
		top: 50%;
		transform: translateY(-50%);`,
	'FlexRow': () => `display: flex;
		flex-direction: row;`,
	'FlexColumn': () => `display: flex;
		flex-direction: column;`,

	// ------------------
	// Z-INDEX
	// ------------------

	'ZIndex': (token) => {
		switch (token) {
			case 'background-primary':
				return -1;
			case 'background-secondary':
				return -1;
			case 'content-primary':
				return 1;
			case 'header':
				return 10;
			case 'header-primary-section':
				return 10;
			case 'content-dimmer':
				return 20;
			case 'content-dimmer-toggle':
				return 21;
			case 'modal-container-positioning':
				return 30;
			case 'modal-container':
				return 31;
			case 'modal-close-icon':
				return 32;
			case 'collapsible-body-container':
				return 1000;
			default:
				return 'auto';
		}
	},

	// ------------------
	// BORDERS
	// ------------------

	'StraightCorners': () => 'border-radius: 0;',
	'Circular': () => 'border-radius: 50%;',
	'HairlineBorder': (color) => `border: 1px solid ${color};`,

	// ------------------
	// ELEVATION
	// ------------------

	'Elevation': (shadowToken) => {
		switch (shadowToken) {
			case 'ux-l-0': // 1 dp
				return 'none';
			case 'ux-l-1': // 1 dp
				return `0 	0.4px 	.9px 	rgba(0, 0, 0, 0.23),
						0 	0.15px 	.45px 	rgba(0, 0, 0, 0.23)`;
			case 'ux-l-2': // 2 dp
				return `0 	0.8px 	1.8px 	rgba(0, 0, 0, 0.23),
						0 	0.15px 	.45px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-3': // 3 dp
				return `0 	1.2px 	2.7px 	rgba(0, 0, 0, 0.23),
						0 	.22px 	.68px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-4': // 4 dp
				return `0 	1.6px 	5.4px 	rgba(0, 0, 0, 0.23),
						0 	.3px 	.9px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-5': // 6 dp
				return `0 	2.4px 	5.4px 	rgba(0, 0, 0, 0.23),
						0 	0.45px 	1.35px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-6': // 8 dp
			default:
				return `0 	3.2px 	7.2px 	rgba(0, 0, 0, 0.23),
						0 	0.6px 	1.8px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-7': // 12 dp
				return `0 	4.8px 	10.8px 	rgba(0, 0, 0, 0.23),
						0 	0.9px 	2.7px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-8': // 16 dp
				return `0 	6.4px 	14.4px 	rgba(0, 0, 0, 0.23),
						0 	1.2px 	3.6px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-9': // 24 dp
				return `0 	9.6px 	21.6px 	rgba(0, 0, 0, 0.23),
						0 	1.8px 	5.4px 	rgba(0, 0, 0, 0.16)`;
			case 'ux-l-10': // 32 dp
				return `0 	12.8px 	28.8px 	rgba(0, 0, 0, 0.27),
						0 	2.4px 	7.2px 	rgba(0, 0, 0, 0.23)`;
			case 'ux-l-11': // 40 dp
				return `0 	16px 	36px 	rgba(0, 0, 0, 0.27),
						0 	3px 	9px 	rgba(0, 0, 0, 0.23)`;
			case 'ux-l-12': // 48 dp
				return `0 	19.2px 	43.2px 	rgba(0, 0, 0, 0.27),
						0 	3.8px 	10.8px 	rgba(0, 0, 0, 0.23)`;
			case 'ux-l-13': // 64 dp
				return `0 	25.6px 	57.6px 	rgba(0, 0, 0, 0.27),
						0 	4.8px 	14.4px 	rgba(0, 0, 0, 0.23)`;
			case 'ux-l-14': // 80 dp
				return `0 	32px 	72px 	rgba(0, 0, 0, 0.27),
						0 	6px 	18px 	rgba(0, 0, 0, 0.23)`;
			case 'ux-l-15': // 96 dp
				return `0 	38.4px 	86.4px 	rgba(0, 0, 0, 0.27),
						0 	7.2px 	21.6px 	rgba(0, 0, 0, 0.23)`;
			case 'ux-l-16': // 192 dp
				return `0 	76.8px 	172.8px rgba(0, 0, 0, 0.23),
						0 	14.4px 	43.2px 	rgba(0, 0, 0, 0.37)`;
		}
	},

	// ------------------
	// COLOR
	// ------------------

	'Color': ({
		token, alpha, lighten, darken,
	}) => {
		// if a color token was passed
		if (token) {
			// if the token is transparent
			if (token === 'transparent') {
				// return transparent and be done
				return 'transparent';
			}
			// set up the color token to use, defaulting to passed color token
			let colorLevelNumber = token;
			// if the last character of the color token is not a number
			if (!(/^\d+$/.test(token.substring(token.length - 1)))) {
				// assume token is color name and try to get corresponding number
				colorLevelNumber = module.exports.ColorLevelNumberByColorName(token);
			}
			// if a lighten or darken value was passed
			if (lighten || darken) {
				// extract the hue name and level number
				const hueName = colorLevelNumber.substring(0, colorLevelNumber.lastIndexOf('-'));
				let levelNumber = parseInt(colorLevelNumber.substring(colorLevelNumber.lastIndexOf('-') + 1), 10);
				// if we're lightening
				if (lighten) {
					// lower the level number by the amount specified
					levelNumber -= lighten;
					// if we can get a color using this level number
					if (module.exports.ReturnColorRGBFromColorLevelNumber(`${hueName}-${levelNumber}`)) {
						// redefine color level number using the new level number
						colorLevelNumber = `${hueName}-${levelNumber}`;
						// otherwise, if there isn't a color for that level number
					} else {
						// return the lightest grey (white)
						colorLevelNumber = 'grey-0';
					}
				}
				// if we're darkening
				if (darken) {
					// raise the level number by the amount specified
					levelNumber += darken;
					// if we can get a color using this level number
					if (module.exports.ReturnColorRGBFromColorLevelNumber(`${hueName}-${levelNumber}`)) {
						// redefine color level number using the new level number
						colorLevelNumber = `${hueName}-${levelNumber}`;
						// otherwise, if there isn't a color for that level number
					} else {
						// return the lightest grey (white)
						colorLevelNumber = 'grey-27';
					}
				}
			}
			// if an alpha level was passed
			if (alpha) {
				// return color with alpha level
				return `rgba(${module.exports.ReturnColorRGBFromColorLevelNumber(colorLevelNumber)},${alpha})`;
			}
			// if no alpha level was passed, return color sans alpha level
			return `rgb(${module.exports.ReturnColorRGBFromColorLevelNumber(colorLevelNumber)})`;
		}
		// if we haven't already returned anything, return transparent
		return 'transparent';
	},

	'ReturnColorRGBFromColorLevelNumber': (token) => {
		switch (token) {
			// GREY
			case 'grey-0':
				return '255,255,255';
			case 'grey-1':
				return '249,249,249';
			case 'grey-2':
				return '242,242,242';
			case 'grey-3':
				return '238,238,238';
			case 'grey-4':
				return '236,236,236';
			case 'grey-5':
				return '230,230,230';
			case 'grey-6':
				return '225,225,225';
			case 'grey-7':
				return '221,221,221';
			case 'grey-8':
				return '212,212,212';
			case 'grey-9':
				return '204,204,204';
			case 'grey-10':
				return '195,195,195';
			case 'grey-11':
				return '187,187,187';
			case 'grey-12':
				return '178,178,178';
			case 'grey-13':
				return '170,170,170';
			case 'grey-14':
				return '153,153,153';
			case 'grey-15':
				return '136,136,136';
			case 'grey-16':
				return '119,119,119';
			case 'grey-17':
				return '102,102,102';
			case 'grey-18':
				return '85,85,85';
			case 'grey-19':
				return '68,68,68';
			case 'grey-20':
				return '58,58,58';
			case 'grey-21':
				return '51,51,51';
			case 'grey-22':
				return '45,45,45';
			case 'grey-23':
				return '36,36,36';
			case 'grey-24':
				return '33,33,33';
			case 'grey-25':
				return '31,31,31';
			case 'grey-26':
				return '18,18,18';
			case 'grey-27':
			case 'black':
				return '0,0,0';

			// MAROON
			case 'maroon-1':
				return '121,35,46';
			case 'maroon-2':
				return '118,35,47';

			// RED
			case 'red-1':
				return '218,41,28';

			// PINK
			case 'pink-1':
				return '243,229,235';
			case 'pink-2':
				return '229,197,211';
			case 'pink-3':
				return '226,153,191';
			case 'pink-4':
				return '223,110,171';
			case 'pink-5':
				return '220,67,151';
			case 'pink-6':
				return '210,0,118';
			case 'pink-7':
				return '166,0,99';
			case 'pink-8':
				return '132,8,82';
			case 'pink-9':
				return '98,17,65';
			case 'pink-10':
				return '64,26,49';

			// PURPLE
			case 'purple-1':
				return '241,232,245';
			case 'purple-2':
				return '228,211,237';
			case 'purple-3':
				return '209,182,224';
			case 'purple-4':
				return '187,149,209';
			case 'purple-5':
				return '169,122,198';
			case 'purple-6':
				return '145,94,174';
			case 'purple-7':
				return '121,67,150';
			case 'purple-8':
				return '97,39,126';
			case 'purple-9':
				return '73,12,102';
			case 'purple-10':
				return '44,0,64';

			// BLUE
			case 'blue-1':
				return '222,235,247';
			case 'blue-2':
				return '185,213,240';
			case 'blue-3':
				return '148,192,233';
			case 'blue-4':
				return '105,179,231';
			case 'blue-5':
				return '84,152,202';
			case 'blue-6':
				return '63,126,173';
			case 'blue-7':
				return '42,99,144';
			case 'blue-8':
				return '21,73,115';
			case 'blue-9':
				return '0,47,86';
			case 'blue-10':
				return '0,32,59';
			case 'blue-11':
				return '0,42,76';
			case 'blue-12':
				return '0,36,66';
			case 'blue-13':
				return '0,31,56';
			case 'blue-14':
				return '0,25,46';
			case 'blue-15':
				return '0,20,36';
			case 'blue-16':
				return '0,15,26';
			case 'blue-17':
				return '0,10,16';

			// AQUA
			case 'aqua-0':
				return '229,249,255';
			case 'aqua-1':
				return '209,238,247';
			case 'aqua-2':
				return '167,213,228';
			case 'aqua-3':
				return '125,188,209';
			case 'aqua-4':
				return '83,163,190';
			case 'aqua-5':
				return '41,138,171';
			case 'aqua-6':
				return '0,114,152';
			case 'aqua-7':
				return '0,95,127';
			case 'aqua-8':
				return '0,77,102';
			case 'aqua-9':
				return '0,58,77';
			case 'aqua-10':
				return '1,40,53';

			// TEAL
			case 'teal-1':
				return '213,243,243';
			case 'teal-2':
				return '184,218,218';
			case 'teal-3':
				return '155,194,194';
			case 'teal-4':
				return '127,169,170';
			case 'teal-5':
				return '98,145,146';
			case 'teal-6':
				return '72,122,123';
			case 'teal-7':
				return '52,103,104';
			case 'teal-8':
				return '35,86,87';
			case 'teal-9':
				return '18,69,70';
			case 'teal-10':
				return '1,52,53';

			// GREEN
			case 'green-1':
				return '198,242,239';
			case 'green-2':
				return '166,230,219';
			case 'green-3':
				return '135,219,205';
			case 'green-4':
				return '104,208,191';
			case 'green-5':
				return '73,197,177';
			case 'green-6':
				return '55,164,146';
			case 'green-7':
				return '38,132,115';
			case 'green-8':
				return '20,100,84';
			case 'green-9':
				return '3,68,54';
			case 'green-10':
				return '3,51,40';

			// YELLOW
			case 'yellow-1':
				return '242,234,154';
			case 'yellow-2':
				return '245,230,79';
			case 'yellow-3':
				return '254,221,0';
			case 'yellow-4':
				return '237,196,20';
			case 'yellow-5':
				return '227,188,19';
			case 'yellow-10':
				return '69,56,0';

			// ORANGE
			case 'orange-1':
				return '249,233,219';
			case 'orange-2':
				return '252,217,186';
			case 'orange-3':
				return '255,201,153';
			case 'orange-4':
				return '245,156,102';
			case 'orange-5':
				return '235,111,51';
			case 'orange-6':
				return '226,67,1';
			case 'orange-7':
				return '197,61,3';

			// CORAL
			case 'coral-1':
				return '247,228,226';
			case 'coral-2':
				return '251,204,198';
			case 'coral-3':
				return '255,180,170';
			case 'coral-4':
				return '255,149,139';
			case 'coral-5':
				return '252,116,106';

			// OTHERWISE
			default:
				return null;
		}
	},

	'ColorLevelNumberByColorName': (token) => {
		switch (token) {
			// --- B & W
			case 'white':
				return 'grey-0';
			case 'black':
				return 'grey-27';
			// --- PRIMARY
			default:
			case 'primary-red':
				return 'red-1';
			case 'primary-pink':
				return 'pink-6';
			case 'primary-blue':
				return 'blue-4';
			case 'primary-green':
				return 'green-5';
			case 'primary-yellow':
				return 'yellow-3';
			// --- BOLD
			case 'bold-maroon':
				return 'maroon-1';
			case 'bold-pink':
				return 'pink-7';
			case 'bold-purple':
				return 'purple-9';
			case 'bold-blue':
				return 'blue-9';
			case 'bold-aqua':
				return 'aqua-6';
			case 'bold-teal':
				return 'teal-6';
			case 'bold-green':
				return 'green-9';
			case 'bold-orange':
				return 'orange-6';
			// --- SUBTLE
			case 'subtle-pink':
				return 'pink-2';
			case 'subtle-blue':
				return 'blue-3';
			case 'subtle-green':
				return 'green-1';
			case 'subtle-yellow':
				return 'yellow-1';
			case 'subtle-orange':
				return 'orange-3';
			case 'subtle-coral':
				return 'subtle-coral';
			// --- SPECIAL CASES
			case 'dark-pink':
				return 'pink-8';
			case 'light-pink':
				return 'pink-4';
			case 'dark-blue':
				return 'blue-10';
			case 'events-blue':
				return 'blue-1';
			case 'adults-maroon':
				return 'maroon-2';
			case 'dark-orange':
				return 'orange-7';
		}
	},
}; */
