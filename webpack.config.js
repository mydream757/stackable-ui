// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    host: 'localhost',
    hot: true,
    liveReload: true,
    open: true,
    port: 3000,
  },
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    alias: {
      node_modules: path.resolve(__dirname, './node_modules'),
      src: path.resolve(__dirname, './src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
};
