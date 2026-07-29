import {
  colorNeutral2, colorNeutral3, colorNeutral4, colorWhite, colorLightGray, colorGray, colorDarkGray,
  colorBrand1, colorBrand2, colorBrand3, colorBrandLight, colorBrandAux,
  colorSuccess, colorWarning, colorError, colorErrorDark,
  colorBackgroundWhite, colorBackgroundLight, colorBackgroundBlue,
  colorBorderDefault, colorBorderSelected, colorBorderError,
  colorTextDefault, colorTextLight,
  colorIconDefault, colorIconBlue, colorIconWhite,
  colorHoverDark, colorHoverLight, colorHoverNeutral,
} from './palette';

export const colors = {
  neutral: {
    neutral2: colorNeutral2,
    neutral3: colorNeutral3,
    neutral4: colorNeutral4,
    white: colorWhite,
    lightGray: colorLightGray,
    gray: colorGray,
    darkGray: colorDarkGray,
  },
  brand: {
    brand1: colorBrand1,
    brand2: colorBrand2,
    brand3: colorBrand3,
    light: colorBrandLight,
    aux: colorBrandAux,
  },
  semantic: {
    success: colorSuccess,
    warning: colorWarning,
    error: colorError,
    errorDark: colorErrorDark,
  },
  background: {
    white: colorBackgroundWhite,
    light: colorBackgroundLight,
    blue: colorBackgroundBlue,
  },
  border: {
    default: colorBorderDefault,
    selected: colorBorderSelected,
    error: colorBorderError,
  },
  text: {
    default: colorTextDefault,
    light: colorTextLight,
  },
  icon: {
    default: colorIconDefault,
    blue: colorIconBlue,
    white: colorIconWhite,
  },
  hover: {
    dark: colorHoverDark,
    light: colorHoverLight,
    neutral: colorHoverNeutral,
  },
} as const;

export type Colors = typeof colors;
