const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
              publicPath: '../',
              fallback: 'style-loader',
              // use: 'css-loader!postcss-loader!sass-loader', // alt var
              use: [
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [
                      autoprefixer({
                        browsers:['ie >= 8', 'last 4 version']
                      })
                    ],
                  }
                },
                {
                  loader: 'sass-loader',
                }
              ]
          }),
        }
      ]
    },

    plugins: [
      new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true
      })
    ]
  }
};