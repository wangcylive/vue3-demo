module.exports = {
  lintOnSave: false,
  css: {
    sourceMap: process.env.NODE_EVN === 'development',
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.tsx', '.ts', '.json'],
    },
  },
}
