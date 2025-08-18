import React, { JSX } from 'react';
import * as Styled from './styles';
import { HintProps } from './types';
import { MdClose, MdInfo } from 'react-icons/md';

/**
 * A Hint component for displaying informational messages.
 *
 * This component can be used to show tips, warnings, or other information to the user.
 * It can be displayed with a title, an icon, and a close button.
 *
 * @param {HintProps} props The props for the Hint component. See {@link HintProps} for more details.
 * @param {string} props.label The main text content of the hint.
 * @param {string} [props.title] An optional title for the hint. If provided, a close button will be displayed.
 * @param {React.ReactNode} [props.icon] An optional icon to be displayed next to the title or label.
 * @param {() => void} [props.onRequestClose] A callback function to be called when the close button is clicked.
 * @param {React.ReactNode} [props.children] Optional additional content to be displayed below the label.
 * @param {any} ...props Any other props will be passed down to the underlying container div.
 * @returns {JSX.Element} The rendered Hint component.
 */
function Hint({
  title,
  label,
  icon = <MdInfo fontSize="1rem" />,
  onRequestClose,
  children,
  ...rest
}: HintProps): JSX.Element {
  const renderedLabel = <Styled.Label>{label}{children}</Styled.Label>;
  return (
    <Styled.Container
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={title || label}
      {...rest}
    >
      <Styled.Header>
        <Styled.IconTextWrapper>
          <Styled.IconWrapper aria-hidden="true">
            {icon}
          </Styled.IconWrapper>
          {title && <Styled.Title>{title}</Styled.Title>}
          {!title && renderedLabel}
        </Styled.IconTextWrapper>
        {title && (
          <Styled.CloseButton
            type="button"
            aria-label="Close"
            onClick={onRequestClose}
          >
            <MdClose fontSize="1rem" />
          </Styled.CloseButton>
        )}
      </Styled.Header>
      {title && renderedLabel}
    </Styled.Container>
  );
}

export default Hint;
