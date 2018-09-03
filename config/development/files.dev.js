module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(eot|ttf|woff|woff|otf)$/,
          loader: 'file-loader'
        }
      ]
    }
  }
};