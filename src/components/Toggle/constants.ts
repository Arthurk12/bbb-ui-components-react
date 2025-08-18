export const TEXT_POSITIONS = {
  RIGHT: 'right',
  LEFT: 'left',
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export const TEXT_POSITIONS_VALUES = Object.values(TEXT_POSITIONS);
export const DEFAULT_TEXT_POSITION = TEXT_POSITIONS_VALUES[0];
