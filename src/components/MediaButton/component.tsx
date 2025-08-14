import React from 'react';
import { MdSettings } from 'react-icons/md';
import { ButtonProps } from './type';
import {
  DEFAULT_VARIANT,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
} from './constants';
import * as Styled from './styles';

/**
 * Shortcut Button component.
 *
 * This component renders a squared button with an icon on the center and optionally
 * an auxiliary icon at the top that matches the style of BBB and can trigger actions in
 * the user interface, with accessible properties to enhance usability.
 *
 * @param {string} [id=''] - Unique identifier for the button.
 * @param {string} [dataTest=''] - Data attribute for testing purposes.
 * @param {string} [label] - The text to display inside the button.
 * @param {function} onClick - Function to be called when the button is clicked.
 * @param {function} [onKeyDown] - Function to be called when a key is pressed down.
 * @param {string} [ariaLabel=''] - Accessible label for the button.
 * @param {string} [ariaLabelledBy=''] - ID of another element providing an accessible label.
 * @param {string} [ariaDescribedBy=''] - ID of another element describing the button for
 *  additional information.
 * @param {import('./type').ButtonProps['color']} [color='default']
 * - Defines the color scheme for the button.
 * @param {import('./type').ButtonProps['variant']} [variant='primary']
 * - Defines the visual style of the button.
 * @param {import('./type').ButtonProps['size']} [size='md']
 * - Defines the size of the button.
 * @param {React.ReactNode} [icon] - Icon to display at the middle of the button.
 * @param {React.ReactNode} [iconEnd] - Icon to display at the end of the button.
 * @param {boolean} [disabled=false] - If true, the button will be disabled and not clickable.
 * @param {React.ReactNode} [children] - Child elements to render inside the button.
 *
 * @returns {JSX.Element} The rendered Button component.
 */
function SquaredButton({
  id='',
  dataTest = '',
  label,
  onClick,
  onKeyDown,
  ariaLabel = '',
  ariaLabelledBy = '',
  ariaDescribedBy = '',
  color = DEFAULT_COLOR,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  icon = null,
  auxIcon = <MdSettings fontSize="small" />,
  hideAuxIcon = false,
  auxOnClick,
  disabled = false,
}: ButtonProps): JSX.Element {
  const accessibilityProps: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
  } = {};
  if (ariaLabel) accessibilityProps['aria-label'] = ariaLabel;
  if (ariaLabelledBy) accessibilityProps['aria-labelledby'] = ariaLabelledBy;
  if (ariaDescribedBy) accessibilityProps['aria-describedby'] = ariaDescribedBy;
  
  const testId = dataTest || `squared-button-${id || label || 'default'}`;
  
  return (
    <Styled.SquaredButtonContainer data-test={testId} >
      <Styled.ButtonFrame
        color={color}
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        {!hideAuxIcon && (
          <Styled.AuxIconContainer
            role="button"
            onClick={(event) => {
              if (auxOnClick) {
                auxOnClick(event);
                event.preventDefault();
              }
            }}
          >
            <div>
              {auxIcon}
            </div>
          </Styled.AuxIconContainer>
        )}
        {icon && (
          <Styled.IconWrapper>
            {icon}
          </Styled.IconWrapper>
        )}
      </Styled.ButtonFrame>
      <Styled.ButtonText>{label}</Styled.ButtonText>
    </Styled.SquaredButtonContainer>
  );
};

export default SquaredButton;
