import styled from 'styled-components';
import { borderRadiusSmall, spacingMedium, spacingSmall } from '../../stylesheets/sizing';
import Select from '@mui/material/Select';
import { colorBorderDefault, colorBrand1, colorDarkGrey } from '../../stylesheets/pallete';
import { fontSizeSmall } from '../../stylesheets/typography';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: ${spacingSmall};
  justify-content: start;
  align-items: center;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${spacingMedium}; 
  padding: 1px;
  width: 100%;
`;

export const Selector = styled(Select)`
  height: 3.5rem;
  flex: 1;
  border-radius: ${borderRadiusSmall} !important;
  overflow: hidden;
  width: 100%;
  border: 1px solid ${colorBorderDefault};
`;

export const Title = styled.label`
  align-self: flex-start;
  color: ${colorDarkGrey};
  font-size: ${fontSizeSmall};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SelectorIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${colorBrand1};
`;
