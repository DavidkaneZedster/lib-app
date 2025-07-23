import path from 'node:path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.common.config';

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const config: Configuration = merge(common, {
  mode: isDev ? 'development' : 'production',
  entry: { lib: './src/main.lib.tsx' },
  target: 'es',
  output: {
    //  filename: '[name].[contenthash].js',
    filename: 'lib.js',
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
  devtool: isDev ? 'inline-source-map' : undefined,
});

export default config;
