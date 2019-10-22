const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
const  HtmlWebpackPlugin = require('html-webpack-plugin')
// 移动html文件并且添加相关的引用文件
// 将css 从js文件中抽离
const path = require('path');
function resolve(dir){
  return path.join(__dirname,dir)
}
// 单入口单出口
module.exports = {
  entry: './src/main.js',
  // 入口文件目录
  output: { 
    // 出口文件
    path: resolve('./dist'),
    filename: '[name]_[hash].js'
    // hash 产生一个唯一不重复的字符串 防止读取文件产生缓存
  },
  mode:'development',
  // 加载器
  module: {
    rules: [
      { test: /\.png$/,  //正则表达式
        use: 'url-loader' },
      { test: /\.css$/,  //正则表达式
        use: ['style-loader','css-loader'] },
      // { test: /\.less$/,  //正则表达式
      //   use: ['style-loader','css-loader','less-loader'] },
      { test: /\.less$/,  //正则表达式
        use: [MiniCssExtractPlugin.loader,'css-loader','less-loader'] }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
};
// 多入口多出口
// let mode=false
// module.exports = {
//   entry: {
//     a:'./src/hehe.js',
//     b:'./src/xixi.js'
//   },
//   // 入口文件目录
//   output: { 
//     // 出口文件
//     path: resolve('./dist'),
//     filename: '[name]_[hash].js'
//     // hash 产生一个唯一不重复的字符串 防止读取文件产生缓存
//   },
//   mode:mode?'production':'development' //rp
// };