import styled, { css } from 'styled-components';
import { StyledScrollAreaWrapperProps } from './types';

const FADE_MASK_SIZE = '40px';
const FADE_SHADOW_SIZE = '14px';
const FADE_SHADOW_COLOR = 'rgba(0, 0, 0, .2)';

interface FadeLayer {
  image: string;
  position: string;
  size: string;
  attachment: string;
}

const verticalFadeLayers = (color: string): FadeLayer[] => [
  { image: `linear-gradient(${color} 30%, transparent)`, position: '0 0', size: `100% ${FADE_MASK_SIZE}`, attachment: 'local' },
  { image: `linear-gradient(transparent, ${color} 70%)`, position: '0 100%', size: `100% ${FADE_MASK_SIZE}`, attachment: 'local' },
  { image: `radial-gradient(farthest-side at 50% 0, ${FADE_SHADOW_COLOR}, transparent)`, position: '0 0', size: `100% ${FADE_SHADOW_SIZE}`, attachment: 'scroll' },
  { image: `radial-gradient(farthest-side at 50% 100%, ${FADE_SHADOW_COLOR}, transparent)`, position: '0 100%', size: `100% ${FADE_SHADOW_SIZE}`, attachment: 'scroll' },
];

const horizontalFadeLayers = (color: string): FadeLayer[] => [
  { image: `linear-gradient(to right, ${color} 30%, transparent)`, position: '0 0', size: `${FADE_MASK_SIZE} 100%`, attachment: 'local' },
  { image: `linear-gradient(to right, transparent, ${color} 70%)`, position: '100% 0', size: `${FADE_MASK_SIZE} 100%`, attachment: 'local' },
  { image: `radial-gradient(farthest-side at 0 50%, ${FADE_SHADOW_COLOR}, transparent)`, position: '0 0', size: `${FADE_SHADOW_SIZE} 100%`, attachment: 'scroll' },
  { image: `radial-gradient(farthest-side at 100% 50%, ${FADE_SHADOW_COLOR}, transparent)`, position: '100% 0', size: `${FADE_SHADOW_SIZE} 100%`, attachment: 'scroll' },
];

const fadeBackground = ({
  $verticalScroll, $horizontalScroll, $fadeEdges, $fadeColor,
}: StyledScrollAreaWrapperProps) => {
  if (!$fadeEdges || !$fadeColor) return '';

  const layers = [
    ...($verticalScroll ? verticalFadeLayers($fadeColor) : []),
    ...($horizontalScroll ? horizontalFadeLayers($fadeColor) : []),
  ];
  if (!layers.length) return '';

  return css`
    background-image: ${layers.map((layer) => layer.image).join(', ')};
    background-position: ${layers.map((layer) => layer.position).join(', ')};
    background-size: ${layers.map((layer) => layer.size).join(', ')};
    background-attachment: ${layers.map((layer) => layer.attachment).join(', ')};
    background-repeat: no-repeat;
    background-color: transparent;
  `;
};

export const ScrollAreaWrapper = styled.div<StyledScrollAreaWrapperProps>`
  overflow-y: ${({ $verticalScroll }) => ($verticalScroll ? 'auto' : 'hidden')};
  overflow-x: ${({ $horizontalScroll }) => ($horizontalScroll ? 'auto' : 'hidden')};
  ${({ $maxHeight }) => $maxHeight && css`max-height: ${$maxHeight};`}
  ${({ $maxWidth }) => $maxWidth && css`max-width: ${$maxWidth};`}
  ${({ $paddingTop }) => $paddingTop && css`padding-top: ${$paddingTop};`}
  ${({ $paddingRight }) => $paddingRight && css`padding-right: ${$paddingRight};`}
  ${({ $paddingBottom }) => $paddingBottom && css`padding-bottom: ${$paddingBottom};`}
  ${({ $paddingLeft }) => $paddingLeft && css`padding-left: ${$paddingLeft};`}
  ${fadeBackground}

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .25);
    border: none;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover { background: rgba(0, 0, 0, .5); }
  &::-webkit-scrollbar-thumb:active { background: rgba(0, 0, 0, .25); }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, .25);
    border: none;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track:hover { background: rgba(0, 0, 0, .25); }
  &::-webkit-scrollbar-track:active { background: rgba(0, 0, 0, .25); }
  &::-webkit-scrollbar-corner { background: 0 0; }
`;
