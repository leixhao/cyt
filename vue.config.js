const path = require('path')
module.exports = {
  // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
  publicPath: process.env.NODE_ENV === 'development' ? '/' : "/",
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // webpack相关配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', path.resolve(__dirname, './src'))
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: false,
    port: 8080,
    // http 代理配置
    proxy: {
      '/satp-api': {
        // 测试地址
        // target: 'http://172.23.7.84:8084/satp-api',
        // 正式地址
        // public中window.g.baseurl必须保持一致，为上传文件路径前缀
        target: 'http://ydcg.ylss11.com:8062',
        changeOrigin: true,
        pathRewrite: {
          '^/satp-api': ''
        }
      }
    },
    before: (app) => { }
  },
  // 第三方插件配置
  pluginOptions: {

  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }

}
