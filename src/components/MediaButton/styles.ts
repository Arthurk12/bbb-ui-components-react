import styled, { css } from 'styled-components';
import {
  CSS_COLOR_PROPERTIES,
  CSS_COLOR_PROPERTIES_DISABLED,
  CSS_SIZE_PROPERTIES,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_VARIANT,
  VARIANTS,
} from './constants';
import { StyledButtonProps } from './type';
import { borderRadiusDefault, spacingSmall } from '../../stylesheets/sizing';
import { colorBorderDefault, colorTextDefault } from '../../stylesheets/pallete';
import { fontSizeXSmall } from '../../stylesheets/typography';

export const SquaredButtonContainer = styled.div`
  width: 5rem;
  display: flex;
  flex-direction: column;
  gap: ${spacingSmall};
  align-items: center;
`;

const ButtonStyles = css<StyledButtonProps>`
  ${({size}) => {
    return CSS_SIZE_PROPERTIES[size] ? `
      padding: ${CSS_SIZE_PROPERTIES[size].padding};
    ` : `
      padding: ${CSS_SIZE_PROPERTIES[DEFAULT_SIZE].padding};
    `;
  }}

  ${({color, variant}) => {
    const safeColor = color || DEFAULT_COLOR;
    const safeVariant = variant || DEFAULT_VARIANT;
    const {
      color: textColor,
      iconColor,
      background,
      border,
      hoverColor,
      hoverBackground,
      hoverBorder
    } = CSS_COLOR_PROPERTIES[safeVariant][safeColor];

    return css`
      & span {
        color: ${textColor};
      }
      ${iconColor ? `color: ${iconColor}` : `color: ${textColor}`};
      ${background && `background-color: ${background};`}
      ${border ? `border: 1px solid ${border};` : 'border: none;'}

      &&:hover,
      &&:active,
      &&:focus {
        color: ${hoverColor};
        ${hoverBackground && `background-color: ${hoverBackground};`}
        ${hoverBorder ? `border: 1px solid ${hoverBorder};` : 'border: none;'}
      }
    `;
  }}

  ${({variant}) => variant === VARIANTS.SUBTLE && `
    text-decoration: underline;
  `}

  ${({disabled}) => {
    if (!disabled) return null;
    const {
      color,
      background,
      border
    } = CSS_COLOR_PROPERTIES_DISABLED;

    return css`
      pointer-events: none;
      cursor: not-allowed;
      color: ${color};
      ${background ? `background-color: ${background}` : `background-color: none`};
      border: ${border ? `1px solid ${border}` : 'none'};
      
      &&:hover,
      &&:active,
      &&:focus {
        color: ${color};
        ${background ? `background-color: ${background}` : `background-color: none`};
        border: ${border ? `1px solid ${border}` : 'none'};
      }
    `;
  }}
`;

export const ButtonFrame = styled.button<StyledButtonProps>`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${borderRadiusDefault} !important;
  border: 1px solid ${colorBorderDefault} !important;
  padding: ${spacingSmall} !important;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: none;
  position: relative;
  transition: opacity 0.2s ease-in-out;

  cursor: pointer;

  ${ButtonStyles}
`;

export const AuxIconContainer = styled.div`
  border-radius: 50%;
  padding: 0.2rem;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  & svg {
    font-size: 1.25rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  > i {
    font-size: 2rem;
  }
`;

export const ButtonText = styled.div`
  color: ${colorTextDefault};
  font-size: ${fontSizeXSmall}
  width: 100%;
  text-align: center;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
