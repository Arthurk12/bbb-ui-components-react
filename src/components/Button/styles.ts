import styled from 'styled-components';
import { colorPrimary } from '../../stylesheets/pallete';

export const Button = styled.button`
  background-color: ${colorPrimary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;
