import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-size: 16px;
        box-sizing: border-box;
    }
`

export const theme = {

    // colors:
    red: "#df3434",
    black: "#171717",
    purpleLight: "#ad3dea",
    purpleDark: "#4f0775",
    colorSuccess: '#0CCE6B',
    colorError: '#d60801',
    colorPending: 'orange',

    // border Radius
    borderRadiusS: "2px",
    borderRadiusM: "4px",
    borderRadiusL: "8px",
    borderRadiusXL: "12px",

    // Box Shadows:
    boxShadowDark: `-5px 6px 15px 1px rgba(0,0,0,0.50)`,
    boxShadowLight: `-5px 6px 15px 1px rgba(0,0,0,0.25)`,
    boxShadowLighter: `-5px 6px 15px 1px rgba(0,0,0,0.15)`,
    boxShadowNav: `2px 0 24px 0 rgba(0,0,0,0.04)`,
    boxShadowTiles: `0 2px 24px 0 rgba(0,0,0,0.04)`,
    boxShadowInTiles: `0 1px 3px 0 rgba(0,0,0,0.2)`,

    // Text Sizes:
    fontSizeXXXXL: '64px',
    fontSizeXXXL: '48px',
    fontSizeXXL: '32px',
    fontSizeXL: '24px',
    fontSizeL: '20px',
    fontSizeM: '15px',
    fontSizeS: '12px',
    fontSizeXS: '10px',
    fontSizeXXS: '8px',

    // Text Weights:
    fontWeightThin: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',

    // Space
    controlHeight: '40px',
    controlHeightMini: '24px',
    controlHeightSmall: '32px',
    controlHeightLarge: '48px',
    spaceXXS: '4px',
    spaceXS: '8px',
    spaceS: '16px',
    spaceM: '24px',
    spaceL: '32px',
    spaceXL: '48px',
    spaceXXL: '220px',

    // Transitions:
    transitionShort: '0.1s',
    transitionNormal: '0.1s',
    transitionLong: '0.4s',
}
