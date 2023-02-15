const { defineConfig } = require('@vue/cli-service')
/**
 * detail
 * https://cli.vuejs.org/config/#publicpath
 * https://cli.vuejs.org/zh/config/#vue-config-js
 */
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',//根路径
  lintOnSave: process.env.NODE_ENV === 'development',// https://blog.csdn.net/qq_30351747/article/details/124668658
  outputDir: 'dist',//当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录的内容在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  assetsDir: 'static',//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  devServer:{//https://webpack.docschina.org/configuration/dev-server/#devserverport
    port:"1010",//端口号
    open: true,//告诉 dev-server 在服务器已经启动后打开浏览器。设置其为 true 以打开你的默认浏览器。
    proxy:{
      '/nnsicn':{
        target:'http://127.0.0.1:5050',
        pathRewrite:{
          "^/nnsicn":""
        }
      }
    }
  },
})
