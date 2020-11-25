webpack
打包：将代码从入口文件开始打包为一个单一的文件
转换：将不是js的文件通过loader转换为等价的js文件
TreeShaking，摇树优化：
  没有直接或间接使用到的函数/类/value都不会出现在打包结果里
  可以一定程度的减少打包文件的体积
  该功能需要使用es module来书写相关模块
  使用其它方式书写的模块很难去做tree shaking分析
  因为es module都是静态的（不会因为逻辑的成立与否而引入或不引入或导出或不导出某个模块功能）
    即 import export语句不能出现在if，for等语句中
  静态内容在不运行代码就可以分析出来
Code Spliting，代码分隔：
  一般都是打包为一个单一的文件。
  但是所有的业务逻辑和框架库等打包到单一文件的话，会很大。
  更主要的是，就算把所有的功能都打包到了一个文件中，也并不是所有功能都会被用户使用到
    如PhotoShop，软件在安装好以后所有的功能都已经在电脑上了，但并不所有的功能我们都会用到
    对于网络应用来说，一次性下载所有功能的代码是不必要的
    所以就有code spliting功能
      用户在打开页面的时候只加载基本功能/入口页面的功能，随着用户的交互及进入到不同的功能模块
      再加载那些模块的代码
  最终目的还是希望用户能够更打开入口页面

loader与plugin的区别：
  loader是用来转换非js文件的
    css-loader, eslint-loader，babel-loader, image-loader, file-loader, style-loader
  plugin是用来增强webpack功能的
    common-chunk-plugin
      将第三方代码与自己写的代码分开打包，这样一来第三方代码的打包结果会比较容易不变化
    webpack-html-plugin
      自动帮你把代码结果嵌入一个html文件的
    MiniCssExtractPlugin
      将所有的css文件从依赖树中提取出来，放入单独的css文件而不打包在js里
    GenerateSW
      生成 service worker
    HotModuleReplacementPlugin
      模块热重载：页面不重新加载的情况下，模块的新代码就能在浏览器生效。
        但并不是对所有的模块都能这么用，一般来说组件的代码，css的代码可以实现热重载
