/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  plugins: [HTMLWebpackPluginConfig],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, '../ui/src/'),
      '@core-components': path.resolve(__dirname, '../ui/src/core-components/'),
      '@assets': path.resolve(__dirname, 'src/public/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
