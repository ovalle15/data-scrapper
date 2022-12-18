import { colorHexCodes } from './styleVars';

export const XmasTheme = {
    buttonBackgroundColor: `${colorHexCodes.white}`,
    colors: {
        ...colorHexCodes,
    },
    htmlBackground: `linear-gradient(0deg, ${colorHexCodes.pineGreen}, ${colorHexCodes.white})`,
    searchButton: {
        backgroundColor: `${colorHexCodes.white} !important`,
        border: `solid 2px ${colorHexCodes.cranberryRed} !important`,
        color: `${colorHexCodes.cranberryRed} !important`,
    },
};
