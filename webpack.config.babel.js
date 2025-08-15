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
    globalObject: 'this',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'styled-components': 'styled-components',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    fallback: {
      fs: false,
      net: false,
      tls: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
