import React, { useRef, useEffect } from 'react';
import { TextAreaInputProps } from './types';
import * as Styled from './styles';

/**
 * TextAreaInput component for user input.
 *
 * This component provides a styled textarea for user input, 
 * adhering to the design principles of BBB.
 *
 * @param {string} [value] - The current value of the textarea.
 * @param {function} onChange - Function to handle changes to the textarea value.
 * @param {string} [placeholder] - Placeholder text displayed when the textarea is empty.
 * @param {string} [ariaLabel=''] - Accessible label for the textarea.
 * @param {string} [ariaLabelledBy=''] - ID of another element providing an accessible label.
 * @param {string} [ariaDescribedBy=''] - ID of another element describing the textarea for additional information.
 * @param {...Object} textAreaProps - Additional properties to pass to the textarea element.
 *
 * @returns {JSX.Element} The rendered TextAreaInput component.
 */
function TextAreaInput({
  placeholder = '',
  rows = 1,
  maxLength = 250,
  autoFocus = true,
  inputRef = undefined,
  onChange = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {},
  onKeyDown = (event:  React.KeyboardEvent<HTMLTextAreaElement>) => {},
  ...props
}: TextAreaInputProps): JSX.Element {
  const internalRef = useRef<HTMLTextAreaElement | null>(null);
  
  useEffect(() => {
    if (autoFocus && internalRef.current) {
      internalRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <Styled.TextAreaInput
      {...props}
      rows={rows}
      maxLength={maxLength}
      ref={(ref) => {
        internalRef.current = ref;
        if (typeof inputRef === 'function') {
          inputRef(ref);
        } else if (inputRef && 'current' in inputRef) {
          inputRef.current = ref;
        }
      }}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextAreaInput;
