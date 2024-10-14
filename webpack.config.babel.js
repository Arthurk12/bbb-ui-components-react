import path from 'path';

export default {
  entry: './src/index.ts',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.ts',
    library: {
      name: 'BBBUiComponentsReact',
      type: 'umd', 
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    fallback: {
      fs: false,
      net: false,
      tls: false,
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
