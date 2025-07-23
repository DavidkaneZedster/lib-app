import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.common.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const config = merge(common, {
  mode: isDev ? 'development' : 'production',
  entry: { lib: './src/main.lib.tsx' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/lib'),
    publicPath: 'http://localhost:8081/',
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
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname, 'dist/lib'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  devtool: isDev ? 'inline-source-map' : undefined,
});

export default config;
