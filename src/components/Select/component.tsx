import React, { JSX, useId } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { SelectProps } from './types';
import * as Styled from './styles';

/**
 * A customizable Select component.
 *
 * This component wraps the Material-UI Select and provides additional styling,
 * such as a title and an optional icon.
 *
 * @param {SelectProps} props The props for the Select component. See {@link SelectProps} for more details.
 * @param {string} [props.title] The text to be displayed as the label for the select input.
 * @param {React.ReactNode} [props.icon] An optional icon to be displayed inside the select wrapper.
 * @param {string} [props.ariaLabel] The accessible name for the select input, used when a visible title is not present.
 * @param {React.ReactNode} props.children The option elements to be rendered inside the select.
 * @param {any} ...props Any other props will be passed down to the underlying Material-UI Select component.
 * @returns {JSX.Element} The rendered Select component.
 */
function Select({
  title = null,
  icon = null,
  children,
  ariaLabel,
  ...props
}: SelectProps): JSX.Element {
  const id = useId();
  const selectId = `select-${id}`;
  const labelId = title ? `select-label-${id}` : undefined;

  return (
    <Styled.SelectContainer>
      {title && <Styled.Title id={labelId} htmlFor={selectId}>{title}</Styled.Title>}
      <Styled.SelectWrapper>
        {icon && (
          <Styled.SelectorIcon>
            {icon}
          </Styled.SelectorIcon>
        )}
        <Styled.Selector
          {...props}
          id={selectId}
          labelId={labelId}
          aria-label={ariaLabel}
          IconComponent={MdExpandMore}
        >
          {children}
        </Styled.Selector>
      </Styled.SelectWrapper>
    </Styled.SelectContainer>
  );
}

export default Select;
