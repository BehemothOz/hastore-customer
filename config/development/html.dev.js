const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(paths) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['common', 'index'],
        template: paths.source + '/pug-modules/pages/index/index.pug'
      }),

      new HtmlWebpackPlugin({
        filename: 'catalog.html',
        chunks: ['common' , 'catalog'],
        template: paths.source + '/pug-modules/pages/catalog/catalog.pug'
      }),

      new HtmlWebpackPlugin({
        filename: 'card.html',
        chunks: ['common', 'card'],
        template: paths.source + '/pug-modules/pages/card/card.pug'
      })
    ]
  }
};