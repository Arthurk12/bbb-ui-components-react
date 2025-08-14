import React from 'react';
import { ToggleProps } from './types';
import * as Styled from './styles';

/**
 * Toggle component for switching states.
 *
 * This component wraps a ReactToggle from BBB and matches its style.
 * Icons are hidden by default.
 *
 * @param {boolean} [icons=false] - Determines whether to display icons(default is false to match BBB style).
 * @param {...Object} toggleProps - Additional properties to pass to the ReactToggle component.
 * 
 * @returns {JSX.Element} The rendered Toggle component.
 */
function Toggle ({ icons = false, ...toggleProps}: ToggleProps): JSX.Element {
  return (
    <Styled.MaterialToggle
      {...toggleProps}
    />
  );
}

export default Toggle;
