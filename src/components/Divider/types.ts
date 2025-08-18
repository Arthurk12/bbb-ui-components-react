import * as React from 'react';
import { SelectProps as MuiSelectProps } from '@mui/material/Select';

export type SelectProps = MuiSelectProps & {
  title?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
  children: React.ReactNode;
};
