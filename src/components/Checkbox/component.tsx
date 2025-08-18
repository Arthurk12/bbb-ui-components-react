import React, { JSX, useId } from 'react';
import { CheckboxProps } from './types';
import * as Styled from './styles';
import { DEFAULT_LAYOUT, LAYOUTS } from './constants';
import { RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';

/**
 * A customizable Checkbox component.
 *
 * This component wraps the Material-UI Checkbox and provides additional features,
 * such as custom layouts and a round variant. It can be used with a label,
 * and clicking the label will toggle the checkbox state.
 *
 * @param {CheckboxProps} props The props for the Checkbox component. See {@link CheckboxProps} for more details.
 * @param {string} [props.label] The text to be displayed as the label for the checkbox.
 * @param {keyof typeof import('./constants')['LAYOUTS']} [props.layout=import('./constants').DEFAULT_LAYOUT] The position of the label relative to the checkbox.
 * @param {boolean} [props.round=false] If `true`, the checkbox will be rendered as a round radio-style button.
 * @param {string} [props.ariaLabel] The accessible name for the checkbox.
 * @param {any} ...props Any other props will be passed down to the underlying Material-UI Checkbox component.
 * @returns {JSX.Element} The rendered Checkbox component.
 */
function Checkbox({
  label,
  layout = DEFAULT_LAYOUT,
  round = false,
  ariaLabel,
  ...props
}: CheckboxProps): JSX.Element {
  const id = useId();
  const checkbox = (
    <Styled.StyledCheckbox
      {...props}
      id={id}
      aria-label={ariaLabel}
      icon={round ? <RadioButtonUnchecked /> : undefined}
      checkedIcon={round ? <RadioButtonChecked /> : undefined}
    />
  );

  if (!label) {
    return checkbox;
  }

  return (
    <Styled.Container>
      {layout === LAYOUTS.LEFT && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      {checkbox}
      {layout === LAYOUTS.RIGHT && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
    </Styled.Container>
  );
}

export default Checkbox;
