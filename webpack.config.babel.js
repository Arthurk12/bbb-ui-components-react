import path from 'path';

export default {
  devtool: 'hidden-source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: 'bbb-ui-components-react.ts',
    libraryTarget: 'var',
    library: 'BBBCommonReact',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.json'],
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
    alias: {
      'styled-components': require.resolve('styled-components')
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
    ],
  },
};
