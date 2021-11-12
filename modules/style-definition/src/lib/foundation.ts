
/**
 * @module Style Definition
 */
import path from 'path';
import { fileURLToPath } from 'url';


export const foundation = {
	'extraction': {
		'figma': {
			'pageTitles': {
				'colorJBKR': '.                  =  Color - jbkr',
				'light': '.                  =  Light',
				'shadow': '.                  =  Shadow',
			},
			'storage': {
				'path': path.join(
					fileURLToPath(import.meta.url),
					'../../../src/store/',
				),
				'name': 'figmaPages.json',
			},
		},
		'definitions': {
			'path': path.join(
				fileURLToPath(import.meta.url),
				'../../../../style-service/src/store/',
			),
			'names': {
				'color': 'color.js',
				'type': 'type.js',
				'shadow': 'shadow.js',
				'foundation': 'foundation.js',
			},
		},
	},
	'gridBase': 8,
	'device': {
		'widths': {
			'tokens': ['s', 'm', 'l'],
			'specs': {
				's': {
					'minimum': 0,
					'maximum': 479,
				},
				'm': {
					'minimum': 480,
					'maximum': 1024,
				},
				'l': {
					'minimum': 1025,
					'maximum': undefined,
				},
			},
		},
	},
	'type': {
		'fontFilesImport':
			'@import url(\'https://rsms.me/inter/inter.css\');',
		'fontPrimaryName': '\'Inter var\'',
		'fontFallbacksNames': '\'Inter\', -apple-system, \
			BlinkMacSystemFont, \'San Francisco\', \'HelveticaNeue-Light\', \
			\'Helvetica Neue Light\', \'Helvetica Neue\', \'Helvetica\', \
			\'Liberation Sans\', \'Nimbus Sans L\', \'Roboto\', \
			\'Arial\', sans-serif;',
		'size': {
			'tokens': [
				'3xs',
				'2xs',
				'1xs',
				's',
				'm',
				'l',
				'1xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
			],
			'scalingSteps': {
				'3xs': -3,
				'2xs': -2,
				'1xs': -1,
				's': 0,
				'm': 1,
				'l': 2,
				'1xl': 3,
				'2xl': 4,
				'3xl': 5,
				'4xl': 6,
				'5xl': 7,
			},
			'baseMultipliersByDeviceWidth': {
				's': 2,
				'm': 2,
				'l': 2,
			},
			'scalingMultipliersByDeviceWidth': {
				's': {
					'high': 1.25,
					'low': 1.2,
					'highestLowStep': 0,
				},
				'm': {
					'high': 1.333,
					'low': 1.2,
					'highestLowStep': 0,
				},
				'l': {
					'high': 1.414,
					'low': 1.2,
					'highestLowStep': 0,
				},
			},
		},
		'weight': {
			'tokens': [
				'regular',
				'bold',
			],
			'baseMultipliersByWeight': {
				'regular': 20,
				'bold': 25,
				// 'regular': 17,
				// 'bold': 35,
			},
			'scalingMultipliersByWeight': {
				'regular': {
					'natural': 1.067,
					'maxAddition': 100,
					'maxSubtraction': 20,
				},
				'bold': {
					'natural': 1.125,
					'maxAddition': 300,
					'maxSubtraction': 0,
				},
			},
		},
		'lineHeight': {
			'tokens': [
				'display',
				'body',
			],
			'scalingMultipliers': {
				'display': {
					'high': 1,
					'low': 1.2,
					'highestLowSize': 30,
				},
				'body': {
					'high': 1.2,
					'low': 1.4,
					'highestLowSize': 30,
				},
			},
		},
		'slant': {
			'tokens': [
				'normal',
				'italic',
			],
		},
		'spacing': {
			'multiplier': -0.02,
		},
	},
	'position': {
		'zIndexes': {
			'grids': 2000,
			'compressedTableOfContentsContainer': 1010,
			'header': 1020,
			'contentDimmer': 1030,
			'compressedNavigationContainer': 1040,
			'modal': 1100,
			'modalToggle': 1101,
			'profileSectionContainer': 10,
			'profileSectionBackgroundImage': 11,
			'profileSectionBackgroundVideo': 12,
			'profileSectionBackgroundOverlay': 13,
			'profileSectionTitleUnderlay': 14,
			'profileSectionContent': 15,
			'expandedNavigation': 100,
		},
		'verticalAlignMiddle': `position: relative;
			top: 50%;
			transform: translateY(-50%);`,
	},
	'visibility': {
		'blockHidden': `display: block;
			width: 0;
			height: 0;
			padding: 0;
			margin: 0;
			text-indent: 100%;
			white-space: nowrap;
			overflow: hidden;`,
		'overrideBlockHidden': `display: block;
			width: auto;
			height: auto;
			text-indent: 0;
			white-space: normal;
			overflow: visible;`,
		'inlineHidden': `display: inline-block;
			width: 0;
			height: 0;
			text-indent: 100%;
			white-space: nowrap;
			overflow: hidden;`,
		'tableColumnHidden': `display: table-cell;
			width: 0;
			height: 0;
			text-indent: 100%;
			white-space: nowrap;
			overflow: hidden;`,
	},
	'shape': {
		'standardCorners': 'border-radius: 3px;',
		'straightCorners': 'border-radius: 0;',
		'circular': 'border-radius: 50%;',
	},
	'motion': {
		'standardTime': {
			's': 0.35,
			'ms': 350,
		},
	},
};
