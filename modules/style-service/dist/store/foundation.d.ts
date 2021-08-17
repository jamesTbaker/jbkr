export namespace foundation {
    const gridBase: number;
    namespace device {
        namespace widths {
            const tokens: string[];
            namespace specs {
                namespace s {
                    const minimum: number;
                    const maximum: number;
                }
                namespace m {
                    const minimum_1: number;
                    export { minimum_1 as minimum };
                    const maximum_1: number;
                    export { maximum_1 as maximum };
                }
                namespace l {
                    const minimum_2: number;
                    export { minimum_2 as minimum };
                }
            }
            const queries: {
                "s-only": string;
                "m-only": string;
                "l-only": string;
                "not-large": string;
                "not-small": string;
            };
        }
    }
    namespace type {
        const family: string;
        namespace size {
            const tokens_1: string[];
            export { tokens_1 as tokens };
            export const scalingSteps: {
                "3xs": number;
                "2xs": number;
                "1xs": number;
                s: number;
                m: number;
                l: number;
                "1xl": number;
                "2xl": number;
                "3xl": number;
                "4xl": number;
                "5xl": number;
            };
            export namespace baseMultipliersByDeviceWidth {
                const s_1: number;
                export { s_1 as s };
                const m_1: number;
                export { m_1 as m };
                const l_1: number;
                export { l_1 as l };
            }
            export namespace scalingMultipliersByDeviceWidth {
                export namespace s_2 {
                    const high: number;
                    const low: number;
                    const highestLowStep: number;
                }
                export { s_2 as s };
                export namespace m_2 {
                    const high_1: number;
                    export { high_1 as high };
                    const low_1: number;
                    export { low_1 as low };
                    const highestLowStep_1: number;
                    export { highestLowStep_1 as highestLowStep };
                }
                export { m_2 as m };
                export namespace l_2 {
                    const high_2: number;
                    export { high_2 as high };
                    const low_2: number;
                    export { low_2 as low };
                    const highestLowStep_2: number;
                    export { highestLowStep_2 as highestLowStep };
                }
                export { l_2 as l };
            }
        }
        namespace weight {
            const tokens_2: string[];
            export { tokens_2 as tokens };
            export namespace baseMultipliersByWeight {
                const regular: number;
                const bold: number;
            }
            export namespace scalingMultipliersByWeight {
                export namespace regular_1 {
                    const natural: number;
                    const maxAddition: number;
                    const maxSubtraction: number;
                }
                export { regular_1 as regular };
                export namespace bold_1 {
                    const natural_1: number;
                    export { natural_1 as natural };
                    const maxAddition_1: number;
                    export { maxAddition_1 as maxAddition };
                    const maxSubtraction_1: number;
                    export { maxSubtraction_1 as maxSubtraction };
                }
                export { bold_1 as bold };
            }
        }
        namespace lineHeight {
            const tokens_3: string[];
            export { tokens_3 as tokens };
            export namespace scalingMultipliers {
                namespace display {
                    const high_3: number;
                    export { high_3 as high };
                    const low_3: number;
                    export { low_3 as low };
                    export const highestLowSize: number;
                }
                namespace body {
                    const high_4: number;
                    export { high_4 as high };
                    const low_4: number;
                    export { low_4 as low };
                    const highestLowSize_1: number;
                    export { highestLowSize_1 as highestLowSize };
                }
            }
        }
        namespace slant {
            const tokens_4: string[];
            export { tokens_4 as tokens };
        }
        namespace spacing {
            const multiplier: number;
        }
    }
    namespace position {
        namespace zIndexes {
            const backgroundPrimary: number;
            const backgroundSecondary: number;
            const contentPrimary: number;
            const header: number;
            const contentDimmer: number;
            const modal: number;
            const modalToggle: number;
        }
        const verticalAlignMiddle: string;
    }
    namespace visibility {
        const blockHidden: string;
        const overrideBlockHidden: string;
        const inlineHidden: string;
        const tableColumnHidden: string;
    }
    namespace shape {
        const standardCorners: string;
        const straightCorners: string;
        const circular: string;
    }
    namespace motion {
        namespace standardTime {
            const s_3: number;
            export { s_3 as s };
            export const ms: number;
        }
    }
}
