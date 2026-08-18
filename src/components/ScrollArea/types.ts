import React from 'react';

export interface StyledScrollAreaWrapperProps {
  $verticalScroll: boolean;
  $horizontalScroll: boolean;
  $maxHeight?: string;
  $maxWidth?: string;
  $fadeEdges: boolean;
  $fadeColor?: string;
  $paddingTop?: string;
  $paddingRight?: string;
  $paddingBottom?: string;
  $paddingLeft?: string;
}

export interface ScrollAreaProps {
  /** Scrollable content. */
  children: React.ReactNode;

  /** Enables vertical scrolling. @default true */
  verticalScroll?: boolean;

  /** Enables horizontal scrolling. @default false */
  horizontalScroll?: boolean;

  /** Caps the content height; scrolling kicks in past this value (e.g. '400px', '50vh'). */
  maxHeight?: string;

  /** Caps the content width; scrolling kicks in past this value (e.g. '600px', '100%'). */
  maxWidth?: string;

  /** Fades the scrollable edges with a color mask + shadow, matching the chat's scroll style. @default true */
  fadeEdges?: boolean;

  /** Background color the fade blends into. Required in practice when `fadeEdges` is `true` — if omitted, the fade is silently skipped. */
  fadeColor?: string;

  /** Space reserved above the content, before the scrollable area's top edge (e.g. '1rem'). Keeps the first item clear of the top fade instead of butting against it. */
  paddingTop?: string;

  /** Space reserved to the right of the content, before the scrollable area's right edge (e.g. '1rem'). Keeps the last item clear of the right fade instead of butting against it. */
  paddingRight?: string;

  /** Space reserved below the content, before the scrollable area's bottom edge (e.g. '1rem'). Keeps the last item clear of the bottom fade instead of butting against it. */
  paddingBottom?: string;

  /** Space reserved to the left of the content, before the scrollable area's left edge (e.g. '1rem'). Keeps the first item clear of the left fade instead of butting against it. */
  paddingLeft?: string;
}
