import React from 'react';
import { COLOR_VALUES, SIZE_VALUES, VARIANT_VALUES } from './constants';

export type EssentialColorProperties = {
  color: string;
  background: string | boolean;
  border: string | boolean;
}

export type ColorProperties = EssentialColorProperties & {
  iconColor?: string;
  hoverColor: string;
  hoverBackground: string;
  hoverBorder: string | boolean;
};

export type CSSColorPropertiesType = {
  [key: string]: {
    [key: string]: ColorProperties;
  };
};

export type SizeProperties = {
  padding: string;
}

export type CSSSizePropertiesType = {
  [key: string]: SizeProperties;
}

type VariantType = typeof VARIANT_VALUES[number];
type ColorType = typeof COLOR_VALUES[number];
type SizeType = typeof SIZE_VALUES[number];

export interface StyledButtonProps {
  variant?: VariantType;
  color?: ColorType;
  size?: SizeType;
  disabled: boolean;
}

export interface ButtonProps {
  id?: string;
  dataTest?: string;
  label?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  color?: ColorType;
  variant?: VariantType;
  size?: SizeType;
  disabled?: boolean;
  icon?: React.ReactNode;
  auxIcon?: React.ReactNode;
  hideAuxIcon?: boolean;
  auxOnClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}
