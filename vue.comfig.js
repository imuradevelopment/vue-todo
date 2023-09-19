const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
//   publicPath: './',
//   outputDir:'./public',
//   assetsDir:'src/assets',
  transpileDependencies: true,
  configureWebpack: {
    watch: true
  }
})