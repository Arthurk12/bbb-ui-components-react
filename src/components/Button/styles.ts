import styled from 'styled-components';
import {
  borderSize,
  borderSizeLarge,
  smPaddingX, smPaddingY,
  mdPaddingX,mdPaddingY,
  lgPaddingX, lgPaddingY,
  jumboPaddingX, jumboPaddingY,
} from '../../stylesheets/general';
import { CSS_COLOR_PROPERTIES } from './constants';
import { btnFontWeight, fontSizeSmall, fontSizeBase, fontSizeLarge } from '../../stylesheets/typography';
import { CSSSizePropertiesType, StyledButtonProps } from './type';

export const Button = styled.button<StyledButtonProps>`
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
  
  ${({size}) => {
    const sizes: CSSSizePropertiesType = {
      'sm': { fontSize: `calc(${fontSizeSmall} * 0.85)`, padding: `${smPaddingY} ${smPaddingX}` },
      'md': { fontSize: `calc(${fontSizeBase} * 0.85)`, padding: `${mdPaddingY} ${mdPaddingX}` },
      'lg': { fontSize: `calc(${fontSizeLarge} * 0.85)`, padding: `${lgPaddingY} ${lgPaddingX}` },
      'jumbo': { fontSize: '3rem', padding: `${jumboPaddingY} ${jumboPaddingX}` }
    };
    return sizes[size] ? `
      font-size: ${sizes[size].fontSize};
      padding: ${sizes[size].padding};
    ` : `
      font-size: ${sizes['md'].fontSize};
      padding: ${sizes['md'].padding};
    `;
  }}

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
