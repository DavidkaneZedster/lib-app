const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.cjs');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = merge(common, {
  mode: isDev ? 'development' : 'production',
  entry: { app: './src/main.tsx' },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist/app'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new HotModuleReplacementPlugin(),
  ],
  devtool: isDev ? 'inline-source-map' : false,
  devServer: isDev
    ? {
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
      }
    : undefined,
});
