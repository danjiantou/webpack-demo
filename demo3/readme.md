## 多文件打包及入口与出口

## webpack-dev-server  --open --hot
webpack-dev-server: 起服务,运行服务
--open： 打开浏览器
--hot: 热重载

## webpack -p
打包，根据配置生成打包文件

## package.json 配置路径
script:{
    build:webpack ./config/webpack.config.js --mode development
}
