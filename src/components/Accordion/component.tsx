import React, { JSX, useState, useRef } from 'react';
import { AccordionProps } from './types';
import * as Styled from './styles';
import { MdExpandMore } from 'react-icons/md';
import Tippy from '@tippyjs/react';
import { DEFAULT_TOOLTIP_PLACEMENT } from './constants';

/**
 * An Accordion component that allows expanding and collapsing content.
 *
 * This component provides a clickable header to toggle the visibility of its children content
 * with a smooth animation. It also supports an optional tooltip on the header.
 *
 * @param {AccordionProps} props The props for the Accordion component. See {@link AccordionProps} for more details.
 * @param {string} props.title The text to be displayed in the accordion header.
 * @param {string} [props.tooltipLabel] An optional label for the tooltip that appears on hover.
 * @param {keyof typeof import('./constants')['TOOLTIP_PLACEMENTS']} [props.tooltipPlacement=import('./constants').DEFAULT_TOOLTIP_PLACEMENT] The placement of the tooltip.
 * @param {string} [props.ariaLabel] The accessible name for the expand button.
 * @param {string} [props.ariaLabelledBy] The ID of the element that labels the expand button.
 * @param {string} [props.ariaDescribedBy] The ID of the element that describes the expand button.
 * @param {React.ReactNode} [props.buttonHeader] Optional content to be rendered inside the button header.
 * @param {React.ReactNode} props.children The content to be displayed when the accordion is expanded.
 * @returns {JSX.Element} The rendered Accordion component.
 */
function Accordion({
  title,
  tooltipLabel = null,
  tooltipPlacement = DEFAULT_TOOLTIP_PLACEMENT,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  buttonHeader = null,
  children,
}: AccordionProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const expandButton = (
    <Styled.ExpandButton
      onClick={() => setIsExpanded((current) => !current)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
    >
      <Styled.ButtonContent>
        <Styled.ExpandIcon $expanded={isExpanded}>
          <MdExpandMore />
        </Styled.ExpandIcon>
        <Styled.TitleText>{title}</Styled.TitleText>
        {buttonHeader}
      </Styled.ButtonContent>
    </Styled.ExpandButton>
  );

  return (
    <>
      {tooltipLabel ? (
        <Tippy content={tooltipLabel} placement={tooltipPlacement}>
          {expandButton}
        </Tippy>
      ) : (
        expandButton
      )}
      <Styled.AccordionContent
        ref={contentRef}
        $expanded={isExpanded}
        scrollHeight={contentRef.current?.scrollHeight || 0}
      >
        {children}
      </Styled.AccordionContent>
    </>
  );
}

export default Accordion;
