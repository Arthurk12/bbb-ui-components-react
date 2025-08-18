import styled from 'styled-components';
import { colorTextDefault, colorBrand1, colorBackgroundLight, colorIconDefault, colorHoverLight } from '../../stylesheets/pallete';
import { fontSizeDefault } from '../../stylesheets/typography';
import { borderRadiusSmall, spacingMedium, spacingSmall, spacingSmallMedium } from '../../stylesheets/sizing';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacingSmall};
  padding: ${spacingMedium};
  background-color: ${colorBackgroundLight};
`;

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacingSmallMedium};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  color: ${colorBrand1};
  display: flex;
  align-items: center;
`;

export const Title = styled.label`
  color: ${colorTextDefault};
  font-size: ${fontSizeDefault}
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorIconDefault};
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  aspect-ratio: 1;

  &&:hover,
  &&:active {
    background-color: ${colorHoverLight};
  }
      
  &&:focus {
    outline: 2px solid ${colorBrand1};
  }
`;

export const Label = styled.label`
  color: ${colorTextDefault};
  font-size: ${fontSizeDefault};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: ${borderRadiusSmall};
`;
