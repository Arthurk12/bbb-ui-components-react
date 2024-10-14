import React from 'react';

export interface TextAreaInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  maxLength?: number;
  placeholder?: string;
  autoFocus?: boolean;
  inputRef?: React.MutableRefObject<HTMLTextAreaElement | null> | ((ref: HTMLTextAreaElement) => void);
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
};
