/**
 * @name Style Definition
 * @description Specify some styles in full, and specify settings for
 * generating other styles.
 */
export const styleDefinition = {
    storage: {
        path: './libs/style/src/lib/storage/',
        names: {
            figma: 'figmaObjects.json',
            color: 'color.js',
            type: 'type.js',
            shadow: 'shadow.js',
        },
    },
    gridBase: 8,
    device: {
        widths: {
            /* tokens: [
                '1xs',
                's',
                'm',
                'l',
                '1xl',
                '2xl',
            ],
            specs: {
                '1xs': {
                    minimum: 0,
                    maximum: 320,
                },
                s: {
                    minimum: 321,
                    maximum: 375,
                },
                m: {
                    minimum: 376,
                    maximum: 768,
                },
                l: {
                    minimum: 769,
                    maximum: 1024,
                },
                '1xl': {
                    minimum: 1025,
                    maximum: 1440,
                },
                '2xl': {
                    minimum: 1441,
                    maximum: undefined,
                },
            }, */
            tokens: [
                's',
                'm',
                'l',
            ],
            specs: {
                s: {
                    minimum: 0,
                    maximum: 414,
                },
                m: {
                    minimum: 415,
                    maximum: 1024,
                },
                l: {
                    minimum: 1025,
                    maximum: undefined,
                },
            },
        },
    },
    figma: {
        pageTitles: {
            colorJBKR: '.                  =  Color - jbkr',
            shadow: '.                  =  Shadow',
            light: '.                  =  Light',
        },
    },
    type: {
        family: 'font-family: \'Inter\', -apple-system, BlinkMacSystemFont, \'San Francisco\', \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', \'Helvetica\', \'Liberation Sans\', \'Nimbus Sans L\', \'Roboto\', \'Arial\', sans-serif',
        size: {
            tokens: [
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
            scalingSteps: {
                '3xs': -3,
                '2xs': -2,
                '1xs': -1,
                s: 0,
                m: 1,
                l: 2,
                '1xl': 3,
                '2xl': 4,
                '3xl': 5,
                '4xl': 6,
                '5xl': 7,
            },
            baseMultipliersByDeviceWidth: {
                s: 2,
                m: 2,
                l: 2,
            },
            scalingMultipliersByDeviceWidth: {
                s: {
                    high: 1.25,
                    low: 1.2,
                    highestLowStep: 0,
                },
                m: {
                    high: 1.333,
                    low: 1.2,
                    highestLowStep: 0,
                },
                l: {
                    high: 1.414,
                    low: 1.2,
                    highestLowStep: 0,
                },
            },
        },
        weight: {
            tokens: [
                'regular',
                'bold',
            ],
            baseMultipliersByWeight: {
                regular: 20,
                bold: 25,
            },
            scalingMultipliersByWeight: {
                regular: {
                    natural: 1.067,
                    maxAddition: 100,
                    maxSubtraction: 100,
                },
                bold: {
                    natural: 1.125,
                    maxAddition: 300,
                    maxSubtraction: 0,
                },
            },
        },
        lineHeight: {
            tokens: [
                'display',
                'body',
            ],
            scalingMultipliers: {
                display: {
                    high: 1,
                    low: 1.2,
                    highestLowSize: 30,
                },
                body: {
                    high: 1.2,
                    low: 1.4,
                    highestLowSize: 30,
                },
            },
        },
        slant: {
            tokens: [
                'normal',
                'italic',
            ],
        },
        spacing: {
            multiplier: -0.02,
        },
    },
    position: {
        zIndexes: {
            backgroundPrimary: -1,
            backgroundSecondary: -1,
            contentPrimary: 1,
            header: 10,
            contentDimmer: 20,
            modal: 30,
            modalToggle: 31,
        },
        verticalAlignMiddle: `position: relative;
			top: 50%;
			transform: translateY(-50%);`,
    },
    visibility: {
        blockHidden: `display: block;
			width: 0;
			height: 0;
			padding: 0;
			text-indent: 100%;
			white-space: nowrap;
			overflow: hidden;`,
        overrideBlockHidden: `display: block;
			width: auto;
			height: auto;
			text-indent: 0;
			white-space: normal;
			overflow: visible;`,
        inlineHidden: `display: inline-block;
			width: 0;
			height: 0;
			text-indent: 100%;
			white-space: nowrap;
			overflow: hidden;`,
        tableColumnHidden: `display: table-cell;
			width: 0;
			height: 0;
			text-indent: 100%;
			white-space: nowrap;
			overflow: hidden;`,
    },
    shape: {
        standardCorners: 'border-radius: 3px;',
        straightCorners: 'border-radius: 0;',
        circular: 'border-radius: 50%;',
    },
    motion: {
        standardTime: {
            s: 0.35,
            ms: 350,
        },
    },
};
//# sourceMappingURL=definition.js.map