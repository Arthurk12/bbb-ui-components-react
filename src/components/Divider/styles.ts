import styled from 'styled-components';
import { colorBorderDefault } from '../../stylesheets/pallete';

export const Divider = styled.hr`
  width: 100%;
  border-top: 0px;
  border-right: 0px;
  border-left: 0px;
  border-image: initial;
  border-bottom: 1px solid ${colorBorderDefault};
  margin: 0px;
`;
