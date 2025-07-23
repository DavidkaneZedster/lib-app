const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.config.cjs');
const { merge } = require('webpack-merge');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

module.exports = merge(common, {
  mode: isDev ? 'development' : 'production',
  entry: { lib: './src/main.lib.tsx' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/lib'),
    clean: true,
    library: {
      type: 'module',
    },
    environment: {
      module: true,
      dynamicImport: true,
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.lib.html'),
      filename: 'index.lib.html',
    }),
  ],
  devtool: isDev ? 'inline-source-map' : false,
});
