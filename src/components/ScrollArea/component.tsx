import React, { JSX } from 'react';
import { ScrollAreaProps } from './types';
import * as Styled from './styles';
import { DEFAULT_VERTICAL_SCROLL, DEFAULT_HORIZONTAL_SCROLL, DEFAULT_FADE_EDGES } from './constants';

/**
 * A wrapper that applies standardized scrollbar styling to its content.
 *
 * Use it around any scrollable area (chat, lists, side panels) to get a consistent
 * scrollbar look, with optional axis control, size capping, and edge fading.
 *
 */
function ScrollArea({
  children,
  verticalScroll = DEFAULT_VERTICAL_SCROLL,
  horizontalScroll = DEFAULT_HORIZONTAL_SCROLL,
  maxHeight,
  maxWidth,
  fadeEdges = DEFAULT_FADE_EDGES,
  fadeColor,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
}: ScrollAreaProps): JSX.Element {
  const isScrollable = verticalScroll || horizontalScroll;

  return (
    <Styled.ScrollAreaWrapper
      $verticalScroll={verticalScroll}
      $horizontalScroll={horizontalScroll}
      $maxHeight={maxHeight}
      $maxWidth={maxWidth}
      $fadeEdges={fadeEdges}
      $fadeColor={fadeColor}
      $paddingTop={paddingTop}
      $paddingRight={paddingRight}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      tabIndex={isScrollable ? 0 : undefined}
    >
      {children}
    </Styled.ScrollAreaWrapper>
  );
}

export default ScrollArea;
