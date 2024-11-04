import React from 'react';
import { ButtonProps } from './type';
import { COLORS, DEFAULT_COLOR, DEFAULT_SIZE, SIZES } from './constants';
import * as Styled from './styles';

/**
 * Customizable button component.
 *
 * This component renders a button that matches the style of BBB and can trigger actions in
 * the user interface, with accessible properties to enhance usability.
 *
 * @param {string} [label] - The text to display inside the button.
 * @param {string} [ariaLabel=''] - Accessible label for the button.
 * @param {string} [ariaLabelledBy=''] - ID of another element providing an accessible label.
 * @param {string} [ariaDescribedBy=''] - ID of another element describing the button for
 *  additional information.
 * @param {'default' | 'primary' | 'danger' | 'warning' | 'success' | 'dark' | 'light' | 'offline' | 'muted' | 'secondary'} [color='default']
 * - Defines the color scheme for the button.
 * @param {'jumbo' | 'lg' | 'md' | 'sm' } [size='md']
 * - Defines the size of the button.
 * @param {function} onClick - Function to be called when the button is clicked.
 * @param {React.ReactNode} [children] - Child elements to render inside the button.
 *
 * @returns {JSX.Element} The rendered Button component.
 */
function Button({
  label,
  ariaLabel = '',
  ariaLabelledBy = '',
  ariaDescribedBy = '',
  color = DEFAULT_COLOR,
  size = DEFAULT_SIZE,
  onClick,
  children
}: ButtonProps): JSX.Element {
  let _color = color;
  if (!COLORS.includes(_color)) {
    //TODO: INVALID COLOR - log error?
    _color = DEFAULT_COLOR;
  };
  let _size = size;
  if (!SIZES.includes(size)) {
    //TODO: INVALID SIZE - log error?
    _size = DEFAULT_SIZE;
  }

  return (
    <Styled.Button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      color={_color}
      size={_size}
    >
      {label && <span>{label}</span>}
      {children}
    </Styled.Button>
  );
};

export default Button;
