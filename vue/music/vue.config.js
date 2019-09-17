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
//http://ustbhuangyi.com/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.07173379566119986
//http://10.60.14.25:8080/hehe/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.07173379566119986