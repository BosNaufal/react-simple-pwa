
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {

  devtool: 'eval',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/js/main.js'
  ],

  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },


  module: {

    loaders: [

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },


      {
        test: /\.(sass|scss)$/,
        loaders: ['style','css','sass']
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },

};
