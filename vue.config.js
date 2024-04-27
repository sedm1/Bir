const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.PUBLIC_URL || "",
  devServer: {
    historyApiFallback: true
  },

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/main.sass"
        `
      }
    }
  }
})