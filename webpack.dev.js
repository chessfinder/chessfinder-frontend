require('dotenv').config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: { app: ['babel-polyfill', './src/index.js'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'chessboardjsx',
    libraryTarget: 'umd'
  },
  devServer: { contentBase: path.resolve(__dirname, 'dist') },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' ,
      favicon: "./src/favicon.ico"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'REACT_APP_BASE_API_URL': JSON.stringify(process.env.REACT_APP_BASE_API_URL),
      }
    })
  ]
});
