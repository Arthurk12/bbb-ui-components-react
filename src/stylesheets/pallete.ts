// Neutral colors
export const colorNeutral2 = 'var(--color-neutral-2, #717C91)';
export const colorNeutral3 = 'var(--color-neutral-3, #B0BDC9)';
export const colorNeutral4 = 'var(--color-neutral-4, #DCE4EC)';
export const colorWhite = 'var(--color-neutral-white, #FFFFFF)';
export const colorLightGray = 'var(--color-light-gray, #F4F6FA)';
export const colorGray = 'var(--color-gray, #4E5A66)';
export const colorDarkGray = 'var(--color-dark-gray, #393C48)';

// Brand colors
const colorBrand1 = 'var(--color-brand-1, #1D65D4)';
export const colorBrand2 = `var(--color-brand-2, ${colorBrand1})`;
export const colorBrand3 = `var(--color-brand-3, ${colorBrand1})`;
const colorBrandLight = 'var(--color-brand-light, #E5EFFB)';
export const colorBrandAux = `var(--color-brand-aux, ${colorBrandLight})`;

// Semantic colors
export const colorSuccess = 'var(--color-success, #2DD36F)';
export const colorWarning = 'var(--color-warning, #F59240)';
const colorError = 'var(--color-error, #D6232D)';
const colorErrorDark = 'var(--color-error-dark, #B91C25)';

// Background colors
export const colorBackgroundWhite = `var(--color-background-white, ${colorWhite})`;
export const colorBackgroundLight = `var(--color-background-light, ${colorLightGray})`;
export const colorBackgroundBlue = `var(--color-background-blue, ${colorBrandLight})`;

// Border colors
const colorBorderDefault = `var(--color-border-default, ${colorNeutral3})`;
export const colorBorderSelected = `var(--color-border-selected, ${colorBrand1})`;
export const colorBorderError = `var(--color-border-error, ${colorError})`;

// Text colors
export const colorTextDefault = `var(--color-text-default, ${colorDarkGray})`;
export const colorTextLight = `var(--color-text-light, ${colorNeutral2})`;

//Icon colors
export const colorIconDefault = `var(--color-icon-default, ${colorNeutral2})`;
export const colorIconBlue = `var(--color-icon-blue, ${colorBrand1})`;
export const colorIconWhite = `var(--color-icon-white, ${colorWhite})`;

//Hover colors
export const colorHoverDark = 'var(--color-hover-dark, #1E53AF)';
export const colorHoverLight = 'var(--color-hover-light, #D4E5FA)';
export const colorHoverNeutral = `var(--color-hover-neutral, ${colorNeutral4})`;

export const palette = {
  colorBrand1: `var(--color-primary, ${colorBrand1})`,
  colorBrandLight: `var(--color-blue-aux, ${colorBrandLight})`,
  colorError: `var(--color-danger, ${colorError})`,
  colorErrorDark: `var(--color-danger-dark, ${colorErrorDark})`,
  colorBorderDefault: `var(--default-border, ${colorBorderDefault})`,
};
