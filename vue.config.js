// vue.config.js
module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    config.devtool = 'source-map'
  }
}
