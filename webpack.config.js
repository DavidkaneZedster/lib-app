import path from 'node:path';
import { HotModuleReplacementPlugin } from 'webpack';
// import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.common.config';

// const MODE = process.env.MODE || 'LOCAL';

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const config = merge(common, {
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
  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev
    ? {
        port: 4001,
        open: true,
        hot: true,
        historyApiFallback: true,
      }
    : undefined,
});

export default config;
