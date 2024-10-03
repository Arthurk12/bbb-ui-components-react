import React from 'react';
import styled from 'styled-components';

// Define a styled button
const StyledTextAreaInput = styled.textarea`
  flex: 1;
  background: #fff;
  background-clip: padding-box;
  margin: 0;
  color: var(--color-text, var(--color-gray, #4E5A66));
  padding: calc(.3rem* 2.5) calc(.75rem* 1.25);
  resize: none;
  -webkit-transition: none;
  transition: none;
  border-radius: .2rem;
  font-size: 1rem;
  line-height: 1;
  min-height: 2.5rem;
  max-height: 10rem;
  border: 1px solid var(--color-gray-lighter, #A7B3BD);
  overflow-y: hidden;
  margin: 0.3em;
  &:focus {
    outline: transparent dotted 2px;
    border-radius: 2px;
    box-shadow: 0 0 0 2px var(--color-blue-light, #54a1f3), inset 0 0 0 1px var(--color-primary, #0F70D7);
  }
`;

// Define the props for the Button component
interface TextAreaInputProps {
  rows?: number,
  maxLength?: number,
  placeholder?: string,
  autoFocus?: boolean,
  inputRef?:(ref: HTMLTextAreaElement) => void,
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

function TextAreaInput({
  placeholder = '',
  rows = 1,
  maxLength = 250,
  autoFocus = true,
  inputRef = undefined,
  onChange = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {},
  onKeyDown = (event:  React.KeyboardEvent<HTMLTextAreaElement>) => {},
}: TextAreaInputProps) {
  return (
    <StyledTextAreaInput
      rows={rows}
      maxLength={maxLength}
      onChange={onChange}
      ref={(ref) => {
        if (autoFocus) ref?.focus();
        if (inputRef !== undefined) inputRef(ref);
      }}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextAreaInput;
