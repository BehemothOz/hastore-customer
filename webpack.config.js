const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const pug = require('./config/pug.conf'),
      sassDev = require('./config/development/sass.dev'),
      sassProd = require('./config/production/sass.prod'),
      filesDev = require('./config/development/files.dev'),
      filesProd = require('./config/production/files.prod'),
      server = require('./config/development/dev-server'),
      htmlDev = require('./config/development/html.dev'),
      htmlProd = require('./config/production/html.prod'),
      output = require('./config/output');

const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'build'), // если ошибка смотри тут
  gobuild: path.join(__dirname, './dev-build')
};

const common = {
  entry: {
    // 'base': PATHS.source + '/pug-modules/base/base.js',
    'index': PATHS.source + '/pug-modules/pages/index/index.js',
    'catalog': PATHS.source + '/pug-modules/pages/catalog/catalog.js',
    'card': PATHS.source + '/pug-modules/pages/card/card.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, output(PATHS, 'prod'), htmlProd(PATHS), pug(), sassProd(), filesProd()]);
  }

  if (env === 'development') {
    return merge([common, output(PATHS, 'dev'), htmlDev(PATHS), pug(), sassDev(), filesDev(), server()]);
  }

  if (env === 'gobuild') {
    return merge([common, output(PATHS, 'gobuild'), htmlDev(PATHS), pug(), sassProd(), filesProd()]);
  }
}