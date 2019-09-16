module.exports = {
  devServer: {
    proxy: {
      '/hehe':{
        target:'http://ustbhuangyi.com', //目标服务器
        changeOrigin:true,
        pathRewrite:{
          '^/hehe':''
        }
      }
    }
  }
}