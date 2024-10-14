# BBB UI Components React

This repository contains a library of reusable React components extracted from the [**BigBlueButton (BBB)**](https://github.com/bigbluebutton/bigbluebutton) core project. These components provide a consistent, customizable interface that can be reused in other projects, allowing them to easily adopt the BBB visual identity.

![Demo](assets/common-components.png)

## Installation

This library is under active development and not yet published on npm. For now, you can clone the repository and install it locally.

### Using npm link

When developing and testing locally with npm link, you may need to adjust your Webpack configuration to ensure compatibility with styled-components and react, which doesn't handle multiple instances well. Add the following alias configuration to the project that uses this lib:

  ```.json 
  resolve: {
    alias: {
      'styled-components': path.resolve('./node_modules/styled-components'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  }
  ```

## Components Migration Table

| **Component Name**     | **Final Name**            | **Missing**                                                               | **Migration Status**      |
|------------------------|---------------------------|---------------------------------------------------------------------------|---------------------------|
| `Button`               | `BBButton`                | Implement all props (currently only supports onClick and label), button sizes, shapes, emoji support | 🟡        |
| `Checkbox`             | ``                        |                                                                           | ❌        |
| `ControlHeader`        | ``                        |                                                                           | ❌        |
| `FileReader`           | ``                        |                                                                           | ❌        |
| `Icon`                 | ``                        |                                                                           | ❌        |
| `Dropdown`             | ``                        |                                                                           | ❌        |
| `BBBMenu`              | ``                        |                                                                           | ❌        |
| `Modal`                | ``                        |                                                                           | ❌        |
| `Radio`                | ``                        |                                                                           | ❌        |
| `Separator`            | ``                        |                                                                           | ❌        |
| `Switch`               | `BBBToggle`               | Support for On/Off labels                                                 | 🟡        |
| `Spinner`              | ``                        |                                                                           | ❌        |
| `Toast`                | ``                        |                                                                           | ❌        |
| `Tooltip`              | ``                        |                                                                           | ❌        |
| `TextAreaInput`        | `BBBTextAreaInput`        |                                                                           | ✅        |
