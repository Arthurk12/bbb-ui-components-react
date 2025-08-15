import React, { JSX } from 'react';
import { MdSettings } from 'react-icons/md';
import { ButtonProps } from './type';
import {
  DEFAULT_VARIANT,
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_LAYOUT,
  LAYOUTS,
  DEFAULT_TOOLTIP_PLACEMENT,
} from './constants';
import * as Styled from './styles';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

/**
 * A versatile Button component that supports multiple layouts and styles.
 *
 * This component can be rendered as a default inline button or a stacked
 * button with an icon, label, and an optional auxiliary icon. It's designed
 * to be highly customizable and accessible and to easily build elements that
 * match BBB design system.
 *
 * @param {ButtonProps} props - The props for the Button component.
 * See {@link ButtonProps} for more details.
 *
 * @returns {JSX.Element} The rendered Button component.
 */
function Button(props: ButtonProps): JSX.Element {
  const {
    id = '',
    dataTest,
    label,
    tooltipLabel,
    tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT,
    onClick,
    onKeyDown,
    ariaLabel = '',
    ariaLabelledBy = '',
    ariaDescribedBy = '',
    color = DEFAULT_COLOR,
    variant = DEFAULT_VARIANT,
    size = DEFAULT_SIZE,
    layout = DEFAULT_LAYOUT,
    disabled = false,
    children,
  } = props;

  const accessibilityProps: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
  } = {};
  if (ariaLabel) accessibilityProps['aria-label'] = ariaLabel;
  if (ariaLabelledBy) accessibilityProps['aria-labelledby'] = ariaLabelledBy;
  if (ariaDescribedBy) accessibilityProps['aria-describedby'] = ariaDescribedBy;

  const buttonElement = (() => {
    if (props.layout === LAYOUTS.CIRCLE) {
      const { icon } = props;
      const testId = dataTest || `button-${id || 'default'}`;

      return (
        <Styled.Button
          id={id}
          data-test={testId}
          onClick={onClick}
          onKeyDown={onKeyDown}
          {...accessibilityProps}
          color={color}
          variant={variant}
          size={size}
          layout={layout}
          disabled={disabled}
        >
          {icon}
        </Styled.Button>
      );
    }

    if (props.layout === LAYOUTS.STACKED) {
      const {
        icon,
        auxIcon = <MdSettings fontSize="small" />,
        hideAuxIcon = false,
        auxOnClick = null,
      } = props;
      const testId = dataTest || `${LAYOUTS.STACKED}-button-${id || label || 'default'}`;

      return (
        <Styled.ButtonWrapper data-test={testId} layout={layout}>
          <Styled.Button
            id={id}
            onClick={onClick}
            onKeyDown={onKeyDown}
            {...accessibilityProps}
            color={color}
            variant={variant}
            size={size}
            layout={layout}
            disabled={disabled}
          >
            {!hideAuxIcon && (
              <Styled.AuxIconContainer
                // Add this property only when there is a onClick function for the auxiliary icon.
                // It controls whether the auxiliary button is going to have an independent hover state.
                {...(auxOnClick && { 'data-is-aux-icon': true })}
                role="button"
                hover={auxOnClick !== null}
                color={color}
                variant={variant}
                onClick={(event) => {
                  if (auxOnClick) {
                    auxOnClick(event);
                    event.preventDefault();
                    event.stopPropagation();
                  }
                }}
              >
                <Styled.AuxIcon>{auxIcon}</Styled.AuxIcon>
              </Styled.AuxIconContainer>
            )}
            {icon && <Styled.IconWrapper>{icon}</Styled.IconWrapper>}
          </Styled.Button>
          <Styled.ButtonText>{label}</Styled.ButtonText>
        </Styled.ButtonWrapper>
      );
    }

    const { iconStart, iconEnd } = props;
    const testId = dataTest || `button-${id || label || 'default'}`;

    return (
      <Styled.Button
        id={id}
        data-test={testId}
        onClick={onClick}
        onKeyDown={onKeyDown}
        {...accessibilityProps}
        color={color}
        variant={variant}
        size={size}
        layout={layout}
        disabled={disabled}
      >
        {iconStart && iconStart}
        {label && <span>{label}</span>}
        {children}
        {iconEnd && iconEnd}
      </Styled.Button>
    );
  })();

  if (tooltipLabel) {
    return (
      <Tippy
        content={tooltipLabel}
        placement={tooltipPlacement}
      >
        {buttonElement}
      </Tippy>
    );
  }

  return buttonElement;
}

export default Button;
