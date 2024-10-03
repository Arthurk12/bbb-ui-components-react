import React from 'react';
import styled from 'styled-components';
import { default as ReactToggle } from 'react-toggle';

// Define a styled button
const StyledToggle = styled(ReactToggle)`
  .react-toggle {
    touch-action: pan-x;

    display: inline-block;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  .react-toggle-screenreader-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .react-toggle--disabled {
    cursor: not-allowed;
    opacity: 0.5;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
  }

  .react-toggle-track {
    width: 50px;
    height: 24px;
    padding: 0;
    border-radius: 30px;
    background-color: var(--color-danger, #DF2721);
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: var(--color-danger, #DF2721);
  }

  .react-toggle--checked .react-toggle-track {
    background-color: var(--color-success, #008081);
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: var(--color-success, #008081);
  }

  .react-toggle-track-check {
    position: absolute;
    width: 14px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    left: 8px;
    opacity: 0;
    transition: opacity 0.25s ease;
    transition: opacity calc(var(--enableAnimation) * 0.25s) ease;

    [dir="rtl"] & {
      left: 0.8rem;
    }
  }

  .react-toggle--checked .react-toggle-track-check {
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle-track-x {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 0px;
    bottom: 0px;
    margin-top: auto;
    margin-bottom: auto;
    line-height: 0;
    right: 10px;
    opacity: 1;
    -webkit-transition: opacity 0.25s ease;
    -moz-transition: opacity 0.25s ease;
    transition: opacity 0.25s ease;
  }

  .react-toggle--checked .react-toggle-track-x {
    opacity: 0;
  }

  .react-toggle-thumb {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border: 1px solid #4D4D4D;
    border-radius: 50%;
    background-color: #FAFAFA;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    -webkit-transition: all 0.25s ease;
    -moz-transition: all 0.25s ease;
    transition: all 0.25s ease;

    [dir="rtl"] & {
      left: 2.6rem;
    }
  }

  .react-toggle--checked .react-toggle-thumb {
    left: 27px;
    border-color: #19AB27;
  }

  .react-toggle--focus .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 3px 2px #0099E0;
    -moz-box-shadow: 0px 0px 3px 2px #0099E0;
    box-shadow: 0px 0px 2px 3px #0099E0;
  }

  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
    -webkit-box-shadow: 0px 0px 5px 5px #0099E0;
    -moz-box-shadow: 0px 0px 5px 5px #0099E0;
    box-shadow: 0px 0px 5px 5px #0099E0;
  }
`;

// Define the props for the Button component
interface ToggleProps {
  defaultChecked?: boolean;
  checked?: boolean | undefined;
  icons?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Optional click handler
}

function Toggle({
  defaultChecked = true,
  // checked = undefined,
  icons = false,
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {},
}: ToggleProps) {
  return (
    null
    // <StyledToggle
      // icons={icons}
      // onChange={onChange}
      // defaultChecked={defaultChecked}
      // {...(checked !== undefined && { checked })}
    // />
  );
};

export default Toggle;


import React from 'react';
import Toggle from 'react-toggle';
import { defineMessages, injectIntl } from 'react-intl';
import { getSettingsSingletonInstance } from '/imports/ui/services/settings';
import Styled from './styles';

const intlMessages = defineMessages({
  on: {
    id: 'app.switch.onLabel',
    description: 'label for toggle switch on state',
  },
  off: {
    id: 'app.switch.offLabel',
    description: 'label for toggle switch off state',
  },
});

const defaultProps = {
  showToggleLabel: true,
  invertColors: false,
};

function Switch ({
  icons,
  ariaLabeledBy,
  ariaDescribedBy,
  ariaLabel,
  ariaDesc,
  showToggleLabel,
  invertColors,
  disabled,
  ...inputProps
}) {
  const [checked, setChecked] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <Styled.Switch
      onClick={this.handleClick}
      onTouchStart={this.handleTouchStart}
      onTouchMove={this.handleTouchMove}
      onTouchEnd={this.handleTouchEnd}
      disabled={disabled}
      animations={animations}
    >
      <Styled.ToggleTrack
        aria-hidden="true"
        checked={checked}
        invertColors={invertColors}
        animations={animations}
      >
        <Styled.ToggleTrackCheck checked={checked} animations={animations}>
          {showToggleLabel ? intl.formatMessage(intlMessages.on) : null}
        </Styled.ToggleTrackCheck>
        <Styled.ToggleTrackX checked={checked} animations={animations}>
          {showToggleLabel ? intl.formatMessage(intlMessages.off) : null}
        </Styled.ToggleTrackX>
      </Styled.ToggleTrack>
      <Styled.ToggleThumb
        checked={checked}
        hasFocus={hasFocus}
        disabled={disabled}
        animations={animations}
        isRTL={document.getElementsByTagName('html')[0].dir === 'rtl'}
      />

      <Styled.ScreenreaderInput
        {...inputProps}
        ref={(ref) => { this.input = ref; }}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        type="checkbox"
        tabIndex="0"
        disabled={disabled}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
      />
      <div id={ariaDescribedBy} hidden>{ariaDesc}</div>
    </Styled.Switch>
  );
}

Switch.defaultProps = defaultProps;

export default injectIntl(Switch);