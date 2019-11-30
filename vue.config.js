module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    },
    pages: {
        //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
        index: {
          //除了 entry 之外都是可选的
          entry: 'src/main.ts', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
        //   template: 'public/index.html', // 模板来源
        //   filename: 'index.html', // 在 dist/index.html 的输出
        //   title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
        //   chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
        }
      },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/styles/index.scss";`
              }
        }
    },

    configureWebpack: config => {
        
    }
}