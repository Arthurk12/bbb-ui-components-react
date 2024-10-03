# BBB UI Components React

- useful webpack config for apps using this lib(specially necessary when installing via `npm link`)
  ```.json
  ...
  resolve: {
    alias: {
      'styled-components': path.resolve('./node_modules/styled-components'),
    },
  }
  ...
  ```