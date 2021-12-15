export declare const foundation: {
    extraction: {
        figma: {
            pageTitles: {
                colorJBKR: string;
                light: string;
                shadow: string;
            };
            storage: {
                path: string;
                name: string;
            };
        };
        definitions: {
            path: string;
            names: {
                color: string;
                type: string;
                shadow: string;
                foundation: string;
            };
        };
    };
    gridBase: number;
    device: {
        widths: {
            tokens: string[];
            specs: {
                s: {
                    minimum: number;
                    maximum: number;
                };
                m: {
                    minimum: number;
                    maximum: number;
                };
                l: {
                    minimum: number;
                    maximum: undefined;
                };
            };
        };
    };
    type: {
        fontFilesImport: string;
        fontPrimaryName: string;
        fontFallbacksNames: string;
        size: {
            tokens: string[];
            scalingSteps: {
                '3xs': number;
                '2xs': number;
                '1xs': number;
                s: number;
                m: number;
                l: number;
                '1xl': number;
                '2xl': number;
                '3xl': number;
                '4xl': number;
                '5xl': number;
            };
            baseMultipliersByDeviceWidth: {
                s: number;
                m: number;
                l: number;
            };
            scalingMultipliersByDeviceWidth: {
                s: {
                    high: number;
                    low: number;
                    highestLowStep: number;
                };
                m: {
                    high: number;
                    low: number;
                    highestLowStep: number;
                };
                l: {
                    high: number;
                    low: number;
                    highestLowStep: number;
                };
            };
        };
        weight: {
            tokens: string[];
            baseMultipliersByWeight: {
                regular: number;
                bold: number;
            };
            scalingMultipliersByWeight: {
                regular: {
                    natural: number;
                    maxAddition: number;
                    maxSubtraction: number;
                };
                bold: {
                    natural: number;
                    maxAddition: number;
                    maxSubtraction: number;
                };
            };
        };
        lineHeight: {
            tokens: string[];
            scalingMultipliers: {
                display: {
                    high: number;
                    low: number;
                    highestLowSize: number;
                };
                body: {
                    high: number;
                    low: number;
                    highestLowSize: number;
                };
            };
        };
        slant: {
            tokens: string[];
        };
        spacing: {
            multiplier: number;
        };
    };
    position: {
        zIndexes: {
            grids: number;
            compressedTableOfContentsContainer: number;
            header: number;
            contentDimmer: number;
            compressedNavigationContainer: number;
            modal: number;
            modalToggle: number;
            profileSectionContainer: number;
            profileSectionBackgroundImage: number;
            profileSectionBackgroundVideo: number;
            profileSectionBackgroundOverlay: number;
            profileSectionTitleUnderlay: number;
            profileSectionContent: number;
            contactBodyContent: number;
            contactBodyMediaImageLargeDevice: number;
            contactBodyMediaVideoLargeDevice: number;
            articleSummaryContainer: number;
            articleSummaryBackgroundVideo: number;
            articleSummaryContent: number;
            expandedNavigation: number;
        };
        verticalAlignMiddle: string;
    };
    visibility: {
        blockHidden: string;
        overrideBlockHidden: string;
        inlineHidden: string;
        tableColumnHidden: string;
    };
    shape: {
        standardCorners: string;
        straightCorners: string;
        circular: string;
    };
    motion: {
        standardTime: {
            s: number;
            ms: number;
        };
    };
};
