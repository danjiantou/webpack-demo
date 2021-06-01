## webpack-dev-server  --open --hot
webpack-dev-server: 起服务,运行服务
--open： 打开浏览器
--hot: 热重载

## webpack -p
打包，根据配置生成打包文件

## package.json 配置路径
script:{
    "build": "webpack ./config/webpack.config.js --mode development"
}
/config/webpack.config.js: 路径配置

## script 下各个变量的解析

"scripts": {
  "dev": "cross-env NODE_ENV=development webpack-dev-server --progress --colors --devtool cheap-module-eval-source-map --hot --inline",
  "build": "cross-env NODE_ENV=production webpack --progress --colors --devtool cheap-module-source-map",
  "build:dll": "webpack --config webpack.dll.config.js"
},
"NODE_ENV=development":环境变量
"cross-env": windows下'环境变量'会出现程序或命令阻塞，兼容等问题,所以就出现了cross-env命令
