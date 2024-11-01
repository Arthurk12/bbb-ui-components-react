import styled from 'styled-components';
import { borderSize, borderSizeLarge, mdPaddingY, mdPaddingX } from '../../stylesheets/general';
import { CSS_COLOR_PROPERTIES } from './constants';
import { btnFontWeight, fontSizeBase } from '../../stylesheets/typography';

export const Button = styled.button`
  border: ${borderSizeLarge} solid transparent;
  overflow: visible;
  display: inline-block;
  border-radius: ${borderSize};
  font-weight: ${btnFontWeight};
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;

  &&:-moz-focusring {
    outline: none;
  }

  &&:hover,
  &&:focus {
    outline: transparent;
    outline-style: dotted;
    outline-width: ${borderSize};
    text-decoration: none;
  }

  &&:active {
    outline: transparent;
    outline-width: ${borderSize};
    outline-style: solid;
    background: none;
  }

  font-size: calc(${fontSizeBase} * .85);
  padding: ${mdPaddingY} ${mdPaddingX};
  & > span:hover {
    opacity: 0.5;
  }

  ${({color}) => color && `
    color: ${CSS_COLOR_PROPERTIES[color].color};
    background-color: ${CSS_COLOR_PROPERTIES[color].background};
    
    &&:active {
      filter: brightness(${CSS_COLOR_PROPERTIES[color].activeBrightness});
      color: ${CSS_COLOR_PROPERTIES[color].activeColor};
      background-color: ${CSS_COLOR_PROPERTIES[color].activeBackground};
    }
      
    &&:focus {
      filter: brightness(${CSS_COLOR_PROPERTIES[color].focusBrightness});
      color: ${CSS_COLOR_PROPERTIES[color].focusColor};
      background-clip: padding-box;
      box-shadow: 0 0 0 ${borderSize} ${CSS_COLOR_PROPERTIES[color].focusBoxShadowColor};

    }
    
    &&:hover {
      filter: brightness(${CSS_COLOR_PROPERTIES[color].hoverBrightness});
      color: ${CSS_COLOR_PROPERTIES[color].hoverColor};
      background-color: ${CSS_COLOR_PROPERTIES[color].hoverBackground};
      & > span:hover {
        opacity: 0.5;
      }
    }
  `}
`;
