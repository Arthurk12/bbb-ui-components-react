import {
  btnDefaultColor,
  btnDefaultBg,
  btnDefaultBorder,
  btnDefaultBrightness,
  btnPrimaryActiveBg,
  btnPrimaryBg,
  btnPrimaryBorder,
  btnPrimaryColor,
  btnPrimaryHoverBg,
  btnPrimaryHoverBrightness,
  btnPrimaryActiveBrightness,
  btnPrimaryFocusBrightness,
  btnDangerColor,
  btnDangerBg,
  btnDangerBorder,
  btnDangerHoverBg,
  btnDangerBrightness,
  btnWarningColor,
  btnWarningBg,
  btnWarningBorder,
  btnWarningBrightness,
  btnSuccessColor,
  btnSuccessBg,
  btnSuccessBorder,
  btnSuccessBrightness,
  btnDarkColor,
  btnDarkBg,
  btnDarkBorder,
  btnDarkBrightness,
  btnLightColor,
  btnLightBg,
  btnLightBorder,
  btnLightBrightness,
  btnOfflineColor,
  btnOfflineBg,
  btnOfflineBorder,
  btnOfflineBrightness,
  btnMutedColor,
  btnMutedBg,
  btnMutedBorder,
  btnMutedBrightness,
  btnSecondaryColor,
  btnSecondaryBg,
  btnSecondaryBorder,
  btnSecondaryHoverBg,
  btnSecondaryHoverColor,
  btnSecondaryActiveColor,
  btnSecondaryActiveBg,
  btnSecondaryFocusBoxShadowColor,
  btnSecondaryBrightness,
} from "../../stylesheets/pallete";
import { CSSColorPropertiesType } from "./type";

const SIZES = ['jumbo', 'lg', 'md', 'sm'];
const COLORS = ['default', 'primary', 'danger', 'warning', 'success', 'dark', 'light', 'offline', 'muted', 'secondary'];
const DEFAULT_COLOR = COLORS[0];

const CSS_COLOR_PROPERTIES: CSSColorPropertiesType = {
  'default': {
    color: btnDefaultColor,
    background: btnDefaultBg,
    border: btnDefaultBorder,
    hoverColor: btnDefaultColor,
    hoverBackground: btnDefaultBg,
    hoverBrightness: btnDefaultBrightness, //100%
    activeColor: btnDefaultColor,
    activeBackground: btnDefaultBg,
    activeBrightness: btnDefaultBrightness, //100%
    focusColor: btnDefaultColor,
    focusBackground: btnDefaultBg,
    focusBrightness: btnDefaultBrightness, //100%
    focusBoxShadowColor: btnPrimaryBg,
  },
  'primary': {
    color: btnPrimaryColor,
    background: btnPrimaryBg,
    border: btnPrimaryBorder,
    hoverColor: btnPrimaryColor,
    hoverBackground: btnPrimaryHoverBg,
    hoverBrightness: btnPrimaryHoverBrightness, //90%
    activeColor: btnPrimaryColor,
    activeBackground: btnPrimaryActiveBg,
    activeBrightness: btnPrimaryActiveBrightness, //85%
    focusColor: btnPrimaryColor,
    focusBackground: btnPrimaryBg,
    focusBrightness: btnPrimaryFocusBrightness, // 100%
    focusBoxShadowColor: btnPrimaryBorder,
  },
  'danger': {
    color: btnDangerColor,
    background: btnDangerBg,
    border: btnDangerBorder,
    hoverColor: btnDangerColor,
    hoverBackground: btnDangerHoverBg,
    hoverBrightness: btnDangerBrightness, //100%
    activeColor: btnDangerColor,
    activeBackground: btnDangerBg,
    activeBrightness: btnDangerBrightness, //100%
    focusColor: btnDangerColor,
    focusBackground: btnDangerBg,
    focusBrightness: btnDangerBrightness, //100%
    focusBoxShadowColor: btnDangerBorder,
  },
  'warning': {
    color: btnWarningColor,
    background: btnWarningBg,
    border: btnWarningBorder,
    hoverColor: btnWarningColor,
    hoverBackground: btnWarningBg,
    hoverBrightness: btnWarningBrightness, //100%
    activeColor: btnWarningColor,
    activeBackground: btnWarningBg,
    activeBrightness: btnWarningBrightness, //100%
    focusColor: btnWarningColor,
    focusBackground: btnWarningBg,
    focusBrightness: btnWarningBrightness, //100%
    focusBoxShadowColor: btnWarningBorder,
  },
  'success': {
    color: btnSuccessColor,
    background: btnSuccessBg,
    border: btnSuccessBorder,
    hoverColor: btnSuccessColor,
    hoverBackground: btnSuccessBg,
    hoverBrightness: btnSuccessBrightness, //100%
    activeColor: btnSuccessColor,
    activeBackground: btnSuccessBg,
    activeBrightness: btnSuccessBrightness, //100%
    focusColor: btnSuccessColor,
    focusBackground: btnSuccessBg,
    focusBrightness: btnSuccessBrightness, //100%
    focusBoxShadowColor: btnSuccessBorder,
  },
  'dark': {
    color: btnDarkColor,
    background: btnDarkBg,
    border: btnDarkBorder,
    hoverColor: btnDarkColor,
    hoverBackground: btnDarkBg,
    hoverBrightness: btnDarkBrightness, //100%
    activeColor: btnDarkColor,
    activeBackground: btnDarkBg,
    activeBrightness: btnDarkBrightness, //100%
    focusColor: btnDarkColor,
    focusBackground: btnDarkBg,
    focusBrightness: btnDarkBrightness, //100%
    focusBoxShadowColor: btnDarkBorder,
  },
  'light': {
    color: btnLightColor,
    background: btnLightBg,
    border: btnLightBorder,
    hoverColor: btnLightColor, //rgb(239, 239, 239)
    hoverBackground: btnLightBg,
    hoverBrightness: btnLightBrightness, //100%
    activeColor: btnLightColor,
    activeBackground: btnLightBg,
    activeBrightness: btnLightBrightness, //100%
    focusColor: btnLightColor,
    focusBackground: btnLightBg,
    focusBrightness: btnLightBrightness, //100%
    focusBoxShadowColor: btnLightBorder, //No specific rule for this
  },
  'offline': {
    color: btnOfflineColor,
    background: btnOfflineBg,
    border: btnOfflineBorder,
    hoverColor: btnOfflineColor,
    hoverBackground: btnOfflineBg,
    hoverBrightness: btnOfflineBrightness, //100%
    activeColor: btnOfflineColor,
    activeBackground: btnOfflineBg,
    activeBrightness: btnOfflineBrightness, //100%
    focusColor: btnOfflineColor,
    focusBackground: btnOfflineBg,
    focusBrightness: btnOfflineBrightness, //100%
    focusBoxShadowColor: btnOfflineBorder,
  },
  'muted': {
    color: btnMutedColor,
    background: btnMutedBg,
    border: btnMutedBorder,
    hoverColor: btnMutedColor,
    hoverBackground: btnMutedBg,
    hoverBrightness: btnMutedBrightness, //100%
    activeColor: btnMutedColor,
    activeBackground: btnMutedBg,
    activeBrightness: btnMutedBrightness, //100%
    focusColor: btnMutedColor,
    focusBackground: btnMutedBg,
    focusBrightness: btnMutedBrightness, //100%
    focusBoxShadowColor: btnMutedBorder,
  },
  'secondary': {
    color: btnSecondaryColor,
    background: btnSecondaryBg,
    border: btnSecondaryBorder,
    hoverColor: btnSecondaryHoverColor,
    hoverBackground: btnSecondaryHoverBg,
    hoverBrightness: btnSecondaryBrightness, //100%
    activeColor: btnSecondaryActiveColor,
    activeBackground: btnSecondaryActiveBg,
    activeBrightness: btnSecondaryBrightness, //100%
    focusColor: btnSecondaryColor,
    focusBackground: btnSecondaryHoverBg,
    focusBrightness: btnSecondaryBrightness, //100%
    focusBoxShadowColor: btnSecondaryFocusBoxShadowColor,
  }
};

export {
  SIZES,
  COLORS,
  DEFAULT_COLOR,
  CSS_COLOR_PROPERTIES,
};
