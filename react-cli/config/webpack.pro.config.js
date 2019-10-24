// 生产模式的配置文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path=require('path')
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports={
  entry:resolve('../src/index.js'),
  output:{
    path:resolve('../dist/static'),
    filename:'[name]_[hash].js'
  },
  mode:'production',
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Good Morning Beijing',
      filename: 'index.html',
      template: resolve('../public/index.html')
  })
  ],
  module:{
    rules:[
      {
        test:/\.(less)$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,// 除了node_modules外其他的文件进行编译
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'], //指定浏览器的运行环境版本
                plugins: ['@babel/plugin-transform-react-jsx'] //帮助我们解析jsx
            }
        }
      }
    ]
  }

  
}