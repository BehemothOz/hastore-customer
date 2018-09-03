
module.exports = function(paths, env) {
  return {
    output: {
      path: (env === 'gobuild') ? paths.gobuild : paths.build,
      filename: 'js/[name].js',
      publicPath: '/'
    },
  }
}
