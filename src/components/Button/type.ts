import { COLORS } from "./constants";

export type ColorProperties = {
  color: string;
  background: string;
  border: string;
  hoverColor: string;
  hoverBackground: string;
  hoverBrightness: string;
  activeColor: string;
  activeBackground: string;
  activeBrightness: string;
  focusColor: string;
  focusBackground: string;
  focusBrightness: string;
  focusBoxShadowColor: string;
}

export type CSSColorPropertiesType = Record<string, ColorProperties>;

type ColorType = typeof COLORS[number];

export interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  color?: ColorType;
  children: React.ReactNode;
}
