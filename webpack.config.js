var webpack = require('webpack');
var path = require('path');

// Thu muc se chua tap tin duoc bien dich
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');

// Thu muc chua du an - cac component React
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

module.exports = config;
