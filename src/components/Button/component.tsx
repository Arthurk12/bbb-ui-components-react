import React from 'react';
import { ButtonProps } from './type.js';
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
  onClick,
  children
}: ButtonProps): JSX.Element {
  return (
    <Styled.Button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      {label && <span>{label}</span>}
      {children}
    </Styled.Button>
  );
};

export default Button;
