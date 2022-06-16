const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

require('dotenv').config();

module.exports = {
  target: 'web',
  entry: {
    polyfills: './src/polyfills.ts',
    index: './src/index.tsx'
  },
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
      net: false,
      dns: false,
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      url: require.resolve('url/'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      util: require.resolve('util/'),
      crypto: require.resolve('crypto-browserify'),
      os: require.resolve('os-browserify/browser'),
      assert: require.resolve('assert/')
    }
  },
  output: {
    filename: '[name].js',
    path: buildPath,
    libraryTarget: 'commonjs2'
  },
  optimization: {
    runtimeChunk: 'single'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new CompressionPlugin()
  ]
};
