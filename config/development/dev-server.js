// const path = require('path');

module.exports = function() {
  return {
    devServer: {
      contentBase: './dev-build/',
      // publicPath: "/assets/",
      stats: 'errors-only',
      port: 1228
    }
  }
};