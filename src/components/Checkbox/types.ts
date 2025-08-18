import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { LAYOUTS } from './constants';

type Layout = typeof LAYOUTS[keyof typeof LAYOUTS];

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
  layout?: Layout;
  round?: boolean;
  ariaLabel?: string;
}
