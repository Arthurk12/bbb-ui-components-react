import styled from 'styled-components';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { colorTextDefault, colorBrand1 } from '../../stylesheets/pallete';
import { fontSizeDefault } from '../../stylesheets/typography';
import { spacingSmall } from '../../stylesheets/sizing';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacingSmall};
`;

export const Label = styled.label`
  color: ${colorTextDefault};
  font-size: ${fontSizeDefault};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;

export const StyledCheckbox = styled(MuiCheckbox)`
  &.MuiCheckbox-root {
    padding: 0;
  }

  &.Mui-checked {
    color: ${colorBrand1};
  }
`;
