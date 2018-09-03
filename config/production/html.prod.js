const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(paths) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'go-html/index.html',
        chunks: ['common' , 'index'],
        template: paths.source + '/pug-modules/pages/index/index.pug'
      }),

      new HtmlWebpackPlugin({
        filename: 'go-html/catalog.html',
        chunks: ['common', 'catalog'],
        template: paths.source + '/pug-modules/pages/catalog/catalog.pug'
      }),

      new HtmlWebpackPlugin({
        filename: 'go-html/card.html',
        chunks: ['common', 'card'],
        template: paths.source + '/pug-modules/pages/card/card.pug'
      })
    ]
  }
};