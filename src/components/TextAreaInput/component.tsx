import React, { useRef, useEffect, JSX } from 'react';
import { TextAreaInputProps } from './types';
import * as Styled from './styles';

/**
 * A customizable text area input component.
 *
 * This component provides a styled, multi-line text input field that automatically
 * focuses on render and supports all standard textarea attributes.
 *
 * @param {TextAreaInputProps} props The props for the TextAreaInput component. See {@link TextAreaInputProps} for more details.
 * @param {string} [props.placeholder=''] The placeholder text to be displayed when the textarea is empty.
 * @param {number} [props.rows=1] The initial number of visible text lines.
 * @param {number} [props.maxLength=250] The maximum number of characters allowed in the textarea.
 * @param {boolean} [props.autoFocus=true] If `true`, the textarea will be focused on mount.
 * @param {React.Ref<HTMLTextAreaElement>} [props.inputRef] A ref to be forwarded to the underlying textarea element.
 * @param {(event: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.onChange] Callback fired when the value is changed.
 * @param {(event: React.KeyboardEvent<HTMLTextAreaElement>) => void} [props.onKeyDown] Callback fired when a key is pressed.
 * @param {any} ...props Any other props will be passed down to the underlying textarea element.
 * @returns {JSX.Element} The rendered TextAreaInput component.
 */
function TextAreaInput({
  placeholder = '',
  rows = 1,
  maxLength = 250,
  autoFocus = true,
  inputRef = undefined,
  onChange,
  onKeyDown,
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
